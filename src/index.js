import initTheme from './scripts/theme';
import initNav from './scripts/nav';
import initReveal from './scripts/reveal';

initTheme();
initNav();
initReveal();

document.getElementById('year').textContent = new Date().getFullYear();
