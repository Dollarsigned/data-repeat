import { injectRepeatCSS, repeatElements } from "./helpers";

(function () {
  injectRepeatCSS();
  document.addEventListener("DOMContentLoaded", repeatElements);
})();
