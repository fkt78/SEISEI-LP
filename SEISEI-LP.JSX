<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- OGP設定 (SNSでシェアされた時の見え方) -->
<meta property="og:title" content="社長の右腕、AIで作りませんか？ | 有限会社 吹田総業">
<meta property="og:type" content="website">
<meta property="og:description" content="「AIなんて難しそう」と思っていませんか？三重・滋賀の中小企業専門。泥臭い現場を知る元コンビニオーナーが、あなたの頭の中を形にします。まずは無料相談から。">
<meta property="og:url" content="https://fkt-office.com"> <!-- 本番URLに変更してください -->
<meta property="og:image" content="https://placehold.jp/1200x630.png?text=Fukita+Sogyo+AI"> <!-- OGP画像のURL -->
<meta property="og:site_name" content="有限会社 吹田総業 AI事業部">
<meta name="twitter:card" content="summary_large_image">

<!-- Google Font: M PLUS Rounded 1c (親しみやすい丸ゴシック) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700;900&display=swap" rel="stylesheet">
<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<title>有限会社 吹田総業 AI事業部 | 三重・滋賀の中小企業向けAI導入・業務効率化コンサルティング</title>
<meta name="description" content="三重県伊賀市・滋賀県甲賀市でAI導入・業務効率化なら有限会社吹田総業へ。アナログな現場でも使える「社長の右腕」アプリ開発、ランディングページ制作、IT顧問契約。24年の経営実績に基づく泥臭いDX支援を行います。">
<meta name="keywords" content="AIコンサル, 業務効率化, 伊賀市, 甲賀市, 中小企業, DX, アプリ開発, LP制作, 吹田総業, エクセル業務改善">

<style>
    /* 全体設定 */
    /* フォントを丸ゴシックに変更して親しみやすさをアップ */
    body { font-family: "M PLUS Rounded 1c", "Hiragino Maru Gothic ProN", Arial, sans-serif; margin: 0; padding: 0; color: #444; line-height: 1.8; background-color: #fdfcf8; scroll-behavior: smooth; }
    h1, h2, h3 { font-weight: 800; margin: 0; letter-spacing: 0.05em; }
    a { text-decoration: none; transition: 0.3s; }
    
    :root { 
        /* 色味の調整: 冷たさを消し、信頼と温かみを両立 */
        --primary: #1a4a7c; /* 少し明るく、誠実なネイビーブルー */
        --primary-dark: #0e3b63;
        --accent: #e67e22; /* 親しみと活気のオレンジ */
        --accent-hover: #d35400;
        --bg-warm: #fdfcf8; /* 温かみのあるアイボリー */
        --bg-contrast: #fff;
        --text-color: #444;
        --radius: 12px; /* 角丸を少し大きくして優しく */
    }

    /* ヘッダー */
    header { background-color: rgba(26, 74, 124, 0.95); backdrop-filter: blur(5px); color: white; padding: 15px 20px; text-align: center; position: fixed; width: 100%; top: 0; z-index: 999; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
    .header-inner { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
    .logo { font-size: 20px; font-weight: 900; letter-spacing: 1px; }
    
    /* PC用ナビゲーション */
    .nav-links a { 
        color: white; margin-left: 20px; font-size: 15px; font-weight: 700;
        padding: 5px 0; border-bottom: 3px solid transparent; 
    }
    .nav-links a:hover { border-bottom-color: var(--accent); color: #ffe0b2; }

    /* ヒーロー */
    .hero { 
        /* グラデーションを少し温かみのあるトーンに */
        background: linear-gradient(135deg, #1a4a7c 0%, #2c3e50 100%); color: white; 
        padding: 180px 20px 120px; text-align: center; 
    }
    .hero h2 { font-size: 2.4rem; margin-bottom: 25px; line-height: 1.5; letter-spacing: 2px; text-shadow: 0 2px 4px rgba(0,0,0,0.3); }
    .hero-message {
        background: rgba(255,255,255,0.95); border: none;
        padding: 40px; border-radius: var(--radius); max-width: 720px; margin: 0 auto;
        font-size: 16px; text-align: left; color: #333;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        position: relative;
    }
    /* 吹き出しのしっぽ */
    .hero-message::before {
        content: ""; position: absolute; top: -15px; left: 50%; transform: translateX(-50%);
        border-width: 0 15px 15px 15px; border-style: solid; border-color: transparent transparent rgba(255,255,255,0.95) transparent;
    }
    .hero-message strong { color: var(--accent); font-size: 1.1em; background: linear-gradient(transparent 70%, #ffe0b2 70%); }
    
    /* ボタン共通 */
    .btn { 
        display: inline-block; background-color: var(--accent); color: white; 
        padding: 18px 50px; border-radius: 50px; font-weight: 900; margin-top: 40px; 
        box-shadow: 0 6px 0px #bf6516, 0 15px 20px rgba(0,0,0,0.2); /* 立体的なボタン */
        font-size: 1.2rem; transition: all 0.1s; letter-spacing: 1px;
    }
    .btn:hover { 
        background-color: var(--accent-hover); 
        transform: translateY(3px); 
        box-shadow: 0 3px 0px #a0520d, 0 5px 10px rgba(0,0,0,0.2); 
    }
    .btn:active {
        transform: translateY(6px);
        box-shadow: none;
    }

    /* メールアドレスの手動コピー用エリア */
    .email-fallback { margin-top: 30px; font-size: 14px; color: #ccc; }
    .email-address { 
        font-weight: bold; color: #fff; background: rgba(255,255,255,0.2); 
        padding: 8px 15px; border-radius: var(--radius); user-select: none; /* 初期は選択不可 */
        cursor: pointer; display: inline-block; transition: background 0.2s; border: 1px solid rgba(255,255,255,0.3);
    }
    .email-address:hover { background: rgba(255,255,255,0.3); }

    /* セクション共通 */
    .section { padding: 90px 20px; max-width: 1000px; margin: 0 auto; }
    .section-title { text-align: center; font-size: 2.2rem; color: var(--primary); margin-bottom: 60px; position: relative; font-weight: 900; }
    /* タイトルの装飾を少し柔らかく */
    .section-title::after { 
        content: ""; display: block; width: 60px; height: 6px; 
        background-color: var(--accent); margin: 20px auto 0; border-radius: 10px; opacity: 0.8;
    }

    /* メリット */
    .merit-container { display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; }
    .merit-box { 
        flex: 1; min-width: 280px; background: white; padding: 35px; border-radius: var(--radius); 
        box-shadow: 0 8px 25px rgba(26, 74, 124, 0.08); text-align: center; border-bottom: 6px solid var(--accent);
        transition: transform 0.3s;
    }
    .merit-box:hover { transform: translateY(-5px); }
    .merit-icon { font-size: 3.5rem; margin-bottom: 20px; display: block; color: var(--primary); }
    .merit-title { font-weight: 800; font-size: 1.35rem; color: var(--primary); margin-bottom: 15px; }
    .merit-text { font-size: 15px; color: #555; text-align: left; line-height: 1.9; }

    /* 比較テーブル */
    .comparison-table { width: 100%; border-collapse: collapse; background: white; box-shadow: 0 5px 20px rgba(0,0,0,0.08); border-radius: var(--radius); overflow: hidden; margin-bottom: 40px; }
    .comparison-table th, .comparison-table td { padding: 18px; text-align: center; border: 1px solid #eee; }
    .comparison-table th { background: #555; color: white; }
    .comparison-table th.our { background: var(--accent); font-size: 1.3rem; position: relative; padding-top: 35px; }
    .comparison-table th.our::after { content: "当社の会員価格"; position: absolute; top: 10px; left: 0; width: 100%; color: white; font-size: 13px; font-weight: bold; opacity: 0.9; }
    .comparison-row td:first-child { text-align: left; font-weight: bold; background: #f9f9f9; color: var(--primary); }
    .cheap-reason { background: #fff8e1; padding: 30px; border: 2px dashed var(--accent); border-radius: var(--radius); font-size: 16px; position: relative; }
    .cheap-reason::before { content: "ここだけの話、安さの秘密は…"; position: absolute; top: -14px; left: 20px; background: #fff8e1; padding: 0 10px; font-weight: bold; color: var(--accent); font-size: 14px; }
    .cheap-reason ul { list-style-type: none; padding-left: 0; }
    .cheap-reason li { margin-bottom: 12px; padding-left: 1.5em; position: relative; }
    .cheap-reason li::before { content: "💡"; position: absolute; left: 0; }

    /* 料金表 */
    .price-table-wrapper { overflow-x: auto; margin-bottom: 40px; background: white; border-radius: var(--radius); box-shadow: 0 5px 20px rgba(0,0,0,0.05); }
    .price-table { width: 100%; border-collapse: collapse; min-width: 600px; }
    .price-table th, .price-table td { padding: 25px 20px; text-align: center; border: 1px solid #f0f0f0; }
    .price-table thead th { background-color: #f4f7f6; color: #555; width: 30%; font-weight: bold; }
    .price-table thead th.special { background-color: var(--primary); color: white; width: 35%; font-size: 1.3rem; border-bottom: 6px solid var(--accent); }
    .clickable-row { cursor: pointer; transition: 0.2s; }
    .clickable-row:hover { background-color: #fff8e1; }
    .link-text { color: var(--primary); text-decoration: underline; text-decoration-color: var(--accent); text-decoration-thickness: 2px; font-weight: 800; display: block; margin-bottom: 5px; font-size: 1.1rem; }
    .click-hint { font-size: 12px; color: var(--accent); display: block; margin-top: 5px; font-weight: bold; }
    .price-strike { text-decoration: line-through; color: #bbb; font-size: 13px; display: block; }
    .price-highlight { color: var(--accent); font-weight: 900; font-size: 26px; font-family: Arial, sans-serif; }
    .price-tag { font-size: 11px; background: #ffe0b2; color: #d35400; padding: 3px 8px; border-radius: 4px; font-weight: bold; margin-left: 5px; vertical-align: middle; }

    /* 詳細セクション */
    .detail-card { 
        background: white; border-radius: var(--radius); padding: 45px; margin-bottom: 40px; scroll-margin-top: 100px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.06); border-left: 10px solid var(--primary);
    }
    .detail-title { font-size: 1.6rem; font-weight: 800; color: var(--primary); margin-bottom: 10px; display: flex; align-items: center; }
    .detail-price { font-size: 1.4rem; font-weight: 900; color: var(--accent); margin-bottom: 25px; border-bottom: 2px solid #eee; padding-bottom: 15px; }
    .feature-list { list-style: none; padding: 0; }
    .feature-list li { margin-bottom: 15px; padding-left: 30px; position: relative; font-size: 1.05rem; }
    .feature-list li::before { content: "\f00c"; font-family: "Font Awesome 6 Free"; font-weight: 900; color: #2ecc71; position: absolute; left: 0; font-size: 1.2em; }
    .contract-term { border: 2px solid var(--accent); background-color: #fff8e1; color: #d35400; padding: 20px; border-radius: var(--radius); font-weight: bold; text-align: center; margin-top: 25px; }
    .plan-note { font-size: 15px; color: #666; background: #f9f9f9; padding: 25px; border-radius: var(--radius); margin-bottom: 25px; border: 1px solid #eee; }
    .case-box { background: #f0f4f8; padding: 25px; border-radius: var(--radius); margin-top: 15px; border-left: 5px solid #aab7c4; }

    /* メッセージ */
    .message-section { background-color: var(--primary); color: white; padding: 100px 20px; text-align: center; background-image: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 20%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 20%); }
    .message-title { font-size: 2.2rem; font-weight: 900; margin-bottom: 40px; color: #ffeb3b; letter-spacing: 2px; }
    .message-body { max-width: 720px; margin: 0 auto; text-align: left; line-height: 2.2; font-size: 1.1rem; }

    /* ストーリー・会社概要 */
    .story-box { background: white; padding: 50px; border-radius: var(--radius); box-shadow: 0 5px 25px rgba(0,0,0,0.05); }
    .chapter { margin-bottom: 50px; }
    .chapter h3 { font-size: 1.4rem; color: var(--primary); margin-bottom: 20px; border-bottom: 3px solid #eee; padding-bottom: 10px; font-weight: 800; }
    .company-table { width: 100%; border-collapse: collapse; background: white; margin-bottom: 50px; border-radius: var(--radius); overflow: hidden; border: 1px solid #eee; }
    .company-table th, .company-table td { padding: 18px; border-bottom: 1px solid #eee; text-align: left; }
    .company-table th { width: 30%; background-color: #f4f7f6; font-weight: 800; color: var(--primary); }
    .history-list { border-left: 3px solid #ddd; padding-left: 25px; margin-left: 10px; }
    .history-item { margin-bottom: 25px; position: relative; padding-bottom: 10px; }
    .history-item::before { content: ""; width: 16px; height: 16px; background: var(--accent); border-radius: 50%; position: absolute; left: -34px; top: 5px; border: 4px solid #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    .year { font-weight: 800; display: block; color: var(--primary); margin-bottom: 5px; font-size: 1.1rem; }

    /* フッター */
    footer { background-color: #2c3e50; color: #bdc3c7; padding: 60px 20px; text-align: center; font-size: 14px; }
    
    /* モバイルメニュー */
    .menu-toggle {
        display: none; background: none; border: none; color: white; font-size: 28px; cursor: pointer;
        z-index: 1000; padding: 0; width: 40px; height: 40px; position: relative;
    }
    .menu-toggle span {
        display: block; width: 100%; height: 3px; background: white; margin-bottom: 7px;
        transition: 0.3s; border-radius: 3px;
    }
    .menu-toggle span:last-child { margin-bottom: 0; }
    .menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .menu-toggle.active span:nth-child(2) { opacity: 0; }
    .menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -8px); }

    @media (max-width: 768px) {
        .header-inner { justify-content: space-between; }
        .menu-toggle { display: block; }
        
        .nav-links {
            position: fixed; top: 0; right: -300px; width: 280px; height: 100vh; background-color: var(--primary); 
            padding-top: 90px; box-shadow: -5px 0 20px rgba(0,0,0,0.3);
            transition: right 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            display: flex; flex-direction: column; align-items: flex-start;
        }
        .nav-links.active { right: 0; }
        .nav-links a { 
            display: block; width: 100%; margin: 0; padding: 18px 30px; 
            border-bottom: 1px solid rgba(255,255,255,0.1); 
            font-size: 16px;
        }
        .hero { padding-top: 140px; }
        .hero h2 { font-size: 1.8rem; }
        .price-table { font-size: 13px; }
        .company-table th, .company-table td { display: block; width: 100%; }
        .merit-container { flex-direction: column; }
        body.no-scroll { overflow: hidden; }
    }
    
    /* カスタムメッセージボックス */
    #custom-message {
        position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(20px);
        background-color: var(--primary); color: white; padding: 15px 30px; border-radius: 50px;
        font-size: 15px; z-index: 10000; opacity: 0; visibility: hidden;
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        white-space: nowrap; font-weight: bold;
    }
    #custom-message.visible { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }
    
    /* シミュレーションセクション */
    #results { background-color: var(--primary); color: white; position: relative; overflow: hidden; }
    /* 背景に少し模様を入れる */
    #results::before {
        content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
        background-size: 30px 30px; opacity: 0.3; pointer-events: none;
    }

    .results-inner {
        background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); padding: 40px;
        border-radius: var(--radius); box-shadow: 0 15px 30px rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2);
    }
    .simulation-box {
        background: #fff; padding: 35px; border-radius: var(--radius); color: var(--text-color); margin-top: 30px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .sim-group { margin-bottom: 35px; padding-bottom: 25px; border-bottom: 2px dashed #eee; }
    .sim-group:last-child { border-bottom: none; }
    .sim-group-title { font-size: 1.2rem; font-weight: 800; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }

    .input-wrapper { margin-bottom: 25px; }
    .input-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 1rem; font-weight: 700; color: #555; }
    .input-value-display { font-weight: 900; color: var(--primary); font-size: 1.2rem; }
    .input-value-display.reduction-color { color: var(--accent); }

    /* スライダー */
    input[type="range"] {
        width: 100%; margin-top: 5px; -webkit-appearance: none; appearance: none; height: 10px; background: #e0e0e0; border-radius: 5px; cursor: pointer; outline: none;
    }
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; appearance: none; width: 28px; height: 28px; border-radius: 50%;
        background: var(--primary); cursor: pointer; box-shadow: 0 3px 8px rgba(0,0,0,0.2); border: 3px solid white; transition: transform 0.1s;
    }
    input[type="range"]::-webkit-slider-thumb:hover { transform: scale(1.1); }
    input[type="range"].reduction-slider::-webkit-slider-thumb { background: var(--accent); }

    .result-summary {
        margin-top: 15px; text-align: center; background: var(--accent); color: white; padding: 30px;
        border-radius: var(--radius); box-shadow: 0 10px 25px rgba(230, 126, 34, 0.3);
        position: relative; overflow: hidden;
    }
    /* キラッと光るエフェクト */
    .result-summary::after {
        content: ""; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
        transform: rotate(30deg); animation: shine 6s infinite;
    }
    @keyframes shine { 0% { transform: translateX(-100%) rotate(30deg); } 20% { transform: translateX(100%) rotate(30deg); } 100% { transform: translateX(100%) rotate(30deg); } }

    .result-total { font-size: 2.5rem; font-weight: 900; margin-top: 10px; line-height: 1.2; text-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    .result-details { margin-top: 25px; border-top: 1px solid rgba(255,255,255,0.3); padding-top: 20px; font-size: 15px; text-align: left; }
    .detail-row { display: flex; justify-content: space-between; margin-bottom: 8px; border-bottom: 1px dashed rgba(255,255,255,0.2); padding-bottom: 2px; }
    .detail-value { font-weight: 800; color: #fff; }

    /* アコーディオン */
    .accordion-item {
        background: white; border-radius: var(--radius); margin-bottom: 20px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.03); overflow: hidden; border: 1px solid #f0f0f0;
        transition: box-shadow 0.3s;
    }
    .accordion-item:hover { box-shadow: 0 8px 20px rgba(0,0,0,0.06); }
    .accordion-header {
        padding: 25px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;
        transition: background-color 0.2s; border-left: 6px solid var(--accent); background: #fff;
    }
    .accordion-header:hover { background-color: #fffcf5; }
    .accordion-title { font-weight: 800; font-size: 1.15rem; color: var(--primary); line-height: 1.4; }
    .accordion-date { font-size: 0.9rem; color: #999; margin-bottom: 5px; display: block; font-weight: bold; }
    .accordion-icon { color: #ccc; font-size: 1.2rem; transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55); }
    .accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out; background-color: #fffbf0; }
    .accordion-inner { padding: 30px; font-size: 16px; color: #555; line-height: 1.9; border-top: 1px solid #f0e6d2; }
    .accordion-item.active .accordion-icon { transform: rotate(180deg); color: var(--accent); }
    
</style>
</head>
<body>

    <header>
        <div class="header-inner">
            <div class="logo">吹田総業 / AI事業部</div>
            <!-- ハンバーガーボタン -->
            <button class="menu-toggle" aria-label="メニューを開く" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="nav-links">
                <a href="#about" onclick="toggleMenu()">右腕とは</a>
                <a href="#reason" onclick="toggleMenu()">安さの理由</a>
                <a href="#price-list" onclick="toggleMenu()">料金一覧</a>
                <a href="#results" onclick="toggleMenu()">実績・試算</a> 
                <a href="#column" onclick="toggleMenu()">社長の日誌</a>
                <a href="#story" onclick="toggleMenu()">代表ストーリー</a>
            </nav>
        </div>
    </header>

    <section class="hero">
        <h2>社長、その「努力」<br>空回りしていませんか？</h2>
        <div class="hero-message">
            <p style="margin-bottom: 15px;">
                「AIなんて自分には関係ない」「ITは難しくて分からない」<br>
                そう言って、<strong>せっかくの素晴らしいアイデアを諦めていませんか？</strong>
            </p>
            <p style="margin-bottom: 15px;">
                私は、ただのシステム屋ではありません。<br>
                24年間、泥臭い現場で戦ってきた経営者だからこそ、あなたの「痛み」が分かります。
            </p>
            <p style="margin: 0;">
                <strong>難しく考えず、思いついたことを何でも私に投げてください。</strong><br>
                私があなたの「壁打ち相手」となり、その頭の中にあるモヤモヤを、<br>
                目に見える「形（企画・ツール）」に変えてみせます。
            </p>
        </div>
        
        <a href="mailto:info@fkt-office.com?subject=無料相談の申し込み&body=ホームページを見て連絡しました。面談（またはWeb相談）を希望します。" class="btn">今すぐ「壁打ち」を試す（無料相談）</a>
        
        <div class="email-fallback">
            メールが起動しない場合： 
            <span class="email-address" onclick="copyEmail()" role="button" tabindex="0">
                info@fkt-office.com
            </span> <span style="font-size:12px; color:#ddd;">(クリックでコピー)</span>
        </div>
    </section>

    <section id="about" class="section">
        <h2 class="section-title">パートナー（顧問契約）のメリット</h2>
        <p style="text-align: center; margin-bottom: 40px; color: var(--text-color);">
            「できない」と諦める前に、私に連絡してください。<br>
            私が間に入ることで、あなたの会社は劇的に変わります。
        </p>
        
        <div class="merit-container">
            <div class="merit-box">
                <span class="merit-icon"><i class="fa-regular fa-handshake"></i></span>
                <div class="merit-title">いつでも「壁打ち」OK</div>
                <div class="merit-text">
                    「こんなことできる？」「ふと思いついたんだけど」<br>
                    はっと気づいたアイデアを、その場ですぐにチャットで相談。一人で悩んで立ち消えになる時間をゼロにします。
                </div>
            </div>
            <div class="merit-box">
                <span class="merit-icon"><i class="fa-solid fa-comments"></i></span>
                <div class="merit-title">難しい言葉は使いません</div>
                <div class="merit-text">
                    IT用語や技術の話は私がすべて引き受けます。<br>
                    社長は「経営者の言葉」で話してください。それを私が現場で使えるシステムへと「翻訳」します。
                </div>
            </div>
            <div class="merit-box">
                <span class="merit-icon"><i class="fa-solid fa-rocket"></i></span>
                <div class="merit-title">アイデアを「具現化」</div>
                <div class="merit-text">
                    相談だけで終わりません。<br>
                    「じゃあ、こんな企画書にしましょう」「こんな画面にしましょう」と、目に見える形にするまで並走します。
                </div>
            </div>
        </div>
    </section>

    <section id="reason" class="section" style="background-color: #fffbfb;">
        <h2 class="section-title">なぜ、この価格で提供できるのか？</h2>
        <p style="text-align: center; margin-bottom: 30px; color: var(--text-color);">
            「安すぎて怪しい」と思われがちですが、これには明確な理由があります。<br>
            一般的な制作会社との違いをご覧ください。
        </p>

        <div style="overflow-x:auto;">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th style="width:30%;">サービス内容</th>
                        <th style="width:35%;">一般的な制作会社・相場</th>
                        <th class="our">FKT Office 会員価格</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="comparison-row">
                        <td>IT顧問契約<br><small>(訪問・企画書作成)</small></td>
                        <td>月 10万〜15万円</td>
                        <td><strong>月 33,000円</strong></td>
                    </tr>
                    <tr class="comparison-row">
                        <td>Web / LP制作<br><small>(構成〜実装)</small></td>
                        <td>20万〜40万円</td>
                        <td><strong>33,000円</strong></td>
                    </tr>
                    <tr class="comparison-row">
                        <td>業務アプリ開発<br><small>(システム構築)</small></td>
                        <td>100万円〜</td>
                        <td><strong>55,000円〜</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="cheap-reason">
            <ul style="margin: 0;">
                <li><strong>AI（人工知能）のフル活用：</strong><br>資料作成やコード生成にAIを活用し、作業時間を大幅に短縮しています。</li>
                <li><strong>自社実績の「横展開」：</strong><br>ゼロから作るのではなく、私の店舗で実際に効果が出たツールをベースに開発するため、開発工数が圧倒的に少ないのです。</li>
                <li><strong>地元密着：</strong><br>移動コストや広告費をかけず、口コミと信頼で動いているため、余計な経費が乗っていません。</li>
            </ul>
            <p style="text-align:center; font-weight:bold; margin-top:20px; color: var(--primary);">
                つまり、私たちが「AIでコストダウン」しているからこそ、<br>
                お客様にもこの価格で提供できるのです。
            </p>
        </div>
    </section>

    <section id="price-list" class="section">
        <h2 class="section-title">Price List</h2>
        <p style="text-align: center; margin-bottom: 20px; color: var(--text-color);">
            項目をクリックすると、仕事内容の詳細へ移動します。<br>
            <strong>顧問契約（月額会員）のお客様には、圧倒的な特別価格</strong>で制作を提供します。
        </p>
        
        <div class="price-table-wrapper">
            <table class="price-table">
                <thead>
                    <tr>
                        <th style="background:#f4f7f6; color:#333;">サービス項目<br><span style="font-size:10px; font-weight:normal;">(クリックで詳細へ)</span></th>
                        <th>一般価格<br><span style="font-size:11px; font-weight:normal;">(スポット依頼)</span></th>
                        <th class="special">会員特別価格<br><span style="font-size:11px; font-weight:normal;">(顧問契約者)</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="clickable-row" onclick="location.href='#detail-advisor'">
                        <td style="text-align: left;">
                            <span class="link-text">① IT顧問パートナー契約</span>
                            <span style="font-size: 13px;">相談・企画・アプリ設計</span>
                            <span class="click-hint">▼ 詳細を見る</span>
                        </td>
                        <td>-</td>
                        <td>
                            <span class="price-highlight">月額 33,000円</span>
                            <span style="font-size:12px; color:var(--accent); display:block;">(6ヶ月契約〜)</span>
                        </td>
                    </tr>
                    <tr class="clickable-row" onclick="location.href='#detail-lp'">
                        <td style="text-align: left;">
                            <span class="link-text">② Web / LP制作</span>
                            <span style="font-size: 13px;">集客ページ・HP作成</span>
                            <span class="click-hint">▼ 詳細を見る</span>
                        </td>
                        <td>110,000円</td>
                        <td>
                            <span class="price-strike">110,000円</span>
                            <span class="price-highlight">33,000円</span>
                            <span class="price-tag">70% OFF</span>
                        </td>
                    </tr>
                    <tr class="clickable-row" onclick="location.href='#detail-app'">
                        <td style="text-align: left;">
                            <span class="link-text">③ 業務アプリ開発</span>
                            <span style="font-size: 13px;">日報・在庫管理・計算ツール</span>
                            <span class="click-hint">▼ 詳細を見る</span>
                        </td>
                        <td>165,000円〜</td>
                        <td>
                            <span class="price-strike">165,000円</span>
                            <span class="price-highlight">55,000円〜</span>
                        </td>
                    </tr>
                    <tr class="clickable-row" onclick="location.href='#detail-env'">
                        <td style="text-align: left;">
                            <span class="link-text">④ 環境構築パック</span>
                            <span style="font-size: 13px;">サーバー・ドメイン・メール</span>
                            <span class="click-hint">▼ 詳細を見る</span>
                        </td>
                        <td>55,000円</td>
                        <td>
                            <span class="price-strike">55,000円</span>
                            <span class="price-highlight">33,000円</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section class="section" style="background-color: #fdfcf8; padding-top: 20px;">
        <h3 style="text-align:center; margin-bottom:40px; color:#999; font-size:1.3rem; font-weight:700;">▼ サービス詳細内容</h3>

        <div id="detail-advisor" class="detail-card">
            <div class="detail-title">① IT顧問パートナー契約</div>
            <div class="detail-price">月額 33,000円 (税込)</div>
            <p style="margin-bottom: 20px;">
                「相談だけ」ではありません。社長の頭の中にあるアイデアを、毎月「目に見える形（設計図・企画書）」にしてお持ちします。
            </p>
            <ul class="feature-list">
                <li><strong>無制限の「壁打ち」相談</strong><br>LINEやChatWorkでいつでも相談OK。「このメール怪しい？」「PCの選び方は？」などのトラブル診断も対応します。</li>
                <li><strong>現場訪問・定例MTG（月1回/120分）</strong><br>膝を突き合わせて経営課題を整理。Zoomだけでは分からない現場の空気感を共有します。</li>
                <li><strong>アプリ設計図・企画書の作成（月1件）</strong><br>
                    「こんなアプリが欲しい」という要望をヒアリングし、<strong>「要件定義書（設計図）」や「画面ラフ」</strong>を作成します。<br>
                    ここまでを顧問料内で行うため、開発に進む際の手戻りがありません。
                </li>
                <li><strong>事務員さんの「エクセル救急車」</strong><br>
                    「ちょっとした関数」で劇的に楽になります。複雑なプログラミングを使わなくても、エクセルは少しの工夫で魔法のように便利になります。<br>
                    <span style="font-size:13px; color:#666;">「これ手入力するの面倒だな」と思ったらすぐご相談ください。その場でササッと修正できるレベルなら、何度でも無料です。</span>
                </li>
                <li style="border: 1px dashed var(--accent); padding: 10px; background: #fff8e1; border-radius: var(--radius); list-style: none;">
                    <strong style="color:var(--accent);">⚠️ 追加案件について</strong><br>
                    <span style="font-size:0.9em;">※月1件までは基本料金内です。<br>
                    ※2件目以降の作成、または大幅な仕様変更による作り直しの場合は、<strong>1件につき ＋11,000円</strong> の追加費用を申し受けます。</span>
                </li>
            </ul>
            <div class="contract-term">
                【重要】契約期間について<br>
                最低契約期間：6ヶ月間（以降、6ヶ月ごとの自動更新）<br>
                <span style="font-size:13px; font-weight:normal; color:#d35400;">※腰を据えて成果を出すため、短期での解約はお断りしております。</span>
            </div>
        </div>

        <div id="detail-lp" class="detail-card">
            <div class="detail-title">② Web / LP制作 <span style="font-size:12px; background:#333; color:white; padding:3px 10px; margin-left:10px; border-radius:4px;">実装・納品</span></div>
            <div class="detail-price">
                <div style="font-size:1rem; color:#888; font-weight:normal;">一般価格 110,000円 / 本</div>
                <div>会員特価 33,000円 <span style="font-size:1rem; font-weight:normal;">/ 本</span></div>
            </div>
            <p>集客用のランディングページや、会社ホームページを新規作成し、公開状態にして納品します。</p>
            <div class="plan-note">
                <strong>■ 一般のお客様（スポット依頼）：</strong><br>
                ヒアリング・構成案の作成から丸ごと請け負います。（企画・構成費込み）<br><br>
                <strong>■ 顧問会員様：</strong><br>
                顧問契約内で作成済みの「ドラフト（構成案）」を元に実装するため、<strong>作業費（実装費）のみの格安価格</strong>で対応可能です。
            </div>
            <ul class="feature-list">
                <li>スマホ・タブレット完全対応（レスポンシブ）</li>
                <li>サーバーへのアップロード・公開作業</li>
                <li>完成データの譲渡</li>
            </ul>
        </div>

        <div id="detail-app" class="detail-card">
            <div class="detail-title">③ 業務アプリ開発 <span style="font-size:12px; background:#333; color:white; padding:3px 10px; margin-left:10px; border-radius:4px;">システム構築</span></div>
            <div class="detail-price">
                <div style="font-size:1rem; color:#888; font-weight:normal;">一般価格 165,000円〜 / 件</div>
                <div>会員特価 55,000円〜 <span style="font-size:1rem; font-weight:normal;">/ 件</span></div>
            </div>
            <p>市販のソフトでは対応できない、御社の現場独自のルールに合わせた「専用業務アプリ」を開発・実装します。</p>
            <div class="plan-note">
                <strong>■ 一般のお客様（スポット依頼）：</strong><br>
                業務フローのヒアリング、「要件定義（設計）」から開発まで一貫して行います。<br><br>
                <strong>■ 顧問会員様：</strong><br>
                顧問契約内で完了している「設計図」を元に開発するため、<strong>スムーズかつ低コスト</strong>で実装可能です。
            </div>
            <div style="font-weight:bold; margin-top:20px; color: var(--primary); font-size:1.1rem;">【開発実績（事例）】</div>
            <div class="case-box">
                <strong><i class="fa-solid fa-folder-open"></i> AIスタッフ配置・作業管理システム</strong>
                <p style="font-size:14px; margin:5px 0 0;">「誰が・いつ・何をしたか」をタップで記録し可視化。感覚に頼っていたシフト管理をデータ化し、人件費を最適化します。（自社店舗導入済み）</p>
            </div>
            <div class="case-box">
                <strong><i class="fa-solid fa-folder-open"></i> 業務習得・教育進捗管理アプリ</strong>
                <p style="font-size:14px; margin:5px 0 0;">新人スタッフが「何ができて、何ができないか」を一目で把握。教育の抜け漏れを防ぎ、店長不在でもトレーニングが進む仕組みを作ります。</p>
            </div>
        </div>

        <div id="detail-env" class="detail-card">
            <div class="detail-title">④ 環境構築パック <span style="font-size:12px; background:#333; color:white; padding:3px 10px; margin-left:10px; border-radius:4px;">インフラ整備</span></div>
            <div class="detail-price">
                <div style="font-size:1rem; color:#888; font-weight:normal;">一般価格 55,000円 / 回</div>
                <div>会員特価 33,000円 <span style="font-size:1rem; font-weight:normal;">/ 回</span></div>
            </div>
            <p>IT活用の土台となる環境整備を丸ごと代行します。</p>
            <ul class="feature-list">
                <li>レンタルサーバー契約・初期設定（Xserver等）</li>
                <li>独自ドメイン取得・Web接続設定</li>
                <li><strong>Google Workspace（業務用メール）導入・設定</strong></li>
                <li>Firebase（データベース）初期構築</li>
            </ul>
        </div>
    </section>

    <!-- 実績とシミュレーションセクション -->
    <section id="results" class="section">
        <h2 class="section-title" style="color:white;">当社のAI導入実績と利益改善シミュレーター</h2>
        <div class="results-inner">
            <p style="text-align: center; font-size: 1.125rem; font-weight: 700; margin-bottom: 30px; color: #ffeb3b;">
                当社（3店舗経営）のアプリ導入効果を、御社の数字で試算できます。
            </p>

            <div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: var(--radius); margin-bottom: 30px;">
                <h3 style="color: white; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 10px;">
                    【吹田総業（3店舗）でのAIアプリ導入効果】
                </h3>
                <div style="display: flex; justify-content: space-around; text-align: center; flex-wrap: wrap; gap: 10px;">
                    <div style="margin: 0 5px;"><strong style="color: var(--accent); font-size: 1.5rem;">15%</strong><br>人件費を削減</div>
                    <div style="margin: 0 5px;"><strong style="color: var(--accent); font-size: 1.5rem;">5%</strong><br>廃棄ロスを削減</div>
                    <div style="margin: 0 5px;"><strong style="color: var(--accent); font-size: 1.5rem;">3%</strong><br>その他費用を削減</div>
                </div>
            </div>

            <h3 style="color: white; font-weight: 700; margin-bottom: 20px;">
                利益改善シミュレーター
            </h3>
            
            <div class="simulation-box">
                <p style="margin-bottom: 25px; font-size: 0.95rem; color: #666;">
                    下のスライドバーを動かして、「現在のコスト」と「削減目標」を入力してください。
                </p>

                <!-- 1. 店舗数 -->
                <div class="sim-group">
                    <div class="input-wrapper">
                        <div class="input-header">
                            <span>対象の店舗数:</span>
                            <span class="input-value-display" id="stores-display">3 店舗</span>
                        </div>
                        <input type="range" id="stores-input" min="0" max="20" value="3" oninput="calculateSavings()">
                    </div>
                </div>

                <!-- 2. 人件費シミュレーション -->
                <div class="sim-group">
                    <div class="sim-group-title">
                        <i class="fa-solid fa-users" style="color:var(--primary);"></i> 人件費の削減試算
                    </div>
                    
                    <div class="input-wrapper">
                        <div class="input-header">
                            <span>現在の月間人件費 (1店舗あたり):</span>
                            <span class="input-value-display" id="labor-cost-display">¥ 1,500,000</span>
                        </div>
                        <input type="range" id="labor-cost-input" min="0" max="3000000" step="10000" value="1500000" oninput="calculateSavings()">
                    </div>

                    <div class="input-wrapper">
                        <div class="input-header">
                            <span>削減目標率:</span>
                            <span class="input-value-display reduction-color" id="labor-percent-display">15 %</span>
                        </div>
                        <input type="range" class="reduction-slider" id="labor-percent-input" min="0" max="30" step="1" value="15" oninput="calculateSavings()">
                        <div style="font-size:12px; color:#888; text-align:right;">(当社実績: 15%)</div>
                    </div>
                </div>

                <!-- 3. 廃棄ロスシミュレーション -->
                <div class="sim-group">
                    <div class="sim-group-title">
                        <i class="fa-solid fa-trash-can" style="color:var(--primary);"></i> 廃棄ロスの削減試算
                    </div>
                    
                    <div class="input-wrapper">
                        <div class="input-header">
                            <span>現在の月間廃棄額 (1店舗あたり):</span>
                            <span class="input-value-display" id="waste-cost-display">¥ 300,000</span>
                        </div>
                        <input type="range" id="waste-cost-input" min="0" max="1000000" step="5000" value="300000" oninput="calculateSavings()">
                    </div>

                    <div class="input-wrapper">
                        <div class="input-header">
                            <span>削減目標率:</span>
                            <span class="input-value-display reduction-color" id="waste-percent-display">5 %</span>
                        </div>
                        <input type="range" class="reduction-slider" id="waste-percent-input" min="0" max="20" step="0.5" value="5" oninput="calculateSavings()">
                        <div style="font-size:12px; color:#888; text-align:right;">(当社実績: 5%)</div>
                    </div>
                </div>

                <!-- 4. その他経費シミュレーション -->
                <div class="sim-group">
                    <div class="sim-group-title">
                        <i class="fa-solid fa-calculator" style="color:var(--primary);"></i> その他経費の削減試算
                    </div>
                    
                    <div class="input-wrapper">
                        <div class="input-header">
                            <span>現在の月間その他経費 (1店舗あたり):</span>
                            <span class="input-value-display" id="other-cost-display">¥ 100,000</span>
                        </div>
                        <input type="range" id="other-cost-input" min="0" max="300000" step="5000" value="100000" oninput="calculateSavings()">
                    </div>

                    <div class="input-wrapper">
                        <div class="input-header">
                            <span>削減目標率:</span>
                            <span class="input-value-display reduction-color" id="other-percent-display">3 %</span>
                        </div>
                        <input type="range" class="reduction-slider" id="other-percent-input" min="0" max="10" step="0.5" value="3" oninput="calculateSavings()">
                        <div style="font-size:12px; color:#888; text-align:right;">(当社実績: 3%)</div>
                    </div>
                </div>

                <!-- 結果表示エリア -->
                <div class="result-summary">
                    <div style="font-size: 1rem; font-weight: 700; color: #fff8e1;">
                        予想される 月間 利益改善額
                    </div>
                    <div class="result-total" id="total-savings">
                        ¥ 0
                    </div>

                    <div class="result-details">
                        <div class="detail-row">
                            <span>人件費削減額:</span>
                            <span class="detail-value" id="labor-savings">¥ 0</span>
                        </div>
                        <div class="detail-row">
                            <span>廃棄ロス削減額:</span>
                            <span class="detail-value" id="waste-savings">¥ 0</span>
                        </div>
                        <div class="detail-row">
                            <span>その他コスト削減額:</span>
                            <span class="detail-value" id="other-savings">¥ 0</span>
                        </div>
                        <p style="margin-top: 10px; font-size: 11px; text-align: right; color: #fff8e1;">
                            ※上記はあくまで試算であり、成果を保証するものではありません。
                        </p>
                    </div>
                </div>
            </div>
            <a href="mailto:info@fkt-office.com?subject=利益改善シミュレーションに基づく無料相談の申し込み" class="btn" style="margin-top: 40px; background: white; color: var(--accent);">
                シミュレーション結果を持って無料相談する
            </a>
        </div>
    </section>

    <!-- コラム一覧（アコーディオン形式） -->
    <section id="column" class="section">
        <h2 class="section-title">社長の着想日誌 <span style="font-size:0.6em; color:#888; font-weight:normal;">- AIとの壁打ち録 -</span></h2>
        <p style="text-align: center; margin-bottom: 40px; color: var(--text-color);">
            日々の現場で感じたこと、AIと議論して得られた気づきを綴っています。<br>
            クリックすると詳細をお読みいただけます。
        </p>
        
        <div id="column-list" style="max-width: 800px; margin: 0 auto;">
            <!-- JSでここにアコーディオンアイテムが挿入される -->
        </div>
    </section>

    <section class="message-section">
        <h2 class="message-title">中小零細企業の社長へ。</h2>
        <div class="message-body">
            <p>
                「AIなんて、怖い」「不気味だ」「信頼できない」。<br>
                そう食わず嫌いをしっいる間に、世の中は猛スピードで変わっています。
            </p>
            <p>
                資金も人材も潤沢な大企業は、もうAIを使ってさらに効率化を進めています。<br>
                このままでは、我々のような中小零細企業は、ますます彼らとの「格差」を広げられ、取り残されてしまいます。
            </p>
            <p>
                しかし、見方を変えれば、これは<strong>「下剋上」のチャンス</strong>でもあります。<br>
                これまで何百万円もかかっていたシステム開発や、専門家が必要だった分析が、<br>
                AIを使えば、私たちのような小さな会社でも「安く・早く」手に入るようになったのです。
            </p>
            <p>
                <strong>AIこそ、ヒト・モノ・カネのない中小零細企業が持つべき「最強の武器」です。</strong>
            </p>
            <p>
                怖がる必要はありません。私が先に毒味をして、使えるものだけを選別しました。<br>
                どうか、食わず嫌いをやめて、この武器を手に取ってください。<br>
                私と一緒に、泥臭く、しかしスマートに、生き残りをかけた戦いを始めましょう。
            </p>
        </div>
    </section>

    <section id="company" class="section">
        <h2 class="section-title">Company Info</h2>
        <table class="company-table">
            <tr><th>会社名</th><td>有限会社 吹田総業（Fukita Sogyo Co.,Ltd.）</td></tr>
            <tr><th>代表者</th><td>代表取締役　吹田 克己</td></tr>
            <tr><th>所在地</th><td>〒520-3308 滋賀県甲賀市甲南町野田854-6</td></tr>
            <tr><th>事業内容</th><td>コンビニエンスストア経営<br>AI導入コンサルティング事業<br>システム開発・DX支援</td></tr>
            <tr><th>創業</th><td>平成14年（2002年）</td></tr>
        </table>
        <h3 style="margin-bottom: 25px; color: var(--primary);">History</h3>
        <div class="history-list">
            <div class="history-item"><span class="year">2002年（平成14年）</span>創業。セブン-イレブン経営を開始。</div>
            <div class="history-item"><span class="year">2004年（平成16年）</span>有限会社 吹田総業 設立（法人化）。</div>
            <div class="history-item"><span class="year">2009年（平成21年）</span>セブン-イレブン 2店舗目 経営を開始。</div>
            <div class="history-item"><span class="year">2017年（平成29年）</span>セブン-イレブン 3店舗目 経営を開始。</div>
            <div class="history-item"><span class="year">2025年5月</span>生成AI（Gemini）を本格導入。社内業務の大幅な自動化に成功。</div>
            <div class="history-item"><span class="year">2025年11月</span>AI事業部（FKT Office）を設立。中小企業向けコンサルティングを開始。</div>
        </div>
    </section>

    <footer>
        <p style="font-size:1.2rem;"><strong>有限会社 吹田総業 AI事業部</strong></p>
        <br>
        <a href="mailto:info@fkt-office.com?subject=無料相談の申し込み&body=ホームページを見て連絡しました。面談（またはWeb相談）を希望します。" class="btn" style="padding: 12px 35px; font-size: 1rem; margin-top:0;">お問い合わせはこちら</a>
        <div class="email-fallback">
            メールが起動しない場合： 
            <span class="email-address" onclick="copyEmail()" role="button" tabindex="0">
                info@fkt-office.com
            </span>
        </div>
        <p style="margin-top: 40px; color: #7f8c8d; font-size: 12px;">&copy; 2025 FKT Office.</p>
    </footer>
    
    <!-- alert()の代替用カスタムメッセージボックス -->
    <div id="custom-message"></div>

    <script>
        // localStorageのキー名
        const STORAGE_KEY = 'fkt_office_sim_inputs';

        // メールアドレスコピー機能
        function copyEmail() {
            const emailText = "info@fkt-office.com";
            // クリップボードAPIがサポートされているかチェック (iFrameではexecCommandを使用)
            if (document.execCommand) {
                const tempInput = document.createElement('input');
                tempInput.value = emailText;
                document.body.appendChild(tempInput);
                tempInput.select();
                try {
                    document.execCommand('copy');
                    showMessage('メールアドレスをコピーしました！', '#27ae60');
                } catch (err) {
                    showMessage('コピーに失敗しました。', '#e74c3c');
                }
                document.body.removeChild(tempInput);
            } else {
                showMessage('お使いのブラウザではコピー機能が使えません。手動でコピーしてください。', '#e74c3c');
            }
        }

        // カスタムメッセージボックス表示関数
        function showMessage(message, color) {
            let msgBox = document.getElementById('custom-message');
            msgBox.textContent = message;
            msgBox.style.backgroundColor = color;
            msgBox.classList.add('visible');
            setTimeout(() => {
                msgBox.classList.remove('visible');
            }, 3000);
        }

        // モバイルメニュー切り替え機能
        function toggleMenu() {
            const nav = document.querySelector('.nav-links');
            const toggle = document.querySelector('.menu-toggle');
            
            // ナビゲーションの表示を切り替える
            nav.classList.toggle('active');
            toggle.classList.toggle('active');
            
            // メニューが開いているときは背景のスクロールを止める
            document.body.classList.toggle('no-scroll');
        }

        // アンカーリンクをクリックしたとき、メニューを閉じる（モバイル用）
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                const nav = document.querySelector('.nav-links');
                if (nav.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        // ===============================================
        // 利益改善シミュレーション機能
        // 入力要素のIDリスト
        const inputIds = [
            'stores-input', 'labor-cost-input', 'labor-percent-input',
            'waste-cost-input', 'waste-percent-input', 'other-cost-input', 'other-percent-input'
        ];
        
        // 入力要素
        const storesInput = document.getElementById('stores-input');
        const laborCostInput = document.getElementById('labor-cost-input');
        const laborPercentInput = document.getElementById('labor-percent-input');
        const wasteCostInput = document.getElementById('waste-cost-input');
        const wastePercentInput = document.getElementById('waste-percent-input');
        const otherCostInput = document.getElementById('other-cost-input');
        const otherPercentInputEl = document.getElementById('other-percent-input');
        
        // 表示要素
        const storesDisplay = document.getElementById('stores-display');
        const laborCostDisplay = document.getElementById('labor-cost-display');
        const laborPercentDisplay = document.getElementById('labor-percent-display');
        const wasteCostDisplay = document.getElementById('waste-cost-display');
        const wastePercentDisplay = document.getElementById('waste-percent-display');
        const otherCostDisplay = document.getElementById('other-cost-display');
        const otherPercentDisplay = document.getElementById('other-percent-display');
        
        // 結果表示要素
        const totalSavingsDisplay = document.getElementById('total-savings');
        const laborSavingsDisplay = document.getElementById('labor-savings');
        const wasteSavingsDisplay = document.getElementById('waste-savings');
        const otherSavingsDisplay = document.getElementById('other-savings');

        // 数値をカンマ区切り（日本円表示）にフォーマットする関数
        const formatCurrency = (number) => {
            return '¥ ' + Math.round(number).toLocaleString('ja-JP');
        };

        // シミュレーターの入力値をlocalStorageに保存する関数
        function saveInputs() {
            const inputs = {};
            inputIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    inputs[id] = element.value;
                }
            });
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
            } catch (e) {
                console.error("Failed to save to localStorage:", e);
            }
        }

        // シミュレーターの入力値をlocalStorageから読み込む関数
        function loadInputs() {
            try {
                const savedInputs = localStorage.getItem(STORAGE_KEY);
                if (savedInputs) {
                    const inputs = JSON.parse(savedInputs);
                    inputIds.forEach(id => {
                        const element = document.getElementById(id);
                        if (element && inputs[id] !== undefined) {
                            element.value = inputs[id];
                        }
                    });
                    return true;
                }
            } catch (e) {
                console.error("Failed to load or parse localStorage:", e);
            }
            return false;
        }

        function calculateSavings() {
            // 1. 店舗数
            const stores = parseInt(storesInput.value);
            storesDisplay.textContent = stores + ' 店舗';

            // 2. 人件費
            const laborCostPerStore = parseInt(laborCostInput.value);
            const laborPercent = parseFloat(laborPercentInput.value);
            
            laborCostDisplay.textContent = formatCurrency(laborCostPerStore);
            laborPercentDisplay.textContent = laborPercent + ' %';

            const laborSavingsTotal = (laborCostPerStore * stores) * (laborPercent / 100);

            // 3. 廃棄ロス
            const wasteCostPerStore = parseInt(wasteCostInput.value);
            const wastePercent = parseFloat(wastePercentInput.value);
            
            wasteCostDisplay.textContent = formatCurrency(wasteCostPerStore);
            wastePercentDisplay.textContent = wastePercent + ' %';

            const wasteSavingsTotal = (wasteCostPerStore * stores) * (wastePercent / 100);

            // 4. その他経費
            const otherCostPerStore = parseInt(otherCostInput.value);
            const otherPercent = parseFloat(otherPercentInputEl.value);
            
            otherCostDisplay.textContent = formatCurrency(otherCostPerStore);
            otherPercentDisplay.textContent = otherPercent + ' %';

            const otherSavingsTotal = (otherCostPerStore * stores) * (otherPercent / 100);

            // 5. 合計と表示
            const totalSavings = laborSavingsTotal + wasteSavingsTotal + otherSavingsTotal;

            laborSavingsDisplay.textContent = formatCurrency(laborSavingsTotal);
            wasteSavingsDisplay.textContent = formatCurrency(wasteSavingsTotal);
            otherSavingsDisplay.textContent = formatCurrency(otherSavingsTotal);
            totalSavingsDisplay.textContent = formatCurrency(totalSavings);
            
            // 6. 入力値を保存
            saveInputs();
        }

        // ===============================================
        // コラム一覧管理機能 
        
        let columnPosts = [
            {
                date: '2025/12/03',
                title: 'AIには見えない「行間」と「執念」の話',
                // リンク先を更新し、テキストの（準備中）を削除
                content: '「おいAI、データはNOでも俺の勘はYESだ」。そんな問いへのAIの答えは「私にはデータしか見えません」でした。対して経営者の武器は、数値化できない現場の空気を感じ取る直感と、低い成功確率を「執念」で100%に変える行動力です。「分析」はAIに、「覚悟」は人間に。この役割分担こそが最強のチームを作る鍵です。AIがはじき出す「非推奨」を横目に、今日も私は勝算と少しの根拠のない自信を持って現場へ向かいます。<br><br><a href="https://note.com/fukita_ai/n/n67b7f8dce7b9" target="_blank" style="color: var(--accent); font-weight: bold; text-decoration: underline;">noteで続きを読む</a>',
            },
            {
                date: '2025/12/01',
                title: 'AIは「魔法の杖」か、ただの「自己満足」か',
                content: '「AIで簡単にできる！」という情報に惑わされていませんか？成果に繋がらないAI活用はただの自己満足です。本当に大事なのは「何をしたいか」という目的を明確にすること。華やかな機能に惑わされず、まずは現場の地味な悩みからAIにぶつけてみてください。<br><br><a href="https://note.com/fukita_ai/n/n69ccbaea6d7e" target="_blank" style="color: var(--accent); font-weight: bold; text-decoration: underline;">noteで続きを読む</a>',
            },
            {
                date: '2025/11/30',
                title: '社長、気疲れしてませんか？',
                // ユーザーの指示に基づき、noteへのリンクを追加
                content: '「従業員に苦労かけたくない」…そんな優しさから、グッと言葉を飲み込んでいませんか？私も同じでしたが、AIと喋るようになって変わりました。相手は機械、感情ゼロ。だからこそ、誰にも言えない愚痴も弱音も、全部遠慮なく吐き出せるんです。話すだけで頭が整理され、ストレスが消えていく。孤独な社長こそ、この「気を遣わない相棒」を使い倒すべきです。<br><br><a href="https://note.com/fukita_ai/n/nec11a0a2560d" target="_blank" style="color: var(--accent); font-weight: bold; text-decoration: underline;">noteで続きを読む</a>',
            },
            {
                date: '2025/11/29',
                title: 'DXの壁は「知識」より「行動」',
                // ユーザーの指示に基づき、noteへのリンクを追加
                content: '多くの社長がAIは難しいと考えますが、最大の壁は技術ではなく「一歩踏み出す行動」です。現場の簡単な問題をAIに投げかけることから始め、小さな成功体験を積み重ねることが、DX推進の第一歩となります。<br><br><a href="https://note.com/fukita_ai/n/nef650ec63ed9" target="_blank" style="color: var(--accent); font-weight: bold; text-decoration: underline;">noteで続きを読む</a>',
            },
            // ユーザーの指示に基づき、noteへのリンクを追加
            {
                date: '2025/11/20',
                title: 'エクセル地獄からの脱出',
                content: '複雑化したエクセルファイルは、もはや業務効率化の敵です。<br>当店では、AIを活用してこれらの煩雑なシートをシンプルな専用アプリに置き換え、管理工数を劇的に削減しました。このノウハウを共有します。<br><br><a href="https://note.com/fukita_ai/n/n2bfdd3f0f0e4" target="_blank" style="color: var(--accent); font-weight: bold; text-decoration: underline;">noteで続きを読む</a>',
            },
        ];

        // コラム一覧をレンダリング（アコーディオン形式）
        function renderColumns() {
            const listContainer = document.getElementById('column-list');
            listContainer.innerHTML = ''; // クリア

            if (columnPosts.length === 0) {
                listContainer.innerHTML = '<p style="text-align: center; color: #666;">まだ記事がありません。</p>';
                return;
            }

            // 日付順にソート (新しいものが上)
            columnPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

            columnPosts.forEach((post, index) => {
                const item = document.createElement('div');
                item.className = 'accordion-item';
                
                // アコーディオンのHTML構造
                item.innerHTML = `
                    <div class="accordion-header" onclick="toggleAccordion(${index})">
                        <div>
                            <span class="accordion-date">${post.date}</span>
                            <span class="accordion-title">${post.title}</span>
                        </div>
                        <i class="fa-solid fa-chevron-down accordion-icon" id="icon-${index}"></i>
                    </div>
                    <div class="accordion-content" id="content-${index}">
                        <div class="accordion-inner">
                            ${post.content}
                        </div>
                    </div>
                `;
                listContainer.appendChild(item);
            });
        }

        // アコーディオンの開閉制御
        function toggleAccordion(index) {
            const content = document.getElementById(`content-${index}`);
            const item = content.parentElement;
            
            // 現在の高さをチェック
            if (content.style.maxHeight) {
                // 開いている場合は閉じる
                content.style.maxHeight = null;
                item.classList.remove('active');
            } else {
                // 閉じている場合は開く
                // scrollHeightを使ってコンテンツの高さに合わせる
                content.style.maxHeight = content.scrollHeight + "px";
                item.classList.add('active');
            }
        }

        // ページロード時の初期化処理
        window.onload = function() {
            // 1. 保存された入力を読み込む
            const hasLoaded = loadInputs();
            
            // 2. 読み込みに失敗した場合（初回アクセスなど）はデフォルト値を設定
            if (!hasLoaded) {
                storesInput.value = 3;
                laborCostInput.value = 1500000;
                laborPercentInput.value = 15;
                wasteCostInput.value = 300000;
                wastePercentInput.value = 5;
                otherCostInput.value = 100000;
                otherPercentInputEl.value = 3;
            }

            // 3. 計算を実行して表示を更新（保存された値またはデフォルト値）
            calculateSavings();
            renderColumns(); // コラムを初期表示
            
            // 4. イベントリスナーを設定して、スライダー操作時に入力値を保存し、計算を再実行
            // oninput属性はHTMLで既に設定されているが、念のためこちらでも対応
            inputIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.addEventListener('input', calculateSavings);
                }
            });
        };
    </script>
</body>
</html>
