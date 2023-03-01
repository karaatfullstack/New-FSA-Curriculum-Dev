// --------------------------
//#region Section 1
// --------------------------
/**
 * @param {number} num1
 * @param {number} num2
 * @returns the sum of the two given numbers
 */
function add(num1, num2) {
  return num1 + num2;
}

/**
 * @param {number} num1
 * @param {number} num2
 * @returns the difference between the two given numbers
 */
function subtract(num1, num2) {
  return num1 - num2;
}

/**
 * @param {string} name
 * @returns a string that greets the given name.
 * If a name is not provided,
 * then a generic greeting will be returned.
 */
function greet(name) {
  if (typeof name === "undefined") {
    return "Hello!";
  } else {
    return `Hello, ${name}!`;
  }
}

/**
 * @param {int[]} nums
 * @returns the sum of the numbers in the given array of numbers
 */
function sum(nums) {
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
}

//#endregion Section 1

// --------------------------
//#region Section 2
// --------------------------
// Write your code here!

//#endregion Section 2

/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  add,
  subtract,
  greet,
  sum,
  // isPositive,
  // getFirst,
  // getLast,
  // findLeast,
  // shareFirstLetter,
  // getFirstLast,
  // shareLastDigit,
};
