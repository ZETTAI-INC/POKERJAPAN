import { updateAuthHeader } from '../shared/auth-header';

interface CasinoEntry {
  id: string;
  name: string;
  loc: string;
  stakes: string;
  games: string;
  url: string;
}

interface CountryEntry {
  country: string;
  countryName: string;
  flag: string;
  region: string;
  casinos: CasinoEntry[];
}

interface BookingState {
  step: number;
  country: string | null;
  casino: string | null;
}

(function () {
  const DATA: CountryEntry[] = [
    { country: 'US', countryName: 'アメリカ', flag: '\u{1F1FA}\u{1F1F8}', region: 'americas',
      casinos: [
        { id: 'bellagio', name: 'Bellagio Poker Room', loc: 'ラスベガス, USA', stakes: '$1/3 〜 $400/800', games: 'NLH / PLO / Mixed', url: '../junkets/bellagio.html' },
      ] },
    { country: 'PH', countryName: 'フィリピン', flag: '\u{1F1F5}\u{1F1ED}', region: 'asia',
      casinos: [
        { id: 'manila', name: 'PokerStars LIVE Manila', loc: 'マニラ, フィリピン', stakes: '₱25/50 〜 ₱500/1000', games: 'NLH / PLO', url: '../junkets/manila-cod.html' },
      ] },
    { country: 'GB', countryName: 'イギリス', flag: '\u{1F1EC}\u{1F1E7}', region: 'europe',
      casinos: [
        { id: 'hippodrome', name: 'Hippodrome Casino', loc: 'ロンドン, UK', stakes: '£1/2 〜 £25/50', games: 'NLH / PLO / Hi-Lo', url: '../junkets/hippodrome.html' },
      ] },
    { country: 'MO', countryName: 'マカオ', flag: '\u{1F1F2}\u{1F1F4}', region: 'asia',
      casinos: [
        { id: 'wynn', name: 'Wynn Macau', loc: 'マカオ, 中国', stakes: 'HK$25/50 〜 HK$500/1000', games: 'NLH / Short Deck', url: '../junkets/wynn-macau.html' },
      ] },
    { country: 'KR', countryName: '韓国', flag: '\u{1F1F0}\u{1F1F7}', region: 'asia',
      casinos: [
        { id: 'paradise', name: 'Paradise City Poker', loc: '仁川, 韓国', stakes: '₩10K/20K 〜 ₩100K/200K', games: 'NLH', url: '../junkets/paradise-city.html' },
      ] },
    { country: 'AU', countryName: 'オーストラリア', flag: '\u{1F1E6}\u{1F1FA}', region: 'oceania',
      casinos: [
        { id: 'star', name: 'The Star Sydney', loc: 'シドニー, オーストラリア', stakes: 'A$2/5 〜 A$50/100', games: 'NLH / PLO', url: '../junkets/star-sydney.html' },
      ] },
  ];

  const state: BookingState = { step: 1, country: null, casino: null };
  const isLoggedIn = !!localStorage.getItem('pj_logged_in');

  if (isLoggedIn) {
    const savedEmail = localStorage.getItem('pj_user_email') || '';
    const savedName = localStorage.getItem('pj_user_name') || '';
    (document.getElementById('f-email') as HTMLInputElement).value = savedEmail;
    (document.getElementById('f-first') as HTMLInputElement).value = savedName;
    (document.getElementById('f-last') as HTMLInputElement).value = '';
    (document.getElementById('f-phone') as HTMLInputElement).value = '';
    (document.getElementById('f-pass') as HTMLInputElement).value = 'dummypass';
    (document.getElementById('f-pass2') as HTMLInputElement).value = 'dummypass';

    state.step = 2;
    document.querySelectorAll<HTMLElement>('.step-panel').forEach(function (p) { p.classList.remove('active'); });
    document.getElementById('step-2')!.classList.add('active');

    const step1El = document.querySelector<HTMLElement>('.bp-step[data-step="1"]')!;
    const firstLine = step1El.nextElementSibling as HTMLElement | null;
    if (step1El) step1El.style.display = 'none';
    if (firstLine && firstLine.classList.contains('bp-line')) firstLine.style.display = 'none';

    document.querySelectorAll<HTMLElement>('.bp-step').forEach(function (s) {
      const sn = parseInt(s.getAttribute('data-step')!);
      s.classList.remove('active', 'done');
      if (sn === 2) s.classList.add('active');
    });

    const step2BackBtn = document.querySelector<HTMLElement>('#step-2 .btn-back');
    if (step2BackBtn) step2BackBtn.style.display = 'none';

    const banner = document.createElement('div');
    banner.style.cssText = 'background:#e8f5ee;border:1px solid #c3e6cb;border-radius:10px;padding:14px 20px;margin-bottom:24px;display:flex;align-items:center;gap:10px;font-size:14px;color:#1a6b3c;';
    banner.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><div><strong>' + savedName + '</strong>としてログイン中<br><span style="font-size:12px;color:#595d61;">' + savedEmail + '</span></div>';
    const bookingWrap = document.querySelector('.booking-wrap')!;
    const bookingProgress = document.querySelector('.booking-progress')!;
    bookingWrap.insertBefore(banner, bookingProgress);
  }

  // Build country cards
  const grid = document.getElementById('country-grid')!;
  DATA.forEach(function (d) {
    const el = document.createElement('div');
    el.className = 'country-card';
    el.setAttribute('data-country', d.country);
    el.innerHTML = '<div class="country-flag">' + d.flag + '</div>'
      + '<div class="country-name">' + d.countryName + '</div>'
      + '<div class="country-region">' + d.casinos.length + ' カジノ</div>';
    el.addEventListener('click', function () { selectCountry(d.country); });
    grid.appendChild(el);
  });

  function selectCountry(code: string): void {
    state.country = code;
    state.casino = null;
    document.querySelectorAll<HTMLElement>('.country-card').forEach(function (c) {
      c.classList.toggle('selected', c.getAttribute('data-country') === code);
    });
    const countryData = DATA.filter(function (d) { return d.country === code; })[0];
    const wrap = document.getElementById('casino-list-wrap')!;
    const list = document.getElementById('casino-list')!;
    list.innerHTML = '';
    if (countryData) {
      countryData.casinos.forEach(function (c) {
        const el = document.createElement('div');
        el.className = 'casino-card';
        el.setAttribute('data-casino', c.id);
        el.innerHTML = '<div class="casino-icon">' + countryData.flag + '</div>'
          + '<div class="casino-info">'
          + '<div class="casino-name">' + c.name + '</div>'
          + '<div class="casino-meta">' + c.loc + ' · ' + c.games + '</div>'
          + '<div class="casino-stakes">' + c.stakes + '</div>'
          + '</div>'
          + '<div class="casino-check"></div>';
        el.addEventListener('click', function () { selectCasino(c.id); });
        list.appendChild(el);
      });
      wrap.style.display = 'block';
      if (countryData.casinos.length === 1) {
        selectCasino(countryData.casinos[0].id);
      }
    }
    updateStep2Btn();
  }

  function selectCasino(id: string): void {
    state.casino = id;
    document.querySelectorAll<HTMLElement>('.casino-card').forEach(function (c) {
      c.classList.toggle('selected', c.getAttribute('data-casino') === id);
    });
    updateStep2Btn();
  }

  function updateStep2Btn(): void {
    (document.getElementById('btn-step2') as HTMLButtonElement).disabled = !(state.country && state.casino);
  }

  function goStep(n: number): void {
    if (n === 1 && isLoggedIn) return;
    if (n === 2 && state.step === 1) {
      const last = (document.getElementById('f-last') as HTMLInputElement).value.trim();
      const first = (document.getElementById('f-first') as HTMLInputElement).value.trim();
      const email = (document.getElementById('f-email') as HTMLInputElement).value.trim();
      const phone = (document.getElementById('f-phone') as HTMLInputElement).value.trim();
      const pass = (document.getElementById('f-pass') as HTMLInputElement).value;
      const pass2 = (document.getElementById('f-pass2') as HTMLInputElement).value;
      if (!last || !first || !email || !phone || !pass) {
        alert('必須項目を入力してください');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('err-email')!.style.display = 'block';
        return;
      }
      document.getElementById('err-email')!.style.display = 'none';
      if (pass.length < 8) {
        alert('パスワードは8文字以上で入力してください');
        return;
      }
      if (pass !== pass2) {
        document.getElementById('err-pass')!.style.display = 'block';
        return;
      }
      document.getElementById('err-pass')!.style.display = 'none';

      localStorage.setItem('pj_logged_in', 'true');
      localStorage.setItem('pj_user_email', email);
      localStorage.setItem('pj_user_name', first);
    }
    if (n === 4) {
      populateReview();
    }
    state.step = n;
    document.querySelectorAll<HTMLElement>('.step-panel').forEach(function (p) { p.classList.remove('active'); });
    document.getElementById('step-' + n)!.classList.add('active');
    document.querySelectorAll<HTMLElement>('.bp-step').forEach(function (s) {
      const sn = parseInt(s.getAttribute('data-step')!);
      s.classList.remove('active', 'done');
      if (sn === n) s.classList.add('active');
      else if (sn < n) s.classList.add('done');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function populateReview(): void {
    let casinoData: CasinoEntry | undefined;
    let countryData: CountryEntry | undefined;
    for (const d of DATA) {
      for (const c of d.casinos) {
        if (c.id === state.casino) { casinoData = c; countryData = d; }
      }
    }
    if (casinoData && countryData) {
      document.getElementById('review-casino')!.innerHTML =
        '<div class="flag">' + countryData.flag + '</div>'
        + '<div><div class="name">' + casinoData.name + '</div>'
        + '<div class="loc">' + casinoData.loc + ' · ' + casinoData.stakes + '</div></div>';
    }
    document.getElementById('rv-name')!.textContent =
      (document.getElementById('f-last') as HTMLInputElement).value + ' ' + (document.getElementById('f-first') as HTMLInputElement).value;
    document.getElementById('rv-email')!.textContent = (document.getElementById('f-email') as HTMLInputElement).value;
    document.getElementById('rv-phone')!.textContent = (document.getElementById('f-phone') as HTMLInputElement).value;
    document.getElementById('rv-depart')!.textContent = (document.getElementById('f-depart') as HTMLInputElement).value;
    document.getElementById('rv-return')!.textContent = (document.getElementById('f-return') as HTMLInputElement).value;
    document.getElementById('rv-passport-name')!.textContent = (document.getElementById('f-passport-name') as HTMLInputElement).value;
    document.getElementById('rv-passport-num')!.textContent = (document.getElementById('f-passport-num') as HTMLInputElement).value;
    document.getElementById('rv-passport-exp')!.textContent = (document.getElementById('f-passport-exp') as HTMLInputElement).value;
    const natSel = document.getElementById('f-nationality') as HTMLSelectElement;
    document.getElementById('rv-nationality')!.textContent = natSel.options[natSel.selectedIndex].text;
    document.getElementById('rv-dob')!.textContent = (document.getElementById('f-dob') as HTMLInputElement).value;
  }

  document.getElementById('f-terms')!.addEventListener('change', function (this: HTMLInputElement) {
    (document.getElementById('btn-submit') as HTMLButtonElement).disabled = !this.checked;
  });

  function submitBooking(): void {
    const ref = 'PJ-' + Date.now().toString(36).toUpperCase();
    document.getElementById('rv-ref')!.textContent = ref;

    let casinoData: CasinoEntry | undefined;
    let countryData: CountryEntry | undefined;
    for (const d of DATA) {
      for (const c of d.casinos) {
        if (c.id === state.casino) { casinoData = c; countryData = d; }
      }
    }
    const booking = {
      ref: ref,
      casino: casinoData ? casinoData.name : '',
      country: countryData ? countryData.countryName : '',
      flag: countryData ? countryData.flag : '',
      depart: (document.getElementById('f-depart') as HTMLInputElement).value,
      returnDate: (document.getElementById('f-return') as HTMLInputElement).value,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    let bookings = [];
    try { bookings = JSON.parse(localStorage.getItem('pj_bookings') || '[]'); } catch (_e) { /* ignore */ }
    bookings.unshift(booking);
    localStorage.setItem('pj_bookings', JSON.stringify(bookings));

    document.querySelectorAll<HTMLElement>('.step-panel').forEach(function (p) { p.classList.remove('active'); });
    document.getElementById('step-done')!.classList.add('active');
    document.querySelectorAll<HTMLElement>('.bp-step').forEach(function (s) { s.classList.add('done'); s.classList.remove('active'); });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleFile(input: HTMLInputElement, wrapperId: string): void {
    const wrap = document.getElementById(wrapperId)!;
    const nameEl = document.getElementById(wrapperId + '-name')!;
    if (input.files && input.files[0]) {
      const f = input.files[0];
      if (f.size > 10 * 1024 * 1024) {
        alert('ファイルサイズは10MB以下にしてください');
        input.value = '';
        return;
      }
      wrap.classList.add('has-file');
      nameEl.textContent = f.name;
    } else {
      wrap.classList.remove('has-file');
      nameEl.textContent = '';
    }
  }

  // Expose to window for inline onclick handlers
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  w.selectCountry = selectCountry;
  w.selectCasino = selectCasino;
  w.goStep = goStep;
  w.submitBooking = submitBooking;
  w.handleFile = handleFile;
})();

updateAuthHeader();
