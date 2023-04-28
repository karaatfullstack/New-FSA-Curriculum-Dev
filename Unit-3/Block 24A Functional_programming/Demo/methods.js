const num = [15, 12, 18, 11, 19, 14];

// forEach example
console.log("forEach method\n");
numbers.forEach((number) => {
  console.log(number);
});

// sort example
console.log("sort method\n");
const sortedNum = numbers.sort((a, b) => a - b);
console.log(sortedNum);

// map example
console.log("map method\n");
const squaredNum = numbers.map((number) => number ** 2);
console.log(squaredNum);

// reduce example
console.log("reduce method\n");
const sumOfNum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumOfNum);

// filter example
console.log("filter method\n");
const evenNum = numbers.filter((number) => number % 2 === 0);
console.log(evenNum);
