import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "コース一覧｜D-Code Academy",
  description:
    "D-Code Academyの研修コース一覧。導入コース（Vercel）と本格運用コース（Google Cloud）の2コースから選べます。",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-brand-400 mb-4">
      <span className="w-8 h-[2px] bg-brand-400 rounded-full" />
      {children}
    </span>
  );
}

const courses = [
  {
    id: "introduction",
    label: "導入コース",
    platform: "Vercel + Supabase",
    tagline: "「AIでアプリが作れた！」を体験する5日間",
    description:
      "プログラミング完全未経験者が、Claude Codeを使って自分のWebアプリを開発・公開するまでを体験。Vercel + Supabase の手軽な環境で「とりあえずできた！」を最短で実現します。",
    level: "初心者向け",
    days: [
      { day: 1, title: "はじめの一歩", sub: "自分のサイトをインターネットに公開" },
      { day: 2, title: "Webアプリの基本", sub: "ToDoアプリでプロンプトを磨く" },
      { day: 3, title: "データベース連携", sub: "歯科向けアプリを作ろう" },
      { day: 4, title: "オリジナルアプリ", sub: "自院の課題を解決する" },
      { day: 5, title: "仕上げ・発表会", sub: "作品を仕上げてプレゼン" },
    ],
    stack: ["Claude Code WEB版", "Next.js / React", "Tailwind CSS", "Vercel", "Supabase", "GitHub"],
    color: "brand",
  },
  {
    id: "advanced",
    label: "本格運用コース",
    platform: "Google Cloud",
    tagline: "「作れた」から「運用できる」へ — Google Cloudで本格展開",
    description:
      "導入コース修了者を対象に、Google Cloud上で本番運用レベルのアプリを構築。Cloud Run、Cloud SQL、Firebase Auth、CI/CDパイプラインを使い、スケーラブルで安全なアプリ運用を学びます。",
    level: "中級者向け（導入コース修了者）",
    days: [
      { day: 1, title: "GCPの世界へ", sub: "クラウドインフラの基礎" },
      { day: 2, title: "DB と認証", sub: "Cloud SQL + Firebase Auth" },
      { day: 3, title: "ストレージ と API", sub: "本格的なバックエンド構築" },
      { day: 4, title: "CI/CD", sub: "開発フローの自動化" },
      { day: 5, title: "監視・運用・発表", sub: "運用体制の構築" },
    ],
    stack: ["Claude Code WEB版", "Next.js / React", "Cloud Run", "Cloud SQL", "Firebase Auth", "Cloud Storage"],
    color: "accent",
  },
];

const resources = [
  {
    href: "/courses/staff",
    title: "サポート人員・スキル要件",
    desc: "各コースに必要な人員体制とスキルマトリクス",
    icon: "👥",
  },
  {
    href: "/courses/proposal",
    title: "募集方法 提案書",
    desc: "チャネル戦略・タイムライン・コスト見積もり",
    icon: "📋",
  },
  {
    href: "/recruit/support",
    title: "応募フォーム",
    desc: "サポート講師の募集ページ・応募受付",
    icon: "✍️",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0d1117]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-extrabold tracking-tight text-white">
            D-Code<span className="text-brand-400">.</span>
          </a>
          <a
            href="/recruit/support"
            className="bg-brand-500 hover:bg-brand-400 text-white font-bold py-2 px-6 rounded-xl text-sm transition-all"
          >
            サポート講師に応募
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/50 via-[#0d1117] to-[#0d1117]" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <SectionLabel>courses</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            研修カリキュラム・資料
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            D-Code Academy の2つのコースと、運営に必要な資料をすべてWebで閲覧できます。
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {courses.map((c) => (
            <div
              key={c.id}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden"
            >
              {/* Course Header */}
              <div className="p-8 md:p-10 border-b border-white/[0.06]">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-brand-500/10 text-brand-400 text-xs font-bold px-3 py-1 rounded-full">
                    {c.level}
                  </span>
                  <span className="text-gray-500 text-xs">{c.platform}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                  {c.label}
                </h2>
                <p className="text-lg text-gray-300 mb-4">{c.tagline}</p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                  {c.description}
                </p>
              </div>

              {/* Day Grid */}
              <div className="p-8 md:p-10 border-b border-white/[0.06]">
                <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider mb-6">
                  5日間のカリキュラム
                </h3>
                <div className="grid sm:grid-cols-5 gap-4">
                  {c.days.map((d) => (
                    <div
                      key={d.day}
                      className="bg-white/[0.03] border border-white/[0.04] rounded-xl p-4"
                    >
                      <span className="text-xs text-brand-400 font-bold">Day {d.day}</span>
                      <p className="text-white font-bold mt-1 text-sm">{d.title}</p>
                      <p className="text-gray-500 text-xs mt-1">{d.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="p-8 md:p-10 border-b border-white/[0.06]">
                <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider mb-4">
                  使用技術
                </h3>
                <div className="flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <span
                      key={s}
                      className="bg-white/[0.05] border border-white/[0.08] rounded-lg px-3 py-1.5 text-xs text-gray-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 md:p-10">
                <Link
                  href={`/courses/${c.id}`}
                  className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-bold py-3 px-8 rounded-xl transition-all"
                >
                  カリキュラム詳細を見る
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>resources</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">運営資料</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 card-hover block"
              >
                <span className="text-3xl mb-4 block">{r.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-gray-400 text-sm">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* URL List */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>all links</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">全ページ URL一覧</h2>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
            <div className="space-y-4">
              {[
                { url: "/courses", label: "コース一覧（このページ）" },
                { url: "/courses/introduction", label: "導入コース カリキュラム詳細・研修資料" },
                { url: "/courses/advanced", label: "本格運用コース カリキュラム詳細・研修資料" },
                { url: "/courses/staff", label: "サポート人員・スキル要件一覧" },
                { url: "/courses/proposal", label: "募集方法 提案書" },
                { url: "/recruit/support", label: "サポート講師 応募フォーム" },
              ].map((link) => (
                <div key={link.url} className="flex items-center gap-4">
                  <code className="bg-white/[0.05] px-3 py-1 rounded text-sm text-brand-400 shrink-0">
                    {link.url}
                  </code>
                  <span className="text-gray-400 text-sm">{link.label}</span>
                  <Link href={link.url} className="text-brand-400 hover:text-brand-200 text-sm ml-auto shrink-0">
                    開く →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">&copy; 2026 D-Code Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
