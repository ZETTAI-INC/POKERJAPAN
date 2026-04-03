import { updateAuthHeader } from '../shared/auth-header';

// FAQ Toggle
document.querySelectorAll<HTMLElement>('.faq-question').forEach(function (q) {
  q.addEventListener('click', function (this: HTMLElement) {
    this.parentElement!.classList.toggle('open');
  });
});

// Step checkboxes (visual only)
document.querySelectorAll<HTMLElement>('.step-check').forEach(function (check) {
  check.addEventListener('click', function (this: HTMLElement) {
    this.classList.toggle('checked');
    updateProgress();
  });
});

function updateProgress(): void {
  const total = document.querySelectorAll('.step-check').length;
  const checked = document.querySelectorAll('.step-check.checked').length;
  const pct = (checked / total) * 100;
  (document.getElementById('progressFill') as HTMLElement).style.width = pct + '%';
}

updateProgress();
updateAuthHeader();
