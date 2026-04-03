export function updateAuthHeader(): void {
  if (!localStorage.getItem('pj_logged_in')) return;

  const hide = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  };
  const show = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.style.display = '';
  };

  hide('hdr-login');
  hide('hdr-register');
  show('hdr-profile');
  hide('mob-login');
  show('mob-profile');

  const mr = document.getElementById('mob-register');
  if (mr) mr.textContent = 'ジャンケット予約';
}
