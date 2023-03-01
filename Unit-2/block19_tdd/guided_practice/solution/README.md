# Foundations.TDD.Strategies

In this TDD set, you'll learn some problem solving strategies that you'll be using for the rest of your programming career!

## Getting Started

1. Clone this repo.
2. Navigate your terminal to your local repo folder.
3. In your terminal, run `npm install`.
4. In your terminal, run `npm test`.
5. Edit `script.js` until you are passing all test cases!
6. _(Optional)_ You can change `test(...)` in `script.test.js` if you'd like to run the tests for problems you're working on.
7. Type `Control+C` in your terminal to close the Jest process once you are done testing.

## Strategies and Prompts

The rest of these instructions is categorized into some common strategies used not only to tackle TDD problems, but also to write code in general! While this list is certainly not exhaustive, you'll find that these techniques are used again and again no matter where you go.

An example solution is provided in `script.js` for the first prompt of each strategy. Use that code as a reference as you complete the rest of the prompts!

**Do them in order!**

### multiplyNumbers

`multiplyNumbers(a: any, b: any)` returns the product of `a` and `b` _unless_ either of the parameters is not a number, in which case the string `"error"` is returned.

```js
multiplyNumbers(3, 6); // >>> 18
multiplyNumbers("not a number", 6); // >>> "error"
```

### sumArray

`sumArray(number[])` returns the sum of the given array. The sum of an empty array is 0. You can assume that only arrays of numbers will be passed in.

```js
sumArray([]); // >>> 0
sumArray([1]); // >>> 1
sumArray([1, 1]); // >>> 2
sumArray([10, 9, 28, 173, -23]); // >>> 197
```

### findMax

`findMax(number[])` returns the greatest number in a given array of numbers. If the array is empty, then `-Infinity` is returned.

```js
findMax([]); // >>> -Infinity
findMax([-10, 234, 568, 29, 7]); // >>> 568
findMax([3, 3, 3]); // >>> 3
```

### isSongInPlaylist

`isSongInPlaylist(song: string, playlist: string[])` returns whether the given song can be found in the given playlist. You can assume that the song will be nonempty.

```js
isSongInPlaylist("Chasing Pavements", [
  "Just Smile",
  "Burn Options",
  "Chasing Pavements",
  "Industrial Now",
]); // >>> true
isSongInPlaylist("24K Power", [
  "Stubborn Love",
  "Electric Heart",
  "All I Want",
]); // >>> false
```

### makeBoard

`makeBoard` takes two arguments:

- `cols`: number - how many columns the board will have
- `rows`: number - how many rows the board will have

`makeBoard` will return a 2D array filled with `"-"` according to the given dimensions.

```js
makeBoard(3, 4);
/* >>>
[
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"]
]
*/
```
