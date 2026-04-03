import { updateAuthHeader } from '../shared/auth-header';

interface CasinoInfo {
  url: string;
  loc: string;
  stakes: string;
  games: string;
  hours: string;
  tables: string;
}

(function () {
  const fab = document.getElementById('chatFab')!;
  const win = document.getElementById('chatWindow')!;
  const body = document.getElementById('chatBody')!;
  const input = document.getElementById('chatInput') as HTMLInputElement;
  const send = document.getElementById('chatSend')!;
  let started = false;

  const casinos: Record<string, CasinoInfo> = {
    'ベラージオ': { url: 'junkets/bellagio.html', loc: 'ラスベガス', stakes: '$1/3〜$400/800', games: 'NLH/PLO/Mixed', hours: '24時間', tables: '40+' },
    'マニラ': { url: 'junkets/manila-cod.html', loc: 'フィリピン', stakes: '₱25/50〜₱500/1K', games: 'NLH/PLO', hours: '24時間', tables: '30+' },
    'マカオ': { url: 'junkets/wynn-macau.html', loc: '中国', stakes: 'HK$25/50〜HK$500/1K', games: 'NLH/Short Deck', hours: '14:00〜翌6:00', tables: '20+' },
    'ロンドン': { url: 'junkets/hippodrome.html', loc: 'UK', stakes: '£1/2〜£25/50', games: 'NLH/PLO/Hi-Lo', hours: '12:00〜翌6:00', tables: '15+' },
    'パラダイスシティ': { url: 'junkets/paradise-city.html', loc: '韓国・仁川', stakes: '₩10K/20K〜₩100K/200K', games: 'NLH', hours: '14:00〜翌4:00', tables: '10+' },
    'シドニー': { url: 'junkets/star-sydney.html', loc: 'オーストラリア', stakes: 'A$2/5〜A$50/100', games: 'NLH/PLO', hours: '12:00〜翌6:00', tables: '20+' },
    '韓国': { url: 'junkets/paradise-city.html', loc: '韓国・仁川', stakes: '₩10K/20K〜₩100K/200K', games: 'NLH', hours: '14:00〜翌4:00', tables: '10+' },
  };

  function addMsg(text: string, type: string): void {
    const d = document.createElement('div');
    d.className = 'chat-msg ' + type;
    d.innerHTML = text;
    body.appendChild(d);
    body.scrollTop = body.scrollHeight;
  }

  function addQuick(options: string[]): void {
    const wrap = document.createElement('div');
    wrap.className = 'chat-quick';
    options.forEach(function (opt) {
      const b = document.createElement('button');
      b.textContent = opt;
      b.onclick = function () { handleUser(opt); wrap.remove(); };
      wrap.appendChild(b);
    });
    body.appendChild(wrap);
    body.scrollTop = body.scrollHeight;
  }

  function showTyping(): void {
    const t = document.createElement('div');
    t.className = 'chat-typing';
    t.id = 'typing';
    t.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(t);
    body.scrollTop = body.scrollHeight;
  }

  function hideTyping(): void {
    const t = document.getElementById('typing');
    if (t) t.remove();
  }

  function botReply(text: string, quickOpts?: string[], delay?: number): void {
    showTyping();
    setTimeout(function () {
      hideTyping();
      addMsg(text, 'bot');
      if (quickOpts) addQuick(quickOpts);
    }, delay || 800);
  }

  function startChat(): void {
    started = true;
    addMsg('こんにちは！POKER JAPAN サポートです。♠<br/>海外ポーカーに関する質問、ジャンケットの手配、カジノ情報など、何でもお気軽にどうぞ。', 'bot');
    setTimeout(function () {
      addQuick([
        'ジャンケットについて',
        'おすすめカジノは？',
        '初心者です',
        'ステークス情報',
        '渡航サポート',
      ]);
    }, 400);
  }

  function handleUser(text: string): void {
    addMsg(text, 'user');
    const lower = text.toLowerCase();

    if (lower.indexOf('ジャンケット') >= 0) {
      botReply('ジャンケットは、カジノのVIPプレイヤー向け仲介サービスです。宿泊・食事・送迎などの特典が受けられます。<br/><br/>どのカジノのジャンケットにご興味がありますか？', [
        'ベラージオ (ラスベガス)', 'マニラ COD', 'ウィンマカオ', 'パラダイスシティ (韓国)', 'お問い合わせフォーム',
      ]);
    } else if (lower.indexOf('おすすめ') >= 0 || lower.indexOf('どこがいい') >= 0) {
      botReply('お客様の経験レベルとご予算で変わりますが、人気のおすすめは：<br/><br/>' +
        '<b>初心者:</b> 🇰🇷 <a href="junkets/paradise-city.html">パラダイスシティ</a>（成田2.5h、低レート）<br/>' +
        '<b>中級者:</b> 🇵🇭 <a href="junkets/manila-cod.html">マニラ COD</a>（₱25/50〜、コスパ良）<br/>' +
        '<b>上級者:</b> 🇺🇸 <a href="junkets/bellagio.html">ベラージオ</a>（世界最高峰）<br/><br/>' +
        '詳しくお聞きしましょうか？', ['予算を伝えたい', '初心者向けの詳細', '上級者向けの詳細']);
    } else if (lower.indexOf('初心者') >= 0 || lower.indexOf('はじめて') >= 0 || lower.indexOf('始め') >= 0) {
      botReply('海外ポーカー初心者の方、歓迎します！<br/><br/>まずは <a href="pages/beginners.html">初心者ガイド</a> をご覧ください。ルール・ハンドランキング・基本戦略を解説しています。<br/><br/>初めての海外なら <a href="junkets/paradise-city.html">パラダイスシティ（韓国）</a> がおすすめです。成田から2.5時間、空港直結で安心。', [
        'パラダイスシティの詳細', '必要な予算は？', 'ルールを教えて', '渡航に必要なもの',
      ]);
    } else if (lower.indexOf('ステークス') >= 0 || lower.indexOf('レート') >= 0 || lower.indexOf('レ－ト') >= 0) {
      botReply('各カジノのステークスをご案内します。どのカジノの情報が必要ですか？', [
        'ベラージオ', 'マニラ', 'マカオ', 'パラダイスシティ', 'すべて見る',
      ]);
    } else if (lower.indexOf('渡航') >= 0 || lower.indexOf('旅行') >= 0 || lower.indexOf('フライト') >= 0 || lower.indexOf('ビザ') >= 0) {
      botReply('渡航サポートについてですね。POKER JAPANでは以下をサポートしています：<br/><br/>' +
        '✈️ フライト・ホテル手配<br/>🛂 ビザ情報（国別）<br/>💰 バンクロール管理アドバイス<br/>🚗 空港送迎手配（ジャンケット経由）<br/><br/>' +
        'どの国への渡航を検討していますか？', ['韓国', 'フィリピン', 'マカオ', 'ラスベガス', 'ロンドン']);
    } else if (lower.indexOf('予算') >= 0 || lower.indexOf('いくら') >= 0 || lower.indexOf('費用') >= 0) {
      botReply('目安の予算をお伝えします：<br/><br/>' +
        '<b>韓国（2泊3日）:</b> 約10〜15万円<br/>（航空券3万 + 宿泊2万 + バンクロール5〜10万）<br/><br/>' +
        '<b>マニラ（3泊4日）:</b> 約12〜20万円<br/>（航空券4万 + 宿泊3万 + バンクロール5〜13万）<br/><br/>' +
        '<b>ラスベガス（5泊6日）:</b> 約30〜50万円<br/>（航空券12万 + 宿泊8万 + バンクロール10〜30万）<br/><br/>' +
        'ジャンケット経由なら宿泊・食事コンプで大幅に節約可能です。', ['ジャンケットについて', '韓国の詳細', '相談したい']);
    } else if (lower.indexOf('ベラージオ') >= 0 || lower.indexOf('ラスベガス') >= 0) {
      const c = casinos['ベラージオ'];
      botReply('🇺🇸 <b>Bellagio Poker Room</b><br/>場所: ' + c.loc + '<br/>ステークス: ' + c.stakes + '<br/>ゲーム: ' + c.games + '<br/>テーブル数: ' + c.tables + '<br/>営業: ' + c.hours + '<br/><br/><a href="' + c.url + '">詳細ページを見る →</a>', ['ジャンケットを申し込む', '他のカジノも見る']);
    } else if (lower.indexOf('マニラ') >= 0 || lower.indexOf('フィリピン') >= 0) {
      const c = casinos['マニラ'];
      botReply('🇵🇭 <b>PokerStars LIVE Manila</b><br/>場所: ' + c.loc + '<br/>ステークス: ' + c.stakes + '<br/>ゲーム: ' + c.games + '<br/>テーブル数: ' + c.tables + '<br/>営業: ' + c.hours + '<br/><br/><a href="' + c.url + '">詳細ページを見る →</a>', ['ジャンケットを申し込む', '他のカジノも見る']);
    } else if (lower.indexOf('マカオ') >= 0) {
      const c = casinos['マカオ'];
      botReply('🇲🇴 <b>Wynn Macau</b><br/>場所: ' + c.loc + '<br/>ステークス: ' + c.stakes + '<br/>ゲーム: ' + c.games + '<br/>テーブル数: ' + c.tables + '<br/>営業: ' + c.hours + '<br/><br/><a href="' + c.url + '">詳細ページを見る →</a>', ['ジャンケットを申し込む', '他のカジノも見る']);
    } else if (lower.indexOf('パラダイス') >= 0 || lower.indexOf('韓国') >= 0 || lower.indexOf('仁川') >= 0) {
      const c = casinos['パラダイスシティ'];
      botReply('🇰🇷 <b>Paradise City Poker</b><br/>場所: ' + c.loc + '<br/>ステークス: ' + c.stakes + '<br/>ゲーム: ' + c.games + '<br/>テーブル数: ' + c.tables + '<br/>営業: ' + c.hours + '<br/><br/><a href="' + c.url + '">詳細ページを見る →</a>', ['ジャンケットを申し込む', '他のカジノも見る']);
    } else if (lower.indexOf('ロンドン') >= 0 || lower.indexOf('ヒポドローム') >= 0) {
      const c = casinos['ロンドン'];
      botReply('🇬🇧 <b>Hippodrome Casino</b><br/>場所: ' + c.loc + '<br/>ステークス: ' + c.stakes + '<br/>ゲーム: ' + c.games + '<br/>テーブル数: ' + c.tables + '<br/>営業: ' + c.hours + '<br/><br/><a href="' + c.url + '">詳細ページを見る →</a>', ['ジャンケットを申し込む', '他のカジノも見る']);
    } else if (lower.indexOf('シドニー') >= 0 || lower.indexOf('オーストラリア') >= 0) {
      const c = casinos['シドニー'];
      botReply('🇦🇺 <b>The Star Sydney</b><br/>場所: ' + c.loc + '<br/>ステークス: ' + c.stakes + '<br/>ゲーム: ' + c.games + '<br/>テーブル数: ' + c.tables + '<br/>営業: ' + c.hours + '<br/><br/><a href="' + c.url + '">詳細ページを見る →</a>', ['ジャンケットを申し込む', '他のカジノも見る']);
    } else if (lower.indexOf('申し込') >= 0 || lower.indexOf('相談') >= 0 || lower.indexOf('お問い合わせ') >= 0 || lower.indexOf('フォーム') >= 0 || lower.indexOf('連絡') >= 0) {
      botReply('お問い合わせありがとうございます。<br/><br/>以下の方法でご連絡いただけます：<br/><br/>📧 <b>メール:</b> support@pokerjapan.com<br/>💬 <b>LINE:</b> @pokerjapan<br/>📱 <b>Telegram:</b> @pokerjapan_support<br/><br/>ジャンケット手配は通常2営業日以内にご返信いたします。<br/>渡航希望日・カジノ・ステークスをお伝えいただけるとスムーズです。', ['トップに戻る']);
    } else if (lower.indexOf('すべて') >= 0 || lower.indexOf('一覧') >= 0 || lower.indexOf('他のカジノ') >= 0) {
      botReply('掲載中の全カジノ一覧は<a href="pages/casinos.html">こちら</a>からご覧いただけます。<br/><br/>人気順：<br/>' +
        '1. 🇺🇸 <a href="junkets/bellagio.html">ベラージオ</a><br/>' +
        '2. 🇵🇭 <a href="junkets/manila-cod.html">マニラ COD</a><br/>' +
        '3. 🇲🇴 <a href="junkets/wynn-macau.html">ウィンマカオ</a><br/>' +
        '4. 🇰🇷 <a href="junkets/paradise-city.html">パラダイスシティ</a><br/>' +
        '5. 🇬🇧 <a href="junkets/hippodrome.html">ヒポドローム</a><br/>' +
        '6. 🇦🇺 <a href="junkets/star-sydney.html">ザ・スター</a>');
    } else if (lower.indexOf('ルール') >= 0) {
      botReply('テキサスホールデムの基本ルールは <a href="pages/beginners.html">初心者ガイド</a> で詳しく解説しています。<br/><br/>簡単にまとめると：<br/>1. 各プレイヤーに2枚のカード配布<br/>2. 5枚のコミュニティカードが順に公開<br/>3. 最強の5枚の組み合わせで勝負<br/>4. ベッティングラウンドは4回', ['ハンドランキング', '初心者ガイドを見る', '他の質問']);
    } else if (lower.indexOf('トップ') >= 0 || lower.indexOf('最初') >= 0) {
      botReply('何かお手伝いできることはありますか？', [
        'ジャンケットについて', 'おすすめカジノは？', '初心者です', 'ステークス情報', '渡航サポート',
      ]);
    } else {
      botReply('ありがとうございます。具体的にお答えするため、以下からお選びいただけますか？', [
        'ジャンケットについて', 'カジノ情報を見る', '初心者ガイド', '費用・予算', '担当者に相談',
      ]);
    }
  }

  fab.onclick = function () {
    fab.classList.toggle('open');
    win.classList.toggle('open');
    if (!started) startChat();
    setTimeout(function () { input.focus(); }, 100);
  };

  function doSend(): void {
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    handleUser(text);
  }

  send.onclick = doSend;
  input.onkeydown = function (e: KeyboardEvent) { if (e.key === 'Enter') doSend(); };
})();

updateAuthHeader();
