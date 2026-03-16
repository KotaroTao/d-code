import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "D-Code Academy｜歯科医院のためのバイブコーディング講座",
  description:
    "プログラミング未経験でも、AIと一緒にアプリが作れる。歯科医院向けClaude Code実践講座。全5回・日曜開催。",
};

/* ─── 共通パーツ ─── */

function SectionHeading({
  sub,
  main,
  id,
}: {
  sub: string;
  main: string;
  id?: string;
}) {
  return (
    <div id={id} className="text-center mb-12 scroll-mt-24">
      <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-2">
        {sub}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{main}</h2>
    </div>
  );
}

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-colors shadow-lg hover:shadow-xl ${className}`}
    >
      無料相談を予約する
    </a>
  );
}

/* ─── ページ本体 ─── */

export default function LpPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ──────────── ヘッダー ──────────── */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            D-Code<span className="text-blue-600"> Academy</span>
          </span>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">
              講座について
            </a>
            <a
              href="#curriculum"
              className="hover:text-blue-600 transition-colors"
            >
              カリキュラム
            </a>
            <a href="#value" className="hover:text-blue-600 transition-colors">
              料金・価値
            </a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">
              よくある質問
            </a>
          </nav>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-5 rounded-full transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </header>

      {/* ──────────── ヒーロー ──────────── */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            プログラミング経験ゼロでもOK
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            AIと一緒に、
            <br className="md:hidden" />
            <span className="text-blue-600">自院のアプリ</span>を作ろう
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Claude
            Codeを使った「バイブコーディング」で、歯科医院の業務課題を解決するアプリを5日間で開発。
            <br className="hidden md:block" />
            ブラウザだけで完結。ローカル環境の構築は一切不要です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton />
            <a
              href="#curriculum"
              className="inline-block border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-bold py-4 px-10 rounded-full text-lg transition-colors"
            >
              カリキュラムを見る
            </a>
          </div>
          {/* キービジュアル的な情報ブロック */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { num: "5", unit: "日間", desc: "毎週日曜開催" },
              { num: "0", unit: "行", desc: "コード手書き不要" },
              { num: "¥54", unit: "万相当", desc: "初年度の特典価値" },
              { num: "100", unit: "%", desc: "ブラウザ完結" },
            ].map((item) => (
              <div key={item.desc} className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-3xl font-extrabold text-blue-600">
                  {item.num}
                  <span className="text-base font-semibold text-gray-500">
                    {item.unit}
                  </span>
                </p>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── こんなお悩みありませんか？ ──────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="Problem" main="こんなお悩みありませんか？" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "IT化したいけど、何から始めればいいかわからない",
              "業者に頼むと高額で、思った通りのものができない",
              "スタッフのITスキルを上げたいが研修が見つからない",
              "他医院と差別化できるデジタルツールが欲しい",
              "既存の歯科ソフトでは自院の業務に合わない",
              "プログラミングは難しそうで踏み出せない",
            ].map((text) => (
              <div
                key={text}
                className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm"
              >
                <span className="text-red-400 text-xl mt-0.5">✕</span>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl md:text-2xl font-bold text-blue-600">
              その悩み、D-Code Academy が解決します
            </p>
          </div>
        </div>
      </section>

      {/* ──────────── 講座について ──────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            sub="About"
            main="バイブコーディングとは？"
            id="about"
          />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                バイブコーディングとは、AIに日本語で「こういうアプリを作って」と指示するだけで、AIがコードを書いてくれる新しい開発スタイルです。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                D-Code Academyでは、Anthropic社の最先端AI「Claude
                Code」を使い、プログラミングの知識がなくても本格的なWebアプリを作れるスキルを身につけます。
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: "💬",
                    title: "日本語で指示するだけ",
                    desc: "コードは一切手書きしません。AIへの伝え方を学びます",
                  },
                  {
                    icon: "🌐",
                    title: "ブラウザだけで完結",
                    desc: "ソフトのインストール不要。PCスペックも問いません",
                  },
                  {
                    icon: "🏥",
                    title: "歯科に特化した題材",
                    desc: "患者管理、予約確認など、自院で実際に使えるアプリを開発",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* 図解的なイメージ */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <p className="text-sm font-semibold text-blue-600 mb-4">
                開発の流れ
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    label: "Claude Code に日本語で指示",
                    detail: "「患者さんのお知らせ管理アプリを作って」",
                  },
                  {
                    step: "2",
                    label: "AIがコードを自動生成",
                    detail: "Next.js + Tailwind CSSで構築",
                  },
                  {
                    step: "3",
                    label: "GitHub に自動保存",
                    detail: "セーブポイント（コミット）が記録される",
                  },
                  {
                    step: "4",
                    label: "Vercel で自動公開",
                    detail: "インターネット上で誰でもアクセス可能に",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 bg-white/80 rounded-xl p-4"
                  >
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── カリキュラム ──────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            sub="Curriculum"
            main="5日間のカリキュラム"
            id="curriculum"
          />
          <p className="text-center text-gray-500 mb-12">
            毎週日曜 10:00 - 12:50｜50分 × 3ブロック（10分休憩 × 2）
          </p>
          <div className="space-y-6">
            {[
              {
                day: "Day 1",
                title: "はじめてのバイブコーディング",
                tags: ["環境構築", "自己紹介ページ作成", "初デプロイ体験"],
                desc: "Claude Code、GitHub、Vercelのアカウント作成から、自己紹介ページの公開まで。自分のサイトがインターネットに公開される感動体験がゴールです。",
                badgeClass: "bg-blue-100 text-blue-700",
              },
              {
                day: "Day 2",
                title: "Webアプリの基本とプロンプト設計",
                tags: [
                  "React / Next.js入門",
                  "ToDoアプリ作成",
                  "プロンプトエンジニアリング",
                ],
                desc: "ToDoアプリを作りながら、AIへの効果的な指示の出し方を学びます。CLAUDE.md（AIへの指示書）の活用法もマスター。",
                badgeClass: "bg-indigo-100 text-indigo-700",
              },
              {
                day: "Day 3",
                title: "データ管理と歯科アプリ開発",
                tags: [
                  "データベース連携",
                  "Supabase",
                  "歯科向けアプリ",
                ],
                desc: "患者さんへのお知らせ管理など、歯科医院の実務で使えるアプリを開発。データの保存・表示・更新・削除を実装します。",
                badgeClass: "bg-violet-100 text-violet-700",
              },
              {
                day: "Day 4",
                title: "オリジナルアプリ開発",
                tags: ["アプリ企画", "要件定義", "自院アプリ開発"],
                desc: "自院の課題を解決するオリジナルアプリの企画・設計・開発に挑戦。講師が一人ひとり個別にサポートします。",
                badgeClass: "bg-purple-100 text-purple-700",
              },
              {
                day: "Day 5",
                title: "仕上げ・公開・発表",
                tags: [
                  "UI改善",
                  "独自ドメイン設定",
                  "成果発表会",
                ],
                desc: "アプリの仕上げとデザイン改善。独自ドメインを設定し、受講者全員の前で成果発表。D-Code Clubへの入会案内。",
                badgeClass: "bg-fuchsia-100 text-fuchsia-700",
              },
            ].map((item) => (
              <div
                key={item.day}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6"
              >
                <div className="shrink-0">
                  <span
                    className={`inline-block font-bold text-sm px-4 py-1.5 rounded-full ${item.badgeClass}`}
                  >
                    {item.day}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── 料金・価値 ──────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading sub="Pricing" main="料金と受講特典" id="value" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* 料金カード */}
            <div className="bg-white border-2 border-blue-600 rounded-2xl p-8 shadow-lg">
              <p className="text-sm font-semibold text-blue-600 mb-1">
                受講料
              </p>
              <p className="text-5xl font-extrabold text-gray-900 mb-1">
                ¥350,000
                <span className="text-base font-normal text-gray-500">
                  （税別）
                </span>
              </p>
              <p className="text-gray-500 text-sm mb-6">
                全5回・教材費込み
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                {[
                  "Zoom × 全5回（日曜 10:00-12:50）",
                  "講師による個別サポート",
                  "自院オリジナルアプリ完成",
                  "D-Code Club 1年間無料（通常 ¥120,000/年）",
                  "歯科専用アプリ3本バンドル（通常 ¥360,000/年相当）",
                  "D-Code Store出品の権利",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    {text}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CtaButton className="w-full text-center" />
              </div>
            </div>

            {/* 価値比較 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <p className="text-sm font-semibold text-blue-600 mb-4">
                初年度に受け取れる価値
              </p>
              <div className="space-y-4">
                {[
                  {
                    item: "D-Code Club メンバーシップ 1年",
                    price: "¥120,000",
                  },
                  {
                    item: "MIERU CLINIC（経営可視化アプリ）1年",
                    price: "¥240,000",
                  },
                  {
                    item: "QRくるくる診断DX（口腔診断）1年",
                    price: "¥120,000",
                  },
                  { item: "歯科SEOの達人", price: "¥60,000" },
                ].map((row) => (
                  <div
                    key={row.item}
                    className="flex justify-between items-center bg-white/70 rounded-lg px-4 py-3"
                  >
                    <span className="text-sm text-gray-700">{row.item}</span>
                    <span className="font-semibold text-gray-900 shrink-0 ml-4">
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-blue-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">特典合計</span>
                  <span className="text-2xl font-extrabold text-blue-600">
                    ¥540,000
                    <span className="text-sm font-normal text-gray-500">
                      相当
                    </span>
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  + バイブコーディングスキル + 自院オリジナルアプリ +
                  Store出品権
                </p>
              </div>
              <div className="mt-6 bg-white rounded-xl p-4 border border-blue-200">
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-blue-600">助成金対象</span>
                  ：スタッフ受講の場合、人材開発支援助成金（リスキリング支援コース）の活用で最大75%の助成が受けられる可能性があります。詳細は提携社労士をご紹介します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── D-Code Club ──────────── */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            sub="Community"
            main="D-Code Club で講座後も成長を続ける"
          />
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            講座卒業後も、歯科 × IT の最前線で学び続けるコミュニティ。
            初期受講者は1年間無料で参加できます。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📱",
                title: "歯科アプリ使い放題",
                desc: "MIERU CLINIC、QRくるくる診断DX、歯科SEOの達人が全て使えます",
              },
              {
                icon: "🎓",
                title: "月1回の勉強会",
                desc: "最新のAI技術やアプリ開発のTipsを共有。講師に質問もOK",
              },
              {
                icon: "🏪",
                title: "D-Code Store 出品",
                desc: "自作アプリを全国の歯科医院に販売可能。副収入のチャンスも",
              },
              {
                icon: "🛠️",
                title: "製品化サポート",
                desc: "開発したアプリをStore出品レベルに仕上げるサポート（有料オプション）",
              },
              {
                icon: "📣",
                title: "マーケティングサポート",
                desc: "製品化後の販促・集客・Store内プロモーション支援（有料オプション）",
              },
              {
                icon: "🏆",
                title: "D-Code認定医院バッジ",
                desc: "IT先進医院として、患者さんへの信頼感・ブランド力を向上",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-lg font-bold mt-3 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── 講座概要 ──────────── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading sub="Overview" main="講座概要" />
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {[
              { label: "対象", value: "プログラミング未経験の歯科医院 院長・スタッフ" },
              {
                label: "日程",
                value: "毎週日曜日 10:00 - 12:50（全5回）",
              },
              { label: "形式", value: "Zoom オンライン開催（自宅から参加OK）" },
              { label: "定員", value: "1コホート 20〜30名" },
              { label: "受講料", value: "¥350,000（税別）/ 1名" },
              { label: "必要なもの", value: "ノートPC（ブラウザが動けばOK）・Googleアカウント" },
              {
                label: "ゴール",
                value: "自院の業務課題を解決するオリジナルアプリの完成・公開",
              },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col sm:flex-row ${i > 0 ? "border-t border-gray-100" : ""}`}
              >
                <div className="sm:w-40 shrink-0 bg-gray-50 px-6 py-4 font-semibold text-gray-900 text-sm">
                  {row.label}
                </div>
                <div className="px-6 py-4 text-gray-700 text-sm">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── よくある質問 ──────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading sub="FAQ" main="よくある質問" id="faq" />
          <div className="space-y-4">
            {[
              {
                q: "プログラミングの経験が全くなくても大丈夫ですか？",
                a: "はい、完全未経験者向けの講座です。コードを手で書くことはありません。AIに日本語で指示を出す方法を学びます。",
              },
              {
                q: "パソコンのスペックは何が必要ですか？",
                a: "ブラウザ（Chrome推奨）が動けば大丈夫です。全てWeb上で完結するため、高性能なPCは不要です。",
              },
              {
                q: "日曜以外の開催はありますか？",
                a: "現在は日曜開催のみですが、ご要望が多い場合は別日程のコホートも検討いたします。お気軽にご相談ください。",
              },
              {
                q: "講座で作ったアプリは講座後も使えますか？",
                a: "はい。受講者ご自身のGitHubアカウントとVercelアカウントで運用するため、講座後も継続して使用・改善できます。",
              },
              {
                q: "助成金は使えますか？",
                a: "スタッフ受講の場合、人材開発支援助成金（事業展開等リスキリング支援コース）の対象となる可能性があります。最大75%の助成が受けられるケースもあり、提携社労士をご紹介可能です。",
              },
              {
                q: "1つの医院から複数名の参加は可能ですか？",
                a: "はい。院長とスタッフなど、複数名でご参加いただけます。チームで学ぶことで、講座後のアプリ運用もスムーズになります。",
              },
              {
                q: "講座後のサポートはありますか？",
                a: "D-Code Club（月額¥10,000、初期受講者は1年無料）にて、月1回の勉強会・Q&A・歯科アプリの利用など継続サポートがあります。製品化やマーケティングのサポートも有料オプションでご利用可能です。",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="bg-white rounded-xl shadow-sm group"
              >
                <summary className="cursor-pointer px-6 py-5 font-semibold text-gray-900 flex items-center justify-between list-none">
                  {item.q}
                  <span className="text-blue-600 group-open:rotate-45 transition-transform text-xl ml-4">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── CTA ──────────── */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-blue-600 to-blue-700 text-white scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            まずは無料相談から
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            「自分に合っているか不安」「助成金について聞きたい」など、
            どんなご質問でもお気軽にどうぞ。
          </p>
          <a
            href="mailto:academy@d-code.com"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-10 rounded-full text-lg transition-colors shadow-lg"
          >
            無料相談を予約する
          </a>
          <p className="text-blue-200 text-sm mt-4">
            academy@d-code.com
          </p>
        </div>
      </section>

      {/* ──────────── フッター ──────────── */}
      <footer className="py-10 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-white font-bold">D-Code Academy</span>
            <span className="text-gray-500 ml-2 text-sm">
              by 株式会社ファンクション・ティ
            </span>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Function-T Inc. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
