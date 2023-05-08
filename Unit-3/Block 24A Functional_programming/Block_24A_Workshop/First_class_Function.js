//Assigning a function to a variable:

const assigningFunction = function (str) {
  return str.toUpperCase();
};
console.log(assigningFunction("Welcome"));

//Returning a function:

function multiplierDisplay(a) {
  return function (b) {
    return a * b;
  };
}
const double = multiplierDisplay(3);
console.log(double(7));

// Returning functions
const adder = (x) => (y) => {
  const result = x + y;
  console.log(`Adding ${x} and ${y} gives ${result}`);
  return result;
};

// Here is the same function written without arrow syntax

function otherAdder(x) {
  return function (y) {
    const result = x + y;
    console.log("Adding " + x + " and " + y + " gives " + result);
    return result;
  };
}

const add2 = adder(2);
const add4 = adder(4);

const num1 = add2(5); // What will num1 be?
const num2 = add4(5);

