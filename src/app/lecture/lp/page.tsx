import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "D-Code Academy｜歯科医院のためのバイブコーディング講座",
  description:
    "プログラミング未経験でも、AIと一緒にアプリが作れる。歯科医院向けClaude Code実践講座。全5回・日曜開催。",
};

/* ═══════════════════════════════════════════
   共通コンポーネント
   ═══════════════════════════════════════════ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] uppercase text-brand-500 mb-4">
      <span className="w-8 h-px bg-brand-400" />
      {children}
    </span>
  );
}

function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight text-surface-900 ${className}`}
    >
      {children}
    </h2>
  );
}

function PrimaryCta({
  children = "無料相談を予約する",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#contact"
      className={`inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-10 rounded-2xl text-lg cta-glow transition-all ${className}`}
    >
      {children}
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </a>
  );
}

function SecondaryCta({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 border-2 border-surface-900/10 hover:border-brand-500 text-surface-900 hover:text-brand-600 font-bold py-4 px-10 rounded-2xl text-lg transition-all"
    >
      {children}
    </a>
  );
}

/* ═══════════════════════════════════════════
   メインページ
   ═══════════════════════════════════════════ */

export default function LpPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* ────────────────────────────────────
          ヘッダー
      ──────────────────────────────────── */}
      <header className="fixed top-0 w-full glass z-50 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">D</span>
            </div>
            <span className="text-lg font-extrabold text-surface-900">
              D-Code
              <span className="text-brand-600 ml-0.5">Academy</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            {[
              { label: "講座について", href: "#about" },
              { label: "カリキュラム", href: "#curriculum" },
              { label: "料金", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-brand-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold py-2.5 px-6 rounded-xl transition-all hover:shadow-lg"
          >
            お問い合わせ
          </a>
        </div>
      </header>

      {/* ────────────────────────────────────
          ヒーロー
      ──────────────────────────────────── */}
      <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-200/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            {/* バッジ */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white border border-brand-200 text-brand-700 text-sm font-semibold px-5 py-2 rounded-full mb-8 shadow-sm">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse-soft" />
              第1期生 募集中
            </div>

            {/* メインコピー */}
            <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-surface-900 mb-6">
              AIに話しかけるだけで
              <br />
              <span className="gradient-text">自院専用アプリ</span>
              が作れる
            </h1>

            {/* サブコピー */}
            <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
              コードは1行も書きません。日本語でAIに指示するだけ。
              <br className="hidden md:block" />
              歯科医院のための
              <strong className="text-surface-900">
                5日間バイブコーディング講座
              </strong>
              。
            </p>

            {/* CTA */}
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryCta>まずは無料相談</PrimaryCta>
              <SecondaryCta href="#curriculum">
                カリキュラムを見る
              </SecondaryCta>
            </div>
          </div>

          {/* ──── 数字ハイライト ──── */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                value: "5",
                unit: "日間",
                label: "毎週日曜・完全オンライン",
                delay: "delay-300",
              },
              {
                value: "0",
                unit: "行",
                label: "コードの手書きゼロ",
                delay: "delay-400",
              },
              {
                value: "¥54",
                unit: "万",
                label: "初年度の特典価値",
                delay: "delay-500",
              },
              {
                value: "100",
                unit: "%",
                label: "ブラウザだけで完結",
                delay: "delay-600",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`animate-fade-in-up ${stat.delay} group relative bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-5 md:p-6 text-center card-hover`}
              >
                <p className="text-4xl md:text-5xl font-black text-brand-600 mb-1">
                  {stat.value}
                  <span className="text-lg font-bold text-brand-400">
                    {stat.unit}
                  </span>
                </p>
                <p className="text-xs md:text-sm text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────
          社会的証明 バー
      ──────────────────────────────────── */}
      <section className="py-8 border-y border-gray-100 bg-surface-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-sm text-gray-400 font-medium">
          <span>Powered by</span>
          <span className="text-surface-900 font-bold text-base">
            Claude Code
          </span>
          <span className="hidden md:inline text-gray-200">|</span>
          <span className="text-surface-900 font-bold text-base">Next.js</span>
          <span className="hidden md:inline text-gray-200">|</span>
          <span className="text-surface-900 font-bold text-base">Vercel</span>
          <span className="hidden md:inline text-gray-200">|</span>
          <span className="text-surface-900 font-bold text-base">
            Supabase
          </span>
        </div>
      </section>

      {/* ────────────────────────────────────
          お悩みセクション
      ──────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <SectionLabel>Problem</SectionLabel>
            <SectionTitle>
              こんなお悩み、
              <br className="md:hidden" />
              ありませんか？
            </SectionTitle>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "😰",
                text: "IT化したいけど何から始めればいいかわからない",
              },
              {
                icon: "💸",
                text: "業者に頼むと高額で、思った通りのものができない",
              },
              {
                icon: "📚",
                text: "スタッフのITスキルを上げたいが良い研修が見つからない",
              },
              {
                icon: "🏥",
                text: "既存の歯科ソフトでは自院の業務フローに合わない",
              },
              {
                icon: "😟",
                text: "プログラミングは難しそうで一歩が踏み出せない",
              },
              {
                icon: "🔧",
                text: "他医院と差別化できるデジタルツールが欲しい",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 card-hover"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-brand-50 border border-brand-200 rounded-2xl px-8 py-5">
              <svg
                className="w-6 h-6 text-brand-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <p className="text-lg md:text-xl font-bold text-brand-700">
                すべて、D-Code Academy が解決します
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────
          バイブコーディングとは
      ──────────────────────────────────── */}
      <section
        id="about"
        className="py-24 md:py-32 bg-surface-50 relative noise-bg scroll-mt-20"
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <SectionLabel>What is Vibe Coding?</SectionLabel>
            <SectionTitle>
              「日本語で話すだけ」の
              <br className="md:hidden" />
              新しい開発スタイル
            </SectionTitle>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              バイブコーディングとは、AIに自然な言葉で指示するだけで、
              AIがコードを書いてくれる革新的な開発手法です。
            </p>
          </div>

          {/* 3つの特徴 */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                ),
                title: "日本語で指示するだけ",
                desc: "「予約一覧ページを作って」と伝えるだけ。コードは1行も書きません。AIへの伝え方がスキルになります。",
              },
              {
                icon: (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                ),
                title: "ブラウザだけで完結",
                desc: "ソフトのインストール不要。ブラウザとネット環境だけで、プロ級のWebアプリが作れます。",
              },
              {
                icon: (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                title: "歯科に特化した実習",
                desc: "患者管理、予約確認、お知らせ配信。自院で実際に使えるアプリを題材に学びます。",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-surface-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 開発フロー */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
            <h3 className="text-xl font-bold text-surface-900 mb-8 text-center">
              アプリ公開までの流れ
            </h3>
            <div className="grid md:grid-cols-4 gap-6 md:gap-4">
              {[
                {
                  step: "01",
                  label: "AIに日本語で指示",
                  detail: "「患者お知らせ管理アプリを作って」",
                  color: "bg-brand-600",
                },
                {
                  step: "02",
                  label: "AIがコードを生成",
                  detail: "最新のWeb技術で自動構築",
                  color: "bg-violet-600",
                },
                {
                  step: "03",
                  label: "GitHubに自動保存",
                  detail: "ゲームのセーブと同じ仕組み",
                  color: "bg-purple-600",
                },
                {
                  step: "04",
                  label: "世界に自動公開",
                  detail: "URLをシェアするだけで誰でも利用可能",
                  color: "bg-fuchsia-600",
                },
              ].map((item, i) => (
                <div key={item.step} className="relative text-center">
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-gray-200 to-transparent" />
                  )}
                  <div
                    className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-black text-lg shadow-lg`}
                  >
                    {item.step}
                  </div>
                  <p className="font-bold text-surface-900 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────
          カリキュラム
      ──────────────────────────────────── */}
      <section id="curriculum" className="py-24 md:py-32 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <SectionLabel>Curriculum</SectionLabel>
            <SectionTitle>5日間のカリキュラム</SectionTitle>
            <p className="mt-4 text-gray-500 text-lg">
              毎週日曜 10:00 - 12:50 ｜ 50分 × 3ブロック
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                day: "1",
                title: "はじめてのバイブコーディング",
                subtitle:
                  "Claude Code・GitHub・Vercelの環境構築から、自己紹介ページの公開まで。自分のサイトがインターネットに公開される感動体験。",
                tags: ["環境構築", "自己紹介ページ", "初デプロイ"],
                accent: "from-blue-500 to-indigo-600",
              },
              {
                day: "2",
                title: "Webアプリとプロンプト設計",
                subtitle:
                  "ToDoアプリを作りながら、AIへの効果的な指示方法を習得。CLAUDE.md（AIへの指示書）の活用もマスター。",
                tags: ["React入門", "ToDoアプリ", "プロンプト設計"],
                accent: "from-indigo-500 to-violet-600",
              },
              {
                day: "3",
                title: "データ管理と歯科アプリ開発",
                subtitle:
                  "データベース（Supabase）と連携し、歯科医院の実務で使えるアプリを開発。データの保存・更新・削除を実装。",
                tags: ["データベース", "Supabase", "歯科アプリ"],
                accent: "from-violet-500 to-purple-600",
              },
              {
                day: "4",
                title: "オリジナルアプリ開発",
                subtitle:
                  "自院の課題を解決するオリジナルアプリの企画・設計・開発に挑戦。講師が一人ひとり個別にサポート。",
                tags: ["企画設計", "要件定義", "自院アプリ"],
                accent: "from-purple-500 to-fuchsia-600",
              },
              {
                day: "5",
                title: "仕上げ・公開・成果発表",
                subtitle:
                  "UI改善、独自ドメイン設定、受講者全員の前で成果発表。D-Code Clubへの入会で卒業後も成長を継続。",
                tags: ["UI改善", "ドメイン設定", "発表会"],
                accent: "from-fuchsia-500 to-pink-600",
              },
            ].map((item) => (
              <div
                key={item.day}
                className="group bg-white border border-gray-100 rounded-2xl p-6 md:p-8 card-hover flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Day番号 */}
                <div
                  className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.accent} flex flex-col items-center justify-center text-white shadow-lg`}
                >
                  <span className="text-[10px] font-bold uppercase leading-none opacity-80">
                    Day
                  </span>
                  <span className="text-2xl font-black leading-none">
                    {item.day}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-surface-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {item.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-50 text-gray-500 text-xs font-medium px-3 py-1 rounded-lg border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────
          Before → After
      ──────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface-50 relative noise-bg">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <SectionLabel>Transformation</SectionLabel>
            <SectionTitle>5日間で、ここまで変わる</SectionTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                Before
              </div>
              <ul className="space-y-4">
                {[
                  "「プログラミング」と聞くだけで拒否反応",
                  "アプリ開発は業者に数百万で外注するもの",
                  "自院の業務改善アイデアはあるが実現手段がない",
                  "ITの流行についていけず焦りを感じている",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    </span>
                    <span className="text-gray-500 text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-8 text-white shadow-xl">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                After — 5日後
              </div>
              <ul className="space-y-4">
                {[
                  "自院のオリジナルアプリがインターネットに公開済み",
                  "AIに指示するだけで新機能を追加できるスキル",
                  "D-Code Storeでアプリを販売する権利を取得",
                  "歯科×ITの最前線コミュニティに所属",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-accent-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-white/90 text-sm font-medium">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────
          料金・価値
      ──────────────────────────────────── */}
      <section id="pricing" className="py-24 md:py-32 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <SectionLabel>Pricing</SectionLabel>
            <SectionTitle>料金と受講特典</SectionTitle>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              受講料 ¥350,000 に対し、初年度だけで
              <strong className="text-brand-600">¥540,000以上</strong>
              の価値をお届けします。
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* 料金カード */}
            <div className="lg:col-span-2 relative bg-white rounded-3xl border-2 border-brand-500 p-8 shadow-xl">
              <div className="absolute -top-4 left-8 bg-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                初期受講者 特別特典付き
              </div>

              <p className="text-sm font-bold text-brand-600 mt-2 mb-1">
                受講料
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-black text-surface-900">
                  ¥350,000
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-8">税別・全5回・教材費込み</p>

              <ul className="space-y-3 mb-8">
                {[
                  "Zoom × 全5回（日曜 10:00-12:50）",
                  "講師による個別サポート",
                  "自院オリジナルアプリ完成",
                  "D-Code Club 1年間無料",
                  "歯科専用アプリ3本バンドル",
                  "D-Code Store 出品権",
                ].map((text) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <svg
                      className="w-5 h-5 text-accent-500 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {text}
                  </li>
                ))}
              </ul>

              <PrimaryCta className="w-full text-center text-base">
                無料相談を予約する
              </PrimaryCta>
            </div>

            {/* 価値比較 */}
            <div className="lg:col-span-3 bg-surface-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-surface-900 mb-6">
                初年度に受け取れる価値
              </h3>

              <div className="space-y-3 mb-6">
                {[
                  {
                    item: "D-Code Club メンバーシップ 1年間",
                    price: "¥120,000",
                  },
                  {
                    item: "MIERU CLINIC（歯科経営可視化）1年間",
                    price: "¥240,000",
                  },
                  {
                    item: "QRくるくる診断DX（口腔診断）1年間",
                    price: "¥120,000",
                  },
                  {
                    item: "歯科SEOの達人 1年間",
                    price: "¥60,000",
                  },
                ].map((row) => (
                  <div
                    key={row.item}
                    className="flex justify-between items-center bg-white rounded-xl px-5 py-4 border border-gray-100"
                  >
                    <span className="text-sm text-gray-600">{row.item}</span>
                    <span className="font-bold text-surface-900 shrink-0 ml-4">
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl px-5 py-4 border-2 border-brand-200">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-surface-900">
                    特典合計
                  </span>
                  <span className="text-3xl font-black text-brand-600">
                    ¥540,000
                    <span className="text-sm font-medium text-gray-400 ml-1">
                      相当
                    </span>
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  + バイブコーディングスキル + オリジナルアプリ + Store出品権
                </p>
              </div>

              {/* 助成金案内 */}
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">💡</span>
                  <div>
                    <p className="text-sm font-bold text-amber-800 mb-1">
                      助成金対象講座
                    </p>
                    <p className="text-xs text-amber-700 leading-relaxed">
                      スタッフ受講の場合、人材開発支援助成金（リスキリング支援コース）で最大75%の助成を受けられる可能性があります。提携社労士を無料でご紹介。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────
          D-Code Club
      ──────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <SectionLabel>Community</SectionLabel>
            <SectionTitle className="text-white">
              D-Code Club で
              <br className="md:hidden" />
              講座後も成長を続ける
            </SectionTitle>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
              歯科 × IT の最前線で学び続けるコミュニティ。
              <br className="hidden md:block" />
              初期受講者は
              <strong className="text-white">1年間無料</strong>
              で参加できます。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                ),
                title: "歯科アプリ使い放題",
                desc: "MIERU CLINIC、QRくるくる診断DX、歯科SEOの達人が全て利用可能",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                    />
                  </svg>
                ),
                title: "月1回の勉強会",
                desc: "最新AI技術の共有、開発Tips、講師への直接質問",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.997 2.997 0 00.177-.663L3.882 4.5h16.236l.705 4.186A2.997 2.997 0 0021 9.35"
                    />
                  </svg>
                ),
                title: "D-Code Store 出品",
                desc: "自作アプリを全国の歯科医院に販売。新たな収益源に",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17l-5.384 3.169c-.547.326-1.203-.164-1.024-.78l1.423-4.873-3.867-3.213c-.47-.39-.213-1.158.403-1.196l4.97-.381 1.965-4.65c.239-.567 1.032-.567 1.271 0l1.965 4.65 4.97.381c.616.038.873.806.403 1.196l-3.867 3.213 1.423 4.873c.18.616-.477 1.106-1.024.78L12 15.17z"
                    />
                  </svg>
                ),
                title: "製品化サポート",
                desc: "開発アプリをStore出品レベルに仕上げるプロサポート（有料）",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                ),
                title: "マーケティング支援",
                desc: "製品化後の販促・集客・Store内プロモーション（有料）",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                ),
                title: "D-Code認定医院バッジ",
                desc: "IT先進医院として患者さんへの信頼感・ブランド力を向上",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 text-brand-400 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────
          講座概要テーブル
      ──────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel>Overview</SectionLabel>
            <SectionTitle>講座概要</SectionTitle>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            {[
              {
                label: "対象",
                value: "歯科医院の院長・スタッフ（プログラミング未経験OK）",
              },
              { label: "日程", value: "毎週日曜日 10:00 - 12:50（全5回）" },
              {
                label: "形式",
                value: "Zoom オンライン（ご自宅から参加OK）",
              },
              { label: "定員", value: "1コホート 20〜30名" },
              { label: "受講料", value: "¥350,000（税別）" },
              {
                label: "必要なもの",
                value: "ノートPC（ブラウザが動けばOK）",
              },
              {
                label: "ゴール",
                value:
                  "自院の業務課題を解決するオリジナルアプリの完成・公開",
              },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col sm:flex-row ${i > 0 ? "border-t border-gray-100" : ""}`}
              >
                <div className="sm:w-36 shrink-0 bg-surface-50 px-6 py-4 font-bold text-surface-900 text-sm">
                  {row.label}
                </div>
                <div className="px-6 py-4 text-gray-600 text-sm">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────
          FAQ
      ──────────────────────────────────── */}
      <section
        id="faq"
        className="py-24 md:py-32 bg-surface-50 scroll-mt-20"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <SectionTitle>よくある質問</SectionTitle>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "プログラミングの経験が全くなくても大丈夫ですか？",
                a: "はい、完全未経験者のための講座です。コードを手で書くことは一切ありません。AIに日本語で指示を出す方法を学びます。「メールが打てる」レベルのPCスキルがあれば大丈夫です。",
              },
              {
                q: "パソコンのスペックは何が必要ですか？",
                a: "ブラウザ（Chrome推奨）が動けば大丈夫です。全てWeb上で完結するため、高性能なPCは一切不要。お持ちのノートPCでそのまま参加できます。",
              },
              {
                q: "講座で作ったアプリは講座後も使えますか？",
                a: "はい。受講者ご自身のアカウントで運用するため、講座後も継続して使用・機能追加・改善ができます。あなたの資産になります。",
              },
              {
                q: "助成金は使えますか？",
                a: "スタッフ受講の場合、人材開発支援助成金（事業展開等リスキリング支援コース）の対象となる可能性があり、最大75%の助成が受けられるケースもあります。提携社労士を無料でご紹介します。",
              },
              {
                q: "1つの医院から複数名の参加は可能ですか？",
                a: "はい。院長とスタッフなど、複数名でご参加いただけます。チームで学ぶことで、講座後のアプリ運用やDX推進がスムーズになります。",
              },
              {
                q: "日曜以外の開催はありますか？",
                a: "現在は日曜開催のみですが、ご要望が多い場合は別日程も検討いたします。お気軽にご相談ください。",
              },
              {
                q: "講座後のサポートはありますか？",
                a: "D-Code Club（月額¥10,000、初期受講者は1年無料）にて、月1回の勉強会・Q&A・歯科アプリの利用・製品化サポートなど充実した継続支援があります。",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="bg-white rounded-2xl border border-gray-100 group"
              >
                <summary className="cursor-pointer px-6 py-5 font-bold text-surface-900 flex items-center justify-between">
                  <span className="pr-4">{item.q}</span>
                  <span className="w-8 h-8 rounded-full bg-surface-50 group-open:bg-brand-50 flex items-center justify-center shrink-0 transition-colors">
                    <svg
                      className="w-4 h-4 text-gray-400 group-open:text-brand-600 group-open:rotate-180 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────
          最終CTA
      ──────────────────────────────────── */}
      <section
        id="contact"
        className="relative py-24 md:py-32 overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            歯科医院の未来を、
            <br />
            一緒に作りませんか？
          </h2>
          <p className="text-brand-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            「自分にできるか不安」「助成金について聞きたい」
            <br className="hidden md:block" />
            どんなご質問でもお気軽にどうぞ。
          </p>
          <a
            href="mailto:academy@d-code.com"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 hover:text-brand-800 font-bold py-5 px-12 rounded-2xl text-lg transition-all hover:shadow-2xl hover:-translate-y-0.5"
          >
            無料相談を予約する
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <p className="text-brand-300 text-sm mt-6">academy@d-code.com</p>
        </div>
      </section>

      {/* ────────────────────────────────────
          フッター
      ──────────────────────────────────── */}
      <footer className="py-12 bg-surface-950 text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">D</span>
              </div>
              <div>
                <span className="text-white font-bold">D-Code Academy</span>
                <span className="text-gray-600 ml-2 text-sm">
                  by 株式会社ファンクション・ティ
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Function-T Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
