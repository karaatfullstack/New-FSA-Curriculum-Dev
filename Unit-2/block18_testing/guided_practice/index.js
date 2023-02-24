/**
 * It takes two numbers, multiplies them together, and returns the result.
 * @param a - The first number to multiply
 * @param b - The second parameter
 * @returns The function multiply is being returned.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * If the type of the variable is a string, return true, otherwise return false.
 * @param a - The value to be checked.
 * @returns true
 */
function stringOrNot(a) {
    if (typeof a === 'string') {
        return true;
    } else {
        return false;
    }
}

/**
 * If the number is divisible by 3 and 5, return 'fizzbuzz', if it's divisible by 3, return 'fizz', if
 * it's divisible by 5, return 'buzz', otherwise return the number
 * @param a - The number to be checked.
 * @returns the value of a.
 */
function fizzBuzz(a) {
    if (a % 3 === 0 && a % 5 === 0) {
        return 'fizzbuzz';
    } else if (a % 3 === 0) {
        return 'fizz';
    } else if (a % 5 === 0) {
        return 'buzz';
    } else {
        return a;
    }
}

module.exports = {multiply, stringOrNot, fizzBuzz};