class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
}

function complexOperation(num1, num2, operation) {
  const result = operation(num1, num2);
  return result;
}

// Define the two complex numbers
const num1 = new Complex(6, 8);
const num2 = new Complex(8, -2);

// Define the function OperationFunc that returns a function based on the given operation
function operationFunc(operation) {
  return function(num1, num2) {
    const result = operation(num1, num2);
    return result;
  }
}

// Define the addition function
function addition(num1, num2) {
  const real = num1.real + num2.real;
  const imaginary = num1.imaginary + num2.imaginary;
  return new Complex(real, imaginary);
}

// Call the operationFunc function to create the add operation function
const addOperation = operationFunc(addition);

// Call the complexOperation function with the two complex numbers and the add operation function
const sum = complexOperation(num1, num2, addOperation);

console.log(sum);
