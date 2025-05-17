const loremWords = (
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua " +
  "ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure " +
  "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non " +
  "proident sunt in culpa qui officia deserunt mollit anim id est laborum"
).split(" ");

/**
 * The function `randomWords` generates a specified number of random words from a predefined list and
 * returns them as a sentence with the first letter capitalized.
 * @param count - The `count` parameter in the `randomWords` function specifies the number of random
 * words that will be selected from the `loremWords` array and concatenated to form the final string.
 * @returns The `randomWords` function returns a string consisting of a specified number of randomly
 * selected words from the `loremWords` array. The words are joined together with spaces, converted to
 * lowercase, and then the first letter is capitalized before being returned.
 */
function randomWords(count) {
  loremWords.sort(() => 0.5 - Math.random());
  const finalString = loremWords.slice(0, count).join(" ").toLowerCase();
  return finalString.charAt(0).toUpperCase() + finalString.slice(1);
}

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

export function hasRecursiveElement(list) {
  list.forEach((item) => {
    console.log(item);

    if (item.querySelector("[data-repeat]")) {
      return true;
    }
  });

  return false;
}

/**
 * The `repeatElements` function clones elements with a `data-repeat` attribute, adjusts their content
 * based on a `data-words` attribute, and removes the original element after cloning.
 */
export function repeatElements() {
  let elements = document.querySelectorAll("[data-repeat]");
  while (elements.length > 0) {
    console.log(elements);

    const currentElement = elements[0];
    for (let i = 0; i < currentElement.dataset.repeat; i++) {
      const clone = currentElement.cloneNode(true);
      clone.removeAttribute("data-repeat");
      if (Boolean(currentElement.dataset.words)) {
        clone.textContent = randomWords(currentElement.dataset.words);
      }
      currentElement.insertAdjacentElement("afterend", clone);
    }
    currentElement.remove();
    elements = document.querySelectorAll("[data-repeat]");
  }
}
