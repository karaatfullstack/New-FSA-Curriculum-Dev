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

function isPositive(num) {
  return num > 0;
}

function getFirst(str) {
  //handle empty string
  if (str.length === 0) {
    return "";
  }

  return str[0];
}

function getLast(str) {
  //handle empty string
  if (str.length === 0) {
    return "";
  }

  return str[str.length - 1];
}

function findLeast(nums) {
  //handle empty array
  if (nums.length === 0) {
    return undefined;
  }

  let least = nums[0];
  for (const n of nums) {
    if (n < least) {
      least = n;
    }
  }
  return least;
}

function shareFirstLetter(str1, str2) {
  //handle empty string
  if (str1.length === 0 || str2.length === 0) {
    return false;
  }

  return str1[0] === str2[0];
}

function getFirstLast(str) {
  //handle empty string
  if (str.length === 0) {
    return "";
  }

  return str[0] + str[str.length - 1];
}

function shareLastDigit(num1, num2) {
  //handle negative numbers
  if (num1 < 0) {
    num1 *= -1;
  }
  if (num2 < 0) {
    num2 *= -1;
  }

  return num1 % 10 === num2 % 10;
}


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
  isPositive,
  getFirst,
  getLast,
  findLeast,
  shareFirstLetter,
  getFirstLast,
  shareLastDigit,
};
