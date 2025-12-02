import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, CheckCircle, Target, Shield, Zap, 
  TrendingUp, Download, Share2, MapPin, Briefcase, 
  CheckCircle2, Users, AlertTriangle, Star, ChevronDown,
  HelpCircle, Plus, Minus, X
} from 'lucide-react';

// --- Shared Components ---

const Button = ({ children, variant = 'primary', className = '', onClick = () => {}, disabled = false }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-orange-500/30 hover:shadow-orange-500/50",
    secondary: "bg-white text-indigo-900 border-2 border-indigo-100 hover:border-indigo-300 hover:bg-indigo-50",
    dark: "bg-slate-800 text-white hover:bg-slate-700",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

const SectionHeading = ({ children, subtitle, center = true }) => (
  <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
      {children}
    </h2>
    <div className={`h-1 w-24 bg-orange-400 rounded-full mb-6 ${center ? 'mx-auto' : ''}`}></div>
    {subtitle && <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg border border-slate-100 p-8 ${className}`}>
    {children}
  </div>
);

// --- Radar Chart Component ---
const RadarChart = ({ data }) => {
  const size = 300;
  const center = size / 2;
  const radius = (size / 2) - 40;
  const angleSlice = (Math.PI * 2) / data.length;

  const points = data.map((item, i) => {
    const r = (item.value / 100) * radius;
    const x = center + r * Math.cos(angleSlice * i - Math.PI / 2);
    const y = center + r * Math.sin(angleSlice * i - Math.PI / 2);
    return `${x},${y}`;
  }).join(' ');

  const labelPoints = data.map((item, i) => {
    const r = radius + 25;
    const x = center + r * Math.cos(angleSlice * i - Math.PI / 2);
    const y = center + r * Math.sin(angleSlice * i - Math.PI / 2);
    return { x, y, label: item.label };
  });

  return (
    <div className="relative w-full max-w-[340px] mx-auto aspect-square flex items-center justify-center">
      <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, index) => (
          <polygon
            key={index}
            points={data.map((_, i) => {
              const r = radius * scale;
              const x = center + r * Math.cos(angleSlice * i - Math.PI / 2);
              const y = center + r * Math.sin(angleSlice * i - Math.PI / 2);
              return `${x},${y}`;
            }).join(' ')}
            fill={index === 4 ? "white" : "none"}
            stroke="#e2e8f0"
            strokeWidth="1"
            className="opacity-60"
          />
        ))}
        {data.map((_, i) => {
          const x = center + radius * Math.cos(angleSlice * i - Math.PI / 2);
          const y = center + radius * Math.sin(angleSlice * i - Math.PI / 2);
          return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="#e2e8f0" strokeWidth="1" />;
        })}
        <polygon points={points} fill="rgba(249, 115, 22, 0.2)" stroke="#f97316" strokeWidth="3" strokeLinejoin="round" className="drop-shadow-md animate-pulse-slow" />
        {data.map((item, i) => {
          const r = (item.value / 100) * radius;
          const x = center + r * Math.cos(angleSlice * i - Math.PI / 2);
          const y = center + r * Math.sin(angleSlice * i - Math.PI / 2);
          return <circle key={i} cx={x} cy={y} r="4" fill="#f97316" stroke="white" strokeWidth="2" />;
        })}
        {labelPoints.map((point, i) => (
          <text key={i} x={point.x} y={point.y} textAnchor="middle" dominantBaseline="middle" className="text-[10px] sm:text-xs font-bold fill-slate-600" style={{ fontWeight: 600 }}>{point.label}</text>
        ))}
      </svg>
    </div>
  );
};

// --- Main Page Component ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [diagnosisState, setDiagnosisState] = useState('initial'); // initial, loading, result
  const [email, setEmail] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const resultRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const startDiagnosis = (e) => {
    e.preventDefault();
    if (!email) return;
    setDiagnosisState('loading');
    setTimeout(() => {
      setDiagnosisState('result');
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 2500);
  };

  const radarData = [
    { label: '企画構想力', value: 90 }, { label: '論理分析力', value: 85 },
    { label: '問題解決力', value: 80 }, { label: '実行推進力', value: 95 },
    { label: '共感力', value: 40 }, { label: 'コミュ力', value: 60 },
    { label: '適応力', value: 70 }, { label: '自己管理力', value: 85 },
  ];

  const testimonials = [
    {
      name: "田中 健太さん",
      age: "26歳",
      job: "営業職 → 企画職",
      img: "👨‍💼",
      title: "「営業が苦手」だと思っていた自分の意外な適性が判明！",
      text: "新卒で入った会社で営業をしていましたが、成績が伸びず悩んでいました。SEISEIの診断で「対人折衝より、課題分析が得意」という結果が出て、企画職へ転職。今では水を得た魚のように働けています。年収も80万アップしました。",
      tags: ["年収UP", "未経験職種", "20代"]
    },
    {
      name: "佐藤 愛美さん",
      age: "31歳",
      job: "事務職 → 専門商社",
      img: "👩‍💼",
      title: "「自分には強みがない」という不安がデータで解消された。",
      text: "これといったスキルがなく、将来が不安でした。でも診断シートで「調整力」と「正確性」がズバ抜けて高いと分かり、それを求めている専門商社の管理部門を紹介してもらえました。自分の価値を初めて実感できました。",
      tags: ["キャリアチェンジ", "女性の転職", "30代"]
    },
    {
      name: "鈴木 大輔さん",
      age: "24歳",
      job: "第二新卒 → ITベンチャー",
      img: "🧑‍💻",
      title: "面接で「自分の取扱説明書」として診断結果を使いました。",
      text: "面接で自己PRをするのが苦手だったんですが、SEISEIの診断結果を持っていくだけで話が弾みました。「挑戦リーダー型」という結果が、今の会社の求める人物像と合致していたらしく、即内定をいただけました。",
      tags: ["第二新卒", "スピード内定", "IT業界"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
      
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3' : 'bg-white border-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">S</div>
            <span className="text-2xl font-bold tracking-tighter text-slate-800">SEISEI</span>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            {['選ばれる理由', '利用者の声', '診断の流れ', 'よくある質問'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                {item}
              </a>
            ))}
            {diagnosisState === 'initial' && (
              <button 
                onClick={() => document.getElementById('hero-input').focus()}
                className="px-6 py-2.5 rounded-full text-sm font-bold bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
              >
                無料診断スタート
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section (White/Clean Theme) */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-indigo-700 font-bold text-sm tracking-wide mb-4 animate-fade-in-up">
              ✨ 3分でわかるあなたの市場価値
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.2] tracking-tight animate-fade-in-up delay-100">
              「なんとなく」の転職は<br/>
              <span className="relative inline-block px-2">
                もう終わりにしよう。
                <div className="absolute bottom-2 left-0 w-full h-3 bg-yellow-300/60 -z-10 rounded-sm"></div>
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              履歴書よりも雄弁な、あなただけの<span className="font-bold text-indigo-600">「性格診断データ」</span>を手に、<br className="hidden md:block"/>
              ミスマッチのない企業選びをしませんか？
            </p>

            {/* Input Form */}
            <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-full max-w-2xl mx-auto mt-10 shadow-xl border border-slate-100 animate-fade-in-up delay-300">
              <form onSubmit={startDiagnosis} className="flex flex-col md:flex-row gap-3">
                <input 
                  id="hero-input"
                  type="email" 
                  placeholder="メールアドレスを入力して診断開始" 
                  className="flex-grow px-6 py-4 rounded-xl md:rounded-full bg-slate-50 text-slate-800 text-lg outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all placeholder-slate-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={diagnosisState !== 'initial'}
                />
                <Button 
                  className="w-full md:w-auto min-w-[220px]" 
                  disabled={diagnosisState !== 'initial'}
                >
                  {diagnosisState === 'initial' ? (
                    <>診断を始める <ArrowRight className="ml-2 w-5 h-5" /></>
                  ) : (
                    <>診断中...</>
                  )}
                </Button>
              </form>
            </div>
            
            <p className="text-slate-500 text-sm flex justify-center gap-6 animate-fade-in-up delay-400">
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-green-500"/>完全無料</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-green-500"/>3分で完了</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-green-500"/>登録後も勧誘なし</span>
            </p>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/40 skew-x-12 transform origin-top-right -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-orange-100/40 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Loading Overlay */}
      {diagnosisState === 'loading' && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">あなたのデータを分析中...</h3>
            <p className="text-slate-500">50の指標から最適なキャリアパスを算出しています</p>
          </div>
        </div>
      )}

      {/* Result Section (Result ONLY) */}
      {diagnosisState === 'result' && (
        <section ref={resultRef} className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 animate-bounce">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">診断が完了しました！</h2>
              <p className="text-slate-600 mt-2">あなただけのキャリアコンパスシートが発行されました。</p>
            </div>

            {/* Sheet UI */}
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-slide-up">
              {/* Sheet Header */}
              <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white p-8 md:p-10 text-center relative overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-block px-4 py-1 rounded-full bg-orange-500 text-white text-sm font-bold mb-4">あなたの診断タイプ</div>
                  <h2 className="text-4xl md:text-5xl font-black mb-2">挑戦リーダー型</h2>
                  <p className="text-lg opacity-90">〜 挑戦を恐れず、道を切り開く人 〜</p>
                </div>
              </div>

              {/* Sheet Content */}
              <div className="p-6 md:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Left: Chart */}
                  <div className="lg:w-2/5 flex flex-col gap-6">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h3 className="text-center font-bold text-slate-700 mb-2">能力バランス</h3>
                      <RadarChart data={radarData} />
                    </div>
                    {/* Seisei-kun */}
                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex gap-4">
                      <div className="shrink-0 text-4xl">🦁</div>
                      <p className="text-sm text-slate-700 font-medium">
                        「<span className="font-bold text-orange-700">挑戦リーダー型</span>か！いいね。転職市場で今一番求められているタイプだ。この結果は面接で強力な武器になるぞ！」
                      </p>
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="lg:w-3/5 space-y-6">
                    <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm rounded-r-xl">
                      <h3 className="font-bold text-slate-800 text-lg mb-3 flex items-center gap-2">
                        <Target className="text-blue-500" /> 強みと活かし方
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        責任感が強く、困難な状況でも前向きに挑戦できるリーダータイプです。高い目標に向かい、周囲を鼓舞しながら推進します。
                        <br/><span className="font-bold text-indigo-700 mt-2 block">→ 明確な目標や評価制度のある環境で力を発揮します。</span>
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                        <div className="font-bold text-indigo-700 mb-2 flex items-center gap-2"><Briefcase className="w-4 h-4"/> 適職</div>
                        <div className="flex flex-wrap gap-2">
                          {['起業家', 'PM', '営業MG'].map(j=><span key={j} className="bg-white px-2 py-1 text-xs rounded border border-slate-200">{j}</span>)}
                        </div>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                        <div className="font-bold text-rose-600 mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> 注意点</div>
                        <p className="text-xs text-slate-600">結果を急ぎすぎると周囲と摩擦を生む可能性があります。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Post-Result Guidance */}
            <div className="mt-16 text-center animate-fade-in-up delay-200">
              <ChevronDown className="w-8 h-8 text-slate-300 mx-auto mb-4 animate-bounce" />
              <p className="text-lg font-bold text-slate-800 mb-8">
                この結果を持って、次のステップへ進みませんか？<br/>
                <span className="text-indigo-600">プロのコンサルタントが無料で詳細解説します。</span>
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
                {['詳細解説', '企業紹介', '面接対策'].map((step, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold">{i+4}</div>
                    <div className="font-bold text-slate-700">{step}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button onClick={() => alert("予約フォーム")} className="shadow-xl">無料解説・面談を予約する</Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="スキルはあるはずなのに、なぜか評価されない。その原因は「相性」が見えていないだけかもしれません。">
            こんな「モヤモヤ」抱えていませんか？
          </SectionHeading>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "やりたいこと迷子", text: "「自分に向いている仕事」が分からず、求人サイトを眺めるだけで時間が過ぎてしまう。" },
              { title: "カルチャーの不一致", text: "前の職場では、実力よりも「社内政治」や「雰囲気」に馴染めず消耗してしまった。" },
              { title: "強みが伝わらない", text: "面接で自分の良さをうまく言語化できず、ありきたりな志望動機になってしまう。" }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow border-t-4 border-t-indigo-500">
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-2xl">
                  {['🤔', '😓', '😶'][i]}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why SEISEI (Features) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="SEISEIは「感覚」に頼りません。「データ」でマッチングします。" center={true}>
            選ばれる3つの理由
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "01. 科学的な性格診断", desc: "50問の質問からあなたの特性を8項目で分析。自分でも気づかなかった「隠れた才能」を発見します。" },
              { icon: Users, title: "02. 企業も「性格診断」済み", desc: "紹介する企業側も同様のカルチャー分析を行っています。だから「入社してみたら違った」というミスマッチが起きません。" },
              { icon: TrendingUp, title: "03. 面接通過率が高い", desc: "診断データを元に「あなたの強み」を客観的に語れるようになるため、面接官への説得力が劇的に向上します。" }
            ].map((feature, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                  <feature.icon className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Voices (New Content!) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading subtitle="SEISEIを活用して、自分らしいキャリアを手に入れた方々の事例です。" center={true}>
            利用者様の声
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((voice, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-3xl border border-blue-100">
                    {voice.img}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-lg">{voice.name}</div>
                    <div className="text-xs text-slate-500 font-medium">{voice.age} / {voice.job}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-4 leading-snug">
                  {voice.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {voice.text}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {voice.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium">#{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">一般的なエージェントと何が違う？</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 border-b-2 border-slate-100 w-1/3"></th>
                      <th className="p-4 border-b-2 border-slate-100 text-center text-slate-400 font-medium">A社・B社</th>
                      <th className="p-4 border-b-2 border-indigo-600 bg-indigo-50 text-center text-indigo-800 font-bold text-lg rounded-t-xl">
                        SEISEI
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base">
                    <tr>
                      <td className="p-4 border-b border-slate-100 font-bold text-slate-700">求人の提案基準</td>
                      <td className="p-4 border-b border-slate-100 text-center text-slate-500">経歴・スキル重視</td>
                      <td className="p-4 border-b border-indigo-100 bg-indigo-50/30 text-center font-bold text-indigo-700">性格・カルチャー適合重視</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-slate-100 font-bold text-slate-700">担当者のアドバイス</td>
                      <td className="p-4 border-b border-slate-100 text-center text-slate-500">経験則による主観的意見</td>
                      <td className="p-4 border-b border-indigo-100 bg-indigo-50/30 text-center font-bold text-indigo-700">診断データに基づく客観的助言</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-slate-100 font-bold text-slate-700">入社後のミスマッチ</td>
                      <td className="p-4 border-b border-slate-100 text-center text-slate-500">「社風が合わない」が起きがち</td>
                      <td className="p-4 border-b border-indigo-100 bg-indigo-50/30 text-center font-bold text-indigo-700">性格一致だから定着率98%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="ご利用にあたってよくいただく質問をまとめました。" center={true}>
            よくある質問
          </SectionHeading>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "本当に無料ですか？後から料金がかかることはありますか？", a: "完全に無料です。私たちSEISEIは紹介先の企業様から採用手数料をいただいて運営しているため、求職者の方から料金をいただくことは一切ありません。" },
              { q: "今すぐ転職する気がなくても診断していいですか？", a: "もちろんです！まずは自分の市場価値や適性を知るためだけに診断を利用する方もたくさんいらっしゃいます。無理な勧誘は一切行いませんのでご安心ください。" },
              { q: "診断結果は誰かに見られますか？", a: "いいえ、診断結果はあなたとSEISEIの担当者のみが閲覧できます。現在の勤務先や他の方に見られることはありません。" },
              { q: "地方在住ですが、相談に乗ってもらえますか？", a: "はい、現在はオンライン（Zoom等）での解説・面談を中心に行っておりますので、全国どこからでもご利用いただけます。" }
            ].map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                  onClick={() => toggleFaq(i)}
                >
                  <span className="font-bold text-slate-800 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
                    {faq.q}
                  </span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-slate-400" /> : <Plus className="w-5 h-5 text-slate-400" />}
                </button>
                {openFaq === i && (
                  <div className="p-5 pt-0 bg-slate-50 text-slate-600 leading-relaxed border-t border-slate-100">
                    <div className="pt-4">{faq.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 to-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            今のあなたのままで、<br/>輝ける場所がある。
          </h2>
          <p className="text-lg text-indigo-200 mb-12 max-w-2xl mx-auto">
            まずは3分の診断で、あなた自身の「取扱説明書」を手に入れませんか？<br/>
            そこから新しいキャリアが始まります。
          </p>
          
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-full max-w-xl mx-auto">
              <Button 
                className="w-full text-xl py-5" 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  document.getElementById('hero-input').focus();
                }}
              >
                無料で診断を始める <ArrowRight className="ml-2" />
              </Button>
          </div>
          <p className="mt-6 text-sm text-indigo-300 opacity-80">
            ※累計診断者数 10,000人突破
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">S</div>
              <span className="text-xl font-bold text-white">株式会社SEISEI</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">会社概要</a>
              <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-white transition-colors">利用規約</a>
              <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
            </div>
          </div>
          <p className="text-xs text-center md:text-left mt-8">© 2025 SEISEI Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
