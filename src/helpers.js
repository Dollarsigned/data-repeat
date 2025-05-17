const loremWords = (
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua " +
  "ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure " +
  "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non " +
  "proident sunt in culpa qui officia deserunt mollit anim id est laborum"
).split(" ");

/**
 * This JavaScript function generates a random sentence with a specified number of words by selecting
 * words from a predefined array and capitalizing the first letter of the sentence.
 * @param wordCount - The `wordCount` parameter in the `getRandomSentence` function specifies the
 * number of words you want the random sentence to contain. This parameter determines how many words
 * will be randomly selected from the `loremWords` array to form the sentence.
 * @returns The function `getRandomSentence` returns a randomly generated sentence with the specified
 * number of words, where the first letter is capitalized and the sentence ends with a period.
 */
function getRandomSentence(wordCount) {
  const words = [];
  for (let i = 0; i < wordCount; i++) {
    const word = loremWords[Math.floor(Math.random() * loremWords.length)];
    words.push(word);
  }
  const sentence = words.join(" ");
  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
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

/**
 * The `repeatElements` function clones elements with a `data-repeat` attribute, repeating them based
 * on the specified count, and optionally replacing text content with random sentences based on the
 * `data-repeatWords` attribute.
 */
export function repeatElements() {
  const elementsWithRepeat = Array.from(
    document.querySelectorAll("[data-repeat]")
  );

  elementsWithRepeat.sort((a, b) => getDepth(b) - getDepth(a));

  for (const element of elementsWithRepeat) {
    const count = parseInt(element.dataset.repeat, 10);
    const wordCount = parseInt(element.dataset.words, 10);

    if (!isNaN(count) && count > 1) {
      for (let i = 0; i < count - 1; i++) {
        const clone = element.cloneNode(true);
        clone.removeAttribute("data-repeat");

        if (!isNaN(wordCount)) {
          const randomSentence = getRandomSentence(wordCount);
          clone.textContent = randomSentence;
        }

        element.parentElement.insertBefore(clone, element.nextSibling);
      }
    }

    if (!isNaN(wordCount)) {
      element.textContent = getRandomSentence(wordCount);
    }

    element.removeAttribute("data-repeat");
    element.removeAttribute("data-words");
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
