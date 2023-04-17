const reverseString = require('./String_Demo');

describe("Calculator tests", () => {

test('reverseString reverses a string worked correctly', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverseString reverses a string with spaces worked correctly', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('reverseString reverses a string with punctuation worked correctly', () => {
  expect(reverseString('hello, world!')).toBe('!dlrow ,olleh');
});
})
