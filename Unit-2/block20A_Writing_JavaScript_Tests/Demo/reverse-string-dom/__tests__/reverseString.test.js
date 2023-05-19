/**
 * @jest-environment jsdom
 */

// Import reverseString from reverse-string.js and use it in a test:
const { reverseString } = require("../index.js");

// describe() is used for grouping related tests
describe("reverseString", () => {
  // test() is used for an individual test case
  test("reverses single-word strings", () => {
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString("world")).toEqual("dlrow");
  });

  // Try to test different scenarios that might break your implementation
  test("reverses multi-word strings", () => {
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });

  test("reverses strings with punctuation", () => {
    expect(reverseString("hello, world!")).toEqual("!dlrow ,olleh");
  });

  test("returns an empty string if given an empty string", () => {
    expect(reverseString("")).toEqual("");
  });
});
