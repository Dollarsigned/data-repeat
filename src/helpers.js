/**
 * The `injectCSS` function in JavaScript creates a new `<style>` tag and appends it to the `<head>` of
 * the document with the provided CSS text content.
 * @param text - The `injectCSS` function you provided is used to dynamically inject CSS styles into a
 * web page. The `text` parameter represents the CSS styles that you want to inject into the page. This
 * can include any valid CSS rules, selectors, properties, etc.
 */
export function injectCSS(text) {
  const newStyleTag = document.createElement("style");
  newStyleTag.textContent = text;
  document.head.appendChild(newStyleTag);
}

/**
 * The `injectRepeatCSS` function injects CSS to hide elements with the attribute `data-repeat`.
 */
export function injectRepeatCSS() {
  injectCSS("[data-repeat]{display: none!important}");
}

/**
 * The `repeatElements` function duplicates elements with a `data-repeat` attribute based on the
 * specified count value.
 */
export function repeatElements() {
  const elementsWithRepeat = Array.from(
    document.querySelectorAll("[data-repeat]")
  );

  elementsWithRepeat.sort((a, b) => getDepth(b) - getDepth(a));

  for (const element of elementsWithRepeat) {
    const count = parseInt(element.dataset.repeat, 10);
    if (!isNaN(count) && count > 1) {
      for (let i = 0; i < count - 1; i++) {
        const clone = element.cloneNode(true);
        clone.removeAttribute("data-repeat");
        element.parentElement.insertBefore(clone, element.nextSibling);
      }
    }
    element.removeAttribute("data-repeat");
  }
}

/**
 * The function `getDepth` calculates the depth of an element within the DOM tree by counting the
 * number of its parent elements.
 * @param element - The `element` parameter in the `getDepth` function is a reference to the HTML
 * element for which you want to calculate the depth in the DOM tree.
 * @returns The function `getDepth` returns the depth of the given `element` in the DOM tree, which is
 * the number of levels it is nested within its parent elements.
 */
function getDepth(element) {
  let depth = 0;
  while (element.parentElement) {
    depth++;
    element = element.parentElement;
  }
  return depth;
}
