<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>株式会社SEISEI | 性格マッチング転職</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');
        
        body {
            font-family: 'Noto Sans JP', sans-serif;
        }

        /* カスタムアニメーション */
        .fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .pulse-ring {
            animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }

        @keyframes pulse-ring {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(37, 99, 235, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
        }

        /* ヒーロー背景画像 */
        .hero-bg {
            background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }

        .option-card:hover {
            border-color: #2563EB;
            background-color: #EFF6FF;
        }
        
        /* 質問進行バー */
        .progress-step {
            transition: all 0.3s ease;
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased">

    <!-- ヘッダー -->
    <header class="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="text-2xl font-bold tracking-tight text-slate-900 group">
                株式会社 <span class="text-blue-600 group-hover:text-blue-500 transition">SEISEI</span>
            </a>
            <nav class="hidden md:flex space-x-8 items-center">
                <a href="#about" class="text-sm font-medium hover:text-blue-600 transition">SEISEIの強み</a>
                <a href="#diagnosis" class="text-sm font-medium hover:text-blue-600 transition">性格診断</a>
                <a href="#contact" class="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200 text-sm font-bold">
                    無料相談する
                </a>
            </nav>
            <button class="md:hidden text-slate-600">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </div>
    </header>

    <!-- ヒーローセクション -->
    <section class="hero-bg min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div class="space-y-8 text-center lg:text-left pt-10 lg:pt-0">
                <div class="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    適職診断実績 10,000件突破
                </div>
                <h1 class="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                    スキルよりも、<br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">「あなたらしさ」</span>で<br>
                    選ばれるキャリアを。
                </h1>
                <p class="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    「今の職場、なんとなく合わない...」<br>
                    その違和感の正体は、あなたの性格と社風のミスマッチかもしれません。<br>
                    16の質問から、あなたの本当のワークスタイルを見つけましょう。
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button onclick="scrollToDiagnosis()" class="pulse-ring bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200 flex items-center justify-center gap-3">
                        <i class="fas fa-clipboard-list"></i> 
                        今すぐ診断を始める
                    </button>
                    <a href="#about" class="bg-white/80 backdrop-blur text-slate-700 border border-slate-300 px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition flex items-center justify-center shadow-sm">
                        詳しく見る
                    </a>
                </div>
            </div>
            
            <!-- スマホ画面風イメージ -->
            <div class="hidden lg:block relative pl-10">
                <div class="absolute -top-10 -right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div class="relative bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-sm mx-auto transform rotate-2">
                    <div class="border-b pb-4 mb-4">
                        <h4 class="font-bold text-lg text-slate-800">こんな悩みありませんか？</h4>
                    </div>
                    <div class="space-y-3">
                        <div class="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-lg">
                            <i class="fas fa-check-circle text-blue-500 text-xl"></i>
                            <span>頑張っても正当に評価されない</span>
                        </div>
                        <div class="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-lg">
                            <i class="fas fa-check-circle text-blue-500 text-xl"></i>
                            <span>上司の顔色ばかり伺っている</span>
                        </div>
                        <div class="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-lg">
                            <i class="fas fa-check-circle text-blue-500 text-xl"></i>
                            <span>将来のキャリアが見えない</span>
                        </div>
                    </div>
                    <div class="mt-6 text-center">
                        <span class="text-xs text-slate-400">1つでも当てはまるなら...</span>
                        <div class="mt-2 bg-blue-600 text-white py-2 rounded-lg font-bold text-sm">
                            無料診断へ進む
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 診断アプリセクション (メインコンテンツ) -->
    <section id="diagnosis" class="py-24 bg-gradient-to-b from-slate-50 to-blue-50 scroll-mt-20">
        <div class="container mx-auto px-4 max-w-3xl">
            <div class="text-center mb-10">
                <span class="text-blue-600 font-bold tracking-widest uppercase text-xs">DIAGNOSIS</span>
                <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4">適職タイプ診断</h2>
                <p class="text-slate-500">あなたの価値観を深掘りする16の質問。</p>
            </div>

            <!-- 診断カードコンテナ -->
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[550px] relative border border-slate-100 flex flex-col">
                
                <!-- 1. スタート画面 -->
                <div id="diag-start" class="absolute inset-0 p-8 md:p-12 flex flex-col items-center justify-center text-center fade-in z-10 bg-white">
                    <div class="mb-6 relative">
                        <div class="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-70 animate-pulse"></div>
                        <div class="relative bg-white p-6 rounded-full shadow-md text-6xl text-blue-600">
                            <i class="fas fa-clipboard-list"></i>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">あなたの「ワークスタイル」を分析</h3>
                    <p class="text-slate-500 mb-8 leading-relaxed max-w-md mx-auto">
                        全16問の質問に答えるだけで、<br>
                        あなたに本当に合った働き方や企業タイプを診断します。<br>
                        <span class="text-sm text-blue-600 font-bold mt-2 block">直感でお答えください。</span>
                    </p>
                    <button onclick="startDiagnosis()" class="w-full md:w-auto bg-blue-600 text-white px-16 py-4 rounded-full font-bold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition transform duration-200">
                        診断スタート
                    </button>
                    <div class="mt-6 flex items-center justify-center gap-4 text-xs text-slate-400">
                        <span><i class="fas fa-clock mr-1"></i>所要時間 約2分</span>
                        <span><i class="fas fa-user-shield mr-1"></i>匿名回答OK</span>
                    </div>
                </div>

                <!-- 2. 質問画面（動的生成） -->
                <div id="diag-question" class="absolute inset-0 flex flex-col hidden bg-white z-10">
                    <!-- ヘッダー部分 -->
                    <div class="px-6 pt-6 pb-2 border-b border-slate-50">
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-xs font-bold text-slate-400 tracking-wider">Q<span id="q-number" class="text-blue-600 text-lg ml-1">1</span> / <span id="q-total">16</span></span>
                            <div class="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
                                <div id="progress-bar" class="h-full bg-blue-600 w-0 transition-all duration-300 ease-out"></div>
                            </div>
                        </div>
                    </div>

                    <!-- 質問と選択肢部分 -->
                    <div class="flex-1 flex flex-col justify-center items-center p-6 md:p-10 overflow-y-auto custom-scrollbar">
                        <div id="question-container" class="w-full max-w-lg mx-auto text-center">
                            <h3 id="q-text" class="text-xl md:text-2xl font-bold leading-snug mb-10 h-20 flex items-center justify-center">
                                <!-- JSで挿入 -->
                            </h3>

                            <div class="space-y-4 w-full">
                                <button onclick="selectOption(2)" class="option-card w-full p-4 border-2 border-slate-200 rounded-xl transition-all duration-200 hover:shadow-md bg-white font-bold text-slate-700 hover:text-blue-600">
                                    はい
                                </button>
                                <button onclick="selectOption(1)" class="option-card w-full p-4 border-2 border-slate-200 rounded-xl transition-all duration-200 hover:shadow-md bg-white font-bold text-slate-700 hover:text-blue-600">
                                    どちらでもない
                                </button>
                                <button onclick="selectOption(0)" class="option-card w-full p-4 border-2 border-slate-200 rounded-xl transition-all duration-200 hover:shadow-md bg-white font-bold text-slate-700 hover:text-blue-600">
                                    いいえ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3. 分析中画面 -->
                <div id="diag-loading" class="absolute inset-0 flex flex-col items-center justify-center bg-white hidden z-20">
                    <div class="w-64 bg-slate-100 rounded-full h-2 mb-6 overflow-hidden">
                        <div class="h-full bg-blue-600 animate-[loading_1.5s_ease-in-out_infinite] w-1/2"></div>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 mb-2">診断結果を作成中...</h3>
                    <p class="text-sm text-slate-500">あなたの回答パターンを分析しています</p>
                </div>

                <!-- 4. 結果画面 -->
                <div id="diag-result" class="absolute inset-0 flex flex-col hidden bg-slate-50 z-10 overflow-hidden">
                    <div class="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10">
                        <div class="w-full max-w-lg mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div class="text-center mb-6">
                                <span class="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3">診断完了</span>
                                <p class="text-sm text-slate-500 font-bold mb-1">あなたに最適なタイプは...</p>
                                <h3 id="result-title" class="text-2xl md:text-3xl font-extrabold text-blue-700 mb-2">
                                    <!-- JSで挿入 -->
                                </h3>
                                <div class="w-full h-px bg-slate-100 my-4"></div>
                            </div>

                            <div class="bg-blue-50 p-5 rounded-xl mb-6 text-left border border-blue-100">
                                <h4 class="font-bold text-blue-900 mb-2 text-sm">
                                    <i class="fas fa-search-plus mr-1"></i> タイプ分析結果
                                </h4>
                                <p id="result-desc" class="text-slate-700 text-sm leading-relaxed mb-4">
                                    <!-- JSで挿入 -->
                                </p>
                            </div>

                            <div class="text-center space-y-4">
                                <p class="text-xs text-slate-500 font-bold">
                                    ▼ この結果について詳しく相談する ▼
                                </p>
                                <button onclick="scrollToContact()" class="w-full bg-orange-500 text-white px-6 py-4 rounded-xl font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-100 animate-pulse text-lg">
                                    無料相談で求人リストを受け取る
                                </button>
                                <div class="pt-2">
                                    <button onclick="resetDiagnosis()" class="text-xs text-slate-400 hover:text-blue-600 underline">
                                        <i class="fas fa-redo mr-1"></i>診断をやり直す
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- コンタクトフォーム -->
    <section id="contact" class="py-24 bg-white">
        <div class="container mx-auto px-6 max-w-2xl">
            <div class="text-center mb-12">
                <span class="text-blue-600 font-bold tracking-widest uppercase text-xs">CONTACT</span>
                <h2 class="text-3xl font-bold mt-2">無料キャリア相談申し込み</h2>
                <p class="text-slate-500 mt-4">SEISEIのエージェントが、あなたの「性格」に合う企業だけをご提案します。</p>
            </div>

            <form class="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100" onsubmit="submitForm(event)">
                <div class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-2">お名前 <span class="text-red-500">*</span></label>
                            <input type="text" placeholder="山田 太郎" class="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition" required>
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-2">メールアドレス <span class="text-red-500">*</span></label>
                            <input type="email" placeholder="example@seisei.co.jp" class="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition" required>
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">ご相談内容</label>
                        <div class="relative">
                            <textarea id="contact-message" rows="6" class="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition resize-none" placeholder="まずは相談したい、など"></textarea>
                            <div class="absolute bottom-3 right-3 text-xs text-slate-400 bg-white/80 px-2 rounded border border-slate-100 shadow-sm">
                                <i class="fas fa-magic text-blue-400 mr-1"></i>診断結果反映済み
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="w-full bg-blue-600 text-white text-lg font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-xl shadow-blue-100 transform active:scale-95 duration-100">
                        上記の内容で送信する
                    </button>
                    
                    <p class="text-center text-xs text-slate-400 mt-4">
                        個人情報は厳重に管理され、同意なく第三者に提供されることはありません。
                    </p>
                </div>
            </form>
        </div>
    </section>

    <!-- フッター -->
    <footer class="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div class="container mx-auto px-6 text-center md:text-left">
            <div class="flex flex-col md:flex-row justify-between items-center mb-8">
                <div class="mb-6 md:mb-0">
                    <div class="text-2xl font-bold tracking-tight mb-2">
                        株式会社 <span class="text-blue-400">SEISEI</span>
                    </div>
                    <p class="text-slate-400 text-sm">あなたの個性が、未来をつくる。</p>
                </div>
                <div class="flex gap-6 text-sm text-slate-400">
                    <a href="#" class="hover:text-white transition">会社概要</a>
                    <a href="#" class="hover:text-white transition">プライバシーポリシー</a>
                </div>
            </div>
            <div class="border-t border-slate-800 pt-8 text-slate-600 text-xs">
                &copy; 2024 SEISEI Inc. All rights reserved.
            </div>
        </div>
    </footer>

    <!-- JavaScript Logic -->
    <script>
        // --- 設定データ ---
        // 指定URLから抽出した全16問
        const questions = [
            "ひとりで仕事をする方が好き",
            "出社するよりも在宅で働きたい",
            "好きなことを仕事にしたい",
            "仕事よりも趣味を優先したい",
            "予定を立てるより、気分で動く方が好き",
            "収入よりも自由を優先したい",
            "仕事はきっちり計画を立てる方だ",
            "仕事が生きがいだと思う",
            "カフェで仕事をするのが好き",
            "雑音のある場所や外の方が集中できる",
            "仕事よりも彼女（パートナー）との時間を優先したい",
            "仕事のスケジュールは恋人の都合に合わせたい",
            "旅をしながら働くのに憧れる",
            "どこでも働ける環境が理想",
            "自然の中や開放的な場所で仕事をしたい",
            "休日はアウトドアを楽しみたい"
        ];

        // 状態管理変数
        let currentStep = 0;
        let totalScore = 0; // はい=2, どちらでもない=1, いいえ=0

        // --- 画面遷移関数 ---
        function switchScreen(hideId, showId) {
            const hideEl = document.getElementById(hideId);
            const showEl = document.getElementById(showId);
            hideEl.classList.remove('fade-in');
            hideEl.classList.add('hidden');
            showEl.classList.remove('hidden');
            showEl.classList.add('fade-in');
        }

        function startDiagnosis() {
            switchScreen('diag-start', 'diag-question');
            renderQuestion();
        }

        // --- 質問描画ロジック ---
        function renderQuestion() {
            // プログレスバー更新
            const progress = ((currentStep + 1) / questions.length) * 100;
            document.getElementById('q-number').innerText = currentStep + 1;
            document.getElementById('q-total').innerText = questions.length;
            document.getElementById('progress-bar').style.width = `${progress}%`;
            
            // 質問文更新
            const qContainer = document.getElementById('question-container');
            // フェード効果のために一度クラスを外す
            qContainer.classList.remove('fade-in');
            void qContainer.offsetWidth; // リフロー
            qContainer.classList.add('fade-in');

            document.getElementById('q-text').innerText = questions[currentStep];
        }

        function selectOption(score) {
            totalScore += score;
            
            if (currentStep < questions.length - 1) {
                currentStep++;
                renderQuestion();
            } else {
                finishDiagnosis();
            }
        }

        // --- 診断完了・結果表示 ---
        function finishDiagnosis() {
            switchScreen('diag-question', 'diag-loading');
            
            // ローディング演出
            setTimeout(() => {
                switchScreen('diag-loading', 'diag-result');
                showResultDetails();
            }, 1500);
        }

        function showResultDetails() {
            const titleEl = document.getElementById('result-title');
            const descEl = document.getElementById('result-desc');
            
            // 仮ロジック：合計スコア(Max 32)に基づいて判定
            // 質問内容が「自由・在宅・マイペース」寄りなので、スコアが高いほどフリーランス向き
            
            if (totalScore >= 24) {
                // High Score: 自由重視
                titleEl.innerText = "【自由奔放】ノマドワーカータイプ";
                descEl.innerText = "あなたは場所や時間に縛られない働き方を強く求めています。高い自律性を持ち、自分のペースで仕事を進める環境で最大のパフォーマンスを発揮します。完全リモートやフルフレックス、成果報酬型の企業が適しています。";
            } else if (totalScore >= 12) {
                // Mid Score: バランス重視
                titleEl.innerText = "【堅実派】ハイブリッドワーカータイプ";
                descEl.innerText = "あなたは自由と安定のバランスを大切にするタイプです。適度な自由は欲しいけれど、チームとの繋がりや組織の安定感も捨てがたいと考えています。週2~3日のリモートワークや、副業OKな柔軟な企業がおすすめです。";
            } else {
                // Low Score: 安定/オフィス重視
                titleEl.innerText = "【組織重視】オフィススペシャリストタイプ";
                descEl.innerText = "あなたは整った環境で、チームと密に連携しながら働くことに喜びを感じます。オンオフの切り替えを明確にし、オフィスという「場」で集中して成果を出すことが得意です。安定した基盤のある企業や、チームワーク重視の職場が適しています。";
            }
        }

        // --- フォーム連携 ---
        function scrollToDiagnosis() {
            const target = document.getElementById('diagnosis');
            if(target) target.scrollIntoView({ behavior: 'smooth' });
        }

        function scrollToContact() {
            const target = document.getElementById('contact');
            if(target) target.scrollIntoView({ behavior: 'smooth' });
            
            const resultTitle = document.getElementById('result-title').innerText;
            const messageBox = document.getElementById('contact-message');

            setTimeout(() => {
                messageBox.value = `【診断結果: ${resultTitle}】\n（スコア: ${totalScore}/${questions.length * 2}）\n\n診断結果を見ました。この結果に基づいた求人や働き方について相談したいです。`;
                messageBox.focus();
                messageBox.classList.add('ring-2', 'ring-blue-200', 'border-blue-500');
            }, 800);
        }

        function resetDiagnosis() {
            currentStep = 0;
            totalScore = 0;
            
            document.getElementById('diag-result').classList.add('hidden');
            document.getElementById('diag-start').classList.remove('hidden');
            document.getElementById('diag-start').classList.add('fade-in');
        }

        function submitForm(e) {
            e.preventDefault();
            alert('お問い合わせありがとうございます！\n\n株式会社SEISEIの担当者より、24時間以内にご連絡いたします。');
        }

        // スムーズスクロール
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    </script>
</body>
</html>
