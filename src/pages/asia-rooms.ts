(function () {
  const tabs = document.querySelectorAll<HTMLElement>('.ctab');
  const sections = document.querySelectorAll<HTMLElement>('.country-section');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (this: HTMLElement) {
      const c = this.getAttribute('data-country')!;
      tabs.forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');
      sections.forEach(function (s) { s.classList.remove('active'); });
      document.getElementById('sec-' + c)!.classList.add('active');
      window.scrollTo({ top: (document.querySelector('.country-tabs') as HTMLElement).offsetTop - 64, behavior: 'smooth' });
    });
  });

  document.querySelectorAll<HTMLElement>('.venue-card[data-venue]').forEach(function (card) {
    card.addEventListener('click', function (this: HTMLElement) {
      window.location.href = 'venue-detail.html?id=' + this.getAttribute('data-venue');
    });
  });
})();
