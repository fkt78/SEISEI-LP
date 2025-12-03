<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>株式会社SEISEI | あなたの性格から導く最適キャリア</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');
        body {
            font-family: 'Noto Sans JP', sans-serif;
        }
        .gradient-text {
            background: linear-gradient(135deg, #2563EB, #06B6D4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .hero-bg {
            background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
            background-size: cover;
            background-position: center;
        }
        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        /* Checkbox custom style for better UX */
        .option-card:hover {
            border-color: #2563EB;
            background-color: #EFF6FF;
        }
        .selected-option {
            border-color: #2563EB;
            background-color: #DBEAFE;
            position: relative;
        }
        .selected-option::after {
            content: '\f00c';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            position: absolute;
            top: 10px;
            right: 10px;
            color: #2563EB;
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800">

    <!-- Header -->
    <header class="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold tracking-tight text-slate-900">
                株式会社 <span class="text-blue-600">SEISEI</span>
            </div>
            <nav class="hidden md:flex space-x-8">
                <a href="#about" class="hover:text-blue-600 transition">SEISEIについて</a>
                <a href="#diagnosis" class="hover:text-blue-600 transition">性格診断</a>
                <a href="#contact" class="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                    まずは相談する
                </a>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-bg min-h-screen flex items-center pt-20">
        <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-8">
                <span class="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-2">次世代の人材マッチング</span>
                <h1 class="text-4xl md:text-6xl font-bold leading-tight">
                    スキルよりも、<br>
                    <span class="gradient-text">「あなたらしさ」</span>で<br>
                    選ばれる転職を。
                </h1>
                <p class="text-lg text-slate-600 leading-relaxed">
                    株式会社SEISEIは、履歴書には書けないあなたの性格や価値観を重視。
                    まずは3分の性格診断で、あなたの本当の適職を見つけませんか？
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <button onclick="scrollToDiagnosis()" class="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200 flex items-center justify-center gap-2">
                        <i class="fas fa-clipboard-check"></i> 性格診断を始める
                    </button>
                    <a href="#about" class="bg-white text-slate-700 border border-slate-300 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition flex items-center justify-center">
                        詳しく見る
                    </a>
                </div>
            </div>
            <div class="hidden md:block">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Consulting" class="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
            </div>
        </div>
    </section>

    <!-- Concept Section -->
    <section id="about" class="py-20 bg-white">
        <div class="container mx-auto px-6 text-center max-w-4xl">
            <h2 class="text-3xl font-bold mb-6">なぜ、「性格」なのか？</h2>
            <p class="text-slate-600 mb-12 leading-loose">
                多くの転職が「スキルの不一致」ではなく「カルチャーの不一致」で失敗しています。<br>
                SEISEIは、独自のアルゴリズムであなたの性格特性を分析。<br>
                あなたらしく輝ける環境こそが、最高のパフォーマンスを生み出すと信じています。
            </p>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="p-6 bg-slate-50 rounded-xl">
                    <div class="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h3 class="font-bold text-xl mb-2">価値観マッチング</h3>
                    <p class="text-sm text-slate-500">企業のビジョンと個人の想いが重なる場所をご提案します。</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-xl">
                    <div class="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                        <i class="fas fa-chart-pie"></i>
                    </div>
                    <h3 class="font-bold text-xl mb-2">独自診断データ</h3>
                    <p class="text-sm text-slate-500">5万人のデータに基づく精度の高い性格分析ツールを使用。</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-xl">
                    <div class="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h3 class="font-bold text-xl mb-2">深いヒアリング</h3>
                    <p class="text-sm text-slate-500">診断結果をもとに、専任のエージェントが丁寧に壁打ちします。</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Diagnosis App Section -->
    <section id="diagnosis" class="py-20 bg-slate-100">
        <div class="container mx-auto px-6 max-w-3xl">
            <div class="text-center mb-10">
                <span class="text-blue-600 font-bold tracking-widest uppercase text-sm">DIAGNOSIS</span>
                <h2 class="text-3xl font-bold mt-2">あなたの適職タイプ診断</h2>
                <p class="text-slate-500 mt-4">簡単な3つの質問に答えるだけで、あなたの強みが見えてきます。</p>
            </div>

            <!-- Diagnosis Card -->
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[400px] relative">
                
                <!-- Start Screen -->
                <div id="diag-start" class="absolute inset-0 p-8 flex flex-col items-center justify-center text-center fade-in">
                    <div class="mb-6 text-6xl text-blue-500">
                        <i class="fas fa-search-plus"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">準備はいいですか？</h3>
                    <p class="text-slate-500 mb-8">所要時間は約30秒です。<br>直感でお答えください。</p>
                    <button onclick="startDiagnosis()" class="bg-blue-600 text-white px-10 py-3 rounded-full font-bold hover:bg-blue-700 transition w-full md:w-auto">
                        診断スタート
                    </button>
                </div>

                <!-- Question Screen -->
                <div id="diag-question" class="absolute inset-0 p-8 flex flex-col justify-between hidden">
                    <div>
                        <div class="flex justify-between items-center mb-6">
                            <span class="text-sm font-bold text-slate-400">QUESTION <span id="q-number">1</span>/3</span>
                            <div class="h-2 w-24 bg-slate-100 rounded-full overflow-hidden">
                                <div id="progress-bar" class="h-full bg-blue-500 w-1/3 transition-all duration-300"></div>
                            </div>
                        </div>
                        <h3 id="q-text" class="text-xl font-bold mb-8">休日の過ごし方はどちらに近いですか？</h3>
                        <div class="space-y-4">
                            <button onclick="selectOption(0)" class="option-card w-full text-left p-4 border-2 border-slate-100 rounded-xl transition flex items-center justify-between group">
                                <span id="opt-1" class="font-medium">家でゆっくり自分の時間を楽しむ</span>
                                <i class="fas fa-chevron-right text-slate-300 group-hover:text-blue-500"></i>
                            </button>
                            <button onclick="selectOption(1)" class="option-card w-full text-left p-4 border-2 border-slate-100 rounded-xl transition flex items-center justify-between group">
                                <span id="opt-2" class="font-medium">外に出かけて人と会ったり活動する</span>
                                <i class="fas fa-chevron-right text-slate-300 group-hover:text-blue-500"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-center">
                        <button onclick="resetDiagnosis()" class="text-slate-400 text-sm hover:text-slate-600 underline">最初からやり直す</button>
                    </div>
                </div>

                <!-- Result Screen -->
                <div id="diag-result" class="absolute inset-0 p-8 flex flex-col items-center justify-center text-center hidden overflow-y-auto">
                    <div class="w-full">
                        <p class="text-sm text-slate-500 font-bold mb-2">あなたのタイプは...</p>
                        <h3 id="result-title" class="text-3xl font-bold text-blue-600 mb-4">革新的なリーダータイプ</h3>
                        <div class="bg-blue-50 p-6 rounded-xl mb-6 text-left">
                            <p id="result-desc" class="text-slate-700 text-sm leading-relaxed mb-4">
                                あなたは新しいことに挑戦するのが得意で、周囲を巻き込む力があります。定型業務よりも、裁量権のあるプロジェクトや新規事業での活躍が期待できます。
                            </p>
                            <div class="flex items-center gap-2 text-xs font-bold text-blue-800">
                                <i class="fas fa-briefcase"></i>
                                <span>おすすめ職種: 企画職 / プロジェクトマネージャー / コンサルタント</span>
                            </div>
                        </div>
                        <p class="text-sm text-slate-500 mb-4">この結果をもとに、<br>SEISEIのキャリアアドバイザーと話してみませんか？</p>
                        <button onclick="scrollToContact()" class="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-200 w-full animate-bounce">
                            この結果で無料相談する <i class="fas fa-arrow-down ml-2"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white">
        <div class="container mx-auto px-6 max-w-2xl">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold">無料キャリア相談のお申し込み</h2>
                <p class="text-slate-500 mt-4">診断結果を元に、あなたにぴったりの企業をご紹介します。</p>
            </div>

            <form class="space-y-6" onsubmit="submitForm(event)">
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">お名前 <span class="text-red-500">*</span></label>
                        <input type="text" placeholder="山田 太郎" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" required>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">メールアドレス <span class="text-red-500">*</span></label>
                        <input type="email" placeholder="example@seisei.co.jp" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" required>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-bold text-slate-700 mb-2">診断結果 / お問い合わせ内容</label>
                    <textarea id="contact-message" rows="4" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="まずは相談したい、など"></textarea>
                    <p class="text-xs text-slate-400 mt-1"><i class="fas fa-info-circle"></i> 診断後にボタンを押すと、結果が自動で入力されます。</p>
                </div>

                <button type="submit" class="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition shadow-lg">
                    上記の内容で送信する
                </button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white py-12">
        <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div class="mb-6 md:mb-0">
                <div class="text-2xl font-bold tracking-tight mb-2">
                    株式会社 <span class="text-blue-400">SEISEI</span>
                </div>
                <p class="text-slate-400 text-sm">一人ひとりの「生成」された可能性を、未来へ。</p>
            </div>
            <div class="flex space-x-6 text-sm text-slate-400">
                <a href="#" class="hover:text-white transition">会社概要</a>
                <a href="#" class="hover:text-white transition">プライバシーポリシー</a>
                <a href="#" class="hover:text-white transition">利用規約</a>
            </div>
        </div>
        <div class="text-center text-slate-600 text-xs mt-8">
            &copy; 2024 SEISEI Inc. All rights reserved.
        </div>
    </footer>

    <!-- Scripts -->
    <script>
        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        function scrollToDiagnosis() {
            document.getElementById('diagnosis').scrollIntoView({ behavior: 'smooth' });
        }

        function scrollToContact() {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            
            // Auto-fill the message with the result
            const resultTitle = document.getElementById('result-title').innerText;
            const messageBox = document.getElementById('contact-message');
            messageBox.value = `【診断結果: ${resultTitle}】\nこの診断結果について詳しく話を聞きたいです。\nまた、自分に合う企業があれば紹介してください。`;
            
            // Highlight the text area
            setTimeout(() => {
                messageBox.focus();
                messageBox.classList.add('ring-2', 'ring-blue-200', 'border-blue-500');
            }, 800);
        }

        // Diagnosis Logic
        const questions = [
            {
                text: "新しい環境や変化に対してどう感じますか？",
                options: ["ワクワクする・刺激が欲しい", "少し不安・安定を好む"]
            },
            {
                text: "仕事を進める上でのスタイルは？",
                options: ["チームで協力して進めたい", "自分のペースで集中したい"]
            },
            {
                text: "評価されるならどちらが嬉しい？",
                options: ["成果や数字での明確な評価", "プロセスや努力への感謝"]
            }
        ];

        // Simple logic: count selections. 
        // 0 = type A (Active), 1 = type B (Steady)
        let currentStep = 0;
        let score = 0;

        function startDiagnosis() {
            document.getElementById('diag-start').classList.add('hidden');
            document.getElementById('diag-question').classList.remove('hidden');
            document.getElementById('diag-question').classList.add('fade-in');
            showQuestion();
        }

        function showQuestion() {
            const q = questions[currentStep];
            document.getElementById('q-number').innerText = currentStep + 1;
            document.getElementById('progress-bar').style.width = `${((currentStep + 1) / 3) * 100}%`;
            document.getElementById('q-text').innerText = q.text;
            document.getElementById('opt-1').innerText = q.options[0];
            document.getElementById('opt-2').innerText = q.options[1];
        }

        function selectOption(optionIndex) {
            score += optionIndex; // Add 0 or 1
            
            if (currentStep < 2) {
                currentStep++;
                // Slight delay for animation feel
                document.getElementById('diag-question').classList.remove('fade-in');
                void document.getElementById('diag-question').offsetWidth; // trigger reflow
                document.getElementById('diag-question').classList.add('fade-in');
                showQuestion();
            } else {
                showResult();
            }
        }

        function showResult() {
            document.getElementById('diag-question').classList.add('hidden');
            document.getElementById('diag-result').classList.remove('hidden');
            document.getElementById('diag-result').classList.add('fade-in');

            // Determine Result based on score (0-3)
            // Low score = Active/Innovator, High score = Support/Steady
            const titleEl = document.getElementById('result-title');
            const descEl = document.getElementById('result-desc');

            if (score <= 1) {
                titleEl.innerText = "開拓者：イノベータータイプ";
                descEl.innerText = "あなたは変化を恐れず、新しい価値を創造することに喜びを感じます。スタートアップや新規事業開発、または裁量の大きい営業職などでその才能が発揮されるでしょう。SEISEIでは、成長中のベンチャー企業をご紹介できます。";
            } else if (score === 2) {
                titleEl.innerText = "調和者：バランサータイプ";
                descEl.innerText = "あなたは周囲との協調性を大切にしつつ、着実に成果を上げるバランス感覚に優れています。チームリーダーや顧客折衝を行うポジション、または安定した組織の中核として活躍できます。";
            } else {
                titleEl.innerText = "探求者：スペシャリストタイプ";
                descEl.innerText = "あなたは一つのことを突き詰め、深い専門性を持つことに適性があります。エンジニア、研究職、またはバックオフィスでの専門職など、落ち着いて業務に集中できる環境がおすすめです。";
            }
        }

        function resetDiagnosis() {
            currentStep = 0;
            score = 0;
            document.getElementById('diag-result').classList.add('hidden');
            document.getElementById('diag-question').classList.add('hidden');
            document.getElementById('diag-start').classList.remove('hidden');
        }

        function submitForm(e) {
            e.preventDefault();
            alert('お問い合わせありがとうございます！\n株式会社SEISEIの担当者より、24時間以内にご連絡いたします。\n診断結果に基づいた求人をいくつかピックアップしてお待ちしております。');
            // Here you would typically send data to a server
        }
    </script>
</body>
</html>
