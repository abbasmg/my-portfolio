// Runs before first paint so the saved theme is applied without a flash.
// Default is light mode when there is no saved preference.
(function () {
  var theme = 'light';
  try {
    theme = localStorage.getItem('theme') || 'light';
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', theme);
})();
