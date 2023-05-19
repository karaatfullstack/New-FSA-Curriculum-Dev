# Simple Function & DOM Testing

The purpose of this demo is to showcase how to use Jest to unit test a simple `reverseString` function, and perform DOM testing with `jsdom`.

## Demo

1. Give students a brief overview of `index.html` and what the website should do.
2. Show students `index.js` - what are the two functions?
3. Explain why it's important to unit test `reverseString` separately from the DOM.
4. Go over `reverseString.test.js`. This is similar to the Calculator demo.
5. Go over `dom.test.js`. This should make up the majority of this demo. Example topics to cover are:

- What is a Jest environment, and why do we need it for DOM testing?
- Why do we reset the DOM before each test?
- How does DOM Testing Library integrate into Jest and jsdom?
- Why is `getByRole` the recommended way to query elements?
- What are other ways to query elements, and when should we use them?
- Can students come up with other tests that might be useful to run?
