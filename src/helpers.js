export function injectCSS(text) {
  const newStyleTag = document.createElement("style");
  newStyleTag.textContent = text;
  document.head.appendChild(newStyleTag);
}

export function injectRepeatCSS() {
  injectCSS("[data-repeat]{display: none!important}");
}

export function repeatElements() {
  document.querySelectorAll("[data-repeat]").forEach((element) => {
    for (let i = 0; i < element.dataset.repeat - 1; i++) {
      const newElement = element.cloneNode(true);
      newElement.removeAttribute("data-repeat");
      element.parentElement.appendChild(newElement);
    }
    element.removeAttribute("data-repeat");
  });
}
