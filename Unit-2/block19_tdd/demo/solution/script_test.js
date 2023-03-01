// --------------------------
//#region Setup
// You can safely ignore the code in this region :)
// --------------------------

// This line of code uses Chai, which is our assertion library.
const { expect } = require("chai");

// This imports your code so we can test it!
const code = require("./script.js");

const REPLACE_ME = "replace!!!!! me!!!!!!!";
//#endregion Setup

// --------------------------
//#region Section 1
// --------------------------
describe("add", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.add).to.be.a("function");
    });

    it("returns a number", function () {
      expect(code.add(2, 2)).to.be.a(REPLACE_ME);
    });
  });

  describe("returns the correct sum for random numbers between -50 and 50", function () {
    // Generate and test 3 random pairs of numbers
    for (let i = 0; i < 3; i++) {
      const num1 = Math.floor(Math.random() * 100) - 50;
      const num2 = Math.floor(Math.random() * 100) - 50;
      const expected = REPLACE_ME;

      it(`returns ${expected} for ${num1} + ${num2}`, function () {
        const result = code.add(num1, num2);
        expect(result).to.equal(expected);
      });
    }
  });
});

describe("subtract", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.subtract).to.be.a(REPLACE_ME);
    });

    it("returns a number", function () {
      expect(code.subtract(2, 2)).to.be.a(REPLACE_ME);
    });
  });

  describe("returns the correct difference for random numbers between -50 and 50", function () {
    // Generate and test 3 random pairs of numbers
    for (let i = 0; i < 3; i++) {
      const num1 = Math.floor(Math.random() * 100) - 50;
      const num2 = Math.floor(Math.random() * 100) - 50;
      const expected = REPLACE_ME;

      it(`returns ${expected} for ${num1} - ${num2}`, function () {
        const result = code.subtract(num1, num2);
        expect(result).to.equal(REPLACE_ME);
      });
    }
  });
});

describe("greet", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.greet).to.be.a(REPLACE_ME);
    });

    it("returns a string", function () {
      expect(code.greet()).to.be.a(REPLACE_ME);
    });
  });

  describe("returns the correct greeting", function () {
    it('returns "Hello!" when name is not provided', function () {
      const result = code.greet();
      expect(result).to.equal(REPLACE_ME);
    });

    // Test against an array of names
    const names = ["Mazhug", "Oodagh", "Ulmragha"];
    for (const name of names) {
      it(`correctly greets ${name}`, function () {
        const result = code.greet(name);
        expect(result).to.equal(REPLACE_ME);
      });
    }
  });
});

describe("sum", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.sum).to.be.a(REPLACE_ME);
    });

    it("returns a number", function () {
      expect(code.sum([0])).to.be.a(REPLACE_ME);
    });
  });

  describe("returns the correct sum", function () {
    // Generate and test 3 arrays of 5 random numbers between -50 and 50
    for (let i = 0; i < 3; i++) {
      const test = [];
      for (let j = 0; j < 5; j++) {
        test.push(Math.floor(Math.random() * 100) - 50);
      }

      // Don't worry about this next line (for now ;))
      const expected = test.reduce((a, b) => a + b);

      it(`returns ${expected} for [${test}]`, function () {
        const result = code.sum(test);
        expect(result).to.eql(expected);
      });
    }
  });
});
//#endregion Section 1

// --------------------------
//#region Section 2
// --------------------------
describe("isPositive", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.isPositive).to.be.a("function");
    });

    it("returns a boolean", function () {
      const result = code.isPositive(5);
      expect(result).to.be.a("boolean");
    });
  });

  describe("returns the correct output", function () {
    describe("returns true for positive numbers within [1,9999]", function () {
      for (let i = 0; i < 3; i++) {
        const test = 1 + Math.floor(Math.random() * 9999);
        it(`returns true for ${test}`, function () {
          const result = code.isPositive(test);
          expect(result).to.equal(true);
        });
      }
    });

    describe("returns false for negative numbers within [-9999, -1]", function () {
      for (let i = 0; i < 3; i++) {
        const test = -(1 + Math.floor(Math.random() * 9999));
        it(`returns false for ${test}`, function () {
          const result = code.isPositive(test);
          expect(result).to.equal(false);
        });
      }
    });

    it("returns false for 0", function () {
      expect(code.isPositive(0)).to.equal(false);
    });
  });
});

describe("getFirst", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.getFirst).to.be.a("function");
    });
    it("returns a string for an array of strings", function () {
      const result = code.getFirst(["a", "b", "z"]);
      expect(result).to.be.a("string");
    });
    it("returns a number for an array of numbers", function () {
      const result = code.getFirst([5, 189, -2, 33]);
      expect(result).to.be.a("number");
    });
  });
  describe("returns the correct output", function () {
    // Generate and test 3 random arrays of one number
    for (let i = 0; i < 3; i++) {
      const expected = 1 + Math.floor(Math.random() * 9999);
      const test = [expected, expected + 1];
      it(`returns ${expected} for the array [${test}]`, function () {
        const result = code.getFirst(test);
        expect(result).to.equal(expected);
      });
    }
  });
});

describe("getLast", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.getLast).to.be.a("function");
    });
    it("returns a string for an array of strings", function () {
      const result = code.getLast(["a", "b", "z"]);
      expect(result).to.be.a("string");
    });
    it("returns a number for an array of numbers", function () {
      const result = code.getLast([5, 189, -2, 33]);
      expect(result).to.be.a("number");
    });
  });
  describe("returns the correct output", function () {
    // Generate and test 3 random arrays of one number
    for (let i = 0; i < 3; i++) {
      const expected = 1 + Math.floor(Math.random() * 9999);
      const test = [expected + 1, expected];
      it(`returns ${expected} for the array [${test}]`, function () {
        const result = code.getLast(test);
        expect(result).to.equal(expected);
      });
    }

    it("returns null for an empty array", function () {
      expect(code.getLast([])).to.be.null;
    });
  });
});

describe("findLeast", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.findLeast).to.be.a("function");
    });
    it("returns a number", function () {
      const result = code.findLeast(1, 2, 3);
      expect(result).to.be.a("number");
    });
  });
  describe("returns the correct number", function () {
    // Generate and test 3 random trios of numbers
    for (let i = 0; i < 3; i++) {
      const test = [];
      for (let j = 0; j < 3; j++) {
        test.push(Math.floor(Math.random() * 100) - 50);
      }

      // Don't worry about this next line for now ;)
      const expected = test.reduce((a, b) => (a < b ? a : b));

      it(`returns ${expected} for [${test}]`, function () {
        const result = code.findLeast(...test);
        expect(result).to.equal(expected);
      });
    }
  });
});

describe("shareFirstLetter", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.shareFirstLetter).to.be.a("function");
    });

    it("returns a boolean", function () {
      const result = code.shareFirstLetter("share", "super");
      expect(result).to.be.a("boolean");
    });
  });

  describe("returns the correct output", function () {
    it("returns true when two strings have the same first letter", function () {
      const result = code.shareFirstLetter("share", "super");
      expect(result).to.equal(true);
    });

    it("returns false when two strings do not have the same first letter", function () {
      const result = code.shareFirstLetter("water", "river");
      expect(result).to.equal(false);
    });

    it("returns false if either parameter is an empty string", function () {
      expect(code.shareFirstLetter("", "foo")).to.equal(false);
      expect(code.shareFirstLetter("foo", "")).to.equal(false);
      expect(code.shareFirstLetter("", "")).to.equal(false);
    });
  });
});

describe("getFirstLast", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.getFirstLast).to.be.a("function");
    });
    it("returns an array of length 2", function () {
      const result = code.getFirstLast(["a", "b", "c", "x", "y", "z"]);
      expect(result).to.have.lengthOf(2);
    });
  });
  describe("returns the correct output", function () {
    it("returns an array of the first and last elements", function () {
      const result = code.getFirstLast(["a", "b", "c", "x", "y", "z"]);
      expect(result).to.eql(["a", "z"]);
    });
  });
});

describe("shareLastDigit", function () {
  it("is a function", function () {
    expect(code.shareLastDigit).to.be.a("function");
  });

  it("returns a boolean", function () {
    const result = code.shareLastDigit(15, 43);
    expect(result).to.be.a("boolean");
  });

  it("returns true when two numbers have the same last digit", function () {
    const result = code.shareLastDigit(43, 183);
    expect(result).to.equal(true);
  });

  it("returns false when two numbers do not have the same last digit", function () {
    const result = code.shareLastDigit(43, 182);
    expect(result).to.equal(false);
  });
});
//#endregion Section 2
