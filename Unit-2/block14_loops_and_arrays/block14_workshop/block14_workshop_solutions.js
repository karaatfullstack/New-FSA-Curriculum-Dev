// Question 1 Solution - Only Odds

// Other input arrays:
// [2, 4, 6, 8, 11, 20, 15, 22]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [70, 42, 55, 81, 21, 91, 34]
// [2, 4, 6, 8, 10, 11, 12] 

const array = [2, 4, 6, 8, 10, 11, 12]
const result = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
        result.push(array[i]);
    }
}

console.log(result);







// Question 2 Solution - Vowel Vs Consonant

// Other inputs:
// "hello", "ukelele", "awesome", "onomonopia", "textbook"

const word = "hello";
let consonants = 0;
let vowels = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
        vowels++;
    } else {
        consonants++
    }
};

console.log(word + " has " + consonants + " consonants and " + vowels + " vowels")







// Question 3 Solution - Reverse Array

// Other inputs:
// [1, 2, 3];
// [1, 3, 5, 7, 9, 11];
// [20, 50, 30, 60, 200];
// [1, -1, 2, -3, 5, -8, 13];

const inputArray = [1, -1, 2, -3, 5, -8, 13];
const reversedArray = [];

for (let i = inputArray.length - 1; i >= 0; i--) {
    reversedArray.push(inputArray[i])
};

console.log(reversedArray)








// Question 4 Solution - FizzBuzz

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}
