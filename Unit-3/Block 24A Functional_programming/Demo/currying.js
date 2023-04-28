const num = [15, 12, 18, 11, 19, 14];

// define a curried function that takes two arguments
const add = (a) => (b) => a + b;

// define a new function that adds 8 to each element in the array using the curried function
const additionFunction = num.map(add(8));

console.log(additionFunction);
