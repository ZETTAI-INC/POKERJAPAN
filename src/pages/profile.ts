interface Booking {
  ref: string;
  casino: string;
  country: string;
  flag: string;
  depart: string;
  returnDate: string;
  status: string;
  createdAt: string;
}

(function () {
  if (!localStorage.getItem('pj_logged_in')) { window.location.href = 'login.html'; return; }

  const email = localStorage.getItem('pj_user_email') || 'user@pokerjapan.com';
  const name = localStorage.getItem('pj_user_name') || 'Player';
  const initial = name.charAt(0).toUpperCase();

  document.getElementById('side-avatar')!.textContent = initial;
  document.getElementById('hdr-avatar')!.textContent = initial;
  document.getElementById('side-name')!.textContent = name;
  document.getElementById('side-email')!.textContent = email;
  document.getElementById('info-name')!.textContent = name;
  document.getElementById('info-email')!.textContent = email;
  document.getElementById('page-title')!.textContent = name + ' さんのマイページ';

  const now = new Date();
  document.getElementById('info-date')!.textContent =
    now.getFullYear() + '/' + String(now.getMonth() + 1).padStart(2, '0') + '/' + String(now.getDate()).padStart(2, '0');

  let bookings: Booking[] = [];
  try { bookings = JSON.parse(localStorage.getItem('pj_bookings') || '[]'); } catch (_e) { /* ignore */ }
  const el = document.getElementById('booking-history')!;

  document.getElementById('s-bookings')!.textContent = String(bookings.length);
  const uniq: Record<string, boolean> = {};
  bookings.forEach(function (b) { if (b.casino) uniq[b.casino] = true; });
  document.getElementById('s-casinos')!.textContent = String(Object.keys(uniq).length);
  const todayStr = now.toISOString().split('T')[0];
  let next: string | null = null;
  bookings.forEach(function (b) { if (b.depart && b.depart >= todayStr && (!next || b.depart < next)) next = b.depart; });
  document.getElementById('s-next')!.textContent = next || '--';

  if (bookings.length > 0) {
    let html = '';
    bookings.forEach(function (b) {
      const sc = b.status === 'confirmed' ? 'confirmed' : 'pending';
      const st = b.status === 'confirmed' ? '確認済' : '受付中';
      let d = b.depart || '';
      if (b.returnDate) d += ' — ' + b.returnDate;
      html += '<div class="booking-item">'
        + '<div class="b-flag">' + (b.flag || '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>') + '</div>'
        + '<div class="b-info"><div class="b-casino">' + (b.casino || '予約') + '</div>'
        + (d ? '<div class="b-dates">' + d + '</div>' : '')
        + '</div><div class="b-right">'
        + '<div class="b-status ' + sc + '">' + st + '</div>'
        + '<div class="b-ref">' + (b.ref || '') + '</div>'
        + '</div></div>';
    });
    el.innerHTML = html;
  } else {
    el.innerHTML = '<div class="booking-cta-empty">'
      + '<div class="cta-illust"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg></div>'
      + '<h3>ジャンケット予約を始めましょう</h3>'
      + '<p>世界各地のポーカールームへの渡航を手配できます。カジノの選定から予約まで、すべてサポートします。</p>'
      + '<a href="booking.html" class="btn-cta-booking">予約を作成する <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>'
      + '</div>';
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).doLogout = function () {
    localStorage.removeItem('pj_logged_in');
    localStorage.removeItem('pj_user_email');
    localStorage.removeItem('pj_user_name');
    window.location.href = 'login.html';
  };
})();
