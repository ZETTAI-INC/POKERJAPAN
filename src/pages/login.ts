(function () {
  if (localStorage.getItem('pj_logged_in')) { window.location.href = 'profile.html'; return; }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).togglePass = function () {
    const inp = document.getElementById('login-pass') as HTMLInputElement;
    const icon = document.getElementById('eye-icon')!;
    if (inp.type === 'password') {
      inp.type = 'text';
      icon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
    } else {
      inp.type = 'password';
      icon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).handleLogin = function (e?: Event) {
    if (e) e.preventDefault();
    const email = (document.getElementById('login-email') as HTMLInputElement).value.trim() || 'user@pokerjapan.com';
    document.getElementById('btn-login')!.classList.add('loading');
    setTimeout(function () {
      localStorage.setItem('pj_logged_in', 'true');
      localStorage.setItem('pj_user_email', email);
      localStorage.setItem('pj_user_name', email.split('@')[0]);
      window.location.href = 'profile.html';
    }, 400);
    return false;
  };
})();
