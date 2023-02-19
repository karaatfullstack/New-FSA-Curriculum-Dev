// Block 17 Demo


//------------------------------------- .forEach() ------------------------------------------ 
// Similar to a for loop, the forEach method calls a function for each element in an array.


// Example 1
const myFunction = (letter) => {
    console.log(letter);
}

const alphabet = ["a", "b", "c", "d", "e"];
alphabet.forEach(myFunction);


// A forEach() method returns nothing.


// Example 2
const myFunction2 = (letter) => {
    console.log(letter);
}

const alphabet2 = ["a", "b", "c", "d", "e"];
const forEachResult = alphabet2.forEach(myFunction2);
console.log(forEachResult);


// The forEach method keeps record of the array's index as well as the array itself.
// Some values are optional and do not have to be written for every use of forEach.
// array.forEach(function(currentValue, index, array), thisValue);


// Example 3
const scoreTally = (round) => {
    sum += round;
}

let sum = 0;
let bowlingScores = [8, 9, 2, 6];

bowlingScores.forEach(scoreTally);
console.log(sum);



//------------------------------------- .sort() ------------------------------------------ 
// The sort method sorts an array lexicographically. 


// Example 1
const fruits = ["Banana", "Pineapple", "Dragonfruit", "Mango"];
fruits.sort();
console.log(fruits)


// With the sort method in JavaScript, the function sorts values as strings. 
// In the case of numbers, the numbers are sorted as strings instead of numbers.


// Example 2
const points = [40, 10, 1, 5, 51];
points.sort();
console.log(points)


// To fix this, we need to provide a compare function.


// Example 3
const points2 = [40, 10, 1, 5, 51];
points2.sort((a,b) => a - b);
console.log(points2);


// To reverse an order, you can use the reverse() method.


// Example 4
const vegetables = ["cucumber", "broccoli", "carrots", "peas", "asparagus"];
vegetables.sort();
vegetables.reverse();
console.log(vegetables);



//------------------------------------- .map() ------------------------------------------ 
// The map method is similar to the forEach method; however, it returns a new array.


// Example 1
const squareNumbers = (number) => {
    return number * number;
}

const numbers = [2, 4, 6, 8];
const squaredNumbers = numbers.map(squareNumbers);
console.log(squaredNumbers)


// Just like forEach, the map method does keep record of the array's index as well as the array itself.
// The values are optional and do not have to be written for every use of map.
// array.forEach(function(currentValue, index, array), thisValue);


// When trying to remember the differences between forEach and map:
// map returns a new array.
// forEach return nothing.


// Example 2
const pies = ["cherry", "apple", "pecan"];
const addPieName = (flavor) => {
    return flavor + " pie";
}

console.log(pies.map(addPieName));
console.log(pies.forEach(addPieName));


//------------------------------------- .filter() ------------------------------------------ 
// The filter method creates a new array filled with elements that pass a test provided by a function.


// Example 1
const isAdult = (age) => {
    return age >= 18;
}

const ages = [28, 34, 52, 16, 17];
const result = ages.filter(isAdult);
console.log(result);


// When creating the tests in the filter function, remember that the values returned are those that 
// pass or are noted as True in terms of a boolean.


// Example 2
const isEven = (evenOrOdd) => {
    return (evenOrOdd % 2 === 0);
}

const arrayOfNumbers = [2, 20, 21, 37, 48];
const evensOnly = arrayOfNumbers.filter(isEven);
console.log(evensOnly);


//------------------------------------- .reduce() ------------------------------------------ 
// The reduce method is a means of turning the array into a single value. 
// By passing in a callback function, we are able to evaluate a transformation of the array elements into a new value or dataset. 
// Unlike the other methods, the reduce method requires two parameters in the callback function:
// Accumulator
// Current Value
// These two values are constantly updated over every iteration as they move through the array.


// Example 1
const attack = (total, hit) => {
    return total - hit;
}

const hitPoints = [250, 75, 50];
const hitPointsRemaining = hitPoints.reduce(attack);
console.log(hitPointsRemaining)


// The array method generally has an initial value.
// If an initial value is given, the initial value would be passed in as the second argument to the reduce method.
// In the example below, the callback function would be invoked 4 times instead of 3.


// Example 2
const getTotalPoints = (accumulator, currentValue) => {
    return accumulator + currentValue;
}

const pointsPerQuarter = [10, 12, 22, 14];
const totalSeasonPoints = pointsPerQuarter.reduce(getTotalPoints, 10);
console.log(totalSeasonPoints);