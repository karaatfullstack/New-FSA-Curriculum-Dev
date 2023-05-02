// Import the calculations module from the calculator.js file
const calculations = require("./calculator");

// Define a group of tests using Jest's describe function
describe("Calculator tests", () => {
  // Define a test case using Jest's test function
  test("adding 1 + 2 should return 3", () => {
    // Call the sum function with the inputs 1 and 2 and expect the output to be 3
    expect(calculations.sum(1, 2)).toBe(3);
  });

  test("subtracting 17 - 5 should return 12", () => {
    // Call the diff function with the inputs 17 and 5 and expect the output to be 12
    expect(calculations.diff(17, 5)).toBe(12);
  });

  test("multiplying 7*8 should return 56", () => {
    // Call the product function with the inputs 7 and 8 and expect the output to be 56
    expect(calculations.product(7, 8)).toBe(56);
  });

  test("multiplying 3*4 should return 12", () => {
    // Call the product function with the inputs 3 and 4 and expect the output to be approximately 12
    expect(calculations.product(3, 4)).toBeCloseTo(12);
  });

  test("dividing 12/3 should return 4", () => {
    // Call the divide function with the inputs 12 and 3 and expect the output to be approximately 4
    expect(calculations.divide(12, 3)).toBeCloseTo(4);
  });
});
