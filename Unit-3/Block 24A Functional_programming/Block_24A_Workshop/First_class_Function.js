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
