/**
 * @jest-environment jsdom
 */

const { onReverseButtonClick } = require("../index.js");
const { getByRole, fireEvent } = require("@testing-library/dom");

/**
 * Resets the document to its initial state before each test.
 */
function resetDOM() {
  document.body.innerHTML = `
  <main>
    <h1>String Reverser</h1>
    <label>
      Type something:
      <input type="text" />
    </label>
    <button>Reverse!</button>
    <label>
      Output:
      <output></output>
    </label>
  </main>`;
  document
    .querySelector("button")
    .addEventListener("click", onReverseButtonClick);
}

// Some example DOM tests for the button
describe("The reverse button", () => {
  // Reset the DOM before each test
  beforeEach(resetDOM);

  test("reverses the input string", () => {
    // See https://www.w3.org/TR/html-aria/#docconformance
    const input = getByRole(document, "textbox");
    const output = getByRole(document, "status");
    const button = getByRole(document, "button");

    input.value = "hello";
    fireEvent.click(button);
    expect(output.textContent).toEqual("olleh");
  });

  test("reverses the input string with punctuation", () => {
    const input = getByRole(document, "textbox");
    const output = getByRole(document, "status");
    const button = getByRole(document, "button");

    input.value = "hello, world!";
    fireEvent.click(button);
    expect(output.textContent).toEqual("!dlrow ,olleh");
  });
});
