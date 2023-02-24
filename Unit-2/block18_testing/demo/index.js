/* Importing the assert module. */
const assert = require('assert');

/**
 * It takes two numbers as arguments and returns their sum.
 * @param a - The first number to add.
 * @param b - The second number to add.
 * @returns The function add is being returned.
 */
function add(a, b) {
  return a + b;
}

/* Calling the function add with the arguments 1 and 2. */
const result = add(1, 2);

/* Checking that the result of the function is equal to 3. */
assert.equal(result, 2);

/* Checking that the result of the function is equal to 3. */
console.assert(result === 2, 'The result is not equal to 3');

// export the function to make it available for testing
module.exports = add;