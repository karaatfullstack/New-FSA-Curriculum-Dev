// Fibonacci Series

function fib(number) {
  function calc(number) {
    if (number <= 1) {
      return number;
    }
    return calc(number - 1) + calc(number - 2);
  }
  let string = "";
  for (let i = 1; i <= number; i++) {
    string += `${calc(i)} `;
  }
  document.write(string);
}

fib(8);

//HourglassTriangle

function HourglassTriangle(num) {
  if (num <= 0) {
    return;
  }

  // Print spaces before the stars
  let spaces = "";
  for (let i = 0; i < 5 - num; i++) {
    spaces += " ";
  }

  // Print the stars
  let stars = "";
  for (let i = 0; i < 2 * num - 1; i++) {
    stars += "*";
  }

  // Print the current line
  console.log(spaces + stars);

  // Recursively call the function with num-1
  HourglassTriangle(num - 1);

  // Print the same line again
  console.log(spaces + stars);
}

// Test the function with an argument of 4
HourglassTriangle(4);

// Factorial of number 10

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// Example usage
console.log(factorial(10)); // Output: 3628800
