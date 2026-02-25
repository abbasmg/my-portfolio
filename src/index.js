import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import lazyDownload from "./scripts/lazyDownload";
import initDarkMode from "./scripts/darkMode";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
lazyDownload();
initDarkMode();
