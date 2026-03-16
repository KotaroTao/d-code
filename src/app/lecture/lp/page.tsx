import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "D-Code Academy｜歯科医院のためのバイブコーディング講座",
  description:
    "プログラミング未経験の歯科医師・スタッフが、AIと一緒に5日間で自院専用アプリを作る。Claude Code実践講座。2026年6月開講。",
};

/* ═══════════════════════════════════════════
   共通コンポーネント
   ═══════════════════════════════════════════ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-brand-500 mb-4">
      <span className="w-8 h-[2px] bg-brand-400 rounded-full" />
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
  children = "受講を申し込む",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#apply"
      className={`inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-10 rounded-2xl text-lg cta-glow transition-all ${className}`}
    >
      {children}
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  );
}

/* ═══════════════════════════════════════════
   メインページ
   ═══════════════════════════════════════════ */

export default function LpPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">

      {/* ─── ヘッダー ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">D</span>
            </div>
            <span className="font-extrabold text-lg tracking-tight text-surface-900">
              D-Code <span className="text-brand-500 font-bold text-sm">Academy</span>
            </span>
          </div>
          <a
            href="#apply"
            className="hidden sm:inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-5 rounded-xl text-sm transition-all"
          >
            受講を申し込む
          </a>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50/30" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-brand-200/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-200/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 border border-brand-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse-soft" />
              <span className="text-sm font-semibold text-surface-900">2026年6月 第1期生 募集中</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight mb-6">
              <span className="text-surface-900">プログラミング経験ゼロの</span>
              <br />
              <span className="text-surface-900">歯科医師が、</span>
              <span className="gradient-text">5日間で</span>
              <br />
              <span className="gradient-text">自院専用アプリ</span>
              <span className="text-surface-900">を作る。</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              講師は<strong className="text-surface-900">歯科医師・プログラマー・マーケター</strong>の三刀流。
              <br className="hidden md:block" />
              環境構築から開発、製品化、マーケティングまで
              <br className="hidden md:block" />
              <strong className="text-surface-900">最短最速でトータルサポート</strong>します。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <PrimaryCta>第1期に申し込む（残席わずか）</PrimaryCta>
            </div>

            {/* 3 Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { icon: "📅", text: "全5回・日曜10:00〜13:00" },
                { icon: "💻", text: "完全オンライン・Zoom開催" },
                { icon: "🔰", text: "プログラミング経験不要" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center justify-center gap-2 bg-white/80 border border-gray-100 rounded-xl py-3 px-4 shadow-sm"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-semibold text-surface-900">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 実績バー ─── */}
      <section className="bg-surface-900 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "20年", label: "歯科×IT 経験" },
            { num: "10万件+", label: "歯科相談 実績" },
            { num: "500万", label: "月間PV（歯チャンネル）" },
            { num: "15,000+", label: "カルテ管理数" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-black text-white mb-1">{s.num}</div>
              <div className="text-xs text-gray-400 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── こんなお悩みありませんか？ ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>Problem</SectionLabel>
            <SectionTitle>
              こんな<span className="gradient-text">お悩み</span>、ありませんか？
            </SectionTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                emoji: "😰",
                title: "IT業者に依存しすぎている",
                desc: "ちょっとした変更でも外注費がかかり、対応も遅い",
              },
              {
                emoji: "📋",
                title: "紙の問診票をなんとかしたい",
                desc: "手書き→入力の二度手間。患者さんも面倒に感じている",
              },
              {
                emoji: "💸",
                title: "月額ツール代がかさんでいる",
                desc: "予約システム、問診、患者管理…毎月の固定費が膨らむ一方",
              },
              {
                emoji: "🤖",
                title: "AIを活用したいが何から始めれば…",
                desc: "ChatGPTは使ったけど、業務に組み込む方法がわからない",
              },
              {
                emoji: "📊",
                title: "データを経営に活かせていない",
                desc: "患者データはあるのに、分析や可視化ができていない",
              },
              {
                emoji: "🏥",
                title: "他院との差別化が難しい",
                desc: "ホームページも診療内容も似たり寄ったりで埋もれてしまう",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100"
              >
                <span className="text-3xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                <div>
                  <h3 className="font-bold text-surface-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 解決策 ─── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-brand-50/50 to-white relative noise-bg">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>Solution</SectionLabel>
            <SectionTitle>
              <span className="gradient-text">AIに話しかけるだけ</span>で
              <br />
              アプリが作れる時代が来ました
            </SectionTitle>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              D-Code Academyでは「バイブコーディング」という新しい開発手法を使います。
              <br className="hidden md:block" />
              プログラミング言語を一切書かず、AIに日本語で指示するだけ。
              <br className="hidden md:block" />
              <strong>しかも全てブラウザ上で完結。</strong>PCへのインストール作業はゼロです。
            </p>
          </div>

          {/* 3 Steps */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "AIに日本語で指示",
                desc: "「歯科医院のWEB問診票を作って」と伝えるだけ。Claude CodeがコードをAIで自動生成します。",
                icon: (
                  <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "ブラウザだけで開発",
                desc: "PC へのインストール不要。Claude Code WEB版で全てが完結。スマホからも確認OK。",
                icon: (
                  <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "自動でインターネットに公開",
                desc: "指示を出すたびに自動でデプロイ。世界中からアクセスできるURLがすぐに手に入ります。",
                icon: (
                  <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 card-hover text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-brand-400 mb-2">STEP {item.step}</div>
                <h3 className="text-lg font-bold text-surface-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── カリキュラム ─── */}
      <section id="curriculum" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>Curriculum</SectionLabel>
            <SectionTitle>
              <span className="gradient-text">5日間</span>のカリキュラム
            </SectionTitle>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              毎回デプロイして「動いている」実感を得ながら、段階的にスキルアップ
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                day: "Day 1",
                date: "6/7（日）",
                title: "はじめてのWEBサイト公開",
                desc: "自己紹介サイトを作ってインターネットに公開。GitHub・Vercelの初期設定もこの日に完了。",
                tag: "HTML / CSS / デプロイ",
                highlight: "この日のゴール：自分のサイトが世界に公開される感動体験",
              },
              {
                day: "Day 2",
                date: "6/14（日）",
                title: "AIへの指示の出し方 & インタラクティブアプリ",
                desc: "プロンプトエンジニアリングを学び、ToDoアプリを開発。CLAUDE.mdの設定方法も習得。",
                tag: "React / Next.js / プロンプト設計",
                highlight: "この日のゴール：AIへの指示精度が劇的に上がる",
              },
              {
                day: "Day 3",
                date: "6/21（日）",
                title: "WEB問診票アプリ開発",
                desc: "データベース連携を学び、歯科医院向けWEB問診票を作成。患者データの保存・閲覧まで。",
                tag: "Supabase / データベース / 認証",
                highlight: "この日のゴール：実際の業務で使えるWEB問診票が完成",
              },
              {
                day: "Day 4",
                date: "7/5（日）",
                title: "自院オリジナルアプリ開発",
                desc: "自分の医院が抱える課題を解決するオリジナルアプリを企画・開発。講師が1人ずつサポート。",
                tag: "企画 / 設計 / 実装",
                highlight: "この日のゴール：自院の課題を解決するアプリのプロトタイプ完成",
              },
              {
                day: "Day 5",
                date: "7/12（日）",
                title: "仕上げ & 成果発表会",
                desc: "UI改善・独自ドメイン設定で本番レベルに仕上げ。受講生全員で成果を発表し合います。",
                tag: "UI/UX / ドメイン / 発表",
                highlight: "この日のゴール：本番運用できるアプリ完成 & 発表",
              },
            ].map((item, i) => (
              <div key={item.day} className="relative flex gap-5 md:gap-8">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 ${
                    i === 2 || i === 3 ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-700"
                  }`}>
                    {item.day.replace("Day ", "")}
                  </div>
                  {i < 4 && <div className="w-px flex-1 bg-brand-100 mt-2" />}
                </div>

                {/* Content */}
                <div className={`flex-1 pb-8 ${i === 4 ? "pb-0" : ""}`}>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm card-hover">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-brand-600">{item.date}</span>
                      <span className="text-xs bg-brand-50 text-brand-600 px-2.5 py-0.5 rounded-full font-medium">{item.tag}</span>
                    </div>
                    <h3 className="text-lg font-bold text-surface-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-accent-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item.highlight}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 作れるものの例 ─── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>What you can build</SectionLabel>
            <SectionTitle>
              受講後、<span className="gradient-text">こんなアプリ</span>が作れます
            </SectionTitle>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "📋",
                title: "WEB問診票",
                desc: "紙の問診票をデジタル化。患者がスマホで事前入力、データは自動でDB保存。",
                tag: "Day 3 で作成",
              },
              {
                icon: "🦷",
                title: "治療説明アプリ",
                desc: "患者さんに治療内容をビジュアルで説明。インフォームドコンセントの質が向上。",
                tag: "応用例",
              },
              {
                icon: "📊",
                title: "患者管理ダッシュボード",
                desc: "予約状況・リコール率・患者属性を一覧で可視化。経営判断に活用。",
                tag: "応用例",
              },
              {
                icon: "📱",
                title: "集患用診断コンテンツ",
                desc: "「お口年齢診断」などのQR診断で新患獲得。チラシやSNSに載せるだけ。",
                tag: "D-Code Club 特典",
              },
              {
                icon: "💬",
                title: "スタッフ業務マニュアル",
                desc: "院内マニュアルをWebアプリ化。検索・更新が簡単。新人教育にも活用。",
                tag: "応用例",
              },
              {
                icon: "🎯",
                title: "あなたのアイデア次第",
                desc: "自院の課題に合わせた完全オリジナルアプリをDay 4-5で開発します。",
                tag: "Day 4-5 で作成",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm card-hover">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <span className="inline-block text-xs bg-brand-50 text-brand-600 px-2 py-0.5 rounded-full font-medium mb-3">{item.tag}</span>
                <h3 className="font-bold text-surface-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 開発から製品化・マーケティングまで ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>End-to-End Support</SectionLabel>
            <SectionTitle>
              作って終わりじゃない。
              <br />
              <span className="gradient-text">製品化・マーケティング</span>まで一気通貫
            </SectionTitle>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              他のプログラミング講座は「作り方」を教えて終わり。D-Code Academyは、開発後のビジネス展開まで見据えたサポート体制を整えています。
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Flow */}
            <div className="grid md:grid-cols-4 gap-4 mb-10">
              {[
                {
                  step: "1",
                  title: "環境構築",
                  desc: "歯科業界に最適化された開発環境をブラウザだけで即日構築",
                  icon: "🔧",
                },
                {
                  step: "2",
                  title: "アプリ開発",
                  desc: "AIを使って自院の課題を解決するオリジナルアプリを開発",
                  icon: "💻",
                },
                {
                  step: "3",
                  title: "製品化",
                  desc: "作ったアプリを他院にも使えるプロダクトレベルに仕上げる",
                  icon: "📦",
                },
                {
                  step: "4",
                  title: "マーケティング",
                  desc: "D-Code Storeへの出品、集患施策への組み込みまで支援",
                  icon: "📈",
                },
              ].map((item, i) => (
                <div key={item.step} className="relative">
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 h-full text-center">
                    <span className="text-3xl mb-3 block">{item.icon}</span>
                    <div className="text-xs font-bold text-brand-500 mb-1">STEP {item.step}</div>
                    <h3 className="font-bold text-surface-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 w-6 h-6 items-center justify-center text-brand-300 z-10">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-brand-50 to-purple-50/50 rounded-2xl p-6 md:p-8 border border-brand-100 text-center">
              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
                講師が<strong className="text-surface-900">歯科医師×プログラマー×マーケター</strong>だからこそ、
                「どんなアプリが現場で求められるか」「どう作れば効率的か」「どう売れば広がるか」を全て一人で指導できます。
                <br className="hidden md:block" />
                開発スクールで学んだけどアプリが世に出なかった…ということがD-Code Academyでは起きません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 講師紹介 ─── */}
      <section id="instructor" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>Instructor</SectionLabel>
            <SectionTitle>講師紹介</SectionTitle>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-50/80 to-purple-50/50 rounded-3xl p-8 md:p-12 border border-brand-100">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-brand-100 overflow-hidden shadow-lg flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/instructor-tao.jpg"
                    alt="田尾耕太郎"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Profile */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-surface-900 mb-1">田尾 耕太郎</h3>
                <p className="text-sm text-brand-600 font-semibold mb-3">
                  株式会社ファンクション・ティ 代表取締役 / JDAPO 代表理事
                </p>

                {/* Triple Expertise Badges */}
                <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
                  {[
                    { label: "歯科医師", color: "bg-blue-50 text-blue-700 border-blue-200" },
                    { label: "プログラマー", color: "bg-purple-50 text-purple-700 border-purple-200" },
                    { label: "マーケター", color: "bg-amber-50 text-amber-700 border-amber-200" },
                  ].map((badge) => (
                    <span key={badge.label} className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${badge.color}`}>
                      {badge.label}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-start gap-2 justify-center md:justify-start">
                    <span className="text-brand-400 mt-0.5">▸</span>
                    <span>2005年 松本歯科大学 卒業</span>
                  </div>
                  <div className="flex items-start gap-2 justify-center md:justify-start">
                    <span className="text-brand-400 mt-0.5">▸</span>
                    <span>2005年 歯科相談サイト「歯チャンネル」公開（累計相談10万件超・月間500万PV）</span>
                  </div>
                  <div className="flex items-start gap-2 justify-center md:justify-start">
                    <span className="text-brand-400 mt-0.5">▸</span>
                    <span>2011年 株式会社ファンクション・ティ 設立</span>
                  </div>
                  <div className="flex items-start gap-2 justify-center md:justify-start">
                    <span className="text-brand-400 mt-0.5">▸</span>
                    <span>2025年 一般社団法人 日本歯科啓発・推進機構（JDAPO）代表理事</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  歯科医師として臨床に立ちながら独学でプログラミングを習得し、国内最大級の歯科情報サイト「歯チャンネル」（月間500万PV超）を構築。
                  カルテ数15,000超のアライナー矯正専用WEB管理システムなど、歯科業界に特化したシステムを多数開発。
                  現在はClaude Codeをフル活用し、<strong className="text-surface-900">開発速度10倍・コスト約1/10</strong>を実現。
                  さらに500万PVメディア運営で培った<strong className="text-surface-900">マーケティングの知見</strong>で、アプリの集患・ブランディングまで指導します。
                </p>

                <div className="bg-white/80 rounded-xl p-4 border border-brand-100">
                  <p className="text-sm font-bold text-surface-900 mb-1">なぜこの講師だから最短最速なのか？</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    歯科の現場課題を知り尽くした<strong>歯科医師</strong>が、自ら手を動かせる<strong>プログラマー</strong>として最適な環境を構築し、
                    集患・ブランディングの実績を持つ<strong>マーケター</strong>として製品化後の成長戦略まで指導。
                    この3つの専門性が1人に揃っているからこそ、他では実現できないスピードと質でサポートできます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── D-Code Club 特典 ─── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>D-Code Club</SectionLabel>
            <SectionTitle>
              受講料だけで<span className="gradient-text">年間54万円相当</span>の
              <br />
              アプリ・サービスが使えます
            </SectionTitle>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              第1期受講者はD-Code Club メンバーシップ（月額¥10,000）が1年間無料
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              {
                name: "MIERU CLINIC",
                value: "¥20,000/月相当",
                desc: "歯科医院の経営を可視化するダッシュボード。予約・売上・リコール率を一目で把握。",
              },
              {
                name: "QRくるくる診断DX",
                value: "¥10,000/月相当",
                desc: "QRコードを載せるだけで診断コンテンツが新患を呼び込む。チラシ・HP・SNSに対応。効果測定・エリア分析も。",
              },
              {
                name: "歯科SEOの達人",
                value: "含む",
                desc: "歯科医院のWebサイトSEOを自動分析。検索順位アップのための改善提案を自動生成。",
              },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-surface-900 text-lg mb-1">{item.name}</h3>
                <span className="inline-block text-xs bg-accent-500/10 text-accent-500 px-2 py-0.5 rounded-full font-bold mb-3">{item.value}</span>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm max-w-2xl">
              <p className="text-sm text-gray-600 mb-3">その他のClub特典</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-left">
                {[
                  "Claude Codeに関する相談サポート",
                  "メンバーの成果物共有・フィードバック",
                  "月1回の勉強会・メンバー限定イベント",
                  "D-Code Store 出品権",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-surface-900 font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── D-Code エコシステム ─── */}
      <section className="py-20 md:py-28 bg-[#0d1117]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest text-brand-400 uppercase mb-3">D-Code Ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              3つの事業で歯科医院の
              <br />
              デジタル化を総合的に支援
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Academy で学び、Club でつながり、Store で届ける。<br className="hidden sm:inline" />
              3つが揃って初めて「育てる→つなぐ→届ける」の好循環が生まれます。
            </p>
          </div>

          {/* 3 Pillar Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {/* Academy */}
            <div className="relative rounded-2xl border border-gray-700/50 bg-[#161b22] p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-brand-600/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
                <span className="text-xs font-bold tracking-widest text-brand-400">PILLAR 1</span>
              </div>
              <h3 className="text-xl font-black text-white mb-1">D-Code Academy</h3>
              <p className="text-sm font-semibold text-emerald-400 mb-3">歯科医院スタッフ向けAI活用研修</p>
              <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-grow">
                初心者向け「導入コース」と中上級者向け「開発実践コース」の2本立て。卒業生は専用コミュニティで開発相談やアプリ紹介を受けられる。
              </p>
              <div className="space-y-2.5 mb-5">
                {[
                  "講師は大規模歯科システム構築の実績を持つ現役開発者",
                  "Claude Codeで開発速度10倍、コスト約1/10",
                  "助成金で最大75%補助",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-xs text-gray-300">{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-brand-400 mt-auto pt-3 border-t border-gray-700/50">
                <span className="font-bold">役割：</span>
                <span className="text-gray-400">開発者を育て、コミュニティの規模と熱量を作る</span>
              </p>
            </div>

            {/* Club */}
            <div className="relative rounded-2xl border border-gray-700/50 bg-[#161b22] p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <span className="text-xs font-bold tracking-widest text-purple-400">PILLAR 2</span>
              </div>
              <h3 className="text-xl font-black text-white mb-1">D-Code Club</h3>
              <p className="text-sm font-semibold text-emerald-400 mb-3">卒業生の継続サポートコミュニティ</p>
              <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-grow">
                Academy卒業生が月額¥10,000で参加できるメンバーシップ。Claude Codeの活用相談、メンバー同士の成果物共有、限定イベントで継続的にスキルアップ。
              </p>
              <div className="space-y-2.5 mb-5">
                {[
                  "Claude Codeに関する相談サポート",
                  "メンバーの成果物共有・フィードバック",
                  "月1回の勉強会・メンバー限定イベント",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-xs text-gray-300">{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-purple-400 mt-auto pt-3 border-t border-gray-700/50">
                <span className="font-bold">役割：</span>
                <span className="text-gray-400">学びを継続し、開発者コミュニティの熱量を維持する</span>
              </p>
            </div>

            {/* Store */}
            <div className="relative rounded-2xl border border-gray-700/50 bg-[#161b22] p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                  </svg>
                </div>
                <span className="text-xs font-bold tracking-widest text-emerald-400">PILLAR 3</span>
              </div>
              <h3 className="text-xl font-black text-white mb-1">D-Code Store</h3>
              <p className="text-sm font-semibold text-emerald-400 mb-3">歯科版 App Store</p>
              <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-grow">
                Academy卒業生やサードパーティ開発者が作ったアプリを、全国の歯科医院がワンクリックで導入。レビュー・課金・アップデートをプラットフォームが一括管理。
              </p>
              <div className="space-y-2.5 mb-5">
                {[
                  "ワンクリックで導入・課金",
                  "開発者は販売に集中できる",
                  "レビューで品質を担保",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-xs text-gray-300">{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-emerald-400 mt-auto pt-3 border-t border-gray-700/50">
                <span className="font-bold">役割：</span>
                <span className="text-gray-400">アプリを全国に届け、収益を生む</span>
              </p>
            </div>
          </div>

          {/* Ecosystem Flow */}
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  flow: "Academy → Club / Store",
                  desc: "研修で育った開発者がClubで学び続け、Storeでアプリを販売",
                  color: "text-brand-400",
                },
                {
                  flow: "Club → Store / Academy",
                  desc: "コミュニティの熱量が新たな受講者を呼び、Storeへのアプリ供給を加速",
                  color: "text-purple-400",
                },
                {
                  flow: "Store → Academy / Club",
                  desc: "アプリ販売の成功事例が新たな受講者を呼び、Clubの価値を高める",
                  color: "text-emerald-400",
                },
              ].map((item) => (
                <div key={item.flow} className="rounded-xl border border-gray-700/50 bg-[#161b22] p-4">
                  <p className={`text-sm font-bold ${item.color} mb-2`}>{item.flow}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 料金 ─── */}
      <section id="pricing" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>Pricing</SectionLabel>
            <SectionTitle>受講料</SectionTitle>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="relative bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-8 md:p-10 text-white text-center shadow-xl overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-bold mb-6">第1期生 特別価格</div>
                <div className="mb-2">
                  <span className="text-5xl md:text-6xl font-black">¥350,000</span>
                  <span className="text-lg ml-2 opacity-80">（税別）</span>
                </div>
                <p className="text-white/70 text-sm mb-8">全5回・1名あたり ／ 院長・スタッフ共通価格</p>

                <div className="space-y-3 text-left max-w-xs mx-auto mb-8">
                  {[
                    "D-Code Club 1年無料（¥120,000相当）",
                    "MIERU CLINIC 1年分（¥240,000相当）",
                    "QRくるくる診断DX 1年分（¥120,000相当）",
                    "歯科SEOの達人（含む）",
                    "D-Code Store 出品権",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 rounded-xl p-4 mb-8">
                  <p className="text-sm text-white/80">
                    <strong className="text-white">初年度に得られる価値：¥540,000以上</strong>
                    <br />
                    受講料以上のアプリ・サービスが1年目から使えます
                  </p>
                </div>

                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-bold py-4 px-10 rounded-2xl text-lg hover:bg-gray-50 transition-all shadow-lg w-full sm:w-auto"
                >
                  第1期に申し込む
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* 助成金 */}
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-xl">💡</span>
                <div>
                  <h4 className="font-bold text-surface-900 mb-1">助成金のご案内</h4>
                  <p className="text-gray-600 leading-relaxed">
                    雇用保険被保険者（スタッフ）の受講は、<strong>人材開発支援助成金（事業展開等リスキリング支援コース）</strong>の対象となる場合があります。
                    ご希望の方には提携社労士をご紹介いたします（着手金無料）。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 開催概要 ─── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>Overview</SectionLabel>
            <SectionTitle>開催概要</SectionTitle>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "講座名", value: "D-Code Academy 第1期" },
                  { label: "日程", value: "2026年 6/7（日）、6/14（日）、6/21（日）、7/5（日）、7/12（日）" },
                  { label: "時間", value: "各回 10:00〜13:00（50分×3ブロック、休憩10分×2回）" },
                  { label: "形式", value: "Zoomによる完全オンライン開催（自宅から受講可能）" },
                  { label: "対象", value: "歯科医院の院長・スタッフ（プログラミング経験不要）" },
                  { label: "定員", value: "20〜30名（少人数制・TAによる個別サポート付き）" },
                  { label: "受講料", value: "¥350,000（税別）" },
                  { label: "必要なもの", value: "PC（ブラウザが使えればOK）・安定したインターネット回線" },
                  { label: "事前準備", value: "Claude Pro（$20/月）への加入（講座内で案内あり）" },
                ].map((row, i) => (
                  <tr key={row.label} className={i > 0 ? "border-t border-gray-100" : ""}>
                    <td className="py-4 px-6 font-bold text-surface-900 w-28 md:w-36 align-top bg-gray-50/50">{row.label}</td>
                    <td className="py-4 px-6 text-gray-600">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>FAQ</SectionLabel>
            <SectionTitle>よくあるご質問</SectionTitle>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "本当にプログラミング経験ゼロでも大丈夫ですか？",
                a: "はい、全く問題ありません。本講座ではプログラミング言語を一切書きません。AIに日本語で指示を出すだけでアプリが作れる「バイブコーディング」という手法を使います。ブラウザの基本操作ができれば、どなたでも受講いただけます。",
              },
              {
                q: "PCにソフトのインストールは必要ですか？",
                a: "一切不要です。全ての作業をブラウザ上で行います。Claude Code WEB版、GitHub、Vercel、Supabase、全てブラウザで完結します。必要なのはPC（Windows/Mac）と安定したインターネット環境だけです。",
              },
              {
                q: "スタッフに受講させたいのですが、院長も一緒に受ける必要がありますか？",
                a: "スタッフのみの受講でも全く問題ありません。ただ、院長も一緒に受講されると「どんなアプリが作れるか」の共通理解ができ、院内のDX推進がスムーズに進みます。多くの医院で院長・スタッフ一緒にご受講いただいています。",
              },
              {
                q: "日曜の午前中、3時間で本当にアプリが作れるのですか？",
                a: "はい。バイブコーディングの最大の特長は開発スピードです。AIがコードを自動生成するため、従来数日〜数週間かかっていた開発が数時間で完了します。Day 1で早速、自分のサイトがインターネットに公開される体験ができます。",
              },
              {
                q: "受講後のサポートはありますか？",
                a: "第1期受講者はD-Code Club メンバーシップが1年間無料です。月1回の勉強会・Q&Aセッション、卒業生コミュニティでの情報交換など、継続的なサポートがあります。開発したアプリをD-Code Storeに出品することも可能です。",
              },
              {
                q: "助成金は使えますか？",
                a: "雇用保険被保険者（スタッフ）の受講には、人材開発支援助成金（事業展開等リスキリング支援コース）が利用できる場合があります。ご希望の方には提携社労士（着手金無料、助成金額の15%・最低9万円）をご紹介いたします。なお、院長（事業主）は助成金の対象外です。",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 font-bold text-surface-900 text-left">
                  <span className="flex-1 pr-4">{item.q}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 申込セクション ─── */}
      <section id="apply" className="py-20 md:py-28 bg-gradient-to-b from-brand-50 to-white relative noise-bg">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <SectionLabel>Apply</SectionLabel>
            <SectionTitle>受講のお申し込み</SectionTitle>
            <p className="mt-4 text-gray-500">
              下記フォームに必要事項をご記入ください。折り返しご連絡いたします。
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">
            <form className="space-y-6">
              {/* 医院名 */}
              <div>
                <label className="block text-sm font-bold text-surface-900 mb-2">
                  医院名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="例：D-Code歯科クリニック"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>

              {/* お名前 */}
              <div>
                <label className="block text-sm font-bold text-surface-900 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="例：山田 太郎"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>

              {/* 役職 */}
              <div>
                <label className="block text-sm font-bold text-surface-900 mb-2">
                  役職 <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                >
                  <option value="">選択してください</option>
                  <option>院長</option>
                  <option>勤務医</option>
                  <option>歯科衛生士</option>
                  <option>歯科助手</option>
                  <option>受付・事務</option>
                  <option>その他</option>
                </select>
              </div>

              {/* メールアドレス */}
              <div>
                <label className="block text-sm font-bold text-surface-900 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>

              {/* 電話番号 */}
              <div>
                <label className="block text-sm font-bold text-surface-900 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  placeholder="090-1234-5678"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>

              {/* 受講人数 */}
              <div>
                <label className="block text-sm font-bold text-surface-900 mb-2">
                  受講予定人数
                </label>
                <select
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                >
                  <option value="">選択してください</option>
                  <option>1名</option>
                  <option>2名</option>
                  <option>3名以上</option>
                </select>
              </div>

              {/* 助成金 */}
              <div>
                <label className="block text-sm font-bold text-surface-900 mb-2">
                  助成金の利用を検討していますか？
                </label>
                <div className="flex gap-4">
                  {["はい", "いいえ", "詳しく聞きたい"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input type="radio" name="subsidy" value={opt} className="accent-brand-600" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* ご質問 */}
              <div>
                <label className="block text-sm font-bold text-surface-900 mb-2">
                  ご質問・ご要望（任意）
                </label>
                <textarea
                  rows={4}
                  placeholder="作りたいアプリのアイデアや、ご不明点があればお書きください"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-2xl text-lg cta-glow transition-all"
              >
                申し込みフォームを送信する
              </button>

              <p className="text-xs text-gray-400 text-center">
                送信後、2営業日以内にメールでご連絡いたします。
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ─── フッター ─── */}
      <footer className="bg-surface-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center">
              <span className="text-white font-black text-xs">D</span>
            </div>
            <span className="font-extrabold text-lg">D-Code Academy</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            株式会社ファンクション・ティ ／ 一般社団法人 日本歯科啓発・推進機構（JDAPO）
          </p>
          <p className="text-gray-500 text-xs">
            &copy; 2026 Function-T Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
