import { updateAuthHeader } from '../shared/auth-header';

(function () {
  const tabs = document.querySelectorAll<HTMLElement>('.tab-item[data-level]');
  const items = document.querySelectorAll<HTMLElement>('.article-item[data-level]');
  const sections = document.querySelectorAll<HTMLElement>('.cat-section[data-category]');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (this: HTMLElement) {
      const level = this.getAttribute('data-level')!;

      tabs.forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');

      if (level === 'all') {
        items.forEach(function (c) { c.style.display = ''; });
        sections.forEach(function (s) { s.style.display = ''; });
      } else {
        items.forEach(function (c) {
          c.style.display = c.getAttribute('data-level') === level ? '' : 'none';
        });
        sections.forEach(function (s) {
          const visible = s.querySelectorAll('.article-item[data-level="' + level + '"]');
          s.style.display = visible.length === 0 ? 'none' : '';
        });
      }
    });
  });
})();

updateAuthHeader();
