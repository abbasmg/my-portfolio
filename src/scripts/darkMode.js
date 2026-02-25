export default function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  const root = document.documentElement;

  const saved = localStorage.getItem('theme') || 'dark';
  root.setAttribute('data-theme', saved);
  updateIcon(saved);

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
  });

  function updateIcon(theme) {
    const icon = toggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o';
  }
}
