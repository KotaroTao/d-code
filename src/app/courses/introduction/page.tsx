import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "導入コース カリキュラム｜D-Code Academy",
  description:
    "D-Code Academy 導入コース（Vercel + Supabase）の全5日間カリキュラム詳細。プログラミング未経験から自分のWebアプリを公開するまでの研修内容を掲載。",
};

/* ------------------------------------------------------------------ */
/*  Shared UI                                                          */
/* ------------------------------------------------------------------ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-brand-400 mb-4">
      <span className="w-8 h-[2px] bg-brand-400 rounded-full" />
      {children}
    </span>
  );
}

function DayBadge({ day }: { day: number }) {
  return (
    <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-500/15 text-brand-400 font-extrabold text-lg shrink-0">
      Day {day}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface TimeSlot {
  time: string;
  label: string;
  type: "lecture" | "handson" | "presentation" | "break";
  details: string[];
}

interface DayData {
  day: number;
  title: string;
  subtitle: string;
  keyword: string;
  goal: string;
  homework: string;
  slots: TimeSlot[];
}

const DAYS: DayData[] = [
  {
    day: 1,
    title: "はじめの一歩",
    subtitle: "自分のサイトをインターネットに公開しよう",
    keyword: "公開体験",
    goal: "自己紹介サイトをVercelで公開できる",
    homework: "自己紹介ページに趣味・好きなものを追加",
    slots: [
      {
        time: "10:00 - 10:50",
        label: "講義",
        type: "lecture",
        details: [
          "バイブコーディングとは？ — 「コードを書く」から「AIに指示を出す」時代へ",
          "Claude Code 紹介 — ブラウザだけで開発できる仕組み",
          "ライブデモ — 講師がその場でサイトを作って公開",
        ],
      },
      {
        time: "10:50 - 11:00",
        label: "休憩",
        type: "break",
        details: [],
      },
      {
        time: "11:00 - 11:50",
        label: "ハンズオン",
        type: "handson",
        details: [
          "アカウント準備 — Claude Pro / GitHub / Vercel の登録",
          "Git基礎 — 「保存して送る」感覚でバージョン管理を体験",
          "自己紹介ページ作成 — Claude Codeに指示を出して自分のページを作る",
        ],
      },
      {
        time: "11:50 - 12:00",
        label: "休憩",
        type: "break",
        details: [],
      },
      {
        time: "12:00 - 12:50",
        label: "発表・振り返り",
        type: "presentation",
        details: [
          "Vercelデプロイ体験 — GitHubにpushするだけで自動公開！",
          "成果共有 — 全員のURL をチャットに投稿して見せ合う",
          "振り返り — 今日できたこと・感想を共有",
        ],
      },
    ],
  },
  {
    day: 2,
    title: "Webアプリの基本",
    subtitle: "ToDoアプリでプロンプトを磨こう",
    keyword: "プロンプト設計",
    goal: "ToDoアプリを作り、プロンプトの書き方を習得する",
    homework: "ToDoアプリに機能追加（カテゴリ分け、期限設定など）",
    slots: [
      {
        time: "10:00 - 10:50",
        label: "講義",
        type: "lecture",
        details: [
          "前回振り返り — 自己紹介ページの成果確認",
          "Web技術の基礎 — HTML（骨格）/ CSS（デザイン）/ JavaScript（動き）",
          "プロンプトエンジニアリング — 「良い指示」と「悪い指示」の違い",
          "CLAUDE.md 活用法 — プロジェクト専用の指示書を作る",
        ],
      },
      {
        time: "10:50 - 11:00",
        label: "休憩",
        type: "break",
        details: [],
      },
      {
        time: "11:00 - 11:50",
        label: "ハンズオン",
        type: "handson",
        details: [
          "Next.js / React 概要 — 「部品を組み合わせてページを作る」考え方",
          "ToDoアプリ作成 — 段階的にプロンプトで指示して機能を追加",
          "デザイン調整 — Tailwind CSSで見た目をカスタマイズ",
        ],
      },
      {
        time: "11:50 - 12:00",
        label: "休憩",
        type: "break",
        details: [],
      },
      {
        time: "12:00 - 12:50",
        label: "発表・振り返り",
        type: "presentation",
        details: [
          "オリジナル機能追加 — 自分だけの機能をプロンプトで指示して実装",
          "相互レビュー — ブレイクアウトルームで3〜4人ずつ作品を見せ合う",
          "振り返り — プロンプトの工夫ポイントを共有",
        ],
      },
    ],
  },
  {
    day: 3,
    title: "データベース連携",
    subtitle: "歯科向けアプリを作ろう",
    keyword: "データ永続化",
    goal: "Supabase連携で歯科向けCRUDアプリを作成できる",
    homework: "ログイン機能を追加（Supabase Auth）",
    slots: [
      {
        time: "10:00 - 10:50",
        label: "講義",
        type: "lecture",
        details: [
          "データベースとは？ — 「超高機能なエクセル」をイメージ",
          "Supabase 紹介 — ブラウザで使えるデータベース",
          "API の概念 — 「レストランの注文」に例えて理解する",
        ],
      },
      {
        time: "10:50 - 11:00",
        label: "休憩",
        type: "break",
        details: [],
      },
      {
        time: "11:00 - 11:50",
        label: "ハンズオン",
        type: "handson",
        details: [
          "Supabase セットアップ — プロジェクト作成・テーブル設計",
          "歯科アプリ開発 — お知らせ管理CRUD（作成・表示・更新・削除）",
          "環境変数設定 — APIキーを安全に管理する方法",
        ],
      },
      {
        time: "11:50 - 12:00",
        label: "休憩",
        type: "break",
        details: [],
      },
      {
        time: "12:00 - 12:50",
        label: "発表・振り返り",
        type: "presentation",
        details: [
          "デプロイ確認 — Vercel上でSupabase連携が動くことを確認",
          "Supabase停止防止設定 — GitHub Actionsで自動pingを設定（ブラウザで完結）",
          "歯科アプリアイデア共有 — 自院で欲しいアプリを発表",
          "振り返り — データベースの理解度を確認",
        ],
      },
    ],
  },
  {
    day: 4,
    title: "オリジナルアプリ開発",
    subtitle: "自院の課題を解決する",
    keyword: "企画 → 実装",
    goal: "自院の課題を解決するオリジナルアプリの主要機能を実装できる",
    homework: "主要機能を完成させる",
    slots: [
      {
        time: "10:00 - 10:50",
        label: "講義",
        type: "lecture",
        details: [
          "前回振り返り — 歯科アプリの成果確認",
          "アプリ企画フレームワーク — 「誰の・何を・どう解決？」で整理",
          "企画ワークショップ — 自院の課題をブレイクアウトルームで議論",
          "設計ドキュメント作成 — CLAUDE.mdにアプリ仕様をまとめる",
        ],
      },
      {
        time: "10:50 - 11:00",
        label: "休憩",
        type: "break",
        details: [],
      },
      {
        time: "11:00 - 11:50",
        label: "ハンズオン",
        type: "handson",
        details: [
          "開発Tips — エラーが出たときの対処法・Claude Codeへの相談の仕方",
          "オリジナルアプリ開発 — 各自のアプリをClaude Codeで開発（講師が巡回サポート）",
        ],
      },
      {
        time: "11:50 - 12:00",
        label: "休憩",
        type: "break",
        details: [],
      },
      {
        time: "12:00 - 12:50",
        label: "発表・振り返り",
        type: "presentation",
        details: [
          "開発続き — 追い込みタイム",
          "中間発表 — URL共有して進捗をお互いに確認",
          "振り返り — 残りのタスクを整理して次回に備える",
        ],
      },
    ],
  },
  {
    day: 5,
    title: "仕上げ・公開・成果発表会",
    subtitle: "作品を仕上げてプレゼン",
    keyword: "発表 & 卒業",
    goal: "アプリを完成させ、成果発表会でプレゼンする",
    homework: "",
    slots: [
      {
        time: "10:00 - 10:50",
        label: "講義",
        type: "lecture",
        details: [
          "ゴール確認 — 発表会に向けた最終チェックリスト",
          "UI/UX 改善ポイント — 使いやすさを高める3つのコツ",
          "独自ドメイン設定 — Vercelで自分のURLを持つ方法",
          "発表準備のコツ — 3分で伝わるプレゼンの型",
        ],
      },
      {
        time: "10:50 - 11:00",
        label: "休憩",
        type: "break",
        details: [],
      },
      {
        time: "11:00 - 11:50",
        label: "ハンズオン",
        type: "handson",
        details: [
          "最終開発タイム — バグ修正・UI調整・機能追加のラストスパート",
          "発表準備 — スライドやデモの流れを整理",
        ],
      },
      {
        time: "11:50 - 12:00",
        label: "休憩",
        type: "break",
        details: [],
      },
      {
        time: "12:00 - 12:50",
        label: "成果発表会",
        type: "presentation",
        details: [
          "成果発表会 — 1人3分で自分のアプリをプレゼン",
          "表彰 — 技術賞・デザイン賞・アイデア賞",
          "クロージング — D-Code Club案内・本格運用コース案内・修了証授与",
        ],
      },
    ],
  },
];

const SLOT_STYLES: Record<TimeSlot["type"], { bg: string; text: string; tag: string }> = {
  lecture: {
    bg: "bg-brand-500/8",
    text: "text-brand-400",
    tag: "bg-brand-500/15 text-brand-400",
  },
  handson: {
    bg: "bg-accent-500/8",
    text: "text-accent-400",
    tag: "bg-accent-500/15 text-accent-400",
  },
  presentation: {
    bg: "bg-purple-500/8",
    text: "text-purple-400",
    tag: "bg-purple-500/15 text-purple-400",
  },
  break: {
    bg: "bg-white/[0.02]",
    text: "text-gray-500",
    tag: "bg-white/[0.05] text-gray-500",
  },
};

const TECH_STACK = [
  { name: "Claude Code WEB版", desc: "AI開発環境" },
  { name: "Next.js / React", desc: "フレームワーク" },
  { name: "Tailwind CSS", desc: "スタイリング" },
  { name: "Vercel", desc: "デプロイ" },
  { name: "Supabase", desc: "DB / 認証" },
  { name: "GitHub", desc: "ソース管理" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function IntroductionCoursePage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200">
      {/* ── Header ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0d1117]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-white">
            D-Code<span className="text-brand-400">.</span>
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            コース一覧に戻る
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/50 via-[#0d1117] to-[#0d1117]" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6">
          <SectionLabel>introduction course</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            導入コース
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Vercel + Supabase で「AIでアプリが作れた！」を体験する5日間
          </p>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            プログラミング完全未経験者が、Claude
            Codeを使って自分のWebアプリを開発・公開するまでを体験します。
            ブラウザだけで完結する手軽な環境で、毎回デプロイして「動いている！」実感を持ちながら進めます。
          </p>
        </div>
      </section>

      {/* ── Course Overview ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>overview</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">コース概要</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Info Cards */}
            {[
              { label: "対象者", value: "プログラミング完全未経験の歯科医療従事者" },
              { label: "ゴール", value: "自院の課題を解決するWebアプリを開発・公開する" },
              { label: "期間", value: "全5回 ／ 毎週日曜 10:00 - 12:50（170分）" },
              { label: "形式", value: "Zoomオンライン（ブレイクアウトルームでTAサポート）" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6"
              >
                <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                  {item.label}
                </span>
                <p className="text-white font-semibold mt-2">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider mb-4">
            使用技術（全日程共通）
          </h3>
          <div className="flex flex-wrap gap-3 mb-12">
            {TECH_STACK.map((t) => (
              <div
                key={t.name}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 flex flex-col"
              >
                <span className="text-white text-sm font-bold">{t.name}</span>
                <span className="text-gray-500 text-xs mt-0.5">{t.desc}</span>
              </div>
            ))}
          </div>

          {/* Daily Structure */}
          <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider mb-4">
            1日の基本構成
          </h3>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8 overflow-x-auto">
            <div className="flex items-center gap-0 min-w-[640px]">
              {/* Block 1 */}
              <div className="flex-1 bg-brand-500/10 border border-brand-500/20 rounded-xl p-4 text-center">
                <p className="text-brand-400 font-bold text-sm">講義</p>
                <p className="text-gray-400 text-xs mt-1">50分</p>
              </div>
              <div className="w-8 flex flex-col items-center">
                <div className="w-[2px] h-4 bg-gray-700" />
                <span className="text-[10px] text-gray-600 my-1">10分</span>
                <div className="w-[2px] h-4 bg-gray-700" />
              </div>
              {/* Block 2 */}
              <div className="flex-1 bg-accent-500/10 border border-accent-500/20 rounded-xl p-4 text-center">
                <p className="text-accent-400 font-bold text-sm">ハンズオン</p>
                <p className="text-gray-400 text-xs mt-1">50分</p>
              </div>
              <div className="w-8 flex flex-col items-center">
                <div className="w-[2px] h-4 bg-gray-700" />
                <span className="text-[10px] text-gray-600 my-1">10分</span>
                <div className="w-[2px] h-4 bg-gray-700" />
              </div>
              {/* Block 3 */}
              <div className="flex-1 bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 text-center">
                <p className="text-purple-400 font-bold text-sm">発表・振り返り</p>
                <p className="text-gray-400 text-xs mt-1">50分</p>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">
              10:00 開始 → 12:50 終了（170分 = 50分 × 3ブロック + 休憩10分 × 2）
            </p>
          </div>
        </div>
      </section>

      {/* ── Curriculum (5 Days) ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>curriculum</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-10">全5日間カリキュラム</h2>

          <div className="space-y-6">
            {DAYS.map((day) => (
              <details
                key={day.day}
                className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden"
                open={day.day === 1}
              >
                {/* Summary (always visible) */}
                <summary className="cursor-pointer list-none p-6 md:p-8 flex items-center gap-5 hover:bg-white/[0.02] transition-colors">
                  <DayBadge day={day.day} />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-extrabold text-white">
                      {day.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-0.5">{day.subtitle}</p>
                  </div>
                  {/* Chevron */}
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>

                {/* Expandable Content */}
                <div className="border-t border-white/[0.06] p-6 md:p-8">
                  {/* Timetable */}
                  <div className="space-y-2">
                    {day.slots.map((slot, idx) => {
                      const style = SLOT_STYLES[slot.type];
                      const isEven = idx % 2 === 0;
                      return (
                        <div
                          key={slot.time}
                          className={`rounded-xl p-4 md:p-5 ${
                            slot.type === "break"
                              ? "py-2 md:py-3"
                              : isEven
                                ? "bg-white/[0.02]"
                                : "bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex flex-wrap items-center gap-3 mb-1">
                            <code className="text-xs text-gray-500 font-mono tracking-wide">
                              {slot.time}
                            </code>
                            <span
                              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${style.tag}`}
                            >
                              {slot.label}
                            </span>
                          </div>

                          {slot.details.length > 0 && (
                            <ul className="mt-2 space-y-1.5 pl-1">
                              {slot.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                                    slot.type === "lecture"
                                      ? "bg-brand-400"
                                      : slot.type === "handson"
                                        ? "bg-accent-400"
                                        : "bg-purple-400"
                                  }`} />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Homework */}
                  {day.homework && (
                    <div className="mt-6 bg-brand-500/5 border border-brand-500/15 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          className="w-4 h-4 text-brand-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span className="text-sm font-bold text-brand-400">次回までの課題</span>
                      </div>
                      <p className="text-sm text-gray-300">{day.homework}</p>
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Goal Summary Table ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>goals</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">全体到達目標サマリー</h2>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[80px_1fr_2fr] md:grid-cols-[100px_160px_1fr] bg-white/[0.04] border-b border-white/[0.06] px-6 py-4">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">Day</span>
              <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                キーワード
              </span>
              <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                到達目標
              </span>
            </div>

            {/* Table Rows */}
            {DAYS.map((day, idx) => (
              <div
                key={day.day}
                className={`grid grid-cols-[80px_1fr_2fr] md:grid-cols-[100px_160px_1fr] px-6 py-4 ${
                  idx % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"
                } ${idx < DAYS.length - 1 ? "border-b border-white/[0.04]" : ""}`}
              >
                <span className="text-brand-400 font-bold text-sm">Day {day.day}</span>
                <span className="text-gray-300 text-sm">{day.keyword}</span>
                <span className="text-gray-400 text-sm">{day.goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: Advanced Course ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 md:p-12 text-center">
            <SectionLabel>next step</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              本格運用コース
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              導入コース修了後、Google Cloud上で本番運用レベルのアプリを構築する
              「本格運用コース」に進むことができます。
              Cloud Run、Cloud SQL、Firebase Authを使い、スケーラブルで安全なアプリ運用を学びます。
            </p>
            <Link
              href="/courses/advanced"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-bold py-3 px-8 rounded-xl transition-all"
            >
              本格運用コースを見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
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
