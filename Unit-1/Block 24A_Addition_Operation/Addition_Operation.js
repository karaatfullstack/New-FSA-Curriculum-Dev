class Complex_num {
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
  const num1 = new Complex_num(6, 8);
  const num2 = new Complex_num(8, -2);
  
  // Define the addition operation function
  function complexNumbers_addition(num1, num2) {
    const real = num1.real + num2.real;
    const imaginary = num1.imaginary + num2.imaginary;
    return new Complex_num(real, imaginary);
  }
  
  // Call the performComplexOperation function with the two complex numbers and the addition operation function
  const sum = complexOperation(num1, num2, complexNumbers_addition);
  
  console.log(sum);
  