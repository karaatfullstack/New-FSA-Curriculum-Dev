# Foundations.TDD.Intro

This is the first of many TDD activities!

## Getting Started

1. Clone this repo.
2. Navigate your terminal to your local repo folder.
3. In your terminal, run `npm install`.
4. In your terminal, run `npm test`.
5. Complete Section 1.
   1. You can change `describe(...)` to `describe.only(...)` in `script_test.js` if you would like to run _only_ that test spec.
6. Complete Section 2.
7. Type `Control+C` in your terminal to close the Mocha process once you are done testing.

## Section 1

In this section, your focus will be on identifying expectations and writing the correct test specs. For each prompt, you will have to complete the tests in `script_test.js` by replacing the `REPLACE_ME` sections with the correct code. Solution code has already been provided in `script.js`, which you should also use as reference!

### add

`add(number, number)` returns the sum of the two given numbers. 

```js
add(0, 1); // >>> 1
add(-3, 5); // >>> 2
add(10, 9); // >>> 19
```

### subtract

`subtract(number, number)` returns the difference between the two given numbers.

```js
subtract(5, 2); // >>> 3
subtract(2, 4); // >>> -2
subtract(1, 1); // >>> 0
```

### greet

`greet(name: string)` returns a string that greets the given name. If a name is not provided, then a generic greeting will be returned.

```js
greet("world"); // >>> "Hello, world!"
greet(); // >>> "Hello!"
```

### sum

`sum(number[])` returns the sum of the given array of numbers.

```js
sum([1, 2, 3, 4, 5]); // >>> 15
sum([0, 0, 0]); // >>> 0
sum([]); // >>> 0
```

## Section 2

In this section, the tests have already been completed in `script_test.js`. For each prompt, read the problem carefully and identify expectations using the test specs. Then, write the corresponding function code in `script.js`.

### isPositive

`isPositive(number)` takes a number and returns whether that number is positive.

```js
isPositive(5); // >>> true
isPositive(-5); // >>> false
isPositive(0); // >>> false
```

### getFirst

`getFirst(any[])` returns the first element of the given array. You can assume that the given array is nonempty.

```js
getFirst([10, 9, 8, 7]); // >>> 10
```

### getLast

`getLast(any[])` takes an array and returns the last element of that array. You _cannot_ assume that the given array is nonempty.

```js
getLast(["hello", "hi", "greetings", "salutations", "hey"]); // >>> "hey"
getLast([]); // >>> null
```

### findLeast

`findLeast(number, number, number)` takes three numbers and returns the smallest of those three numbers.

```js
findLeast(3, 1, 2); // >>> 1
findLeast(-5, 100, 899); // >>> -5
```

### shareFirstLetter

`shareFirstLetter(string, string)` returns whether the given strings share the same first
letter.

```js
shareFirstLetter("share", "super"); // >>> true
shareFirstLetter("water", "river"); // >>> false
shareFirstLetter("letter", ""); // >>> false
```

### getFirstLast

`getFirstLast(array)` returns a _new_ array that contains the first and last elements of the given array. You can assume that the given array has at least two elements.

```js
getFirstLast(["a", "b", "c", "x", "y", "z"]); // >>> ['a', 'z']
```

### shareLastDigit

`shareLastDigit(number, number)` takes two numbers and returns whether those two numbers share the same last digit.

_Hint:_ Use mod! %

```js
shareLastDigit(15, 43); // >>> false
shareLastDigit(23, 43); // >>> true
```
