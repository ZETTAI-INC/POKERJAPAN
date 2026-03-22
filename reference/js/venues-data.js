var VENUE_DATA = {
  // ===== KOREA =====
  "paradise-city": {
    name:"Paradise City", nameJa:"パラダイスシティ", country:"kr", countryName:"韓国", flag:"\u{1F1F0}\u{1F1F7}",
    city:"仁川（インチョン）", address:"186 Yeongjonghaeannam-ro 321beon-gil, Jung-gu, Incheon",
    mapQuery:"Paradise+City+Incheon+Korea",
    photo:"../reference/images/venues/paradise-city.jpg",
    description:"仁川空港から最も近い統合型リゾート。Sega Sammy Holdings提携で日本人プレイヤーに最も人気の高い会場。LINEでの待ちリスト登録、日本語スタッフ常駐。韓国で最も低いステークスからプレイ可能。",
    airport:{ name:"仁川国際空港 (ICN)", distance:"車3分", access:"無料シャトルバスまたはタクシー。マグレブ列車でもアクセス可。ターミナル1から最寄り。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"excellent", details:"日本語スタッフ常駐（Sega Sammy提携）。LINE待ちリスト対応。日本語メニュー・案内あり。初心者に最もフレンドリー。" },
    stakes:[
      { game:"NLH", blind:"\u20A91,000/3,000", buyIn:"\u20A9100K〜500K", notes:"最低レート" },
      { game:"NLH", blind:"\u20A92,000/5,000", buyIn:"\u20A9200K〜1.5M", notes:"メインテーブル" }
    ],
    rake:"10%、5BBキャップ（\u20A91K/3K: max \u20A915K / \u20A92K/5K: max \u20A925K）",
    gameTypes:["NLH","PLO","3-Card Poker"],
    tables:"2-3卓（週末増卓）",
    tournaments:[
      { name:"APT Incheon", frequency:"年1-2回", buyIn:"\u20A9300K〜\u20A95M" },
      { name:"ASPT", frequency:"不定期", buyIn:"各種" },
      { name:"AJPC Samurai Circuit", frequency:"年1回", buyIn:"各種" }
    ],
    junketInfo:{
      description:"POKER JAPAN経由の予約で手数料無料。プレイ時間に応じたコンプ（食事・宿泊割引）あり。",
      items:[
        { label:"手数料", value:"無料（POKER JAPAN経由）" },
        { label:"ホテル特典", value:"プレイ時間に応じた宿泊割引" },
        { label:"食事コンプ", value:"アクティブプレイヤーに無料提供" },
        { label:"送迎", value:"空港シャトル無料" }
      ]
    },
    hotel:{ name:"Paradise City Hotel", rating:"5つ星", rooms:"711室", amenities:["Cimerスパ","Chromaナイトクラブ","Wonderboxテーマパーク","免税店","レストラン8店舗","屋外プール"] },
    dining:[
      { name:"On Dining", type:"日本食", price:"$$$$" },
      { name:"Café 8", type:"ビュッフェ", price:"$$" },
      { name:"Imperial Treasure", type:"中華", price:"$$$" }
    ],
    tags:["24時間","日本語◎","APT / ASPT"], lastUpdated:"2026-03"
  },

  "inspire": {
    name:"Inspire Entertainment Resort", nameJa:"インスパイア・エンターテインメント・リゾート", country:"kr", countryName:"韓国", flag:"\u{1F1F0}\u{1F1F7}",
    city:"仁川（インチョン）", address:"127 Gonghangmunhwa-ro, Jung-gu, Incheon",
    mapQuery:"Inspire+Entertainment+Resort+Incheon",
    photo:"../reference/images/venues/inspire.jpg",
    description:"韓国最大の統合型リゾート（総工費$1.6B）。2024年8月にポーカールーム開設。プレイヤーレベルはParadise Cityより高め。Hilton提携。",
    airport:{ name:"仁川国際空港 (ICN)", distance:"車15-20分", access:"タクシーまたはリゾート送迎バス。空港から約15分。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"excellent", details:"24時間日本語スタッフ常駐。LINE待ちリスト対応。" },
    stakes:[
      { game:"NLH", blind:"\u20A92,000/3,000", buyIn:"\u20A9200K〜500K", notes:"" },
      { game:"NLH", blind:"\u20A95,000/5,000", buyIn:"\u20A9500K〜2M", notes:"ハイレート" }
    ],
    rake:"10%、5BBキャップ",
    gameTypes:["NLH","MIX"],
    tables:"約3卓（平日夜）、大会時増卓",
    tournaments:[
      { name:"P1 Circuit", frequency:"四半期ごと", buyIn:"\u20A9250K〜\u20A930M" }
    ],
    junketInfo:{
      description:"POKER JAPAN経由の予約で手数料無料。",
      items:[
        { label:"手数料", value:"無料（POKER JAPAN経由）" },
        { label:"ホテル特典", value:"Hilton宿泊割引あり" },
        { label:"食事", value:"日本食レストラン「Minagi」あり" }
      ]
    },
    hotel:{ name:"Hilton Inspire", rating:"5つ星", rooms:"1,300室+", amenities:["アリーナ","スパ","プール","ショッピング"] },
    dining:[
      { name:"Minagi", type:"日本食", price:"$$$" },
      { name:"Inspire Pavilion", type:"広東料理", price:"$$$" },
      { name:"Hongpan", type:"中華", price:"$$" }
    ],
    tags:["24時間","日本語◎","P1 Circuit"], lastUpdated:"2026-03"
  },

  "walkerhill": {
    name:"Paradise Casino Walkerhill", nameJa:"パラダイスカジノ ウォーカーヒル", country:"kr", countryName:"韓国", flag:"\u{1F1F0}\u{1F1F7}",
    city:"ソウル", address:"B1, Grand Walkerhill Seoul, 177 Walkerhill-ro, Gwangjin-gu, Seoul",
    mapQuery:"Paradise+Casino+Walkerhill+Seoul",
    photo:"../reference/images/venues/walkerhill.jpg",
    description:"韓国最大の外国人専用カジノ。4,500㎡のゲームフロア。漢江と峨嵯山の眺望。2023年5月リニューアル。レクリエーショナルな観光客が多くソフトなゲーム環境。",
    airport:{ name:"仁川国際空港 (ICN)", distance:"車60-90分", access:"空港リムジンバスまたはタクシー。金浦空港からは車30分。地下鉄広津区駅からシャトルバスあり。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"excellent", details:"日本語専属スタッフ在籍。LINE待ちリスト対応（QRコード読取→名前とステークスを送信→空席時に呼出し）。" },
    stakes:[
      { game:"NLH", blind:"\u20A91,000/3,000", buyIn:"\u20A9100K〜500K", notes:"33-166BB" },
      { game:"NLH", blind:"\u20A92,000/5,000", buyIn:"\u20A9300K〜1.5M", notes:"60-300BB" }
    ],
    rake:"10%、5BBキャップ",
    gameTypes:["NLH"],
    tables:"約6卓（ピーク時3-4卓稼働）",
    tournaments:[
      { name:"AJPC Samurai Circuit", frequency:"年1回", buyIn:"\u20A9300K〜" },
      { name:"週末トーナメント", frequency:"毎週末", buyIn:"\u20A9300K" }
    ],
    junketInfo:{
      description:"新規メンバー特典あり。プレイ時間に応じたコンプ制度。",
      items:[
        { label:"手数料", value:"無料（POKER JAPAN経由）" },
        { label:"新規特典", value:"\u20A950,000ベッティングクーポン" },
        { label:"食事コンプ", value:"アクティブプレイヤーに無料F&B" },
        { label:"送迎", value:"地下鉄駅からシャトルバス" }
      ]
    },
    hotel:{ name:"Grand Walkerhill Seoul", rating:"5つ星", rooms:"557室", amenities:["漢江ビュー","フィットネス","スパ","24時間レストラン"] },
    dining:[
      { name:"Cafe9", type:"24時間レストラン", price:"$$" },
      { name:"明月館", type:"韓国料理", price:"$$$" }
    ],
    tags:["24時間","日本語◎","AJPC"], lastUpdated:"2026-03"
  },

  "sevenluck-gangnam": {
    name:"Seven Luck Casino 江南COEX", nameJa:"セブンラックカジノ 江南コエックス", country:"kr", countryName:"韓国", flag:"\u{1F1F0}\u{1F1F7}",
    city:"ソウル", address:"58 Teheran-ro 87-gil, Gangnam-gu, Seoul",
    mapQuery:"Seven+Luck+Casino+Gangnam+COEX+Seoul",
    photo:"../reference/images/venues/sevenluck-gangnam.jpg",
    description:"江南の中心地COEXモール直結。三成駅（2号線）出口5から徒歩すぐ。3フロア6,094㎡のゲームフロア。Marriott Bonvoy提携で最大7,000ポイント獲得可能。",
    airport:{ name:"仁川国際空港 (ICN)", distance:"車60-90分", access:"空港リムジンバスで江南エリアまで約70分。地下鉄2号線三成駅出口5すぐ。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"good", details:"日本語対応スタッフあり。" },
    stakes:[
      { game:"NLH", blind:"\u20A91,000/2,000", buyIn:"各種", notes:"" },
      { game:"NLH", blind:"\u20A95,000/10,000", buyIn:"各種", notes:"ハイレート" }
    ],
    rake:"10%、5BBキャップ",
    gameTypes:["NLH"],
    tables:"4卓",
    tournaments:[],
    junketInfo:{
      description:"新規外国人メンバーにウェルカムクーポン。",
      items:[
        { label:"新規特典", value:"\u20A960,000ウェルカムクーポン" },
        { label:"食事", value:"10分以上プレイで無料食事" }
      ]
    },
    hotel:{ name:"周辺ホテル多数", rating:"", rooms:"", amenities:["COEXモール直結","水族館","映画館","免税店"] },
    dining:[],
    tags:["24時間","Marriott提携"], lastUpdated:"2026-03"
  },

  "sevenluck-dragon": {
    name:"Seven Luck Casino ドラゴンシティ", nameJa:"セブンラックカジノ ドラゴンシティ", country:"kr", countryName:"韓国", flag:"\u{1F1F0}\u{1F1F7}",
    city:"ソウル", address:"5F, Convention Tower, 95 Cheongpa-ro 20-gil, Yongsan-gu, Seoul",
    mapQuery:"Seven+Luck+Casino+Seoul+Dragon+City",
    photo:"",
    description:"龍山駅から徒歩3分。オープンスペースの高天井デザイン。ポーカーテーブルは2卓と少なめだがアクセスは抜群。",
    airport:{ name:"仁川国際空港 (ICN)", distance:"車60分", access:"空港鉄道でソウル駅→1号線で龍山駅（出口3から徒歩3分）。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"good", details:"日本語対応可能。" },
    stakes:[
      { game:"NLH", blind:"\u20A91,000/2,000", buyIn:"各種", notes:"" }
    ],
    rake:"10%、5BBキャップ",
    gameTypes:["NLH"],
    tables:"2卓",
    tournaments:[],
    junketInfo:{ description:"", items:[] },
    hotel:{ name:"Seoul Dragon City", rating:"4つ星", rooms:"", amenities:["複合ホテル施設"] },
    dining:[],
    tags:["24時間"], lastUpdated:"2026-03"
  },

  "lesa-jeju": {
    name:"LES A Casino", nameJa:"レザカジノ（旧ランディングカジノ）", country:"kr", countryName:"韓国", flag:"\u{1F1F0}\u{1F1F7}",
    city:"済州島（チェジュ）", address:"38 Shinhwayeoksa-ro 304beon-gil, Andeok-myeon, Seogwipo-si, Jeju",
    mapQuery:"Jeju+Shinhwa+World+Landing+Casino",
    photo:"../reference/images/venues/lesa-jeju.jpg",
    description:"済州島のプレミアムトーナメント会場。2025年末に「Landing Casino」から「LES A」にリブランド。Triton Poker Super High Roller Series開催実績あり。大会時は12卓以上に拡張。",
    airport:{ name:"済州国際空港 (CJU)", distance:"車45分", access:"タクシーまたはリゾートシャトル。空港から約45分。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"good", details:"国際対応スタッフあり。" },
    stakes:[
      { game:"NLH", blind:"\u20A92,000/5,000", buyIn:"各種", notes:"通常" },
      { game:"NLH", blind:"\u20A95,000/10,000", buyIn:"各種", notes:"大会時" },
      { game:"NLH", blind:"\u20A9100,000/200,000", buyIn:"各種", notes:"ハイステークス" }
    ],
    rake:"10%、5BBキャップ",
    gameTypes:["NLH","PLO"],
    tables:"12卓+（大会時）",
    tournaments:[
      { name:"Triton Poker", frequency:"不定期", buyIn:"$25K〜$200K+" },
      { name:"APT Jeju", frequency:"年1回", buyIn:"各種" },
      { name:"Red Dragon Poker Tour", frequency:"年1-2回", buyIn:"各種" }
    ],
    junketInfo:{ description:"大会参加者向け宿泊パッケージあり。", items:[ { label:"宿泊", value:"Marriott / Landing Hotel 特別料金" } ] },
    hotel:{ name:"Jeju Shinhwa World", rating:"5つ星", rooms:"複数ホテル", amenities:["Marriott","テーマパーク","免税店","ゴルフ"] },
    dining:[],
    tags:["24時間","Triton / APT / RDPT"], lastUpdated:"2026-03"
  },

  "paradise-jeju": {
    name:"Paradise Grand Casino 済州", nameJa:"パラダイスカジノ 済州グランド", country:"kr", countryName:"韓国", flag:"\u{1F1F0}\u{1F1F7}",
    city:"済州島（チェジュ）", address:"1F, Maison Glad Jeju, 80 Noyeon-ro, Jeju-si, Jeju",
    mapQuery:"Paradise+Grand+Casino+Jeju",
    photo:"",
    description:"40年近い歴史を持つ済州の老舗カジノ。5つ星Maison Glad Jeju Hotel内。済州空港から車10分。",
    airport:{ name:"済州国際空港 (CJU)", distance:"車10分", access:"タクシーで約10分。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"good", details:"Paradise Casino系列の日本語対応スタッフ。" },
    stakes:[ { game:"NLH", blind:"各種", buyIn:"各種", notes:"" } ],
    rake:"10%、5BBキャップ",
    gameTypes:["NLH"],
    tables:"少数",
    tournaments:[],
    junketInfo:{ description:"新規特典あり。", items:[ { label:"新規特典", value:"\u20A930,000クーポン + \u20A920,000マシンチケット" } ] },
    hotel:{ name:"Maison Glad Jeju", rating:"5つ星", rooms:"490室", amenities:["屋外プール","レストラン","空港10分"] },
    dining:[],
    tags:["24時間","日本語○"], lastUpdated:"2026-03"
  },

  "paradise-busan": {
    name:"Paradise Casino 釜山", nameJa:"パラダイスカジノ 釜山", country:"kr", countryName:"韓国", flag:"\u{1F1F0}\u{1F1F7}",
    city:"釜山（プサン）", address:"296 Haeundaehaebyeon-ro, Haeundae-gu, Busan",
    mapQuery:"Paradise+Casino+Busan+Haeundae",
    photo:"../reference/images/venues/paradise-busan.jpg",
    description:"海雲台ビーチ目の前のオーシャンビューカジノ。Poker King Club運営のポーカールーム。VIPゾーンあり（3階）。",
    airport:{ name:"金海国際空港 (PUS)", distance:"車45分", access:"空港リムジンバスまたはタクシーで約45分。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"good", details:"Paradise Casino系列の日本語対応。" },
    stakes:[
      { game:"NLH", blind:"\u20A91,000/3,000", buyIn:"各種", notes:"" },
      { game:"Short Deck", blind:"\u20A95,000/10,000", buyIn:"各種", notes:"" },
      { game:"NLH", blind:"\u20A950,000/100,000", buyIn:"各種", notes:"ハイステークス" }
    ],
    rake:"10%、5BBキャップ",
    gameTypes:["NLH","Short Deck"],
    tables:"4卓（Poker King Club運営）",
    tournaments:[
      { name:"Super Cup Busan", frequency:"年1回", buyIn:"各種" }
    ],
    junketInfo:{ description:"新規メンバー特典。", items:[ { label:"新規特典", value:"最大\u20A9150,000ウェルカムクーポン" }, { label:"食事", value:"アクティブプレイヤーに無料F&B" } ] },
    hotel:{ name:"Paradise Hotel Busan", rating:"5つ星", rooms:"", amenities:["海雲台ビーチ直結","VIPラウンジ","スパ"] },
    dining:[],
    tags:["24時間","日本語○","Super Cup Busan"], lastUpdated:"2026-03"
  },

  // ===== PHILIPPINES =====
  "okada-manila": {
    name:"PokerStars LIVE Manila", nameJa:"ポーカースターズライブマニラ（オカダマニラ）", country:"ph", countryName:"フィリピン", flag:"\u{1F1F5}\u{1F1ED}",
    city:"マニラ", address:"Entertainment City, New Seaside Drive, Paranaque City, Metro Manila",
    mapQuery:"Okada+Manila+Entertainment+City",
    photo:"../reference/images/venues/okada-manila.jpg",
    description:"「アジアベストポーカールーム」2年連続受賞。Okada Manila内の15卓専用ポーカールーム。テーブルサイドフードサービス、オートシャッフラー、EPT水準のディーラー。Bad Beat Jackpotあり。",
    airport:{ name:"ニノイ・アキノ国際空港 (MNL)", distance:"車15-20分", access:"タクシーまたはGrab。Entertainment Cityエリア内。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"limited", details:"日本人創業者（岡田和生氏）のリゾートだが、ポーカールーム専任の日本語スタッフは未確認。英語対応。" },
    stakes:[
      { game:"NLH", blind:"\u20B125/50", buyIn:"\u20B11K〜", notes:"最低レート" },
      { game:"NLH", blind:"\u20B150/100", buyIn:"\u20B15K〜", notes:"" },
      { game:"NLH", blind:"\u20B1100/200", buyIn:"\u20B110K〜", notes:"" },
      { game:"NLH", blind:"\u20B1500/1000", buyIn:"制限なし", notes:"ハイステークス" },
      { game:"PLO", blind:"各種", buyIn:"各種", notes:"リクエスト可" }
    ],
    rake:"10%（ステークスにより上限変動）。ショートハンド割引あり。",
    gameTypes:["NLH","PLO","Badugi"],
    tables:"15卓（大会時Cove Manilaへ拡張）",
    tournaments:[
      { name:"APPT Manila", frequency:"年1回", buyIn:"各種" },
      { name:"Manila Megastack", frequency:"年複数回", buyIn:"\u20B110K〜" },
      { name:"Okada Manila Millions", frequency:"年1回", buyIn:"\u20B155K〜" }
    ],
    junketInfo:{
      description:"カジノリゾート内のポーカールーム。プレイ時間に応じたコンプ制度あり。",
      items:[
        { label:"手数料", value:"無料（POKER JAPAN経由）" },
        { label:"入場", value:"21歳以上・パスポート必須" },
        { label:"ドリンク", value:"プレイ中無料" }
      ]
    },
    hotel:{ name:"Okada Manila", rating:"5つ星", rooms:"993室", amenities:["The Fountain（世界最大噴水）","スパ","プール","ナイトクラブ"] },
    dining:[
      { name:"Medley", type:"ビュッフェ", price:"$$" },
      { name:"Enbu", type:"日本食", price:"$$$$" }
    ],
    tags:["24時間","APPT / Megastack","アジアNo.1"], lastUpdated:"2026-03"
  },

  "solaire": {
    name:"Solaire Resort & Casino", nameJa:"ソレアリゾート＆カジノ", country:"ph", countryName:"フィリピン", flag:"\u{1F1F5}\u{1F1ED}",
    city:"マニラ", address:"1 Aseana Avenue, Entertainment City, Paranaque City, Metro Manila",
    mapQuery:"Solaire+Resort+Casino+Manila",
    photo:"../reference/images/venues/solaire.jpg",
    description:"Poker King Club運営（マカオThe Venetianと同じオペレーター）。低レートから超ハイステークスまで幅広いレンジ。無料ドリンクサービス。5つのレストランからフードオーダー可。",
    airport:{ name:"ニノイ・アキノ国際空港 (MNL)", distance:"車10-15分", access:"タクシーまたはGrab。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"none", details:"日本語専任スタッフ未確認。英語対応。" },
    stakes:[
      { game:"NLH", blind:"\u20B150/100", buyIn:"\u20B15K〜50K", notes:"" },
      { game:"NLH", blind:"\u20B1100/200", buyIn:"\u20B110K〜100K", notes:"" },
      { game:"NLH", blind:"\u20B1500/1000", buyIn:"\u20B150K〜", notes:"" },
      { game:"NLH", blind:"\u20B15000/10000", buyIn:"制限なし", notes:"ハイステークス" }
    ],
    rake:"低レート10% / 高レート5%（\u20B1400〜5,000キャップ）",
    gameTypes:["NLH","PLO"],
    tables:"約10卓",
    tournaments:[],
    junketInfo:{ description:"", items:[ { label:"ドリンク", value:"無料（ソフトドリンク・ジュース・コーヒー・ビール）" } ] },
    hotel:{ name:"Solaire Resort", rating:"5つ星", rooms:"800室+", amenities:["ベイビュー","スパ","プール"] },
    dining:[
      { name:"Dragon Bar", type:"バー", price:"$$" },
      { name:"Yakumi", type:"日本食", price:"$$$" },
      { name:"Strip Steakhouse", type:"ステーキ", price:"$$$$" }
    ],
    tags:["24時間","無料ドリンク"], lastUpdated:"2026-03"
  },

  "cod-manila": {
    name:"City of Dreams Manila", nameJa:"シティ・オブ・ドリームズマニラ", country:"ph", countryName:"フィリピン", flag:"\u{1F1F5}\u{1F1ED}",
    city:"マニラ", address:"Aseana Ave. cor. Roxas Blvd., Entertainment City, Paranaque, Metro Manila",
    mapQuery:"City+of+Dreams+Manila",
    photo:"../reference/images/venues/cod-manila.jpg",
    description:"Soul Poker Club運営。2024年6月ソフトオープン。6.2ヘクタールの大型IR内。Nobu Hotel、Hyatt Regency併設。VIPプライベートゲームあり。",
    airport:{ name:"ニノイ・アキノ国際空港 (MNL)", distance:"車10-15分", access:"タクシーまたはGrab。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"none", details:"英語対応。" },
    stakes:[
      { game:"NLH", blind:"\u20B125/50", buyIn:"各種", notes:"" },
      { game:"NLH", blind:"\u20B150/100", buyIn:"各種", notes:"" }
    ],
    rake:"5-10%（\u20B1400〜5,000キャップ）",
    gameTypes:["NLH","PLO"],
    tables:"6-7卓",
    tournaments:[
      { name:"APT Manila", frequency:"年1回", buyIn:"各種" },
      { name:"COD Soul Poker Fest", frequency:"不定期", buyIn:"各種（\u20B118M保証）" }
    ],
    junketInfo:{ description:"", items:[] },
    hotel:{ name:"Nobu Hotel / Hyatt Regency", rating:"5つ星", rooms:"900室+", amenities:["DreamPlayテーマパーク","スパ","プール"] },
    dining:[],
    tags:["24時間","APT / WPT"], lastUpdated:"2026-03"
  },

  "newport": {
    name:"Newport World Resorts", nameJa:"ニューポート・ワールド・リゾーツ", country:"ph", countryName:"フィリピン", flag:"\u{1F1F5}\u{1F1ED}",
    city:"マニラ", address:"Newport Boulevard, Newport City, Pasay, Metro Manila",
    mapQuery:"Newport+World+Resorts+Manila",
    photo:"",
    description:"NAIA空港最寄りのカジノ。レーキ5%と低め。日本語スタッフ（Seigen氏）在籍で日本人プレイヤーに最もおすすめ。Hotel Okura Manila併設。",
    airport:{ name:"ニノイ・アキノ国際空港 (MNL)", distance:"車5分", access:"空港から最も近いカジノ。ターミナル3直結の歩道橋あり。" },
    hours:"平日: 夕方〜 / 週末・祝日: 14:00〜",
    japaneseSupport:{ level:"excellent", details:"日本語スタッフ（Seigen氏）がポーカールーム運営をサポート。日本語対応でマニラNo.1。" },
    stakes:[
      { game:"NLH", blind:"\u20B125/50", buyIn:"\u20B11K〜", notes:"" },
      { game:"NLH", blind:"\u20B150/100", buyIn:"\u20B14K〜", notes:"" },
      { game:"NLH", blind:"\u20B1100/200", buyIn:"\u20B110K〜", notes:"" }
    ],
    rake:"5%（マニラ最低水準）",
    gameTypes:["NLH"],
    tables:"3-6卓（平日3-4、週末5-6）",
    tournaments:[
      { name:"APT events", frequency:"不定期", buyIn:"各種" },
      { name:"Manila Poker Cup", frequency:"不定期", buyIn:"各種（\u20B132M保証）" }
    ],
    junketInfo:{ description:"", items:[ { label:"レーキ", value:"5%（マニラ最安）" }, { label:"日本語", value:"Seigen氏が常時サポート" } ] },
    hotel:{ name:"Hotel Okura Manila", rating:"5つ星", rooms:"", amenities:["日系ホテル","日本食レストラン","空港直結"] },
    dining:[],
    tags:["日本語◎ (Seigen氏)","レーキ5%","Hotel Okura併設"], lastUpdated:"2026-03"
  },

  "prime-poker": {
    name:"Prime Poker Club", nameJa:"プライムポーカークラブ", country:"ph", countryName:"フィリピン", flag:"\u{1F1F5}\u{1F1ED}",
    city:"マニラ", address:"HK SunPlaza, Diosdado Macapagal Blvd, Pasay City, Metro Manila",
    mapQuery:"Prime+Poker+Club+Manila+Pasay",
    photo:"../reference/images/venues/prime-poker.jpg",
    description:"マニラ最大規模のポーカールーム。80卓（大会時100卓に拡張）。旧GG Poker Room。2025年1月リブランド・移転。VIPルーム完備。",
    airport:{ name:"ニノイ・アキノ国際空港 (MNL)", distance:"車10-15分", access:"タクシーまたはGrab。" },
    hours:"24時間営業（ピーク: 14:00-3:00）",
    japaneseSupport:{ level:"none", details:"英語対応。" },
    stakes:[
      { game:"NLH", blind:"\u20B125/50", buyIn:"各種", notes:"" },
      { game:"NLH", blind:"\u20B150/100", buyIn:"各種", notes:"メイン" }
    ],
    rake:"標準",
    gameTypes:["NLH","PLO"],
    tables:"80卓（最大100卓）",
    tournaments:[
      { name:"APL Manila", frequency:"年複数回", buyIn:"各種（\u20B1100M+保証）" }
    ],
    junketInfo:{ description:"", items:[] },
    hotel:{ name:"周辺ホテル", rating:"", rooms:"", amenities:[] },
    dining:[],
    tags:["24時間","APL Manila","マニラ最大規模"], lastUpdated:"2026-03"
  },

  "2ace-poker": {
    name:"2Ace Poker Manila", nameJa:"2エースポーカーマニラ", country:"ph", countryName:"フィリピン", flag:"\u{1F1F5}\u{1F1ED}",
    city:"マニラ", address:"HK SunPlaza, Diosdado Macapagal Blvd, Pasay City, Metro Manila",
    mapQuery:"2Ace+Poker+Manila",
    photo:"",
    description:"日本人オーナー運営。日本人プレイヤー多数在籍。Prime Poker Clubと同じビル内。低レーキでコミュニティ重視の雰囲気。",
    airport:{ name:"ニノイ・アキノ国際空港 (MNL)", distance:"車10-15分", access:"タクシーまたはGrab。NAIA、Mall of Asia、Okada、Solaireに近い。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"excellent", details:"日本人オーナー常駐。日本人プレイヤー多数。英語不安な方にも安心。" },
    stakes:[
      { game:"NLH", blind:"\u20B125/50", buyIn:"各種", notes:"" },
      { game:"NLH", blind:"\u20B150/100", buyIn:"各種", notes:"" },
      { game:"NLH", blind:"\u20B1100/200/500", buyIn:"各種", notes:"" }
    ],
    rake:"低レーキ",
    gameTypes:["NLH","PLO"],
    tables:"20-30卓",
    tournaments:[
      { name:"Ace Poker League", frequency:"月次", buyIn:"各種（\u20B11M+保証）" }
    ],
    junketInfo:{ description:"", items:[] },
    hotel:{ name:"", rating:"", rooms:"", amenities:[] },
    dining:[],
    tags:["24時間","日本人オーナー","Ace Poker League"], lastUpdated:"2026-03"
  },

  "metro-card-club": {
    name:"Metro Card Club", nameJa:"メトロカードクラブ", country:"ph", countryName:"フィリピン", flag:"\u{1F1F5}\u{1F1ED}",
    city:"マニラ", address:"Building C, Bazaar Area, Metrowalk Commercial Complex, Ortigas Center, Pasig City",
    mapQuery:"Metro+Card+Club+Ortigas+Manila",
    photo:"../reference/images/venues/metro-card-club.jpg",
    description:"フィリピン初の独立型カードルーム（2007年創業）。2024年11月リニューアルオープン。35卓。VIPハイステークスルーム。ビリヤード台・バー併設。",
    airport:{ name:"ニノイ・アキノ国際空港 (MNL)", distance:"車30-45分", access:"タクシーまたはGrab。SM Megamall、The Podium近く。" },
    hours:"月-木: 12:00-7:00 / 金-日: 24時間",
    japaneseSupport:{ level:"none", details:"英語対応。" },
    stakes:[
      { game:"NLH", blind:"\u20B110/20", buyIn:"各種", notes:"マイクロ" },
      { game:"NLH", blind:"\u20B125/50", buyIn:"各種", notes:"" },
      { game:"NLH", blind:"\u20B1100/200", buyIn:"各種", notes:"" },
      { game:"NLH", blind:"\u20B1500/1000+", buyIn:"各種", notes:"VIPルーム" }
    ],
    rake:"標準",
    gameTypes:["NLH","PLO"],
    tables:"35卓",
    tournaments:[
      { name:"APT Classic", frequency:"年1回", buyIn:"各種" },
      { name:"Philippine Poker Millions", frequency:"年1回", buyIn:"各種" }
    ],
    junketInfo:{ description:"", items:[] },
    hotel:{ name:"", rating:"", rooms:"", amenities:[] },
    dining:[],
    tags:["平日12-7AM / 週末24h","APT Classic","フィリピン最古参"], lastUpdated:"2026-03"
  },

  "red-dragon-manila": {
    name:"Red Dragon Poker Manila", nameJa:"レッドドラゴンポーカー", country:"ph", countryName:"フィリピン", flag:"\u{1F1F5}\u{1F1ED}",
    city:"マニラ", address:"3F, Casino Filipino Malate, 1588 Mabini St, Malate, Manila",
    mapQuery:"Red+Dragon+Poker+Malate+Manila",
    photo:"",
    description:"Casino Filipino（PAGCOR運営）内のポーカールーム。16卓。RDPT（Red Dragon Poker Tournament）シリーズ開催。",
    airport:{ name:"ニノイ・アキノ国際空港 (MNL)", distance:"車20-30分", access:"タクシーまたはGrab。" },
    hours:"16:00 - 9:00",
    japaneseSupport:{ level:"none", details:"英語対応。" },
    stakes:[
      { game:"NLH", blind:"\u20B125/50", buyIn:"各種", notes:"" },
      { game:"NLH", blind:"\u20B1500/1000+", buyIn:"各種", notes:"ハイ" }
    ],
    rake:"標準",
    gameTypes:["NLH","PLO"],
    tables:"16卓",
    tournaments:[
      { name:"RDPT Series", frequency:"年複数回", buyIn:"各種" }
    ],
    junketInfo:{ description:"", items:[] },
    hotel:{ name:"", rating:"", rooms:"", amenities:[] },
    dining:[],
    tags:["16:00-9:00","RDPT Series"], lastUpdated:"2026-03"
  },

  "poker-brothers": {
    name:"Poker Brothers", nameJa:"ポーカーブラザーズ", country:"ph", countryName:"フィリピン", flag:"\u{1F1F5}\u{1F1ED}",
    city:"マニラ", address:"1776 Mabini Street, Malate, Manila",
    mapQuery:"Poker+Brothers+Malate+Manila",
    photo:"",
    description:"2025年9月オープン。マラテ地区の日本人プレイヤーに人気の会場。周辺に日本食レストラン多数。夜間の一人歩きは注意。",
    airport:{ name:"ニノイ・アキノ国際空港 (MNL)", distance:"車20-30分", access:"タクシーまたはGrab。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"good", details:"日本人プレイヤー多数。日本語でのコミュニケーション可能。" },
    stakes:[
      { game:"NLH", blind:"\u20B125/50", buyIn:"各種", notes:"" },
      { game:"NLH", blind:"\u20B150/100", buyIn:"各種", notes:"" }
    ],
    rake:"標準",
    gameTypes:["NLH"],
    tables:"不明",
    tournaments:[],
    junketInfo:{ description:"", items:[] },
    hotel:{ name:"", rating:"", rooms:"", amenities:[] },
    dining:[],
    tags:["24時間","日本人多数","夜間の一人歩き注意"], lastUpdated:"2026-03"
  },

  "poker8-cebu": {
    name:"Poker8 Cebu", nameJa:"ポーカー8セブ", country:"ph", countryName:"フィリピン", flag:"\u{1F1F5}\u{1F1ED}",
    city:"セブ", address:"Springwood District, Mandaue City, Cebu",
    mapQuery:"Poker8+Cebu+Mandaue",
    photo:"../reference/images/venues/poker8-cebu.jpg",
    description:"セブのプレミアポーカールーム。12卓（全台オートシャッフラー）。禁煙。無料Wi-Fi。空港から10-15分。テーブルサービスあり。",
    airport:{ name:"マクタン・セブ国際空港 (CEB)", distance:"車10-15分", access:"タクシーまたはGrab。" },
    hours:"24時間営業",
    japaneseSupport:{ level:"none", details:"英語対応。" },
    stakes:[
      { game:"NLH", blind:"マイクロ〜ハイ", buyIn:"各種", notes:"" }
    ],
    rake:"標準",
    gameTypes:["NLH","PLO"],
    tables:"12卓（オートシャッフラー）",
    tournaments:[
      { name:"Chase Cup", frequency:"不定期", buyIn:"各種（\u20B15M保証）" }
    ],
    junketInfo:{ description:"", items:[] },
    hotel:{ name:"", rating:"", rooms:"", amenities:[] },
    dining:[],
    tags:["24時間","Chase Cup","禁煙"], lastUpdated:"2026-03"
  },

  // ===== VIETNAM =====
  "saigon-poker": {
    name:"Saigon Poker Club", nameJa:"サイゴンポーカークラブ", country:"vn", countryName:"ベトナム", flag:"\u{1F1FB}\u{1F1F3}",
    city:"ホーチミンシティ", address:"280 Nam Ky Khoi Nghia, Ward Vo Thi Sau, District 3, HCMC",
    mapQuery:"Saigon+Poker+Club+Ho+Chi+Minh",
    photo:"../reference/images/venues/saigon-poker.jpg",
    description:"ホーチミン最大級のポーカークラブ。トーナメント専用（キャッシュゲーム不可）。RFIDライブ配信テーブル完備。5つ星レベルの施設。",
    airport:{ name:"タンソンニャット国際空港 (SGN)", distance:"車20-30分", access:"タクシーまたはGrab。" },
    hours:"トーナメントスケジュールに準ずる",
    japaneseSupport:{ level:"none", details:"英語対応。パスポート登録必要。" },
    stakes:[
      { game:"NLH", blind:"トーナメント", buyIn:"\u20AB720K〜\u20AB50M+", notes:"キャッシュゲームなし" }
    ],
    rake:"トーナメントエントリーフィー方式",
    gameTypes:["NLH","PLO"],
    tables:"複数フロア",
    tournaments:[
      { name:"Vietnam Poker Games (VPG)", frequency:"定期", buyIn:"各種" },
      { name:"Saigon Series of Poker (SSOP)", frequency:"年1回", buyIn:"各種" }
    ],
    junketInfo:{ description:"トーナメントクラブのため、ジャンケット手配は対象外。", items:[] },
    hotel:{ name:"", rating:"", rooms:"", amenities:[] },
    dining:[],
    tags:["トーナメント専用","VPG / SSOP","RFID配信"], lastUpdated:"2026-03"
  },

  "pro-poker": {
    name:"Pro Poker Club", nameJa:"プロポーカークラブ", country:"vn", countryName:"ベトナム", flag:"\u{1F1FB}\u{1F1F3}",
    city:"ホーチミンシティ", address:"147-149 Truong Dinh, Ward 9, District 3, HCMC",
    mapQuery:"Pro+Poker+Club+Ho+Chi+Minh",
    photo:"../reference/images/venues/pro-poker.jpg",
    description:"16卓。APL、APT Vietnam、WPTイベント開催実績。RFIDライブ配信テーブル。メンバーシップカード制（1ヶ月〜1年）。空港から20-30分。",
    airport:{ name:"タンソンニャット国際空港 (SGN)", distance:"車20-30分", access:"タクシーまたはGrab。" },
    hours:"スケジュールに準ずる",
    japaneseSupport:{ level:"none", details:"英語対応。" },
    stakes:[
      { game:"NLH", blind:"トーナメント", buyIn:"\u20AB1M〜\u20AB100M+", notes:"キャッシュゲームなし" }
    ],
    rake:"トーナメントエントリーフィー方式",
    gameTypes:["NLH","PLO"],
    tables:"16卓",
    tournaments:[
      { name:"APL", frequency:"年複数回", buyIn:"各種" },
      { name:"APT Vietnam", frequency:"年1回", buyIn:"各種" }
    ],
    junketInfo:{ description:"", items:[] },
    hotel:{ name:"", rating:"", rooms:"", amenities:[] },
    dining:[],
    tags:["トーナメント専用","APL / APT / WPT","RFID配信"], lastUpdated:"2026-03"
  },

  "royal-poker": {
    name:"Royal Poker Club", nameJa:"ロイヤルポーカークラブ", country:"vn", countryName:"ベトナム", flag:"\u{1F1FB}\u{1F1F3}",
    city:"ハノイ", address:"2F, 195 Kham Thien Street, Dong Da District, Hanoi",
    mapQuery:"Royal+Poker+Club+Hanoi",
    photo:"../reference/images/venues/royal-poker.jpg",
    description:"ハノイ最大34卓。Royal Poker Tour (RPT) Championship開催。両替・マッサージサービスあり。外国人の賞金に10%税金。",
    airport:{ name:"ノイバイ国際空港 (HAN)", distance:"車40-60分", access:"タクシーまたはGrab。旧市街から10-15分。" },
    hours:"10:00〜（深夜まで）",
    japaneseSupport:{ level:"none", details:"英語対応。通訳サポートあり。" },
    stakes:[
      { game:"NLH", blind:"トーナメント", buyIn:"\u20AB840K〜\u20AB8.8M+", notes:"キャッシュゲームなし" }
    ],
    rake:"トーナメントエントリーフィー方式",
    gameTypes:["NLH","PLO"],
    tables:"34卓",
    tournaments:[
      { name:"Royal Poker Tour (RPT)", frequency:"年複数回", buyIn:"各種" },
      { name:"Asian Poker Festival (APF)", frequency:"年1回", buyIn:"各種" }
    ],
    junketInfo:{ description:"外国人の賞金に10%課税。", items:[ { label:"税金", value:"賞金の10%（外国人）" } ] },
    hotel:{ name:"近隣: Melia Hanoi / Pullman", rating:"", rooms:"", amenities:[] },
    dining:[],
    tags:["10:00〜","RPT / APF / VIPT","ハノイ最大34卓"], lastUpdated:"2026-03"
  },

  "crown-poker": {
    name:"Crown Poker Club", nameJa:"クラウンポーカークラブ", country:"vn", countryName:"ベトナム", flag:"\u{1F1FB}\u{1F1F3}",
    city:"ハノイ", address:"7F, NHS Center Building, 214 Hao Nam, Dong Da, Hanoi",
    mapQuery:"Crown+Poker+Club+Hanoi",
    photo:"../reference/images/venues/crown-poker.jpg",
    description:"700㎡の施設に30卓。WPT、USOPイベント開催。ベトナムで最もモダンなライブ配信ファイナルテーブル。2018年創業。",
    airport:{ name:"ノイバイ国際空港 (HAN)", distance:"車40-60分", access:"旧市街からタクシー10-15分。" },
    hours:"10:00 - 23:30",
    japaneseSupport:{ level:"none", details:"英語対応。" },
    stakes:[
      { game:"NLH", blind:"トーナメント", buyIn:"$50〜$2,500+", notes:"キャッシュゲームなし" }
    ],
    rake:"トーナメントエントリーフィー方式",
    gameTypes:["NLH","PLO"],
    tables:"30卓",
    tournaments:[
      { name:"WPT", frequency:"不定期", buyIn:"各種" },
      { name:"USOP", frequency:"不定期", buyIn:"各種" }
    ],
    junketInfo:{ description:"", items:[] },
    hotel:{ name:"", rating:"", rooms:"", amenities:[] },
    dining:[],
    tags:["10:00-23:30","WPT / USOP","700\u33A1施設"], lastUpdated:"2026-03"
  },

  "grand-loyal": {
    name:"Grand Loyal Poker Club", nameJa:"グランドロイヤルポーカークラブ", country:"vn", countryName:"ベトナム", flag:"\u{1F1FB}\u{1F1F3}",
    city:"ハノイ", address:"2F, Grand Vista Hotel, 146 Giang Vo Street, Ba Dinh District, Hanoi",
    mapQuery:"Grand+Loyal+Poker+Club+Hanoi",
    photo:"",
    description:"5つ星Grand Vista Hotel内。HSOP、APTイベント開催。PLO-5やMixed Gamesも開催。低バイインから超ハイローラーまで幅広いレンジ。",
    airport:{ name:"ノイバイ国際空港 (HAN)", distance:"車40-60分", access:"タクシーまたはGrab。" },
    hours:"トーナメントスケジュールに準ずる",
    japaneseSupport:{ level:"none", details:"英語対応。" },
    stakes:[
      { game:"NLH", blind:"トーナメント", buyIn:"\u20AB240K〜\u20AB100M+", notes:"キャッシュゲームなし" }
    ],
    rake:"トーナメントエントリーフィー方式",
    gameTypes:["NLH","PLO-5","Mixed"],
    tables:"大規模（5つ星ホテル内）",
    tournaments:[
      { name:"HSOP", frequency:"年1回", buyIn:"各種" },
      { name:"Grand Loyal Championship", frequency:"年1回", buyIn:"各種" }
    ],
    junketInfo:{ description:"", items:[] },
    hotel:{ name:"Grand Vista Hotel", rating:"5つ星", rooms:"", amenities:["プール","スパ","ジム","レストラン"] },
    dining:[],
    tags:["HSOP / APT","5つ星ホテル内"], lastUpdated:"2026-03"
  },

  "dream-poker-danang": {
    name:"Dream Poker Da Nang", nameJa:"ドリームポーカー ダナン", country:"vn", countryName:"ベトナム", flag:"\u{1F1FB}\u{1F1F3}",
    city:"ダナン", address:"Fivitel Danang Hotel, 388 Tran Hung Dao Street, Son Tra District, Da Nang",
    mapQuery:"Dream+Poker+Da+Nang+Fivitel",
    photo:"../reference/images/venues/dream-poker-danang.jpg",
    description:"2025年初頭オープン。ハン川沿いのFivitel Danang Hotel内。RFID配信対応。Stay & Playパッケージ（空港送迎付き）あり。",
    airport:{ name:"ダナン国際空港 (DAD)", distance:"車10-15分", access:"タクシーまたはGrab。" },
    hours:"フェスティバル期間中",
    japaneseSupport:{ level:"none", details:"英語対応。" },
    stakes:[
      { game:"NLH", blind:"トーナメント", buyIn:"\u20AB5M〜\u20AB100M+", notes:"キャッシュゲームなし" }
    ],
    rake:"トーナメントエントリーフィー方式",
    gameTypes:["NLH","PLO","Short Deck"],
    tables:"大規模（フェスティバル形式）",
    tournaments:[
      { name:"Dream Poker Series", frequency:"年複数回", buyIn:"各種（$825K+保証）" }
    ],
    junketInfo:{ description:"", items:[] },
    hotel:{ name:"Fivitel Danang Hotel", rating:"", rooms:"", amenities:["ハン川ビュー"] },
    dining:[],
    tags:["トーナメント専用","Dream Poker Series","2025年開業"], lastUpdated:"2026-03"
  },

  "hoiana": {
    name:"Hoiana Casino & Resort", nameJa:"ホイアナカジノ＆リゾート", country:"vn", countryName:"ベトナム", flag:"\u{1F1FB}\u{1F1F3}",
    city:"クアンナム省（ホイアン近郊）", address:"Duy Hai Commune, Duy Xuyen District, Quang Nam Province",
    mapQuery:"Hoiana+Resort+Casino+Vietnam",
    photo:"../reference/images/venues/hoiana.jpg",
    description:"ベトナム有数のライセンスカジノ。キャッシュゲーム合法。Triton Poker Series、Poker Dream、APT開催。4kmのビーチフロントに5つ星ホテル4棟。ゴルフコース併設。",
    airport:{ name:"ダナン国際空港 (DAD)", distance:"車45分", access:"タクシーまたはリゾート送迎。ホイアン旧市街から近い。" },
    hours:"カジノ営業時間（フェスティバル時は実質24時間）",
    japaneseSupport:{ level:"none", details:"英語対応。" },
    stakes:[
      { game:"NLH", blind:"キャッシュゲーム各種", buyIn:"各種", notes:"ライセンスカジノ" },
      { game:"Super High Roller", blind:"$数千〜", buyIn:"$100K+", notes:"Triton Poker" }
    ],
    rake:"カジノ標準",
    gameTypes:["NLH","PLO","Short Deck"],
    tables:"140卓+（カジノ全体）",
    tournaments:[
      { name:"Triton Poker Series", frequency:"不定期", buyIn:"$25K〜$200K+" },
      { name:"Poker Dream", frequency:"不定期", buyIn:"各種" },
      { name:"APT", frequency:"不定期", buyIn:"各種" }
    ],
    junketInfo:{ description:"キャッシュゲーム利用可能なライセンスカジノ。", items:[ { label:"入場", value:"外国人: パスポートのみ（21歳以上）" }, { label:"ベトナム人", value:"21歳以上・月収証明・日額入場料必要" } ] },
    hotel:{ name:"Hoiana Hotels (4棟)", rating:"5つ星", rooms:"複数ホテル", amenities:["4kmビーチ","チャンピオンシップゴルフ","スパ","ビーチクラブ","UNESCO世界遺産ホイアン近郊"] },
    dining:[],
    tags:["キャッシュゲーム","Triton / Poker Dream / APT","5つ星リゾート"], lastUpdated:"2026-03"
  },

  "corona-phuquoc": {
    name:"Corona Casino / LUK Poker", nameJa:"コロナカジノ / LUKポーカー", country:"vn", countryName:"ベトナム", flag:"\u{1F1FB}\u{1F1F3}",
    city:"フーコック島", address:"Bai Dai Area, Ganh Dau Commune, Phu Quoc City, Kien Giang Province",
    mapQuery:"Corona+Casino+Phu+Quoc+Vietnam",
    photo:"../reference/images/venues/corona-phuquoc.jpg",
    description:"ベトナム初かつ唯一のベトナム国民が入場可能なカジノ（条件付き）。外国人は18歳以上パスポートのみで無料入場。LUK Poker Room（2020年6月開設）。18,000㎡のIR施設。",
    airport:{ name:"フーコック国際空港 (PQC)", distance:"車45-60分", access:"タクシーまたはリゾート送迎。" },
    hours:"24時間（大会時）",
    japaneseSupport:{ level:"none", details:"英語対応。" },
    stakes:[
      { game:"NLH", blind:"キャッシュゲーム各種", buyIn:"各種", notes:"ライセンスカジノ" }
    ],
    rake:"カジノ標準",
    gameTypes:["NLH","Russian Poker","Caribbean Stud"],
    tables:"100卓+（大会時、40カ国以上から参加）",
    tournaments:[
      { name:"APT Vietnam", frequency:"年1回", buyIn:"各種" },
      { name:"Vietnam Poker Tour (VPT)", frequency:"年1回", buyIn:"各種（\u20AB50B保証）" }
    ],
    junketInfo:{ description:"", items:[ { label:"外国人入場", value:"18歳以上・パスポートのみ・無料" }, { label:"ベトナム人入場", value:"21歳以上・月収\u20AB10M証明・日額\u20AB1M入場料" } ] },
    hotel:{ name:"Radisson Blu / Wyndham Grand / VinHolidays", rating:"5つ星", rooms:"3,000室+", amenities:["ゴルフ18H","プライベートビーチ","VinWondersテーマパーク","サファリ"] },
    dining:[],
    tags:["キャッシュゲーム","APT / VPT","ベトナム人入場可"], lastUpdated:"2026-03"
  },

  "grand-hotram": {
    name:"The Grand Ho Tram", nameJa:"ザ・グランド・ホートラム", country:"vn", countryName:"ベトナム", flag:"\u{1F1FB}\u{1F1F3}",
    city:"ホートラム", address:"Phuoc Thuan, Xuyen Moc, Ba Ria - Vung Tau Province",
    mapQuery:"Grand+Ho+Tram+Casino+Vietnam",
    photo:"../reference/images/venues/grand-hotram.jpg",
    description:"ホーチミンから車2時間のビーチリゾートカジノ。キャッシュゲーム合法（$1/2、$2/5）。InterContinental、Holiday Inn併設。Greg Norman設計のゴルフコース「The Bluffs」。",
    airport:{ name:"タンソンニャット国際空港 (SGN)", distance:"車2時間（120km）", access:"HCMC市内からタクシーまたは送迎バス約2時間。" },
    hours:"カジノ営業時間",
    japaneseSupport:{ level:"none", details:"英語対応。" },
    stakes:[
      { game:"NLH", blind:"$1/2", buyIn:"$200〜", notes:"週末中心" },
      { game:"NLH", blind:"$2/5", buyIn:"$500〜", notes:"" }
    ],
    rake:"カジノ標準",
    gameTypes:["NLH","PLO"],
    tables:"90卓（カジノ全体）、500+スロット",
    tournaments:[
      { name:"APT Vietnam", frequency:"不定期", buyIn:"各種" }
    ],
    junketInfo:{ description:"ライセンスカジノ。キャッシュゲーム利用可能。", items:[ { label:"入場", value:"外国人18歳以上・パスポート" } ] },
    hotel:{ name:"InterContinental / Holiday Inn", rating:"5つ星", rooms:"541室", amenities:["The Bluffsゴルフ","Azure Beach Lounge","スパ","15+レストラン"] },
    dining:[],
    tags:["キャッシュゲーム","APT Vietnam","InterContinental併設"], lastUpdated:"2026-03"
  }
};
