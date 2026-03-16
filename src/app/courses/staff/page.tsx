import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サポート人員・スキル要件一覧｜D-Code Academy",
  description:
    "D-Code Academyの各コースに必要な人員体制、ポジション別スキル要件、スキルマトリクス、報酬サマリーをまとめた資料ページです。",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-brand-400 mb-4">
      <span className="w-8 h-[2px] bg-brand-400 rounded-full" />
      {children}
    </span>
  );
}

/* ─── Data ─── */

const staffStructure = [
  { role: "メイン講師", intro: "1", advanced: "1", total: "2" },
  { role: "サポート講師（TA）", intro: "3-4", advanced: "2-3", total: "5-7" },
  { role: "運営スタッフ", intro: "1-2（兼任可）", advanced: "—", total: "1-2" },
];

const positions = [
  {
    id: "intro-instructor",
    label: "A",
    title: "導入コース メイン講師",
    course: "導入コース",
    roleDesc: "講義進行、ライブデモ、ファシリテーション",
    required: [
      "Claude Code WEB版 熟練",
      "Next.js / React 実務経験",
      "Vercel + Supabase 運用経験",
      "初心者向けの説明力（専門用語を噛み砕ける）",
      "Zoom 講義経験",
    ],
    niceToHave: ["教育企画・カリキュラム設計経験", "歯科業界の知識", "UI/UX デザインの素養"],
    notRequired: null,
    hours: "~50h / コホート",
    pay: "¥400,000 - 500,000",
  },
  {
    id: "advanced-instructor",
    label: "B",
    title: "本格運用コース メイン講師",
    course: "本格運用コース",
    roleDesc: "GCP 講義、アーキテクチャガイド",
    required: [
      "Claude Code 日常使用",
      "GCP 実務経験（Cloud Run / Cloud SQL / Firebase Auth 3年以上）",
      "CI/CD パイプライン構築経験",
      "インフラ設計・運用の実務",
      "技術指導・メンタリング経験",
    ],
    niceToHave: [
      "GCP 認定資格（Associate Cloud Engineer 以上）",
      "Docker の深い理解",
      "セキュリティ設計の知見",
      "歯科業界の知識",
    ],
    notRequired: null,
    hours: "~55h / コホート",
    pay: "¥500,000 - 600,000",
  },
  {
    id: "intro-ta",
    label: "C",
    title: "導入コース TA",
    course: "導入コース",
    roleDesc: "受講者のハンズオンサポート、ブレイクアウトルーム対応",
    required: [
      "Claude Code 日常使用",
      "Next.js / React の基本理解",
      "日本語コミュニケーション",
      "日曜 5週連続で参加可能",
    ],
    niceToHave: null,
    notRequired: ["高度なプログラミングスキル", "講師経験"],
    hours: "~45h / コホート",
    pay: "¥225,000",
  },
  {
    id: "advanced-ta",
    label: "D",
    title: "本格運用コース TA",
    course: "本格運用コース",
    roleDesc: "受講者のハンズオンサポート、GCP 環境トラブルシュート",
    required: [
      "Claude Code 日常使用",
      "GCP 使用経験（Cloud Run or Cloud SQL の基本操作）",
      "Docker の基本理解",
      "GitHub Actions の基本理解",
      "日曜 5週連続で参加可能",
    ],
    niceToHave: [
      "GCP 本番運用経験",
      "CI/CD パイプライン構築経験",
      "Firebase Auth 使用経験",
      "インフラ系資格",
    ],
    notRequired: null,
    hours: "~50h / コホート",
    pay: "¥275,000",
  },
  {
    id: "ops",
    label: "E",
    title: "運営スタッフ",
    course: "共通",
    roleDesc: "Zoom 運営、受講者対応、進行サポート",
    required: [
      "Zoom 操作（ブレイクアウトルーム設定・管理）",
      "基本的な PC リテラシー",
      "コミュニケーション力",
    ],
    niceToHave: null,
    notRequired: null,
    hours: "~25h / コホート",
    pay: "¥100,000",
  },
];

type SkillRow = { skill: string; instructor: string; ta: string };

const introSkills: SkillRow[] = [
  { skill: "Claude Code WEB版", instructor: "★★★", ta: "★★☆" },
  { skill: "Next.js / React", instructor: "★★★", ta: "★★☆" },
  { skill: "Vercel", instructor: "★★★", ta: "★☆☆" },
  { skill: "Supabase", instructor: "★★★", ta: "★☆☆" },
  { skill: "Tailwind CSS", instructor: "★★☆", ta: "★☆☆" },
  { skill: "GitHub", instructor: "★★☆", ta: "★☆☆" },
  { skill: "教育指導力", instructor: "★★★", ta: "★★☆" },
  { skill: "Zoom 運営", instructor: "★☆☆", ta: "★☆☆" },
  { skill: "歯科知識", instructor: "★☆☆", ta: "—" },
];

const advancedSkills: SkillRow[] = [
  { skill: "Claude Code", instructor: "★★★", ta: "★★☆" },
  { skill: "GCP 全体", instructor: "★★★", ta: "★★☆" },
  { skill: "Cloud Run", instructor: "★★★", ta: "★★☆" },
  { skill: "Cloud SQL", instructor: "★★★", ta: "★★☆" },
  { skill: "Firebase Auth", instructor: "★★★", ta: "★☆☆" },
  { skill: "Cloud Storage", instructor: "★★☆", ta: "★☆☆" },
  { skill: "Cloud Monitoring", instructor: "★★☆", ta: "★☆☆" },
  { skill: "Docker", instructor: "★★★", ta: "★★☆" },
  { skill: "CI/CD", instructor: "★★★", ta: "★☆☆" },
  { skill: "Next.js / React", instructor: "★★☆", ta: "★★☆" },
  { skill: "セキュリティ", instructor: "★★★", ta: "★☆☆" },
  { skill: "教育指導力", instructor: "★★★", ta: "★★☆" },
  { skill: "Zoom 運営", instructor: "★☆☆", ta: "★☆☆" },
];

const compensationSummary = [
  { position: "導入コース メイン講師", hours: "~50h", pay: "¥400,000 - 500,000" },
  { position: "本格運用コース メイン講師", hours: "~55h", pay: "¥500,000 - 600,000" },
  { position: "導入コース TA", hours: "~45h", pay: "¥225,000" },
  { position: "本格運用コース TA", hours: "~50h", pay: "¥275,000" },
  { position: "運営スタッフ", hours: "~25h", pay: "¥100,000" },
];

/* ─── Component ─── */

export default function StaffPage() {
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
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
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
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <SectionLabel>staff requirements</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            サポート人員・スキル要件一覧
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            D-Code Academy の各コースを運営するために必要な人員体制、ポジション別のスキル要件、報酬をまとめています。
          </p>
        </div>
      </section>

      {/* ── 1. 人員体制 ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>01 — staff structure</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">人員体制</h2>
          <p className="text-gray-400 mb-8 text-sm">1コホート（20〜30名）あたりの必要人員</p>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left px-6 py-4 text-gray-500 font-medium">ポジション</th>
                    <th className="text-center px-6 py-4 text-gray-500 font-medium">導入コース</th>
                    <th className="text-center px-6 py-4 text-gray-500 font-medium">本格運用コース</th>
                    <th className="text-center px-6 py-4 text-brand-400 font-bold">合計</th>
                  </tr>
                </thead>
                <tbody>
                  {staffStructure.map((row) => (
                    <tr key={row.role} className="border-b border-white/[0.04] last:border-none">
                      <td className="px-6 py-4 text-white font-medium">{row.role}</td>
                      <td className="px-6 py-4 text-center text-gray-300">{row.intro}</td>
                      <td className="px-6 py-4 text-center text-gray-300">{row.advanced}</td>
                      <td className="px-6 py-4 text-center text-brand-400 font-bold">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-white/[0.08] bg-white/[0.02]">
                    <td className="px-6 py-4 text-white font-bold">合計</td>
                    <td className="px-6 py-4 text-center text-gray-400">5-7</td>
                    <td className="px-6 py-4 text-center text-gray-400">3-4</td>
                    <td className="px-6 py-4 text-center text-brand-400 font-extrabold text-lg">8-11名</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ポジション別詳細 ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>02 — position details</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-10">ポジション別詳細</h2>

          <div className="space-y-8">
            {positions.map((p) => (
              <div
                key={p.id}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden"
              >
                {/* Card Header */}
                <div className="px-8 py-6 border-b border-white/[0.06] flex flex-wrap items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 font-extrabold flex items-center justify-center text-lg">
                    {p.label}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-extrabold text-white">{p.title}</h3>
                    <p className="text-gray-500 text-sm mt-0.5">{p.roleDesc}</p>
                  </div>
                  <span className="bg-white/[0.05] border border-white/[0.08] rounded-lg px-3 py-1 text-xs text-gray-400">
                    {p.course}
                  </span>
                </div>

                {/* Card Body */}
                <div className="px-8 py-6 grid md:grid-cols-2 gap-8">
                  {/* Required Skills */}
                  <div>
                    <h4 className="text-sm font-bold text-brand-400 uppercase tracking-wider mb-4">
                      必須スキル
                    </h4>
                    <ul className="space-y-2">
                      {p.required.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-gray-300">
                          <svg
                            className="w-4 h-4 text-brand-500 shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Nice-to-have or Not-required */}
                  <div>
                    {p.niceToHave && (
                      <>
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                          あれば尚可
                        </h4>
                        <ul className="space-y-2">
                          {p.niceToHave.map((n) => (
                            <li key={n} className="flex items-start gap-2 text-sm text-gray-400">
                              <span className="text-gray-600 shrink-0 mt-0.5">+</span>
                              {n}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {p.notRequired && (
                      <>
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                          不要
                        </h4>
                        <ul className="space-y-2">
                          {p.notRequired.map((n) => (
                            <li key={n} className="flex items-start gap-2 text-sm text-gray-500">
                              <span className="text-gray-600 shrink-0 mt-0.5">-</span>
                              {n}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-8 py-4 border-t border-white/[0.06] bg-white/[0.02] flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-400">{p.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-white font-bold">{p.pay}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. スキルマトリクス ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>03 — skill matrix</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-10">スキルマトリクス</h2>

          {/* Introduction Course */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-white mb-4">
              導入コース
              <span className="text-gray-500 text-sm font-normal ml-2">Vercel + Supabase</span>
            </h3>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left px-6 py-4 text-gray-500 font-medium">スキル</th>
                      <th className="text-center px-6 py-4 text-gray-500 font-medium">メイン講師</th>
                      <th className="text-center px-6 py-4 text-gray-500 font-medium">TA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {introSkills.map((row) => (
                      <tr key={row.skill} className="border-b border-white/[0.04] last:border-none">
                        <td className="px-6 py-3 text-white">{row.skill}</td>
                        <td className="px-6 py-3 text-center text-brand-400">{row.instructor}</td>
                        <td className="px-6 py-3 text-center text-gray-400">{row.ta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Advanced Course */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              本格運用コース
              <span className="text-gray-500 text-sm font-normal ml-2">Google Cloud</span>
            </h3>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left px-6 py-4 text-gray-500 font-medium">スキル</th>
                      <th className="text-center px-6 py-4 text-gray-500 font-medium">メイン講師</th>
                      <th className="text-center px-6 py-4 text-gray-500 font-medium">TA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {advancedSkills.map((row) => (
                      <tr key={row.skill} className="border-b border-white/[0.04] last:border-none">
                        <td className="px-6 py-3 text-white">{row.skill}</td>
                        <td className="px-6 py-3 text-center text-brand-400">{row.instructor}</td>
                        <td className="px-6 py-3 text-center text-gray-400">{row.ta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. 報酬サマリー ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>04 — compensation</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">報酬サマリー</h2>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left px-6 py-4 text-gray-500 font-medium">ポジション</th>
                    <th className="text-center px-6 py-4 text-gray-500 font-medium">稼働時間</th>
                    <th className="text-right px-6 py-4 text-gray-500 font-medium">報酬（税別）</th>
                  </tr>
                </thead>
                <tbody>
                  {compensationSummary.map((row) => (
                    <tr key={row.position} className="border-b border-white/[0.04] last:border-none">
                      <td className="px-6 py-4 text-white font-medium">{row.position}</td>
                      <td className="px-6 py-4 text-center text-gray-400">{row.hours}</td>
                      <td className="px-6 py-4 text-right text-brand-400 font-bold">{row.pay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-gray-500 text-xs mt-4">
            * 報酬はすべて 1コホート（5週間）あたりの金額です。業務委託契約を想定しています。
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 border-t border-white/5">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            一緒に教える仲間を探しています
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            歯科医院向けバイブコーディング講座で、受講者の「はじめてのアプリ開発」をサポートしませんか？
          </p>
          <Link
            href="/recruit/support"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all shadow-lg shadow-brand-500/25"
          >
            サポート講師に応募する
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
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
