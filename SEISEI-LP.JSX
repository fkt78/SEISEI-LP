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

        /* アコーディオン（Q&A用） */
        .accordion-content {
            transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
        }
        .accordion-content.active {
            max-height: 500px; /* 十分な高さを確保 */
            opacity: 1;
        }
        .rotate-icon {
            transition: transform 0.3s ease;
        }
        .rotate-icon.active {
            transform: rotate(180deg);
        }

        /* モーダル（プライバシーポリシー用） */
        .modal {
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .modal.active {
            opacity: 1;
            visibility: visible;
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
            <nav class="hidden md:flex space-x-6 items-center">
                <a href="#about" class="text-sm font-medium hover:text-blue-600 transition">強み</a>
                <a href="#diagnosis" class="text-sm font-medium hover:text-blue-600 transition">性格診断</a>
                <a href="#flow" class="text-sm font-medium hover:text-blue-600 transition">流れ</a>
                <a href="#faq" class="text-sm font-medium hover:text-blue-600 transition">Q&A</a>
                <a href="#company" class="text-sm font-medium hover:text-blue-600 transition">会社概要</a>
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

    <!-- コンセプト（信頼性） -->
    <section id="about" class="py-20 bg-white relative">
        <div class="container mx-auto px-6 max-w-5xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">なぜ、「性格マッチング」なのか？</h2>
                <div class="w-16 h-1 bg-blue-600 mx-auto rounded"></div>
                <p class="text-slate-600 mt-8 leading-loose text-lg">
                    多くの転職失敗の原因は、「スキルの不一致」ではなく<br class="hidden md:block">
                    企業文化との「カルチャーアンマッチ」にあります。<br>
                    SEISEIは、独自のアルゴリズムであなたの性格特性を可視化し、<br class="hidden md:block">
                    ストレスなく働ける「心理的安全性」の高い職場をご提案します。
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition group">
                    <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition">
                        <i class="fas fa-fingerprint"></i>
                    </div>
                    <h3 class="font-bold text-xl mb-3">あなただけの特性分析</h3>
                    <p class="text-slate-500 leading-relaxed">
                        5万人の行動データに基づき、あなたの隠れた強みやモチベーションの源泉を言語化します。
                    </p>
                </div>
                <!-- Card 2 -->
                <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition group">
                    <div class="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition">
                        <i class="fas fa-building"></i>
                    </div>
                    <h3 class="font-bold text-xl mb-3">独自の企業スコアリング</h3>
                    <p class="text-slate-500 leading-relaxed">
                        求人票には載らない「実際の社風」「上司のタイプ」などを独自取材でデータ化しています。
                    </p>
                </div>
                <!-- Card 3 -->
                <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition group">
                    <div class="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <h3 class="font-bold text-xl mb-3">伴走型エージェント</h3>
                    <p class="text-slate-500 leading-relaxed">
                        診断結果をもとに、無理な提案は一切せず、納得のいくキャリア形成をサポートします。
                    </p>
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

    <!-- サービスの流れ -->
    <section id="flow" class="py-20 bg-white">
        <div class="container mx-auto px-6 max-w-5xl">
            <div class="text-center mb-16">
                <span class="text-blue-600 font-bold tracking-widest uppercase text-xs">FLOW</span>
                <h2 class="text-3xl font-bold mt-2">ご相談から入社までの流れ</h2>
                <div class="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
            </div>

            <div class="grid md:grid-cols-4 gap-8 relative">
                <!-- 連結線（PCのみ） -->
                <div class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

                <!-- Step 1 -->
                <div class="relative text-center bg-white">
                    <div class="w-24 h-24 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm border-4 border-white">
                        <i class="fas fa-desktop"></i>
                    </div>
                    <div class="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2">STEP 1</div>
                    <h3 class="font-bold text-lg mb-2">性格診断＆予約</h3>
                    <p class="text-sm text-slate-500">
                        まずはこのページの診断を完了し、無料相談を予約します。1分で完了します。
                    </p>
                </div>

                <!-- Step 2 -->
                <div class="relative text-center bg-white">
                    <div class="w-24 h-24 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm border-4 border-white">
                        <i class="fas fa-comments"></i>
                    </div>
                    <div class="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2">STEP 2</div>
                    <h3 class="font-bold text-lg mb-2">キャリア相談</h3>
                    <p class="text-sm text-slate-500">
                        専任エージェントが診断結果を元にヒアリング。あなたの強みを言語化します。
                    </p>
                </div>

                <!-- Step 3 -->
                <div class="relative text-center bg-white">
                    <div class="w-24 h-24 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm border-4 border-white">
                        <i class="fas fa-file-contract"></i>
                    </div>
                    <div class="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2">STEP 3</div>
                    <h3 class="font-bold text-lg mb-2">求人紹介・面接</h3>
                    <p class="text-sm text-slate-500">
                        「性格が合う」企業だけを厳選してご紹介。面接対策も徹底サポートします。
                    </p>
                </div>

                <!-- Step 4 -->
                <div class="relative text-center bg-white">
                    <div class="w-24 h-24 mx-auto bg-orange-50 text-orange-500 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm border-4 border-white">
                        <i class="fas fa-door-open"></i>
                    </div>
                    <div class="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded mb-2">GOAL</div>
                    <h3 class="font-bold text-lg mb-2">内定・入社</h3>
                    <p class="text-sm text-slate-500">
                        条件交渉もお任せください。入社後も定着するまでフォローいたします。
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- 利用者の声 -->
    <section id="voice" class="py-20 bg-slate-50">
        <div class="container mx-auto px-6 max-w-5xl">
            <div class="text-center mb-16">
                <span class="text-blue-600 font-bold tracking-widest uppercase text-xs">VOICE</span>
                <h2 class="text-3xl font-bold mt-2">転職成功者の声</h2>
                <p class="text-slate-500 mt-4">性格マッチングで、理想の職場を見つけた方々です。</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- Voice 1 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6">
                    <div class="flex-shrink-0 text-center md:text-left">
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="User" class="w-20 h-20 rounded-full object-cover mx-auto md:mx-0 border-2 border-blue-100">
                        <div class="mt-2">
                            <p class="font-bold text-sm">Y.Sさん</p>
                            <p class="text-xs text-slate-500">28歳 / 営業職</p>
                        </div>
                    </div>
                    <div>
                        <div class="mb-2">
                            <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-bold">年収120万UP</span>
                            <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold ml-1">残業減</span>
                        </div>
                        <h4 class="font-bold text-lg mb-2">「根性論」の職場から、理論的な環境へ。</h4>
                        <p class="text-sm text-slate-600 leading-relaxed">
                            以前は「気合で売れ」という社風で疲弊していましたが、診断で「論理的思考タイプ」と判明。データを重視するIT企業の営業職を紹介してもらい、水を得た魚のように成果が出せるようになりました。
                        </p>
                    </div>
                </div>

                <!-- Voice 2 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6">
                    <div class="flex-shrink-0 text-center md:text-left">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="User" class="w-20 h-20 rounded-full object-cover mx-auto md:mx-0 border-2 border-blue-100">
                        <div class="mt-2">
                            <p class="font-bold text-sm">M.Kさん</p>
                            <p class="text-xs text-slate-500">32歳 / 事務職</p>
                        </div>
                    </div>
                    <div>
                        <div class="mb-2">
                            <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-bold">リモート可</span>
                            <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold ml-1">キャリアUP</span>
                        </div>
                        <h4 class="font-bold text-lg mb-2">自分の「強み」が初めてわかりました。</h4>
                        <p class="text-sm text-slate-600 leading-relaxed">
                            事務職はどこも同じだと思っていましたが、SEISEIさんに「サポート力」を高く評価してくれるベンチャー企業を紹介されました。今は社長秘書として、裁量を持って働けています。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- よくある質問 (Q&A) -->
    <section id="faq" class="py-20 bg-white">
        <div class="container mx-auto px-6 max-w-3xl">
            <div class="text-center mb-16">
                <span class="text-blue-600 font-bold tracking-widest uppercase text-xs">Q&A</span>
                <h2 class="text-3xl font-bold mt-2">よくある質問</h2>
                <p class="text-slate-500 mt-4">サービスの利用に関して、多く寄せられる質問です。</p>
            </div>

            <div class="space-y-4">
                <!-- Q1 -->
                <div class="border border-slate-200 rounded-xl overflow-hidden">
                    <button class="w-full text-left p-6 bg-slate-50 hover:bg-slate-100 transition flex justify-between items-center" onclick="toggleAccordion(this)">
                        <span class="font-bold text-slate-800">Q. サービスの利用に費用はかかりますか？</span>
                        <i class="fas fa-chevron-down text-slate-400 rotate-icon"></i>
                    </button>
                    <div class="accordion-content bg-white">
                        <div class="p-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                            <span class="font-bold text-blue-600">A.</span> いいえ、求職者の方は<span class="font-bold">完全に無料</span>でご利用いただけます。紹介先の企業様より採用手数料をいただいて運営しているため、相談から入社まで一切費用は発生しません。
                        </div>
                    </div>
                </div>

                <!-- Q2 -->
                <div class="border border-slate-200 rounded-xl overflow-hidden">
                    <button class="w-full text-left p-6 bg-slate-50 hover:bg-slate-100 transition flex justify-between items-center" onclick="toggleAccordion(this)">
                        <span class="font-bold text-slate-800">Q. 今すぐ転職するつもりはないのですが、相談できますか？</span>
                        <i class="fas fa-chevron-down text-slate-400 rotate-icon"></i>
                    </button>
                    <div class="accordion-content bg-white">
                        <div class="p-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                            <span class="font-bold text-blue-600">A.</span> はい、もちろんです。「自分の市場価値を知りたい」「将来のキャリアプランを考えたい」といったご相談も大歓迎です。無理に転職を勧めることはありませんのでご安心ください。
                        </div>
                    </div>
                </div>

                <!-- Q3 -->
                <div class="border border-slate-200 rounded-xl overflow-hidden">
                    <button class="w-full text-left p-6 bg-slate-50 hover:bg-slate-100 transition flex justify-between items-center" onclick="toggleAccordion(this)">
                        <span class="font-bold text-slate-800">Q. 相談時の服装や持ち物は？</span>
                        <i class="fas fa-chevron-down text-slate-400 rotate-icon"></i>
                    </button>
                    <div class="accordion-content bg-white">
                        <div class="p-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                            <span class="font-bold text-blue-600">A.</span> 服装は私服で構いません。リラックスしてお話しいただきたいため、スーツである必要はありません。持ち物も特に不要ですが、もし職務経歴書や履歴書の下書きがあれば、より具体的なアドバイスが可能です。
                        </div>
                    </div>
                </div>

                <!-- Q4 -->
                <div class="border border-slate-200 rounded-xl overflow-hidden">
                    <button class="w-full text-left p-6 bg-slate-50 hover:bg-slate-100 transition flex justify-between items-center" onclick="toggleAccordion(this)">
                        <span class="font-bold text-slate-800">Q. 在職中で忙しいのですが、土日や夜間の相談は可能ですか？</span>
                        <i class="fas fa-chevron-down text-slate-400 rotate-icon"></i>
                    </button>
                    <div class="accordion-content bg-white">
                        <div class="p-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                            <span class="font-bold text-blue-600">A.</span> はい、可能です。平日の夜間（20時開始など）や、土日の面談も承っております。現在はオンライン（Zoom等）での面談が主流ですので、ご自宅からお気軽にご相談ください。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- コンタクトフォーム -->
    <section id="contact" class="py-24 bg-blue-50">
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

    <!-- [新規追加] 会社概要 -->
    <section id="company" class="py-20 bg-white border-t border-slate-100">
        <div class="container mx-auto px-6 max-w-4xl">
            <div class="text-center mb-16">
                <span class="text-blue-600 font-bold tracking-widest uppercase text-xs">COMPANY</span>
                <h2 class="text-3xl font-bold mt-2">会社概要</h2>
                <div class="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
            </div>
            
            <div class="bg-slate-50 rounded-2xl p-8 md:p-12">
                <dl class="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    <div class="border-b border-slate-200 pb-4 md:border-b-0 md:pb-0">
                        <dt class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">会社名</dt>
                        <dd class="font-bold text-lg">株式会社聖成</dd>
                    </div>
                    <div class="border-b border-slate-200 pb-4 md:border-b-0 md:pb-0">
                        <dt class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">代表取締役</dt>
                        <dd class="font-bold text-lg">伊藤 正樹</dd>
                    </div>
                    <div class="border-b border-slate-200 pb-4 md:border-b-0 md:pb-0">
                        <dt class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">設立</dt>
                        <dd class="font-bold text-lg">2024年</dd>
                    </div>
                    <div class="md:col-span-3 border-b border-slate-200 pb-4 md:border-b-0 md:pb-0">
                        <dt class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">所在地</dt>
                        <dd class="font-bold text-lg">
                            〒460-0003<br>
                            愛知県名古屋市中区錦1丁目17-13 名興ビルディング 2F
                        </dd>
                    </div>
                    <div class="md:col-span-3">
                        <dt class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">電話番号</dt>
                        <dd class="font-bold text-lg font-mono">052-990-3526</dd>
                    </div>
                </dl>
            </div>
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
                    <p class="text-slate-400 text-sm">一人ひとりの「生成」された可能性を、未来へ。</p>
                </div>
                <div class="flex gap-6 text-sm text-slate-400">
                    <a href="#company" class="hover:text-white transition">会社概要</a>
                    <button onclick="openPrivacyModal()" class="hover:text-white transition underline decoration-dotted">プライバシーポリシー</button>
                    <a href="#" class="hover:text-white transition">利用規約</a>
                </div>
            </div>
            <div class="border-t border-slate-800 pt-8 text-slate-600 text-xs">
                &copy; 2024 SEISEI Inc. All rights reserved.
            </div>
        </div>
    </footer>

    <!-- プライバシーポリシーモーダル -->
    <div id="privacy-modal" class="fixed inset-0 z-[100] flex items-center justify-center modal bg-black/50 backdrop-blur-sm p-4">
        <div class="bg-white w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            <div class="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 class="text-xl font-bold">プライバシーポリシー</h3>
                <button onclick="closePrivacyModal()" class="text-slate-400 hover:text-slate-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            <div class="p-6 overflow-y-auto text-sm text-slate-600 leading-relaxed space-y-4">
                <p>株式会社聖成（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。</p>
                
                <h4 class="font-bold text-slate-800 mt-4">第1条（個人情報）</h4>
                <p>「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。</p>

                <h4 class="font-bold text-slate-800 mt-4">第2条（個人情報の収集方法）</h4>
                <p>当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。</p>

                <h4 class="font-bold text-slate-800 mt-4">第3条（個人情報を収集・利用する目的）</h4>
                <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>当社サービスの提供・運営のため</li>
                    <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                    <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                    <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                </ul>

                <h4 class="font-bold text-slate-800 mt-4">第4条（利用目的の変更）</h4>
                <p>当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</p>

                <h4 class="font-bold text-slate-800 mt-4">第5条（個人情報の第三者提供）</h4>
                <p>当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</p>

                <h4 class="font-bold text-slate-800 mt-4">第6条（お問い合わせ窓口）</h4>
                <p>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
                <div class="bg-slate-50 p-4 rounded mt-2">
                    <p>住所：愛知県名古屋市中区錦1丁目17-13 名興ビルディング 2F</p>
                    <p>社名：株式会社聖成</p>
                    <p>電話番号：052-990-3526</p>
                </div>
            </div>
            <div class="p-4 border-t border-slate-100 text-center bg-slate-50">
                <button onclick="closePrivacyModal()" class="bg-slate-800 text-white px-8 py-2 rounded-lg hover:bg-slate-700 transition font-bold">
                    閉じる
                </button>
            </div>
        </div>
    </div>

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

        // --- アコーディオン機能（Q&A用） ---
        function toggleAccordion(element) {
            const content = element.nextElementSibling;
            const icon = element.querySelector('.rotate-icon');
            
            content.classList.toggle('active');
            icon.classList.toggle('active');
        }

        // --- プライバシーポリシーモーダル機能 ---
        function openPrivacyModal() {
            document.getElementById('privacy-modal').classList.add('active');
            document.body.style.overflow = 'hidden'; // 背景スクロール固定
        }
        function closePrivacyModal() {
            document.getElementById('privacy-modal').classList.remove('active');
            document.body.style.overflow = ''; // スクロール解除
        }
        // モーダル背景クリックで閉じる
        document.getElementById('privacy-modal').addEventListener('click', function(e) {
            if (e.target === this) closePrivacyModal();
        });


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
