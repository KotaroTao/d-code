import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サポート講師募集｜D-Code Academy",
  description:
    "歯科医院向けバイブコーディング講座のサポート講師を募集。Claude Codeを日常的に使っている方、教えることが好きな方、完全リモートで参加できます。",
  openGraph: {
    title: "サポート講師募集｜D-Code Academy",
    description:
      "歯科医院向けバイブコーディング講座のサポート講師を募集。完全リモート・時給5,000円〜。",
    type: "website",
    locale: "ja_JP",
  },
};

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-accent-500 shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-brand-400 mb-4">
      <span className="w-8 h-[2px] bg-brand-400 rounded-full" />
      {children}
    </span>
  );
}

export default function RecruitSupportPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200">
      {/* ── Header ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0d1117]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-extrabold tracking-tight text-white">
            D-Code<span className="text-brand-400">.</span>
          </a>
          <a
            href="#apply-form"
            className="bg-brand-500 hover:bg-brand-400 text-white font-bold py-2 px-6 rounded-xl text-sm transition-all"
          >
            応募する
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/50 via-[#0d1117] to-[#0d1117]" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>recruitment</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-6">
            「AIでアプリが作れる楽しさ」を
            <br />
            <span className="gradient-text">一緒に届けませんか？</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            D-Code Academy サポート講師募集
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            歯科医院の院長・スタッフ向けバイブコーディング講座で、
            受講者の「初めてのアプリ開発」をサポートする仲間を探しています。
          </p>
          <a
            href="#apply-form"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all shadow-lg shadow-brand-500/25 cta-glow"
          >
            応募フォームへ
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── About the role ── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>about</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
            こんな方を探しています
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🤖",
                title: "Claude Codeを普段使いしている",
                desc: "最も重要な条件。日常的にClaude Codeでコードを書いている方。高度なプログラミングスキルは不要です。",
              },
              {
                icon: "💬",
                title: "教えることが好き",
                desc: "受講者はプログラミング完全未経験者。専門用語を使わず、やさしく伝えられる方を求めています。",
              },
              {
                icon: "📅",
                title: "日曜に参加できる",
                desc: "毎週日曜 10:00-13:00 × 5週連続。完全リモート（Zoom）なので、自宅から参加可能です。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 card-hover"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Details ── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>details</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
            募集要項
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 報酬 */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider mb-4">
                報酬
              </h3>
              <p className="text-3xl font-extrabold text-white mb-2">
                ¥225,000<span className="text-lg text-gray-400 font-normal">（税別）/ 1コホート</span>
              </p>
              <p className="text-gray-400 text-sm">
                時給換算 約¥5,000 / 合計約45時間（セミナー15h + サポート20h + 準備10h）
              </p>
            </div>

            {/* 勤務形態 */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider mb-4">
                勤務形態
              </h3>
              <ul className="space-y-3">
                {[
                  "完全リモート（Zoom）",
                  "業務委託契約",
                  "副業・兼業OK",
                  "2026年6月開講予定",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 業務内容 */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 md:col-span-2">
              <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider mb-6">
                具体的な業務内容
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-white font-bold mb-2">セミナー当日（15h）</p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>・Zoomに参加し受講者をサポート</li>
                    <li>・ブレイクアウトルームで5〜6名を担当</li>
                    <li>・エラー解決の手助け</li>
                    <li>・「次に何をすればいいか」のガイド</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-bold mb-2">セミナー後サポート（20h）</p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>・受講者からのチャット質問対応</li>
                    <li>・24h以内の回答目安</li>
                    <li>・必要に応じて30分Zoom面談</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-bold mb-2">その他（10h）</p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>・事前の講師ミーティング</li>
                    <li>・カリキュラム確認</li>
                    <li>・教材の事前チェック</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>tech stack</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            講座で使用する技術
          </h2>
          <p className="text-gray-400 mb-10">
            受講者はプログラミング未経験者です。Claude Codeに指示を出してアプリを作るスタイルなので、サポート講師に求められるのは「深い技術力」ではなく「各ツールの基本的な使い方の理解」です。
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Claude Code", note: "WEB版を使用" },
              { name: "Next.js / React", note: "App Router" },
              { name: "Tailwind CSS", note: "v4" },
              { name: "Vercel", note: "デプロイ先" },
              { name: "Supabase", note: "DB / 認証" },
              { name: "GitHub", note: "ソース管理" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 text-center"
              >
                <p className="text-white font-bold">{tech.name}</p>
                <p className="text-gray-500 text-xs mt-1">{tech.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selection Process ── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>process</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
            選考フロー
          </h2>

          <div className="flex flex-col gap-6">
            {[
              { step: "01", title: "応募", desc: "このページのフォームから必要事項を送信（5分）", highlight: true },
              { step: "02", title: "書類選考", desc: "フォーム回答をもとに選考", highlight: false },
              { step: "03", title: "オンライン面談", desc: "Zoomで15〜20分、人柄・経験を確認", highlight: false },
              { step: "04", title: "採用通知", desc: "メールで結果をお知らせ", highlight: false },
              { step: "05", title: "オリエンテーション", desc: "業務委託契約 + 講座内容の共有（1時間）", highlight: false },
            ].map((item) => (
              <div
                key={item.step}
                className={`flex items-start gap-6 p-6 rounded-2xl ${
                  item.highlight
                    ? "bg-brand-500/10 border border-brand-500/20"
                    : "bg-white/[0.02] border border-white/[0.04]"
                }`}
              >
                <span className="text-2xl font-extrabold text-brand-400 shrink-0">
                  {item.step}
                </span>
                <div>
                  <p className="text-white font-bold text-lg">{item.title}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-8 text-center">
            ※ 技術テストは行いません。バイブコーディング講座なので、技術力より「伝える力」を重視します。
          </p>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="apply-form" className="py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>apply</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            応募フォーム
          </h2>
          <p className="text-gray-400 mb-10">
            以下の項目をご記入の上、送信してください。所要時間は約5分です。
          </p>

          <form
            className="space-y-8"
            action="#"
            method="POST"
          >
            {/* 氏名 */}
            <div>
              <label className="block text-white font-bold mb-2">
                氏名 <span className="text-red-400 text-sm">*必須</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="山田 太郎"
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label className="block text-white font-bold mb-2">
                メールアドレス <span className="text-red-400 text-sm">*必須</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="example@email.com"
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
              />
            </div>

            {/* SNSアカウント */}
            <div>
              <label className="block text-white font-bold mb-2">
                SNSアカウント（X / LinkedIn等）
                <span className="text-gray-500 text-sm ml-2">任意</span>
              </label>
              <input
                type="text"
                name="sns"
                placeholder="@username またはプロフィールURL"
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
              />
            </div>

            {/* Claude Codeの使用歴・頻度 */}
            <div>
              <label className="block text-white font-bold mb-2">
                Claude Code の使用頻度 <span className="text-red-400 text-sm">*必須</span>
              </label>
              <p className="text-gray-500 text-sm mb-3">現在のClaude Codeの使用状況を教えてください</p>
              <div className="space-y-3">
                {[
                  "毎日使っている",
                  "週に数回使っている",
                  "月に数回使っている",
                  "使ったことがある程度",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="claude_usage"
                      value={option}
                      required
                      className="w-4 h-4 accent-brand-500"
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Claude Codeの利用形態 */}
            <div>
              <label className="block text-white font-bold mb-2">
                Claude Code の主な利用形態 <span className="text-red-400 text-sm">*必須</span>
              </label>
              <p className="text-gray-500 text-sm mb-3">普段どの形でClaude Codeを使っていますか？（複数選択可）</p>
              <div className="space-y-3">
                {[
                  "Claude Code WEB版（ブラウザ上）",
                  "Claude Code CLI（ターミナル）",
                  "VS Code + Claude Code拡張",
                  "その他のIDE連携",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="claude_platform"
                      value={option}
                      className="w-4 h-4 accent-brand-500"
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Claude Codeで作ったもの */}
            <div>
              <label className="block text-white font-bold mb-2">
                Claude Code で作ったもの・取り組んでいること
                <span className="text-red-400 text-sm ml-1">*必須</span>
              </label>
              <p className="text-gray-500 text-sm mb-3">
                具体的なプロジェクトや成果物を簡単に教えてください（200字程度）
              </p>
              <textarea
                name="claude_projects"
                required
                rows={4}
                placeholder="例：個人のポートフォリオサイトをNext.jsで構築、社内ツールのダッシュボードを開発、etc."
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
              />
            </div>

            {/* Next.js / React の経験 */}
            <div>
              <label className="block text-white font-bold mb-2">
                Next.js / React の経験 <span className="text-red-400 text-sm">*必須</span>
              </label>
              <div className="space-y-3">
                {[
                  "実務で使用中",
                  "個人開発で使用",
                  "学習中",
                  "ほぼ未経験（Claude Codeで使っている程度）",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="nextjs_exp"
                      value={option}
                      required
                      className="w-4 h-4 accent-brand-500"
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Vercel / Supabase の経験 */}
            <div>
              <label className="block text-white font-bold mb-2">
                Vercel / Supabase の使用経験 <span className="text-red-400 text-sm">*必須</span>
              </label>
              <p className="text-gray-500 text-sm mb-3">それぞれ選択してください</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 font-medium mb-2">Vercel</p>
                  <div className="space-y-2">
                    {["使い慣れている", "使ったことがある", "知っているが未使用", "知らない"].map(
                      (option) => (
                        <label key={`vercel-${option}`} className="flex items-center gap-3 cursor-pointer group">
                          <input type="radio" name="vercel_exp" value={option} required className="w-4 h-4 accent-brand-500" />
                          <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{option}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-2">Supabase</p>
                  <div className="space-y-2">
                    {["使い慣れている", "使ったことがある", "知っているが未使用", "知らない"].map(
                      (option) => (
                        <label key={`supabase-${option}`} className="flex items-center gap-3 cursor-pointer group">
                          <input type="radio" name="supabase_exp" value={option} required className="w-4 h-4 accent-brand-500" />
                          <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{option}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 教える・サポートの経験 */}
            <div>
              <label className="block text-white font-bold mb-2">
                教える・サポートの経験
                <span className="text-gray-500 text-sm ml-2">任意</span>
              </label>
              <p className="text-gray-500 text-sm mb-3">
                塾講師、メンター、社内研修、勉強会の運営など、何でも構いません（200字程度）
              </p>
              <textarea
                name="teaching_exp"
                rows={3}
                placeholder="例：大学時代にプログラミング塾の講師を2年間、社内の新人研修で技術指導を担当、etc."
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
              />
            </div>

            {/* 参加可否 */}
            <div>
              <label className="block text-white font-bold mb-2">
                日曜 10:00-13:00 × 5週連続の参加可否 <span className="text-red-400 text-sm">*必須</span>
              </label>
              <p className="text-gray-500 text-sm mb-3">2026年6月開講予定（具体的な日程は後日調整）</p>
              <div className="space-y-3">
                {[
                  "毎回参加できる",
                  "ほぼ参加可能（1回程度は調整が必要かも）",
                  "半分程度なら参加できる",
                  "まだ未定だが興味がある",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="availability"
                      value={option}
                      required
                      className="w-4 h-4 accent-brand-500"
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 初心者サポートで大切にしていること */}
            <div>
              <label className="block text-white font-bold mb-2">
                初心者をサポートする際に大切にしていること
                <span className="text-red-400 text-sm ml-1">*必須</span>
              </label>
              <p className="text-gray-500 text-sm mb-3">
                プログラミングに限らず、誰かに何かを教えた経験から感じていることを教えてください（200字程度）
              </p>
              <textarea
                name="support_philosophy"
                required
                rows={4}
                placeholder="例：相手のペースに合わせること、まず成功体験を作ること、質問しやすい雰囲気を作ること、etc."
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
              />
            </div>

            {/* 志望動機 */}
            <div>
              <label className="block text-white font-bold mb-2">
                志望動機・ひとこと <span className="text-red-400 text-sm">*必須</span>
              </label>
              <p className="text-gray-500 text-sm mb-3">
                応募の理由や、D-Code Academyに興味を持ったきっかけなど（200字程度）
              </p>
              <textarea
                name="motivation"
                required
                rows={4}
                placeholder="自由にお書きください"
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
              />
            </div>

            {/* ポートフォリオ / GitHub */}
            <div>
              <label className="block text-white font-bold mb-2">
                ポートフォリオ / GitHub URL
                <span className="text-gray-500 text-sm ml-2">任意</span>
              </label>
              <input
                type="url"
                name="portfolio"
                placeholder="https://github.com/username"
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
              />
            </div>

            {/* 送信ボタン */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-brand-500 hover:bg-brand-400 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all shadow-lg shadow-brand-500/25 cta-glow"
              >
                応募を送信する
              </button>
              <p className="text-gray-600 text-xs text-center mt-4">
                ※ ご記入いただいた個人情報は、本募集の選考目的のみに使用いたします。
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2026 D-Code Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
