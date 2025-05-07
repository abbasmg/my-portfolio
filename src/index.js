import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import lazyDownload from "./scripts/lazyDownload";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
lazyDownload();
