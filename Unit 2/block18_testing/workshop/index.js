function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function stringOrNot(a) {
    if (typeof a === 'string') {
        return true;
    } else {
        return false;
    }
}

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

module.exports = {sum, multiply, stringOrNot, fizzBuzz};