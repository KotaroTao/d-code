import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "募集方法 提案書｜D-Code Academy",
  description:
    "D-Code Academy サポート講師・スタッフ募集のチャネル戦略、タイムライン、選考フロー、コスト見積もりをまとめた提案書。",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-brand-400 mb-4">
      <span className="w-8 h-[2px] bg-brand-400 rounded-full" />
      {children}
    </span>
  );
}

/* ── Data ── */

const channels = [
  { name: "X (Twitter)", target: "全ポジション", effect: "★★★", cost: "無料", priority: "A" },
  { name: "LinkedIn", target: "メイン講師 / GCP TA", effect: "★★★", cost: "無料〜", priority: "A" },
  { name: "Connpass / TECH PLAY", target: "GCP TA", effect: "★★☆", cost: "無料", priority: "A" },
  { name: "GCPUG", target: "GCP メイン講師 / TA", effect: "★★★", cost: "無料", priority: "A" },
  { name: "Facebook (AI/開発グループ)", target: "全ポジション", effect: "★★☆", cost: "無料", priority: "B" },
  { name: "Discord (AI/Claude系)", target: "導入コース TA", effect: "★★☆", cost: "無料", priority: "B" },
  { name: "知人紹介", target: "メイン講師", effect: "★★★", cost: "¥30,000-50,000", priority: "A" },
  { name: "Wantedly", target: "全ポジション", effect: "★★☆", cost: "¥40,000/月", priority: "C" },
];

const xSchedule = [
  { day: "Day 0 (月)", pattern: "パターンA", type: "メイン投稿", desc: "募集開始の告知。講座概要・報酬・応募方法を明記" },
  { day: "Day 1 (火)", pattern: "パターンD", type: "問いかけ型", desc: "「Claude Codeで開発してる方、教える側に興味ありませんか？」" },
  { day: "Day 3 (木)", pattern: "パターンB", type: "共感型リポスト", desc: "AI開発・教育関連の投稿を引用RT + 募集リンク" },
  { day: "Day 5 (土)", pattern: "—", type: "残り◯日リマインド", desc: "応募状況をシェアしつつ締切を意識させる" },
  { day: "Day 7 (日)", pattern: "—", type: "最終告知", desc: "「本日締切」で駆け込み応募を促す" },
];

const timeline = [
  { period: "3月下旬", action: "募集ページ公開、CLAUDE.md・提案書レビュー完了" },
  { period: "4月 第1週", action: "X / LinkedIn 集中投稿（導入コース TA 中心）", goal: "応募目標 20件" },
  { period: "4月 第2週", action: "GCPUG / LinkedIn GCP 人材募集", goal: "応募目標 10件" },
  { period: "4月 第3-4週", action: "書類選考 & 面談（導入コース TA）" },
  { period: "5月 第1-2週", action: "面談（本格運用コース TA & メイン講師）" },
  { period: "5月 第3週", action: "全ポジション確定・採用通知" },
  { period: "5月 第4週〜", action: "オリエンテーション・研修資料共有" },
  { period: "6月", action: "講座開始" },
];

const risks = [
  {
    risk: "GCP経験者が集まらない",
    measures: ["報酬上方調整（時給 ¥8,000〜¥10,000）", "GCPUG / LinkedIn で直接スカウト", "導入コース TA を育成し本格運用コースへ移行"],
  },
  {
    risk: "応募数が目標に届かない",
    measures: ["Wantedly 等の有料チャネルを追加", "リファラル報酬を引き上げ（¥50,000）", "募集期間を 1-2 週間延長"],
  },
  {
    risk: "採用後の辞退",
    measures: ["契約時に前金（1回分の報酬）を支払い", "補欠候補を 2-3 名キープ", "早期にオリエンテーションでコミットメントを高める"],
  },
];

const costPlans = [
  { plan: "最小（SNS中心）", cost: "¥0", detail: "X / LinkedIn / Connpass / GCPUG のみ。全て無料チャネル" },
  { plan: "推奨（SNS＋一部有料）", cost: "¥65,000〜¥105,000", detail: "上記 + 知人紹介 2-3名（¥30,000-50,000 × 件）" },
  { plan: "最大（有料チャネル含む）", cost: "¥135,000〜¥195,000", detail: "上記 + Wantedly 1ヶ月（¥40,000）+ 追加リファラル" },
];

const kpis = [
  { metric: "応募総数", target: "30件以上" },
  { metric: "導入コース TA 応募", target: "15件以上" },
  { metric: "GCP関連応募", target: "10件以上" },
  { metric: "面談実施", target: "15件以上" },
  { metric: "最終採用", target: "8〜11名" },
  { metric: "募集期間", target: "8週間以内" },
];

const introTaScoring = [
  { criteria: "Claude Code の使用経験", points: 30, note: "日常的に使用 30 / 触ったことがある 15 / なし 0" },
  { criteria: "教える・サポートする経験", points: 25, note: "業務で指導経験あり 25 / 勉強会等 15 / なし 5" },
  { criteria: "コミュニケーション力", points: 20, note: "面談での受け答え・説明の分かりやすさ" },
  { criteria: "日曜 10:00-13:00 確保", points: 15, note: "全日程 OK 15 / 一部欠席あり 5 / 不明 0" },
  { criteria: "歯科業界への関心", points: 10, note: "歯科関係者 10 / 興味あり 5 / 特になし 2" },
];

const advancedTaScoring = [
  { criteria: "GCP 実務経験", points: 35, note: "Cloud Run + SQL 経験 35 / GCP 一部 20 / AWS等 10 / なし 0" },
  { criteria: "Claude Code の使用経験", points: 20, note: "日常的に使用 20 / 触ったことがある 10 / なし 0" },
  { criteria: "教える・サポートする経験", points: 20, note: "業務で指導経験あり 20 / 勉強会等 10 / なし 5" },
  { criteria: "コミュニケーション力", points: 15, note: "面談での受け答え・説明の分かりやすさ" },
  { criteria: "日曜 10:00-13:00 確保", points: 10, note: "全日程 OK 10 / 一部欠席あり 3 / 不明 0" },
];

const mainInstructorScoring = [
  { criteria: "講師・登壇経験", points: 30, note: "研修講師 30 / 勉強会登壇 20 / なし 5" },
  { criteria: "該当技術の実務経験", points: 25, note: "3年以上 25 / 1-3年 15 / 1年未満 5" },
  { criteria: "Claude Code の使用経験", points: 20, note: "日常的に使用 20 / 触ったことがある 10 / なし 0" },
  { criteria: "カリキュラム設計力", points: 15, note: "面談でのヒアリング内容から評価" },
  { criteria: "日曜 10:00-13:00 確保", points: 10, note: "全日程 OK 10 / 一部欠席あり 3 / 不明 0" },
];

/* ── Components ── */

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`text-left text-xs font-bold text-brand-400 uppercase tracking-wider px-4 py-3 ${className}`}>
      {children}
    </th>
  );
}

function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 text-sm text-gray-300 ${className}`}>{children}</td>;
}

function PriorityBadge({ priority }: { priority: string }) {
  const colors: Record<string, string> = {
    A: "bg-brand-500/15 text-brand-400",
    B: "bg-amber-500/15 text-amber-400",
    C: "bg-gray-500/15 text-gray-400",
  };
  return (
    <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded ${colors[priority] ?? colors.C}`}>
      {priority}
    </span>
  );
}

function ScoringTable({
  title,
  data,
}: {
  title: string;
  data: { criteria: string; points: number; note: string }[];
}) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-white/[0.06]">
        <h4 className="text-white font-bold">{title}</h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-white/[0.06]">
            <tr>
              <Th>評価項目</Th>
              <Th className="text-center">配点</Th>
              <Th>基準</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {data.map((row) => (
              <tr key={row.criteria}>
                <Td className="font-medium text-white whitespace-nowrap">{row.criteria}</Td>
                <Td className="text-center font-bold text-brand-400">{row.points}</Td>
                <Td className="text-gray-400 text-xs">{row.note}</Td>
              </tr>
            ))}
            <tr className="bg-white/[0.02]">
              <Td className="font-bold text-white">合計</Td>
              <Td className="text-center font-bold text-brand-400">
                {data.reduce((sum, r) => sum + r.points, 0)}
              </Td>
              <Td className="text-gray-500 text-xs">70点以上：即採用 / 50-69点：条件付き採用 / 50点未満：見送り</Td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Page ── */

export default function ProposalPage() {
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
          <SectionLabel>proposal</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            募集方法 提案書
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            D-Code Academy サポート講師・スタッフ募集に関するチャネル戦略、選考フロー、タイムライン、コスト見積もりの全体像。
          </p>
        </div>
      </section>

      {/* ── 1. エグゼクティブサマリー ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>01 &mdash; executive summary</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-6">エグゼクティブサマリー</h2>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 md:p-10">
            <p className="text-gray-300 leading-relaxed mb-6">
              D-Code Academy は <span className="text-white font-bold">導入コース（Vercel）</span>と
              <span className="text-white font-bold">本格運用コース（Google Cloud）</span>の2コース体制で運営します。
              講座開始（2026年6月）までに、合計 <span className="text-brand-400 font-bold">8〜11名</span> のサポート人員を確保する必要があります。
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Phase 1（4月）", desc: "導入コース TA 3-4名 + 運営スタッフ 1名", tag: "最優先" },
                { label: "Phase 2（5月）", desc: "本格運用コース メイン講師 1名 + TA 2-3名", tag: "準優先" },
                { label: "Phase 3（状況次第）", desc: "導入コース メイン講師 1名", tag: "条件付き" },
              ].map((p) => (
                <div key={p.label} className="bg-white/[0.03] border border-white/[0.04] rounded-xl p-5">
                  <span className="text-xs font-bold text-brand-400">{p.tag}</span>
                  <p className="text-white font-bold mt-1">{p.label}</p>
                  <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. 募集フェーズ ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>02 &mdash; recruitment phases</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">募集フェーズ</h2>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="bg-white/[0.03] border border-brand-500/20 rounded-2xl p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-brand-500/15 text-brand-400 text-xs font-bold px-3 py-1 rounded-full">
                  Phase 1
                </span>
                <span className="text-white font-bold">4月・最優先</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-bold mb-2">導入コース TA（3-4名）</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>- Claude Code の日常利用者</li>
                    <li>- 初心者サポートに抵抗がない方</li>
                    <li>- 日曜 10:00-13:00 確保可能</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">運営スタッフ（1名）</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>- Zoom運営・進行管理</li>
                    <li>- 受講者対応・進捗管理</li>
                    <li>- 技術スキル不問</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-amber-500/15 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                  Phase 2
                </span>
                <span className="text-white font-bold">5月・準優先</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-bold mb-2">本格運用コース メイン講師（1名）</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>- GCP実務経験 3年以上</li>
                    <li>- 研修・登壇経験あり</li>
                    <li>- Claude Code 利用経験</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">本格運用コース TA（2-3名）</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>- Cloud Run / Cloud SQL の実務経験</li>
                    <li>- Claude Code 利用経験</li>
                    <li>- 日曜 10:00-13:00 確保可能</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-gray-500/15 text-gray-400 text-xs font-bold px-3 py-1 rounded-full">
                  Phase 3
                </span>
                <span className="text-white font-bold">状況次第</span>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">導入コース メイン講師（1名）</h4>
                <p className="text-sm text-gray-400">
                  現在は代表が兼任予定。受講者数が増加した場合、または代表の負荷軽減が必要な場合に募集を開始。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. チャネル戦略 ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>03 &mdash; channel strategy</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">チャネル戦略</h2>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-white/[0.06]">
                  <tr>
                    <Th>チャネル</Th>
                    <Th>ターゲット</Th>
                    <Th className="text-center">期待効果</Th>
                    <Th>コスト</Th>
                    <Th className="text-center">優先度</Th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {channels.map((ch) => (
                    <tr key={ch.name} className="hover:bg-white/[0.02] transition-colors">
                      <Td className="font-medium text-white whitespace-nowrap">{ch.name}</Td>
                      <Td>{ch.target}</Td>
                      <Td className="text-center">{ch.effect}</Td>
                      <Td className="whitespace-nowrap">{ch.cost}</Td>
                      <Td className="text-center">
                        <PriorityBadge priority={ch.priority} />
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. X 投稿スケジュール ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>04 &mdash; X posting schedule</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">X 投稿スケジュール</h2>
          <p className="text-gray-400 mb-8">
            1週間を1サイクルとし、募集期間中に繰り返し実施。各サイクルで投稿パターンを変えて飽きさせない構成。
          </p>
          <div className="space-y-4">
            {xSchedule.map((s) => (
              <div
                key={s.day}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="sm:w-32 shrink-0">
                  <span className="text-white font-bold text-sm">{s.day}</span>
                </div>
                <div className="sm:w-40 shrink-0">
                  <span className="text-xs font-bold text-brand-400">{s.pattern}</span>
                  <p className="text-white text-sm font-medium">{s.type}</p>
                </div>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. 選考フロー & 基準 ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>05 &mdash; selection flow &amp; criteria</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">選考フロー &amp; 基準</h2>

          {/* Flow */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 mb-10">
            <h3 className="text-white font-bold mb-6">選考フロー</h3>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              {[
                { step: "応募", sub: "フォーム送信" },
                { step: "書類選考", sub: "1-3日" },
                { step: "面談", sub: "15-30分" },
                { step: "採用通知", sub: "面談後3日以内" },
                { step: "契約・オリエンテーション", sub: "" },
              ].map((s, i) => (
                <div key={s.step} className="flex items-center gap-3">
                  <div className="bg-brand-500/10 border border-brand-500/20 rounded-lg px-4 py-2 text-center">
                    <p className="text-white font-bold">{s.step}</p>
                    {s.sub && <p className="text-gray-500 text-xs mt-0.5">{s.sub}</p>}
                  </div>
                  {i < 4 && (
                    <svg className="w-4 h-4 text-brand-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Scoring Tables */}
          <div className="space-y-8">
            <ScoringTable title="導入コース TA — 評価基準" data={introTaScoring} />
            <ScoringTable title="本格運用コース TA — 評価基準" data={advancedTaScoring} />
            <ScoringTable title="メイン講師 — 評価基準" data={mainInstructorScoring} />
          </div>
        </div>
      </section>

      {/* ── 6. タイムライン ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>06 &mdash; timeline</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">タイムライン（2026年）</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-white/[0.06]" />
            <div className="space-y-6">
              {timeline.map((t) => (
                <div key={t.period} className="flex gap-6 relative">
                  <div className="w-8 h-8 rounded-full bg-brand-500/15 border border-brand-500/30 flex items-center justify-center shrink-0 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-400" />
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 flex-1">
                    <span className="text-brand-400 text-xs font-bold">{t.period}</span>
                    <p className="text-white font-medium mt-1">{t.action}</p>
                    {t.goal && <p className="text-gray-500 text-xs mt-1">{t.goal}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. リスク対策 ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>07 &mdash; risk mitigation</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">リスク対策</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {risks.map((r) => (
              <div key={r.risk} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h3 className="text-white font-bold text-sm">{r.risk}</h3>
                </div>
                <ul className="space-y-2">
                  {r.measures.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. コスト見積もり ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>08 &mdash; cost estimate</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">コスト見積もり</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {costPlans.map((cp, i) => (
              <div
                key={cp.plan}
                className={`bg-white/[0.03] border rounded-2xl p-6 ${
                  i === 1 ? "border-brand-500/30 ring-1 ring-brand-500/10" : "border-white/[0.06]"
                }`}
              >
                {i === 1 && (
                  <span className="bg-brand-500/15 text-brand-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    推奨
                  </span>
                )}
                <h3 className="text-white font-bold mb-2">{cp.plan}</h3>
                <p className="text-2xl font-extrabold text-brand-400 mb-4">{cp.cost}</p>
                <p className="text-gray-400 text-sm">{cp.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. KPI ── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>09 &mdash; KPI</SectionLabel>
          <h2 className="text-3xl font-extrabold text-white mb-8">KPI（主要成果指標）</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {kpis.map((k) => (
              <div key={k.metric} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 text-center">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">{k.metric}</p>
                <p className="text-2xl font-extrabold text-white">{k.target}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionLabel>next steps</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            募集を始めましょう
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            提案書の内容を確認のうえ、応募フォームの公開・人員要件の確認を進めてください。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/recruit/support"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-brand-500/25"
            >
              応募フォームを見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/courses/staff"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white font-bold py-3 px-8 rounded-xl transition-all"
            >
              人員要件を確認
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
          <p className="text-gray-600 text-sm">&copy; 2026 D-Code Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
