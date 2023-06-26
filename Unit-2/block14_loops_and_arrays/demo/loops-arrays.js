// ==========================
// #region Fundamentals
// ==========================

// The examples use generic number arrays, but feel free
// to use the following fruits array for more flavor :)

const fruits = ["lemon", "strawberry", "grape", "orange", "lime"];

// **********************
// DEMO - an array is a collection of values which can be accessed by index
// **********************
// **********************
// Learning Objectives
//  - array literals []
//  - index (can be used to access values)
// **********************
const arr = [1, 2, 3];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);

// **********************
// DEMO - a function which tells us about an array
// **********************
// **********************
// Learning Objectives
//  - length property
//  - indexes (0 to length - 1)
// **********************
function describeArray(arr) {
  console.log(`the length of your array is ${arr.length}`);
  console.log(`the max index of your array is ${arr.length - 1}`);
  console.log(`the last element is ${arr[arr.length - 1]}`);
}
const infoArray = [1, 3, 5, 7, 9];
describeArray(infoArray);

// **********************
// DEMO - we can modify an array by assigning a value to an index
// **********************
// **********************
// Learning Objectives
//  - indexes (0 to length - 1)
// **********************
const modifiedArray = [1, 3, 5, 7, 9];
console.log(modifiedArray);
modifiedArray[0] = 10;
console.log(modifiedArray);

// **********************
// DEMO - we can add a value to the end of an array
// **********************
// **********************
// Learning Objectives
//  - push (adding a value to the end of an array)
// **********************
const pushedArray = [1, 3, 5, 7, 9];
pushedArray.push(10);
console.log(pushedArray);

// **********************
// DEMO - elements can be removed from arrays, using shift, pop, or splice
// **********************
// **********************
// Learning Objectives
//  - pop, shift, splice (removing elements from an array)
// **********************

const removedArray = [1, 2, 3, 4, 5, 6];
console.log(removedArray);
console.log(removedArray.shift());
console.log(removedArray);
console.log(removedArray.pop());
console.log(removedArray);
console.log(removedArray.splice(1, 2));
console.log(removedArray);

// **********************
// DEMO - we can loop over an array
// **********************
// **********************
// Learning Objectives
//  - for loop (before loop; condition; after iteration )
// **********************

const forArray = [1, 3, 5, 7, 9];
for (let i = 0; i < forArray.length; i++) {
  console.log(forArray[i]);
}

// We can also use a for...of loop!
for (const element of forArray) {
  console.log(element);
}

// **********************
// DEMO - we can use a loop to generate an array
// **********************
// **********************
// Learning Objectives
//  - populating an array with a loop
// **********************

const generatedArray = [];
for (let i = 0; i < 25; i++) {
  generatedArray.push(i);
}
console.log(generatedArray);

// **********************
// DEMO - a while loop can be used to modify an array
// **********************
// **********************
// Learning Objectives
//  - while loops (can be used to remove elements from an array)
//  - while loops (can be used to populate an array)
// **********************

const whileArray = [1, 2, 3, 4, 5, 6];
while (whileArray.length) {
  console.log(whileArray.pop());
}

while (whileArray.length < 10) {
  whileArray.push("hello");
}
console.log(whileArray);

// **********************
// DEMO - when arrays are passed to functions, they can be modified.. so be careful :)
// **********************
// **********************
// Learning Objectives
//  - functions can modify arrays
// **********************

function modifyArr(arr) {
  return arr.pop();
}

const fnModifiedArray = [1, 2, 3, 4, 5, 6];
console.log(fnModifiedArray);
console.log(modifyArr(fnModifiedArray));
console.log(fnModifiedArray);

// #endregion Fundamentals

// ==========================
// #region Guided Practice
// ==========================
// The following demos introduce concepts that students will be exploring in
// the guided practice.

// **********************
// DEMO - we can generate an array of odd numbers
// **********************
// **********************
// Learning Objectives
//  - % operator to determine odd or even numbers
// **********************

const oddArray = [];
for (let i = 0; i < 25; i++) {
  if (i % 2 === 1) {
    oddArray.push(i);
  }
}
console.log(oddArray);

// **********************
// DEMO - we can create a function which generates an array of odd numbers
// **********************
// **********************
// Learning Objectives
//  - a function can return an array
// **********************

function generateOddArray(limit) {
  const arr = [];
  for (let i = 0; i < limit; i++) {
    if (i % 2 === 1) {
      arr.push(i);
    }
  }
  return arr;
}

const generatedOddArray = generateOddArray(100);
console.log(generatedOddArray);

// **********************
// DEMO - we can create a function which counts the odd or even numbers in an array
// **********************
// **********************
// Learning Objectives
//  - parameters (arrays as parameters)
// **********************

function countOdds(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      count = count + 1;
    }
  }
  return count;
}

const countOddsArray = [1, 2, 3];
console.log(countOdds(countOddsArray));
console.log(countOdds([2, 4, 6]));

// **********************
// DEMO - we can create a function which takes an array of numbers and returns a new array with only the even numbers
// **********************
// **********************
// Learning Objectives
//  - return an array from a function
// **********************
function onlyEvens(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      results.push(arr[i]);
    }
  }
  return results;
}
const onlyEvensArray = [1, 2, 3, 4, 5, 6];
const evens = onlyEvens(onlyEvensArray);
console.log(evens);

// **********************
// DEMO - we can split a string into an array
// **********************
// **********************
// Learning Objectives
//  - split (a string into an array)
// **********************

const str = "foo,bar,bazz";
const letters = str.split(",");
console.log(letters);

// **********************
// DEMO - we can create a function which splits strings into arrays
// **********************
// **********************
// Learning Objectives
//  - return an array from a function
// **********************

function splitIt(str, delim) {
  return str.split(delim);
}

const strToSplit = "foo,bar,bazz";
const words = splitIt(strToSplit, ",");
console.log(words);

const anotherStrToSplit = "fizz|buzz";
const otherWords = splitIt(strToSplit, "|");
console.log(words);
