//import sum from index.js
const {multiply, stringOrNot, fizzBuzz} = require('./index');

// test function multiply
test('multiply 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
});

// test function stringOrNot
test('stringOrNot to take a variable and return true if string and false if not', () => {
    expect(stringOrNot(1)).toBe(false);
    expect(stringOrNot('1')).toBe(true);
});

// test function fizzBuzz
test('fizzBuzz to take a number and return fizz if divisible by 3, buzz if divisible by 5, fizzbuzz if divisible by 3 and 5, and the number if not divisible by 3 or 5', () => {
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(15)).toBe('fizzbuzz');
    expect(fizzBuzz(2)).toBe(2);
});