// Question 1 Solution - Is Truthy

// Inputs will vary between the following:
// [ "I am a string", false, null, undefined, 0, ""]

const input = "I am a string"

if (input) {
    console.log(true)
} else if (input === "") {
    console.log("The empty string is falsy (the only falsy string)")
} else if (input === 0) {
    console.log("The number 0 is falsy (the only falsy number)")
} else if (input === undefined) {
    console.log("undefined is falsy")
} else if (input === null) {
    console.log("The null value is falsy")
} else if (input === false) {
    console.log("The boolean value false is falsy")
};





// Question 2 Solution - Number Line

// Inputs will vary between the following:
// [[50, 51], [99, -2], [0, 101], [500, -500], [-1000, 0], [-5, 0]]

const num1 = 50;
const num2 = 51;
const sum = num1 + num2;

if (sum < -1000) {
    console.log(sum + " is less than -1000")
} else if (sum < 0) {
    console.log(sum + " is a negative number")
} else if (sum === 0) {
    console.log(sum + " is equal to 0")
} else if (sum > 0 && sum < 100) {
    console.log(sum + " is greater than 0")
} else if (sum > 100) {
    console.log(sum + " is greater than 100")
};





// Question 3 Solution - Greater Than 5

// Inputs will vary between the following:
// [[5, 6], [10, 11], [0, 0], [1000, -1000], [6, 4], [5, 5]]

const numA = 5;
const numB = 5;

if (numA >= 5 && numB >= 5) {
    console.log(true)
} else {
    console.log(false)
}





// Question 4 Solution - Pair and Compare

// Inputs will vary between the following: 
// [
//     [["cat", "cat"], [6, "6"]],
//     [["five", 5], ["dog", "dawg"]],
//     [[0, false], ["horse", "horse"]],
//     [["eight", "eight"], ["ate", "ate"]],
//     [[11, "eleven"], ["four", "for"]],
//     [["cake", "cake"], ["pie", "pie"]]
// ]

const param1A = "cake";
const param1B = "cake";
const param2A = "pie";
const param2B = "pie";

if (param1A === param1B || param2A === param2B) {
    console.log(true);
} else {
    console.log(false);
}