import { updateAuthHeader } from '../shared/auth-header';

(function () {
  const tabs = document.querySelectorAll<HTMLElement>('.tab-item[data-region]');
  const rows = document.querySelectorAll<HTMLElement>('#casino-table tbody tr[data-region]');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (this: HTMLElement) {
      const region = this.getAttribute('data-region')!;

      tabs.forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');

      rows.forEach(function (row) {
        if (region === 'all' || row.getAttribute('data-region') === region) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
})();

updateAuthHeader();
