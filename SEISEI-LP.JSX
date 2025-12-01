import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, Star, UserCheck, ArrowRight, Activity, Heart, ShieldCheck, Menu, X, Send, Loader2, AlertCircle, FileText } from 'lucide-react';

export default function SeiseiIntegratedLP() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // ---------------------------------------------------------
  // 診断機能用ロジック（高機能版を移植）
  // ---------------------------------------------------------
  const [quizStep, setQuizStep] = useState(0); // 0:未開始, 1~:質問中, 99:結果
  const [answers, setAnswers] = useState<number[]>([]);
  const [diagnosisResult, setDiagnosisResult] = useState<string | null>(null);
  
  // フォーム送信ステート
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

  // 回答処理
  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    
    // スムーズな遷移のための少しの遅延
    setTimeout(() => {
        if (quizStep < questions.length) {
          setQuizStep(quizStep + 1);
        } else {
          // 結果判定ロジック
          const countA = newAnswers.filter(a => a === 0).length;
          const countB = newAnswers.filter(a => a === 1).length;
          const countC = newAnswers.filter(a => a === 2).length;
          
          let result = "調和者タイプ";
          if (countA >= countB && countA >= countC) result = "開拓者タイプ";
          else if (countB >= countA && countB >= countC) result = "堅実家タイプ";
          
          setDiagnosisResult(result);
          setQuizStep(99); // 結果画面へ
        }
    }, 300);
  };

  const startQuiz = () => setQuizStep(1);

  // フォーム送信処理（LP内完結型）
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // API送信シミュレーション
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* ---------------------------------------------------------
          ヘッダー：クリニック風の清潔感あるデザイン（最初の案を採用）
         --------------------------------------------------------- */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-4 shadow-sm'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold font-serif">S</div>
            <span className="text-xl font-bold tracking-widest text-blue-900">SEISEI</span>
          </div>
          
          <div className="hidden md:flex gap-6 items-center">
            <nav className="text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-blue-900 transition-colors mx-3">SEISEIについて</a>
              <a href="#diagnosis-section" className="hover:text-blue-900 transition-colors mx-3">キャリア診断</a>
              <a href="#" className="hover:text-blue-900 transition-colors mx-3">利用者の声</a>
            </nav>
            <button 
              onClick={() => document.getElementById('diagnosis-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-bold shadow-md transition-all text-sm"
            >
              無料相談予約
            </button>
          </div>

          <button className="md:hidden text-slate-800" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* ---------------------------------------------------------
          ヒーローセクション：最初の「ドクターズコスメ」風デザイン
         --------------------------------------------------------- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
        {/* 背景装飾（優しい色味） */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-50/50 rounded-bl-[150px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-yellow-50/50 rounded-tr-[100px] -z-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white border border-blue-100 px-4 py-1.5 rounded-full text-blue-900 text-xs font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                科学的な適職マッチング
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                今の職場は、<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">あなたの性格</span>に<br/>
                合っていますか？
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                株式会社SEISEIは、履歴書だけでは見えない<br/>
                「本来のあなた」と「企業風土」を科学的に分析。<br/>
                まるでオーダーメイドのような、失敗しない転職を。
              </p>
              
              <div className="pt-4">
                <button 
                  onClick={() => document.getElementById('diagnosis-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-blue-800 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
                >
                  <Activity size={20} className="text-yellow-400" />
                  あなたの「適職タイプ」を診断する
                </button>
                <p className="mt-3 text-slate-400 text-xs ml-4">※登録不要・約1分で完了します</p>
              </div>
            </div>
            
            <div className="md:w-1/2 relative flex justify-center">
              {/* イメージ画像（抽象的なイラストのプレースホルダー） */}
              <div className="relative w-full max-w-md aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
                    <UserCheck size={80} className="mb-4 text-blue-100" />
                    <p className="font-serif italic text-lg text-slate-400">Reliable Career Partner</p>
                 </div>
                 {/* 浮かぶバッジ */}
                 <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border-l-4 border-yellow-400">
                    <p className="text-xs text-slate-500 font-bold">マッチング満足度</p>
                    <p className="text-3xl font-bold text-blue-900">98.2<span className="text-sm">%</span></p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          問題提起セクション：共感を生むチェックリスト
         --------------------------------------------------------- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">その「モヤモヤ」は、<br/>環境とのミスマッチかもしれません。</h2>
            <div className="h-1 w-16 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-6 text-slate-700 flex items-center gap-2">
                <AlertCircle size={20} className="text-red-400" />
                こんな悩みはありませんか？
              </h3>
              <ul className="space-y-4">
                {[
                  "頑張っているのに、なぜか正当に評価されない",
                  "上司やチームの雰囲気に馴染めず、疲れてしまう",
                  "自分の強みが活かせていない気がする",
                  "転職しても、また同じ失敗をしそうで怖い"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-slate-100 text-slate-400 rounded-full p-1 mt-0.5 shrink-0">
                      <Check size={14} />
                    </div>
                    <span className="text-slate-600 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start p-8">
               <h3 className="text-xl font-bold text-blue-900 mb-4">
                 必要なのは、「自分の取扱説明書」を知ること。
               </h3>
               <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                 SEISEIは、独自のアルゴリズムであなたの性格特性を分析。<br/>
                 感覚ではなく「データ」に基づいて、あなたが最も輝ける場所を提案します。
               </p>
               <div className="flex items-center gap-4 text-blue-800 font-bold bg-blue-50 px-6 py-3 rounded-lg w-full">
                 <ShieldCheck className="text-blue-600" />
                 <span>入社後の定着率 98%の実績</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          ★ここが重要！統合された診断アプリセクション
          デザインは「LPと馴染む白ベース」に変更されています
         --------------------------------------------------------- */}
      <section id="diagnosis-section" className="py-24 bg-blue-900 text-white relative overflow-hidden">
        {/* 背景の装飾 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase">Diagnostic Test</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">SEISEI キャリアタイプ診断</h2>
            <p className="text-blue-200 mt-4">3つの質問で、あなたの適性と相性の良い企業を分析します。</p>
          </div>

          {/* 診断カード（白いカードデザインで清潔感を維持） */}
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden text-slate-800 min-h-[500px] flex flex-col">
            
            {/* 診断：スタート画面 */}
            {quizStep === 0 && (
              <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12 text-center animate-in fade-in duration-500">
                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  <Activity size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  あなたの「隠れた才能」を見つけます
                </h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  簡単な質問に答えるだけで、SEISEI独自のデータベースから<br className="hidden md:block"/>
                  あなたに最適な「働き方」と「企業タイプ」を判定します。
                </p>
                <button 
                  onClick={startQuiz}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 text-lg font-bold py-4 px-12 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  診断をスタートする <ChevronRight size={20} />
                </button>
                <p className="mt-4 text-xs text-slate-400">所要時間：約1分 / 完全無料</p>
              </div>
            )}

            {/* 診断：質問画面（プログレスバー付き） */}
            {quizStep > 0 && quizStep <= questions.length && (
              <div className="flex-1 flex flex-col p-8 md:p-12 animate-in slide-in-from-right duration-300">
                {/* ヘッダー・進捗 */}
                <div className="mb-8">
                  <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase">
                    <span>Question {quizStep}</span>
                    <span>{Math.round((quizStep / questions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-blue-600 h-1.5 rounded-full transition-all duration-500 ease-out" 
                      style={{ width: `${(quizStep / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* 質問文 */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-10 text-center leading-relaxed">
                  Q{quizStep}. <br/>{questions[quizStep - 1].text}
                </h3>

                {/* 選択肢 */}
                <div className="space-y-4 max-w-lg mx-auto w-full">
                  {questions[quizStep - 1].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className="w-full text-left p-5 rounded-xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-between group bg-white"
                    >
                      <span className="font-medium text-slate-700 group-hover:text-blue-900">{option.text}</span>
                      <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 診断：結果＆フォーム画面（ここをシームレスに結合） */}
            {quizStep === 99 && formState === 'idle' && (
              <div className="flex-1 p-8 md:p-12 animate-in zoom-in duration-500">
                
                {/* 診断結果表示エリア */}
                <div className="text-center mb-10">
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">Diagnosis Result</p>
                  <h3 className="text-3xl font-bold text-blue-900 mb-4">
                    あなたは<span className="text-yellow-500">「{diagnosisResult}」</span>です
                  </h3>
                  <div className="flex justify-center gap-1 mb-6">
                    {[1,2,3,4,5].map(i => <Star key={i} size={20} className="text-yellow-400 fill-current" />)}
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-left max-w-xl mx-auto">
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {diagnosisResult === "開拓者タイプ" ? "自ら道を切り開くリーダー気質。変化の激しい環境で最大の力を発揮します。" : 
                       diagnosisResult === "堅実家タイプ" ? "着実に計画を実行する実務のエキスパート。安定した基盤のある企業で信頼を得られます。" : 
                       "チームの和を尊ぶバランサー。人間関係の良い職場で、組織の潤滑油として輝きます。"}
                    </p>
                  </div>
                </div>

                {/* 矢印で誘導 */}
                <div className="flex justify-center mb-8">
                  <div className="bg-slate-100 rounded-full p-2 animate-bounce">
                    <ArrowRight className="rotate-90 text-slate-400" />
                  </div>
                </div>

                {/* 相談フォームエリア */}
                <div className="max-w-xl mx-auto">
                  <div className="text-center mb-6">
                    <h4 className="font-bold text-slate-900 text-lg">この結果をプロに共有して相談する</h4>
                    <p className="text-slate-500 text-sm">SEISEIのコンサルタントが、あなたのタイプに合った求人をご提案します。</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* 診断結果添付の演出 */}
                    <div className="bg-green-50 px-4 py-3 rounded-lg border border-green-100 flex items-center justify-between text-sm text-green-800 font-medium">
                      <span className="flex items-center gap-2"><FileText size={16} /> 診断結果（{diagnosisResult}）を添付</span>
                      <Check size={16} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <input 
                         required
                         type="text" 
                         placeholder="お名前" 
                         className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                         value={formData.name}
                         onChange={e => setFormData({...formData, name: e.target.value})}
                       />
                       <input 
                         required
                         type="email" 
                         placeholder="メールアドレス" 
                         className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                         value={formData.email}
                         onChange={e => setFormData({...formData, email: e.target.value})}
                       />
                    </div>
                    <textarea 
                      placeholder="今の悩みがあればご記入ください（任意）" 
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none h-20 resize-none transition-all"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                    
                    <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-800 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                      <Send size={18} />
                      結果を送信して無料相談を予約
                    </button>
                    <p className="text-center text-xs text-slate-400">プライバシーポリシーに同意の上送信してください</p>
                  </form>
                </div>
              </div>
            )}

            {/* 送信中画面 */}
            {formState === 'submitting' && (
              <div className="flex-1 flex flex-col items-center justify-center p-12">
                <Loader2 size={48} className="text-blue-600 animate-spin mb-4" />
                <p className="text-slate-600 font-bold">データを送信中...</p>
              </div>
            )}

            {/* 送信完了画面 */}
            {formState === 'success' && (
              <div className="flex-1 flex flex-col items-center justify-center p-12 text-center animate-in zoom-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">送信が完了しました</h3>
                <p className="text-slate-600 mb-8 max-w-sm">
                  お問い合わせありがとうございます。<br/>
                  担当のコンサルタントより、ご登録のメールアドレスへご連絡いたします。
                </p>
                <button onClick={() => window.location.reload()} className="text-blue-600 font-bold text-sm hover:underline">
                  トップページへ戻る
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          特徴・フッター（最初のデザインを踏襲）
         --------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-12">SEISEIが選ばれる理由</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Heart className="text-pink-500" />, title: "性格重視のマッチング", text: "スキルだけでなく、企業のカルチャーとの相性を最優先。" },
                { icon: <ShieldCheck className="text-green-500" />, title: "無理な転職は勧めません", text: "あなたのキャリアにとって最適解でない場合は、現職残留も提案します。" },
                { icon: <UserCheck className="text-blue-500" />, title: "専任担当制", text: "業界を知り尽くしたプロが、あなたのペースに合わせて伴走します。" }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-600">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
           <div className="text-2xl font-bold text-white mb-2">SEISEI</div>
           <p className="text-xs">Copyright © SEISEI Inc. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
