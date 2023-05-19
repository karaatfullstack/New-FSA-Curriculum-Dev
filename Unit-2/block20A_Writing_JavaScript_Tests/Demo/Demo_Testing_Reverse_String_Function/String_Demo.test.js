// Import the reverseString function from the String_Demo.js file
const reverseString = require("./String_Demo");

// Define a group of tests using Jest's describe function
describe("Calculator tests", () => {
  // Define a test case using Jest's test function
  test("reverseString reverses a string worked correctly", () => {
    // Call the reverseString function with the input 'hello' and expect the output to be 'olleh'
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverseString reverses a string with spaces worked correctly", () => {
    // Call the reverseString function with the input 'hello world' and expect the output to be 'dlrow olleh'
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  test("reverseString reverses a string with punctuation worked correctly", () => {
    // Call the reverseString function with the input 'hello, world!' and expect the output to be '!dlrow ,olleh'
    expect(reverseString("hello, world!")).toBe("!dlrow ,olleh");
  });
});
