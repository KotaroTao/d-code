"use client";

import { useState, useCallback } from "react";

interface BlobItem {
  url: string;
  pathname: string;
  size: number;
  uploadedAt: string;
}

export default function UploadPage() {
  const [blobs, setBlobs] = useState<BlobItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [copied, setCopied] = useState("");
  const [loaded, setLoaded] = useState(false);

  const loadBlobs = useCallback(async () => {
    const res = await fetch("/api/upload");
    const data = await res.json();
    setBlobs(data);
    setLoaded(true);
  }, []);

  const handleUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);

    for (const file of Array.from(files)) {
      const form = new FormData();
      form.append("file", file);
      await fetch("/api/upload", { method: "POST", body: form });
    }

    setUploading(false);
    await loadBlobs();
  };

  const handleDelete = async (url: string) => {
    if (!confirm("この画像を削除しますか？")) return;
    await fetch("/api/upload", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    await loadBlobs();
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(""), 2000);
  };

  const copyImgTag = (url: string) => {
    const tag = `{/* eslint-disable-next-line @next/next/no-img-element */}\n<img src="${url}" alt="" className="w-full rounded-2xl" />`;
    navigator.clipboard.writeText(tag);
    setCopied(url + "-tag");
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-white mb-2">Image Upload</h1>
        <p className="text-gray-400 mb-8">LP用の画像をアップロードして、URLをコピーしてください。</p>

        {/* Upload Area */}
        <label
          className={`block border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all mb-8 ${
            dragOver
              ? "border-brand-400 bg-brand-500/10"
              : "border-gray-700 hover:border-gray-500 bg-[#161b22]"
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); handleUpload(e.dataTransfer.files); }}
        >
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleUpload(e.target.files)}
          />
          {uploading ? (
            <p className="text-brand-400 font-bold">アップロード中...</p>
          ) : (
            <>
              <svg className="w-12 h-12 text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <p className="text-gray-400 font-medium">画像をドラッグ＆ドロップ、またはクリックして選択</p>
              <p className="text-gray-500 text-sm mt-1">PNG, JPG, WebP, SVG</p>
            </>
          )}
        </label>

        {/* Load Button */}
        {!loaded && (
          <button
            onClick={loadBlobs}
            className="mb-8 bg-[#161b22] border border-gray-700 text-gray-300 font-bold py-2 px-6 rounded-xl hover:bg-gray-800 transition-all"
          >
            アップロード済み画像を読み込む
          </button>
        )}

        {/* Blob List */}
        {loaded && blobs.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">アップロード済み ({blobs.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blobs.map((blob) => (
                <div key={blob.url} className="bg-[#161b22] rounded-2xl border border-gray-700/50 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={blob.url} alt={blob.pathname} className="w-full h-48 object-cover bg-gray-900" />
                  <div className="p-4">
                    <p className="text-sm text-gray-400 truncate mb-3">{blob.pathname}</p>
                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => copyUrl(blob.url)}
                        className="text-xs bg-brand-500/10 text-brand-400 px-3 py-1.5 rounded-lg font-bold hover:bg-brand-500/20 transition-all"
                      >
                        {copied === blob.url ? "Copied!" : "URL をコピー"}
                      </button>
                      <button
                        onClick={() => copyImgTag(blob.url)}
                        className="text-xs bg-purple-500/10 text-purple-400 px-3 py-1.5 rounded-lg font-bold hover:bg-purple-500/20 transition-all"
                      >
                        {copied === blob.url + "-tag" ? "Copied!" : "<img> タグをコピー"}
                      </button>
                      <button
                        onClick={() => handleDelete(blob.url)}
                        className="text-xs bg-red-500/10 text-red-400 px-3 py-1.5 rounded-lg font-bold hover:bg-red-500/20 transition-all"
                      >
                        削除
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {loaded && blobs.length === 0 && (
          <p className="text-gray-500 text-center py-8">まだ画像がありません。上のエリアからアップロードしてください。</p>
        )}
      </div>
    </div>
  );
}
