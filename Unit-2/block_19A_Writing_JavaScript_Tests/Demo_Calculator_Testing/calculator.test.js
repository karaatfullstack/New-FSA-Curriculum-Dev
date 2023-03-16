

const calculations = require('./calculator');

// writing differnet test cases

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(calculations.sum(1, 2)).toBe(3);
    });

    test('subtracting 17 - 5 should return 12', () => {
        expect(calculations.diff(17, 5)).toBe(12);
      });
    
      test('multiplying 7*8 should return 56', () => {
        expect(calculations.product(7, 8)).toBe(56);
      });
    
      test('multiplying 3*4 should return 12', () => {
        expect(calculations.product(3, 4)).toBeCloseTo(12);
      });

      test('dividing 12/3 should return 4', () => {
        expect(calculations.divide(12, 3)).toBeCloseTo(4);
      });
   })