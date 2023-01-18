console.log("hello all!!!!");

// demo each pair of lines one at a time, explaining the variable types and the datatypes. Feel free to add more examples as necessary.

let num = 4;
console.log(num, "i am the variable num, I am an integer");

num = 7;
console.log(num, "i am the variable num after being reassigned");

const letter = "a";
console.log(num, "i am the variable num, I am a string");

// letter = 'b'
// this should have thrown this error: Uncaught TypeError: Assignment to constant variable.

var iAmAnOlderVariable = "fox, ";
console.log(
  iAmAnOlderVariable,
  "i am the variable iAmAnOlderVariable, and I am a string"
);

// talk about var, and why it is not longer as popular.  Mention that the students may come across this when they are looking at documentation or StackOverflow

// arithmetic:

let sum = 0;
console.log(sum, "I am sum");
sum = 1 + 2;
console.log(sum, "I am sum after adding 1 + 2");

let difference = 10;
difference = difference - 5;
console.log(difference, "I am the difference after subtracting 5");

let remainder = 10 % 2;
console.log(remainder, "I am the remainder");

// typeof
console.log(typeof 10, 'expected output is: "number"');
console.log(typeof 0, 'expected output is: "number"');
console.log(typeof "10", 'expected output is: "string"');
console.log(typeof "fox", 'expected output is: "string"');


// the slides discuss logical operators, depending on your class you can touch upon them here, or spend time reviewing the above material. 