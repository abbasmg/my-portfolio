export default function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const meta = document.querySelector('meta[name="theme-color"]');

  const apply = (theme) => {
    root.setAttribute('data-theme', theme);
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0d1117' : '#f7f6f2');
  };

  apply(root.getAttribute('data-theme') || 'light');

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
  });
}
