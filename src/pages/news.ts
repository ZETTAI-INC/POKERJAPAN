import { updateAuthHeader } from '../shared/auth-header';

(function () {
  const tabs = document.querySelectorAll<HTMLElement>('.tab-item[data-filter]');
  const items = document.querySelectorAll<HTMLElement>('.news-item[data-category]');
  const sidebarFilters = document.querySelectorAll<HTMLElement>('[data-sidebar-filter]');

  function filterNews(category: string, activeEl?: HTMLElement): void {
    tabs.forEach(function (t) { t.classList.remove('active'); });
    if (activeEl) activeEl.classList.add('active');

    items.forEach(function (item) {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (this: HTMLElement) {
      filterNews(this.getAttribute('data-filter')!, this);
    });
  });

  sidebarFilters.forEach(function (el) {
    el.addEventListener('click', function (this: HTMLElement) {
      const cat = this.getAttribute('data-sidebar-filter')!;
      const matchingTab = document.querySelector<HTMLElement>('.tab-item[data-filter="' + cat + '"]');
      filterNews(cat, matchingTab || undefined);
    });
  });
})();

updateAuthHeader();
