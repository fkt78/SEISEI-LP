import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, Star, UserCheck, ArrowRight, Activity, Heart, ShieldCheck, Menu, X } from 'lucide-react';

export default function SeiseiLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // 診断機能用ステート
  const [quizStep, setQuizStep] = useState(0); // 0:未開始, 1~:質問中, 99:結果
  const [answers, setAnswers] = useState<number[]>([]);
  const [diagnosisResult, setDiagnosisResult] = useState<string | null>(null);

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 診断データ
  const questions = [
    {
      id: 1,
      text: "仕事において、最も重視することは？",
      options: [
        { text: "新しいことへの挑戦・成長", score: "A" },
        { text: "安定した環境とワークライフバランス", score: "B" },
        { text: "チームワークと人間関係", score: "C" },
      ]
    },
    {
      id: 2,
      text: "トラブルが発生した時、あなたの行動は？",
      options: [
        { text: "すぐに解決策を考え、自ら動く", score: "A" },
        { text: "過去の事例やマニュアルを確認する", score: "B" },
        { text: "周囲に相談し、協力して対応する", score: "C" },
      ]
    },
    {
      id: 3,
      text: "理想の上司・リーダー像は？",
      options: [
        { text: "高い目標を示し、引っ張ってくれる人", score: "A" },
        { text: "明確な指示と公平な評価をくれる人", score: "B" },
        { text: "個人の意見を尊重し、見守ってくれる人", score: "C" },
      ]
    }
  ];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    
    if (quizStep < questions.length) {
      setQuizStep(quizStep + 1);
    } else {
      // 簡易的な結果判定ロジック
      const countA = newAnswers.filter(a => a === 0).length;
      const countB = newAnswers.filter(a => a === 1).length;
      const countC = newAnswers.filter(a => a === 2).length;
      
      if (countA >= countB && countA >= countC) setDiagnosisResult("開拓者タイプ");
      else if (countB >= countA && countB >= countC) setDiagnosisResult("堅実家タイプ");
      else setDiagnosisResult("調和者タイプ");
      
      setQuizStep(99); // 結果画面へ
    }
  };

  const startQuiz = () => setQuizStep(1);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">S</div>
            <span className={`text-xl font-bold tracking-widest ${isScrolled ? 'text-blue-900' : 'text-blue-900 md:text-white'}`}>SEISEI</span>
          </div>
          
          <div className="hidden md:flex gap-6 items-center">
            <nav className={`text-sm font-medium ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
              <a href="#about" className="hover:text-blue-500 transition-colors mx-3">SEISEIについて</a>
              <a href="#diagnosis" className="hover:text-blue-500 transition-colors mx-3">キャリア診断</a>
              <a href="#voice" className="hover:text-blue-500 transition-colors mx-3">利用者の声</a>
            </nav>
            <button 
              onClick={() => document.getElementById('diagnosis')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm"
            >
              無料相談を予約する
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-800" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image / Abstract shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-blue-50 rounded-bl-[100px] opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-50 rounded-tr-[100px] opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block bg-white/80 backdrop-blur border border-blue-100 px-4 py-1 rounded-full text-blue-900 text-sm font-bold shadow-sm">
                \ 3分でわかる / あなたの適職診断
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                今の職場は、<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">あなたの性格</span>に<br/>
                合っていますか？
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                株式会社SEISEIは、履歴書だけでは見えない<br/>
                「本来のあなた」と「企業風土」を科学的にマッチング。<br/>
                まるでオーダーメイドのような転職体験を。
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('diagnosis')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
                >
                  <Activity size={20} />
                  まずは性格診断を試す
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                 {/* Placeholder for Hero Image */}
                 <div className="bg-slate-200 rounded-xl h-64 md:h-96 w-full flex items-center justify-center overflow-hidden">
                    <div className="text-slate-400 text-center">
                        <UserCheck size={64} className="mx-auto mb-4 opacity-50" />
                        <p>Woman Looking Confident<br/>in Office Setting</p>
                    </div>
                 </div>
                 
                 {/* Floating Badge */}
                 <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 p-4 rounded-full shadow-lg font-bold text-center w-24 h-24 flex items-center justify-center flex-col leading-none">
                   <span className="text-xs">満足度</span>
                   <span className="text-2xl">98<span className="text-sm">%</span></span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation (Checklist) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">こんな「モヤモヤ」ありませんか？</h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600">
              その悩み、あなたの能力不足ではなく<br/>
              「環境とのミスマッチ」が原因かもしれません。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <ul className="space-y-4">
                {[
                  "頑張っているのに、なぜか評価されない",
                  "上司や同僚とのコミュニケーションが疲れる",
                  "自分の強みが何なのか、よく分からない",
                  "転職しても、また同じ失敗をしそうで怖い"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-red-100 text-red-500 rounded-full p-1 mt-0.5 shrink-0">
                      <X size={16} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-blue-900 text-white p-8 flex flex-col justify-center items-center text-center">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                必要なのは、<br/>
                「自分の取扱説明書」<br/>
                を知ること。
              </h3>
              <p className="text-blue-100 relative z-10 text-sm">
                SEISEIは、独自のアルゴリズムであなたの性格特性を分析し、
                科学的根拠に基づいたマッチングを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Section (The Core Feature) */}
      <section id="diagnosis" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
            
            {/* Header of Card */}
            <div className="bg-blue-900 text-white p-6 text-center">
              <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                <Activity className="text-yellow-400" />
                SEISEI キャリアタイプ診断
              </h2>
              <p className="text-blue-200 text-sm mt-1">3つの質問で、あなたの適正環境を分析します</p>
            </div>

            {/* Quiz Content */}
            <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
              
              {quizStep === 0 && (
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600 mb-4">
                    <ShieldCheck size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    あなたの「隠れた才能」を見つけます
                  </h3>
                  <p className="text-slate-600">
                    簡単な質問に答えるだけで、SEISEI独自のデータベースから<br/>
                    あなたに最適な「働き方」と「企業タイプ」を判定します。
                  </p>
                  <button 
                    onClick={startQuiz}
                    className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-white text-xl font-bold py-4 px-12 rounded-full shadow-lg transition-all transform hover:scale-105"
                  >
                    診断をスタートする
                  </button>
                  <p className="text-xs text-slate-400">※所要時間：約1分 / 完全無料</p>
                </div>
              )}

              {quizStep > 0 && quizStep <= questions.length && (
                <div className="animate-in fade-in slide-in-from-right duration-300">
                  <div className="mb-8">
                    <div className="flex justify-between text-sm font-bold text-blue-900 mb-2">
                      <span>Question {quizStep}</span>
                      <span>{quizStep} / {questions.length}</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${(quizStep / questions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 text-center">
                    Q{quizStep}. {questions[quizStep - 1].text}
                  </h3>

                  <div className="space-y-4">
                    {questions[quizStep - 1].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        className="w-full text-left p-4 md:p-5 rounded-xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-between group"
                      >
                        <span className="font-medium text-slate-700 group-hover:text-blue-900">{option.text}</span>
                        <ChevronRight className="text-slate-300 group-hover:text-blue-500" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 99 && (
                <div className="text-center animate-in zoom-in duration-500">
                  <p className="text-slate-500 font-bold mb-2">診断結果</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                    あなたは<span className="text-yellow-500">「{diagnosisResult}」</span>です
                  </h3>
                  
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8 text-left">
                    <h4 className="font-bold text-lg mb-2 text-slate-800 flex items-center gap-2">
                      <Star className="text-yellow-400 fill-current" size={20} />
                      このタイプの特徴
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {diagnosisResult === "開拓者タイプ" && "自らの手で道を切り開くことに喜びを感じるリーダー気質。変化の激しい環境や、裁量権の大きいスタートアップなどで最大のパフォーマンスを発揮します。"}
                      {diagnosisResult === "堅実家タイプ" && "計画的かつ着実に物事を進める実務のエキスパート。整ったワークフローがある環境や、専門性を深められる職種において、周囲からの絶大な信頼を得られます。"}
                      {diagnosisResult === "調和者タイプ" && "チームの空気を読み、円滑なコミュニケーションを生み出すバランサー。人間関係を重視する企業文化や、顧客に寄り添うカスタマーサクセスなどで輝きます。"}
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <p className="text-blue-900 font-bold text-sm text-center">
                        相性の良い企業数: <span className="text-2xl">1,240</span> 社 (SEISEIデータベース)
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="font-bold text-slate-800">
                      この結果を持って、<br className="md:hidden"/>具体的なキャリア相談をしませんか？
                    </p>
                    <ArrowRight className="mx-auto text-blue-300 rotate-90 my-2" />
                    
                    {/* The Main Conversion Form/Button Area */}
                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                       <p className="text-xs text-slate-500 mb-4">SEISEIのキャリアコンサルタントが、あなたのタイプに合った非公開求人をご紹介します。</p>
                       <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                          <input type="email" placeholder="メールアドレスを入力" className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500" />
                          <button className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 shadow-md transition-colors">
                            診断結果を送信して相談予約 (無料)
                          </button>
                       </form>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* Features / Why SEISEI */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800">SEISEIが選ばれる理由</h2>
            <p className="mt-4 text-slate-500">ただの「仕事紹介」ではない、人生のパートナーとして。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={40} className="text-pink-500" />,
                title: "性格重視のマッチング",
                desc: "スキルだけでなく、企業のカルチャーとあなたの性格の相性を最優先に考えます。"
              },
              {
                icon: <Activity size={40} className="text-blue-500" />,
                title: "入社後定着率 98%",
                desc: "無理な転職は勧めません。長く幸せに働ける環境だけを厳選してご紹介します。"
              },
              {
                icon: <UserCheck size={40} className="text-green-500" />,
                title: "専任カウンセラー制",
                desc: "診断結果に基づき、業界に精通したプロがあなた専任でサポートします。"
              }
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 hover:bg-slate-50 rounded-xl transition-colors">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8 border-b border-slate-700 pb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold text-white mb-4">株式会社 SEISEI</div>
              <p className="text-sm leading-relaxed max-w-sm">
                人と企業の「性格」を科学し、<br/>
                世界で一番幸せなマッチングを創造する。<br/>
                それが私たちのミッションです。
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Service</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">キャリア診断</a></li>
                <li><a href="#" className="hover:text-white">転職相談サービス</a></li>
                <li><a href="#" className="hover:text-white">企業向け採用支援</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">会社概要</a></li>
                <li><a href="#" className="hover:text-white">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} SEISEI Inc. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
