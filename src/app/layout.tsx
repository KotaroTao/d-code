import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D-Code Academy｜歯科医院のためのバイブコーディング講座",
  description:
    "プログラミング未経験でも、AIと一緒にアプリが作れる。歯科医院の院長・スタッフ向けClaude Code実践講座。全5回・日曜開催・完全オンライン。",
  openGraph: {
    title: "D-Code Academy｜歯科医院のためのバイブコーディング講座",
    description:
      "プログラミング未経験でも、AIと一緒にアプリが作れる。全5回・日曜開催・完全オンライン。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+JP:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{
          fontFamily:
            "'Inter', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
