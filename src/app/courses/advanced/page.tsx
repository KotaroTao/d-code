import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "本格運用コース（Google Cloud）｜D-Code Academy",
  description:
    "導入コース修了者を対象に、Google Cloud上で本番運用レベルのアプリを構築。Cloud Run、Cloud SQL、Firebase Auth、CI/CDパイプラインを学ぶ全5回の実践講座。",
};

/* ─── Shared Components ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-brand-400 mb-4">
      <span className="w-8 h-[2px] bg-brand-400 rounded-full" />
      {children}
    </span>
  );
}

function ChevronIcon({ open }: { open?: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-brand-400 transition-transform ${open ? "rotate-90" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function TimeSlot({
  time,
  label,
  variant,
}: {
  time: string;
  label: string;
  variant: "lecture" | "hands-on" | "presentation" | "break";
}) {
  const styles = {
    lecture: "bg-brand-500/10 text-brand-400 border-brand-500/20",
    "hands-on": "bg-accent-500/10 text-accent-400 border-accent-500/20",
    presentation: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    break: "bg-white/[0.03] text-gray-500 border-white/[0.04]",
  };
  return (
    <div className={`flex items-center gap-4 px-4 py-3 rounded-lg border ${styles[variant]}`}>
      <span className="text-xs font-mono w-28 shrink-0">{time}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

/* ─── Day Data ─── */

interface DayContent {
  day: number;
  title: string;
  subtitle: string;
  color: string;
  lecture: string[];
  handsOn: string[];
  presentation: string[];
  homework: string;
}

const days: DayContent[] = [
  {
    day: 1,
    title: "Google Cloudの世界へ",
    subtitle: "クラウドインフラの基礎",
    color: "brand",
    lecture: [
      "オリエンテーション（自己紹介・講座ゴール・進め方）",
      "クラウドとは？ — オンプレミス vs クラウドの違い",
      "AWS / Azure / GCP 比較 — なぜGCPを選ぶのか",
      "GCP主要サービス概要 — Cloud Run / Cloud SQL / Cloud Storage / Firebase Auth / Cloud Monitoring",
      "Vercel vs Cloud Run — 「家具付きマンション vs 注文住宅」のたとえ",
    ],
    handsOn: [
      "GCPアカウント作成（無料トライアル $300クレジット）",
      "課金アラート設定（予算超過防止）",
      "Cloud Run 基本 — Hello World アプリをデプロイ",
      "導入コースで作ったアプリを Cloud Run にデプロイ（Dockerfile作成）",
    ],
    presentation: [
      "デプロイ結果を共有",
      "Vercel vs GCP ディスカッション（ブレイクアウトルーム）",
      "振り返り・質疑応答",
    ],
    homework: "GCPコンソールを探索し、興味のあるサービスを3つメモする",
  },
  {
    day: 2,
    title: "データベースと認証",
    subtitle: "Cloud SQL と Firebase Auth",
    color: "accent",
    lecture: [
      "前回の振り返り・質問タイム",
      "Cloud SQL とは — Supabase DB との比較",
      "Firebase Auth とは — Supabase Auth との比較",
      "セキュリティの基本 — 患者情報の重要性",
      "暗号化 / アクセス制御 / 監査ログ",
    ],
    handsOn: [
      "Cloud SQL インスタンス作成（PostgreSQL）",
      "アプリと Cloud SQL を連携",
      "Firebase Auth 導入 — ログイン画面の実装",
    ],
    presentation: [
      "動作確認 — 認証フローのテスト",
      "セキュリティディスカッション — 患者データの取り扱い",
      "振り返り・質疑応答",
    ],
    homework: "パスワードリセット機能を追加する",
  },
  {
    day: 3,
    title: "ストレージとAPI",
    subtitle: "本格的なバックエンド構築",
    color: "brand",
    lecture: [
      "前回の振り返り・質問タイム",
      "Cloud Storage — バケット / オブジェクト / 権限設定",
      "API設計の基本 — REST / エンドポイント設計",
      "Cloud Functions 紹介 — サーバーレスとは",
    ],
    handsOn: [
      "Cloud Storage 連携 — 患者写真のアップロード機能",
      "API設計・実装",
      "Cloud Function 作成 — 画像リサイズなどの自動処理",
    ],
    presentation: [
      "デプロイ・動作確認",
      "API設計レビュー（ブレイクアウトルーム）",
      "振り返り・質疑応答",
    ],
    homework: "ファイルアップロード機能を追加・改善する",
  },
  {
    day: 4,
    title: "本番移行とCI/CD",
    subtitle: "開発フローの自動化",
    color: "accent",
    lecture: [
      "前回の振り返り・質問タイム",
      "CI/CD とは — 「工場のベルトコンベア」のたとえ",
      "環境分離 — 開発 / ステージング / 本番",
      "Secret Manager — 秘密情報の安全な管理",
      "ドメイン・SSL設定",
    ],
    handsOn: [
      "GitHub Actions 設定 — Cloud Run への自動デプロイ",
      "自動デプロイを体験",
      "本番環境構築 — Secret Manager 設定",
    ],
    presentation: [
      "アーキテクチャ図を作成",
      "運用計画ディスカッション — バックアップ / 障害対応 / コスト管理",
      "振り返り・質疑応答",
    ],
    homework: "CI/CD の動作確認 + アプリの最終仕上げ",
  },
  {
    day: 5,
    title: "監視・運用・成果発表会",
    subtitle: "運用体制の構築と卒業",
    color: "brand",
    lecture: [
      "最終日のゴール確認",
      "Cloud Monitoring — アプリの健康診断",
      "Cloud Logging — アプリの日記帳",
      "コスト管理・最適化のベストプラクティス",
    ],
    handsOn: [
      "Monitoring 設定 — ダッシュボード・アラート作成",
      "バックアップ設定 — Cloud SQL 自動バックアップ",
      "最終仕上げ・発表準備",
    ],
    presentation: [
      "成果発表会（1人5分：アプリデモ + アーキテクチャ紹介）",
      "表彰 — アーキテクチャ賞・実用性賞・プレゼン賞",
      "クロージング — D-Code Club案内 / Store出品 / GCP認定資格紹介 / 修了証授与",
    ],
    homework: "",
  },
];

/* ─── Page ─── */

export default function AdvancedCoursePage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200">
      {/* ── Header ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0d1117]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-extrabold tracking-tight text-white">
            D-Code<span className="text-brand-400">.</span>
          </a>
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
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6">
          <SectionLabel>advanced course</SectionLabel>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-accent-500/10 text-accent-400 text-xs font-bold px-3 py-1 rounded-full">
              中級者向け
            </span>
            <span className="text-gray-500 text-xs">導入コース修了者対象</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            本格運用コース
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            「作れた」から「運用できる」へ &mdash; Google Cloud で本格展開
          </p>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            導入コースで身につけた「AIでアプリを作る力」を、Google Cloud上で本番運用レベルに引き上げます。
            Cloud Run、Cloud SQL、Firebase Auth、CI/CDパイプラインを使い、スケーラブルで安全なアプリ運用を5日間で学びます。
          </p>
        </div>
      </section>

      {/* ── Prerequisite ── */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-brand-500/5 border border-brand-500/20 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-white mb-3">受講前提</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#10003;</span>
                D-Code Academy 導入コース（Vercel + Supabase）を修了していること
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#10003;</span>
                Claude Code でアプリを作成・デプロイした経験があること
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#10003;</span>
                Google アカウントを持っていること（GCPの無料トライアルに必要）
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Course Comparison ── */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>comparison</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">
            導入コースとの比較
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">項目</th>
                  <th className="text-left py-3 px-4 text-brand-400 font-bold">導入コース</th>
                  <th className="text-left py-3 px-4 text-accent-400 font-bold">本格運用コース</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {[
                  ["対象者", "完全未経験者", "導入コース修了者"],
                  ["テーマ", "「作れた！」体験", "「運用できる」実力"],
                  ["デプロイ先", "Vercel（Hobby無料）", "Cloud Run（GCP）"],
                  ["データベース", "Supabase", "Cloud SQL（PostgreSQL）"],
                  ["認証", "Supabase Auth", "Firebase Auth"],
                  ["ストレージ", "（なし）", "Cloud Storage"],
                  ["CI/CD", "Vercel 自動デプロイ", "GitHub Actions + Cloud Run"],
                  ["監視", "（なし）", "Cloud Monitoring / Logging"],
                  ["コスト管理", "無料枠内", "GCP課金管理・最適化"],
                  ["セキュリティ", "基本レベル", "Secret Manager / 暗号化 / 監査ログ"],
                ].map(([item, intro, advanced]) => (
                  <tr key={item} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-gray-400 font-medium">{item}</td>
                    <td className="py-3 px-4 text-gray-300">{intro}</td>
                    <td className="py-3 px-4 text-gray-300">{advanced}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Tech Stack Migration ── */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>tech stack</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">
            技術スタックの移行
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { from: "Vercel", to: "Cloud Run", desc: "デプロイ・ホスティング" },
              { from: "Supabase DB", to: "Cloud SQL", desc: "データベース" },
              { from: "Supabase Auth", to: "Firebase Auth", desc: "認証" },
              { from: "（なし）", to: "Cloud Storage", desc: "ファイルストレージ" },
              { from: "Vercel自動", to: "GitHub Actions", desc: "CI/CD" },
              { from: "（なし）", to: "Cloud Monitoring", desc: "監視・ログ" },
            ].map((item) => (
              <div
                key={item.desc}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5"
              >
                <p className="text-xs text-gray-500 mb-2">{item.desc}</p>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-brand-400 font-medium">{item.from}</span>
                  <svg className="w-4 h-4 text-gray-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-sm text-accent-400 font-bold">{item.to}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>curriculum</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            全5日間カリキュラム
          </h2>
          <p className="text-gray-400 text-sm mb-2">
            毎週日曜 10:00 - 12:50（50分 x 3ブロック、10分休憩 x 2回）
          </p>
          <p className="text-gray-500 text-xs mb-12">
            各Dayのセクションをクリックすると、詳細なタイムテーブルが表示されます。
          </p>

          <div className="space-y-6">
            {days.map((d) => (
              <details
                key={d.day}
                className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center gap-4 p-6 md:p-8 cursor-pointer select-none hover:bg-white/[0.02] transition-colors">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-extrabold shrink-0 ${
                      d.day % 2 === 1
                        ? "bg-brand-500/10 text-brand-400"
                        : "bg-accent-500/10 text-accent-400"
                    }`}
                  >
                    {d.day}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-0.5">Day {d.day}</p>
                    <h3 className="text-lg md:text-xl font-bold text-white truncate">
                      {d.title}
                    </h3>
                    <p className="text-sm text-gray-400">{d.subtitle}</p>
                  </div>
                  <span className="transition-transform group-open:rotate-90">
                    <ChevronIcon />
                  </span>
                </summary>

                <div className="px-6 md:px-8 pb-8 border-t border-white/[0.04]">
                  {/* Timetable */}
                  <div className="mt-6 space-y-2">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                      タイムテーブル
                    </h4>
                    <TimeSlot time="10:00 - 10:50" label="講義（50分）" variant="lecture" />
                    <TimeSlot time="10:50 - 11:00" label="休憩（10分）" variant="break" />
                    <TimeSlot time="11:00 - 11:50" label="ハンズオン（50分）" variant="hands-on" />
                    <TimeSlot time="11:50 - 12:00" label="休憩（10分）" variant="break" />
                    <TimeSlot time="12:00 - 12:50" label="発表・ディスカッション（50分）" variant="presentation" />
                  </div>

                  {/* Lecture */}
                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-brand-400" />
                      <h4 className="text-sm font-bold text-brand-400">
                        講義（10:00 - 10:50）
                      </h4>
                    </div>
                    <ul className="space-y-2 pl-4">
                      {d.lecture.map((item, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-gray-600 mt-1 text-xs">&#9656;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hands-on */}
                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-accent-400" />
                      <h4 className="text-sm font-bold text-accent-400">
                        ハンズオン（11:00 - 11:50）
                      </h4>
                    </div>
                    <ul className="space-y-2 pl-4">
                      {d.handsOn.map((item, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-gray-600 mt-1 text-xs">&#9656;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Presentation */}
                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      <h4 className="text-sm font-bold text-purple-400">
                        発表・ディスカッション（12:00 - 12:50）
                      </h4>
                    </div>
                    <ul className="space-y-2 pl-4">
                      {d.presentation.map((item, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-gray-600 mt-1 text-xs">&#9656;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Homework */}
                  {d.homework && (
                    <div className="mt-6 bg-white/[0.03] border border-white/[0.04] rounded-xl p-4">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        次回までの課題
                      </h4>
                      <p className="text-sm text-gray-300">{d.homework}</p>
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Goals Summary ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>goals</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">
            全体到達目標サマリー
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">Day</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">テーマ</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">到達目標</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {[
                  ["Day 1", "GCPの世界へ", "GCPアカウント作成、Cloud Run にアプリをデプロイできる"],
                  ["Day 2", "DB と認証", "Cloud SQL + Firebase Auth でセキュアなアプリを構築できる"],
                  ["Day 3", "ストレージ と API", "Cloud Storage連携とAPI設計ができる"],
                  ["Day 4", "CI/CD", "GitHub Actions で自動デプロイパイプラインを構築できる"],
                  ["Day 5", "監視・運用", "本番運用に必要な監視・バックアップ体制を構築できる"],
                ].map(([day, theme, goal]) => (
                  <tr key={day} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-brand-400 font-bold whitespace-nowrap">{day}</td>
                    <td className="py-3 px-4 text-white font-medium whitespace-nowrap">{theme}</td>
                    <td className="py-3 px-4 text-gray-300">{goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── GCP Cost Estimate ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>cost</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            GCPコスト目安
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            受講中は Google Cloud 無料トライアル（$300クレジット・90日間）で十分カバーできます。
            講座後に本番運用する場合の月額目安は以下の通りです。
          </p>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                  <th className="text-left py-3 px-6 text-gray-500 font-medium">サービス</th>
                  <th className="text-left py-3 px-6 text-gray-500 font-medium">構成</th>
                  <th className="text-right py-3 px-6 text-gray-500 font-medium">月額目安</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {[
                  ["Cloud Run", "最小インスタンス x 1", "$0 ~ $5"],
                  ["Cloud SQL", "db-f1-micro（共有CPU）", "~$10"],
                  ["Cloud Storage", "5GB以下", "~$0.10"],
                  ["Firebase Auth", "50,000 MAU 以下", "$0（無料）"],
                  ["Cloud Monitoring", "基本機能", "$0（無料枠内）"],
                  ["合計（小規模運用）", "", "$10 ~ $15/月"],
                ].map(([service, config, cost]) => (
                  <tr key={service} className={`hover:bg-white/[0.02] transition-colors ${service.includes("合計") ? "bg-white/[0.02] font-bold" : ""}`}>
                    <td className={`py-3 px-6 ${service.includes("合計") ? "text-white" : "text-gray-300"}`}>
                      {service}
                    </td>
                    <td className="py-3 px-6 text-gray-500">{config}</td>
                    <td className={`py-3 px-6 text-right ${service.includes("合計") ? "text-accent-400" : "text-gray-300"}`}>
                      {cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-xs mt-4">
            ※ 料金は2026年3月時点の概算です。実際の料金はリージョン・使用量により変動します。
            Always Free 枠も活用することで、小規模運用なら月額 $15 以下に収まります。
          </p>
        </div>
      </section>

      {/* ── Migration Path ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>migration path</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            導入コースからの移行パス
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            導入コースで作ったアプリを、本格運用コースでGoogle Cloudに移行します。
            Day 1 で実際に移行を体験するため、導入コースの成果物がそのまま教材になります。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">ステップ</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">作業内容</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">実施Day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {[
                  ["1. コンテナ化", "Dockerfile 作成、Cloud Run デプロイ", "Day 1"],
                  ["2. DB 移行", "Supabase → Cloud SQL（PostgreSQL）", "Day 2"],
                  ["3. 認証 移行", "Supabase Auth → Firebase Auth", "Day 2"],
                  ["4. ストレージ追加", "Cloud Storage で画像管理", "Day 3"],
                  ["5. API 整備", "REST API 設計・Cloud Functions", "Day 3"],
                  ["6. CI/CD 構築", "GitHub Actions で自動デプロイ", "Day 4"],
                  ["7. 本番環境", "Secret Manager / ドメイン / SSL", "Day 4"],
                  ["8. 運用体制", "監視 / ログ / バックアップ / コスト管理", "Day 5"],
                ].map(([step, work, day]) => (
                  <tr key={step} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-white font-medium whitespace-nowrap">{step}</td>
                    <td className="py-3 px-4 text-gray-300">{work}</td>
                    <td className="py-3 px-4 text-brand-400 font-bold whitespace-nowrap">{day}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            まずは導入コースから
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            本格運用コースは導入コースの修了が前提です。
            プログラミング未経験の方は、まず導入コースで「AIでアプリを作る」体験から始めましょう。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/courses/introduction"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-bold py-3 px-8 rounded-xl transition-all"
            >
              導入コースを見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.08] text-gray-300 font-bold py-3 px-8 rounded-xl border border-white/[0.06] transition-all"
            >
              コース一覧に戻る
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">&copy; 2026 D-Code Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
