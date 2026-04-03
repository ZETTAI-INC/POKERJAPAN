import VENUE_DATA from '../data/venues-data';
import type { VenueData } from '../types/venues';

(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const v: VenueData | undefined = id ? VENUE_DATA[id] : undefined;
  const el = document.getElementById('venue-content')!;

  if (!v) {
    el.innerHTML = '<div class="not-found"><h2>会場が見つかりませんでした</h2><p>指定された会場IDは存在しません。</p><a href="asia-rooms.html">&larr; アジアポーカールームガイドに戻る</a></div>';
    document.title = '会場が見つかりません | POKER JAPAN';
    return;
  }

  document.title = v.name + ' | POKER JAPAN';

  const jpLevels: Record<string, string> = { excellent: '日本語対応◎', good: '日本語対応○', limited: '日本語対応△', none: '日本語対応なし' };
  const jpLevel = jpLevels[v.japaneseSupport.level] || '';

  const recLabels: Record<string, string> = {
    'highly-recommended': '日本人に特におすすめ',
    'recommended': 'おすすめ',
    'standard': '標準',
    'niche': 'ニッチ',
  };

  function esc(s: string | undefined): string { return s ? String(s) : ''; }

  // 1. HERO
  const photoHtml = v.photo
    ? '<div class="hero-photo"><img src="' + v.photo + '" alt="' + esc(v.name) + '"/></div>'
    : '<div class="hero-photo-placeholder">' + v.flag + '</div>';

  let tagsHtml = '';
  if (v.tags) v.tags.forEach(function (t) {
    const cls = t.indexOf('日本語') > -1 ? ' jp' : '';
    tagsHtml += '<span class="hero-tag' + cls + '">' + esc(t) + '</span>';
  });

  let recBadgeHtml = '';
  if (v.recommendation && recLabels[v.recommendation]) {
    recBadgeHtml = '<div class="hero-rec-badge ' + v.recommendation + '">' + recLabels[v.recommendation] + '</div>';
  }

  const heroSection = ''
    + '<section class="venue-hero"><div class="pj-width">'
    + '<div class="venue-breadcrumb"><a href="../index.html">ホーム</a> &gt; <a href="asia-rooms.html">アジアガイド</a> &gt; <a href="asia-rooms.html">' + esc(v.countryName) + '</a> &gt; <span>' + esc(v.name) + '</span></div>'
    + '<div class="hero-inner">'
    + '<div class="hero-text">'
    + '<div class="hero-flag">' + v.flag + '</div>'
    + '<h1>' + esc(v.name) + '</h1>'
    + '<div class="hero-name-ja">' + esc(v.nameJa) + '</div>'
    + '<div class="hero-loc">' + esc(v.city) + ' ・ ' + esc(v.countryName) + '</div>'
    + recBadgeHtml
    + '<div class="hero-desc">' + esc(v.description) + '</div>'
    + '<div class="hero-tags">' + tagsHtml + '</div>'
    + '</div>'
    + photoHtml
    + '</div>'
    + '</div></section>';

  // 2. STICKY SECTION NAV
  const sectionNavHtml = ''
    + '<nav class="section-nav" id="section-nav"><div class="pj-width">'
    + '<div class="section-nav-inner">'
    + '<a href="#sec-overview" data-sec="sec-overview">概要</a>'
    + '<a href="#sec-stakes" data-sec="sec-stakes">ステークス</a>'
    + '<a href="#sec-access" data-sec="sec-access">アクセス</a>'
    + '<a href="#sec-jp" data-sec="sec-jp">日本語対応</a>'
    + '<a href="#sec-tournaments" data-sec="sec-tournaments">トーナメント</a>'
    + '<a href="#sec-hotel" data-sec="sec-hotel">ホテル</a>'
    + '</div>'
    + '</div></nav>';

  // 3. AT A GLANCE
  let prosHtml = '';
  let consHtml = '';
  if (v.pros && v.pros.length) {
    prosHtml = '<ul class="pc-list">';
    v.pros.forEach(function (p) { prosHtml += '<li>' + esc(p) + '</li>'; });
    prosHtml += '</ul>';
  } else {
    prosHtml = '<p style="font-size:13px;color:var(--text-3);">情報は準備中です。</p>';
  }
  if (v.cons && v.cons.length) {
    consHtml = '<ul class="pc-list">';
    v.cons.forEach(function (c) { consHtml += '<li>' + esc(c) + '</li>'; });
    consHtml += '</ul>';
  } else {
    consHtml = '<p style="font-size:13px;color:var(--text-3);">情報は準備中です。</p>';
  }

  const dressCode = v.dressCode ? esc(v.dressCode) : '特になし';
  const smoking = v.smoking ? esc(v.smoking) : '情報なし';
  const wifi = v.wifi ? esc(v.wifi) : '情報なし';
  let currencyVal = '情報なし';
  if (v.currency) {
    currencyVal = esc(v.currency.name) + ' (' + esc(v.currency.code) + ')';
  }

  const infoHtml = ''
    + '<div class="info-card"><div class="ic-icon">&#127918;</div><div class="ic-label">テーブル数</div><div class="ic-val">' + esc(v.tables) + '</div></div>'
    + '<div class="info-card"><div class="ic-icon">&#128336;</div><div class="ic-label">営業時間</div><div class="ic-val">' + esc(v.hours) + '</div></div>'
    + '<div class="info-card"><div class="ic-icon">&#127471;&#127477;</div><div class="ic-label">日本語</div><div class="ic-val">' + jpLevel + '</div></div>'
    + '<div class="info-card"><div class="ic-icon">&#9824;&#65039;</div><div class="ic-label">ゲームタイプ</div><div class="ic-val">' + v.gameTypes.join(' / ') + '</div></div>'
    + '<div class="info-card"><div class="ic-icon">&#128084;</div><div class="ic-label">ドレスコード</div><div class="ic-val">' + dressCode + '</div></div>'
    + '<div class="info-card"><div class="ic-icon">&#128684;</div><div class="ic-label">喫煙</div><div class="ic-val">' + smoking + '</div></div>'
    + '<div class="info-card"><div class="ic-icon">&#128246;</div><div class="ic-label">WiFi</div><div class="ic-val">' + wifi + '</div></div>'
    + '<div class="info-card"><div class="ic-icon">&#128177;</div><div class="ic-label">通貨</div><div class="ic-val">' + currencyVal + '</div></div>';

  const overviewSection = ''
    + '<section class="detail-section detail-section-alt" id="sec-overview"><div class="pj-width">'
    + '<div class="ds-title">概要</div>'
    + '<div class="pros-cons-grid">'
    + '<div class="pros-card"><div class="pc-header good"><span class="pc-icon">&#10003;</span> GOOD POINTS</div>' + prosHtml + '</div>'
    + '<div class="cons-card"><div class="pc-header warn"><span class="pc-icon">&#9888;</span> WATCH OUT</div>' + consHtml + '</div>'
    + '</div>'
    + '<div class="info-grid">' + infoHtml + '</div>'
    + '</div></section>';

  // 4. JAPANESE PLAYER TIPS
  let tipsSection = '';
  if (v.tipsForJapanese && v.tipsForJapanese.length) {
    let tipsItems = '';
    v.tipsForJapanese.forEach(function (tip, i) {
      tipsItems += '<div class="tip-card"><div class="tip-num">' + (i + 1) + '</div><div class="tip-text">' + esc(tip) + '</div></div>';
    });
    tipsSection = ''
      + '<section class="detail-section tips-section"><div class="pj-width">'
      + '<div class="tips-header"><span class="tips-icon">&#128161;</span><h2>日本人プレイヤー向けTips</h2></div>'
      + '<div class="tips-grid">' + tipsItems + '</div>'
      + '</div></section>';
  }

  // 5. STAKES & RAKE
  let stakesRows = '';
  v.stakes.forEach(function (s) {
    stakesRows += '<tr><td>' + esc(s.game) + '</td><td class="stakes">' + esc(s.blind) + '</td><td>' + esc(s.buyIn) + '</td><td>' + esc(s.notes) + '</td></tr>';
  });

  let currencyNoteHtml = '';
  if (v.currency && v.currency.approxJPY) {
    currencyNoteHtml = '<div class="currency-note">&#128177; 参考レート: ' + esc(v.currency.approxJPY) + '</div>';
  }

  const stakesSection = ''
    + '<section class="detail-section" id="sec-stakes"><div class="pj-width">'
    + '<div class="ds-title">ステークス・レーキ</div>'
    + '<div class="pj-table-wrap"><table class="pj-table"><thead><tr><th>ゲーム</th><th>ブラインド</th><th>バイイン</th><th>備考</th></tr></thead><tbody>' + stakesRows + '</tbody></table></div>'
    + '<div class="rake-note"><strong>レーキ:</strong> ' + esc(v.rake) + '</div>'
    + currencyNoteHtml
    + '</div></section>';

  // 6. ACCESS
  const mapUrl = 'https://maps.google.com/maps?q=' + encodeURIComponent(v.mapQuery) + '&output=embed&z=14';
  const accessHtml = '<div class="access-grid">'
    + '<div class="access-map"><iframe src="' + mapUrl + '" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe></div>'
    + '<div class="access-info">'
    + '<div class="access-item"><div class="ai-label">住所</div><div class="ai-desc">' + esc(v.address) + '</div></div>'
    + '<div class="access-item"><div class="ai-label">最寄り空港</div><div class="ai-val">' + esc(v.airport.name) + '</div><div class="ai-desc">' + esc(v.airport.distance) + '</div></div>'
    + '<div class="access-item"><div class="ai-label">アクセス方法</div><div class="ai-desc">' + esc(v.airport.access) + '</div></div>'
    + '</div></div>';

  const accessSection = ''
    + '<section class="detail-section detail-section-alt" id="sec-access"><div class="pj-width">'
    + '<div class="ds-title">アクセス・最寄り空港</div>'
    + accessHtml
    + '</div></section>';

  // 7. JP SUPPORT
  const jpSection = ''
    + '<section class="detail-section" id="sec-jp"><div class="pj-width">'
    + '<div class="ds-title">日本語対応</div>'
    + '<div class="jp-badge ' + v.japaneseSupport.level + '">' + jpLevel + '</div>'
    + '<div class="jp-details">' + esc(v.japaneseSupport.details) + '</div>'
    + '</div></section>';

  // 8. JUNKET / FEES
  let feeHtml = '';
  if (v.junketInfo && (v.junketInfo.description || (v.junketInfo.items && v.junketInfo.items.length))) {
    if (v.junketInfo.description) feeHtml += '<div class="fee-desc">' + esc(v.junketInfo.description) + '</div>';
    if (v.junketInfo.items && v.junketInfo.items.length) {
      feeHtml += '<div class="fee-grid">';
      v.junketInfo.items.forEach(function (f) {
        feeHtml += '<div class="fee-item"><div class="fi-label">' + esc(f.label) + '</div><div class="fi-val">' + esc(f.value) + '</div></div>';
      });
      feeHtml += '</div>';
    }
  } else {
    feeHtml = '<p style="color:var(--text-3);font-size:14px;">ジャンケット情報は現在準備中です。</p>';
  }

  const junketSection = ''
    + '<section class="detail-section detail-section-alt"><div class="pj-width">'
    + '<div class="ds-title">ジャンケット・費用</div>'
    + feeHtml
    + '</div></section>';

  // 9. TOURNAMENTS
  let tourneyHtml = '';
  if (v.tournaments && v.tournaments.length) {
    tourneyHtml = '<div class="tourney-list">';
    v.tournaments.forEach(function (t) {
      tourneyHtml += '<div class="tourney-item"><div class="tourney-name">' + esc(t.name) + '</div><div class="tourney-freq">' + esc(t.frequency) + '</div><div class="tourney-buyin">' + esc(t.buyIn) + '</div></div>';
    });
    tourneyHtml += '</div>';
  } else {
    tourneyHtml = '<p style="color:var(--text-3);font-size:14px;">定期トーナメント情報はありません。</p>';
  }

  const tournamentsSection = ''
    + '<section class="detail-section" id="sec-tournaments"><div class="pj-width">'
    + '<div class="ds-title">トーナメント</div>'
    + tourneyHtml
    + '</div></section>';

  // 10. HOTEL
  let hotelHtml = '';
  if (v.hotel && v.hotel.name) {
    hotelHtml += '<div class="hotel-header"><div class="hotel-name">' + esc(v.hotel.name) + '</div>';
    if (v.hotel.rating) hotelHtml += '<div class="hotel-rating">' + esc(v.hotel.rating) + '</div>';
    hotelHtml += '</div>';
    if (v.hotel.amenities && v.hotel.amenities.length) {
      hotelHtml += '<div class="amenity-list">';
      v.hotel.amenities.forEach(function (a) { hotelHtml += '<span class="amenity-tag">' + esc(a) + '</span>'; });
      hotelHtml += '</div>';
    }
    if (v.dining && v.dining.length) {
      hotelHtml += '<div style="margin-top:24px;"><div style="font-size:14px;font-weight:600;margin-bottom:12px;">レストラン</div>';
      hotelHtml += '<div style="display:flex;flex-wrap:wrap;gap:8px;">';
      v.dining.forEach(function (d) {
        hotelHtml += '<span class="amenity-tag">' + esc(d.name) + ' (' + esc(d.type) + ') ' + esc(d.price) + '</span>';
      });
      hotelHtml += '</div></div>';
    }
  } else {
    hotelHtml = '<p style="color:var(--text-3);font-size:14px;">ホテル情報は現在準備中です。</p>';
  }

  const hotelSection = ''
    + '<section class="detail-section detail-section-alt" id="sec-hotel"><div class="pj-width">'
    + '<div class="ds-title">ホテル・施設</div>'
    + hotelHtml
    + '</div></section>';

  // 11. RELATED VENUES
  let relatedSection = '';
  if (v.nearbyVenues && v.nearbyVenues.length) {
    let relatedCards = '';
    v.nearbyVenues.forEach(function (nid) {
      const nv = VENUE_DATA[nid];
      if (!nv) return;
      const nvImg = nv.photo
        ? '<img class="related-card-img" src="' + nv.photo + '" alt="' + esc(nv.name) + '"/>'
        : '<div class="related-card-placeholder">' + nv.flag + '</div>';
      let nvRec = '';
      if (nv.recommendation && recLabels[nv.recommendation]) {
        nvRec = '<span class="related-rec-badge ' + nv.recommendation + '">' + recLabels[nv.recommendation] + '</span>';
      }
      relatedCards += ''
        + '<a class="related-card" href="venue-detail.html?id=' + nid + '">'
        + nvImg
        + '<div class="related-card-body">'
        + '<h3>' + esc(nv.name) + '</h3>'
        + '<div class="related-card-city">' + esc(nv.city) + ' ・ ' + esc(nv.countryName) + '</div>'
        + nvRec
        + '</div>'
        + '</a>';
    });
    if (relatedCards) {
      relatedSection = ''
        + '<section class="detail-section"><div class="pj-width">'
        + '<div class="ds-title">近くの会場</div>'
        + '<div class="related-grid">' + relatedCards + '</div>'
        + '</div></section>';
    }
  }

  // 12. CTA
  const ctaSection = ''
    + '<section class="detail-section detail-section-alt"><div class="pj-width">'
    + '<div class="venue-cta"><h2>' + esc(v.name) + ' への予約</h2><p>POKER JAPAN経由でジャンケット手配。手数料無料。</p><a href="booking.html" class="btn-book">ジャンケット予約へ</a></div>'
    + '<div class="last-updated">最終更新: ' + esc(v.lastUpdated) + '</div>'
    + '</div></section>';

  // ASSEMBLE PAGE
  el.innerHTML = ''
    + heroSection
    + sectionNavHtml
    + overviewSection
    + tipsSection
    + stakesSection
    + accessSection
    + jpSection
    + junketSection
    + tournamentsSection
    + hotelSection
    + relatedSection
    + ctaSection;

  // STICKY NAV - ACTIVE STATE TRACKING
  const navEl = document.getElementById('section-nav');
  const navLinks = navEl ? navEl.querySelectorAll<HTMLAnchorElement>('a[data-sec]') : [];
  const sectionIds: string[] = [];
  navLinks.forEach(function (a) { sectionIds.push(a.getAttribute('data-sec')!); });

  function updateActiveNav(): void {
    const scrollY = window.scrollY + 160;
    let currentId = '';
    sectionIds.forEach(function (sid) {
      const sec = document.getElementById(sid);
      if (sec && sec.offsetTop <= scrollY) {
        currentId = sid;
      }
    });
    navLinks.forEach(function (a) {
      if (a.getAttribute('data-sec') === currentId) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
    if (navEl) {
      if (window.scrollY > 200) {
        navEl.classList.add('scrolled');
      } else {
        navEl.classList.remove('scrolled');
      }
    }
  }

  let scrollTimeout: number;
  window.addEventListener('scroll', function () {
    if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
    scrollTimeout = requestAnimationFrame(updateActiveNav);
  }, { passive: true });
  updateActiveNav();

  navLinks.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById(this.getAttribute('data-sec')!);
      if (target) {
        const top = target.offsetTop - 140;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });
})();
