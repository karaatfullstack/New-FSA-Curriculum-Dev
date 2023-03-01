const code = require('./script.js');

const REPLACE_ME = "replace!!!!! me!!!!!!!";

// test function add(num1, num2)
describe('add', () => {
    describe('works with correct types', () => {
        test('is a function', () => {
            expect(typeof code.add).toEqual('function');
        });
        test('returns a number', () => {
            expect(typeof code.add(1, 2)).toEqual(REPLACE_ME);
        });

        describe('returns the correct sum for random numbers between -50 and 50', () => {
            test('returns the correct sum for random numbers between -50 and 50', () => {
                for (let i = 0; i < 100; i++) {
                    let num1 = Math.floor(Math.random() * 100) - 50;
                    let num2 = Math.floor(Math.random() * 100) - 50;
                    let expected = REPLACE_ME;
                    expect(code.add(num1, num2)).toEqual(expected);
                }
            });
        });
    });
});

// test function subtract(num1, num2)
describe('subtract', () => {
    describe('works with correct types', () => {
        test('is a function', () => {
            expect(typeof code.subtract).toEqual(REPLACE_ME);
        });
        test('returns a number', () => {
            expect(typeof code.subtract(1, 2)).toEqual(REPLACE_ME);
        });

        describe('returns the correct difference for random numbers between -50 and 50', () => {
            test('returns the correct difference for random numbers between -50 and 50', () => {
                for (let i = 0; i < 100; i++) {
                    let num1 = Math.floor(Math.random() * 100) - 50;
                    let num2 = Math.floor(Math.random() * 100) - 50;
                    const expected = REPLACE_ME;
                    expect(code.subtract(num1, num2)).toEqual(expected);
                }
            });
        });
    });
});

// test function greet(name)
describe('greet', () => {
    describe('works with correct types', () => {
        test('is a function', () => {
            expect(typeof code.greet).toEqual(REPLACE_ME);
        });
        test('returns a string', () => {
            expect(typeof code.greet('name')).toEqual(REPLACE_ME);
        });

        describe('returns the correct greeting for a given name', () => {
            test('returns the correct greeting for a given name', () => {
                expect(code.greet('your name')).toEqual(REPLACE_ME);
            });
        });

        describe('returns the correct greeting for no given name', () => {
            test('returns the correct greeting for no given name', () => {
                expect(code.greet()).toEqual('Hello!');
            });
        });

        // Test against an array of names
        const names = ["Mazhug", "Oodagh", "Ulmragha"];
        names.forEach((name) => {
            test(`returns the correct greeting for ${name}`, () => {
                expect(code.greet(name)).toEqual(`Hello, ${REPLACE_ME}!`);
            });
        });
    });
});

// test function sum(nums)
describe('sum', () => {
    describe('works with correct types', () => {
        it('is a function', () => {
            expect(typeof code.sum).toEqual(REPLACE_ME);
        });
        it('returns a number', () => {
            expect(typeof code.sum([1, 2])).toEqual(REPLACE_ME);
        });

        describe('returns the correct sum', () => {
            // Generate and test 3 arrays of 5 random numbers between -50 and 50
            for (let i = 0; i < 3; i++) {
                const test = [];
                for (let j = 0; j < 5; j++) {
                    test.push(Math.floor(Math.random() * 100) - 50);
                }
                it(`returns the correct sum for ${test}`, () => {
                    expect(code.sum(test)).toEqual(test.reduce((a, b) => a + b));
                });
            }
        });
    });
});

// --------------------------
//#region Section 2
// --------------------------

// test function isPositive(num)
describe('isPositive', () => {
    describe('works with correct types', () => {
        it('is a function', () => {
            expect(typeof code.isPositive).toEqual('function');
        });
        it('returns a boolean', () => {
            expect(typeof code.isPositive(1)).toEqual('boolean');
        });

        describe('returns the correct boolean', () => {
            it('returns the correct boolean for 0', () => {
                expect(code.isPositive(0)).toEqual(false);
            });
            it('returns the correct boolean for 1', () => {
                expect(code.isPositive(1)).toEqual(true);
            });
            it('returns the correct boolean for -1', () => {
                expect(code.isPositive(-1)).toEqual(false);
            });
            it('returns the correct boolean for 100', () => {
                expect(code.isPositive(100)).toEqual(true);
            });
            it('returns the correct boolean for -100', () => {
                expect(code.isPositive(-100)).toEqual(false);
            });
        });
    });
});

// test function getFirstLetter(str)
describe('getFirst', () => {
    describe('works with correct types', () => {
        it('is a function', () => {
            expect(typeof code.getFirst).toEqual('function');
        });
        it('returns a string', () => {
            expect(typeof code.getFirst('string')).toEqual('string');
        });

        describe('returns the correct first letter', () => {
            it('returns the correct first letter for "string"', () => {
                expect(code.getFirst('string')).toEqual('s');
            });
            it('returns the correct first letter for "a"', () => {
                expect(code.getFirst('a')).toEqual('a');
            });
            it('returns the correct first letter for ""', () => {
                expect(code.getFirst('')).toEqual('');
            });
        });
    });
});

// test function getLast(str)
describe('getLast', () => {
    describe('works with correct types', () => {
        it('is a function', () => {
            expect(typeof code.getLast).toEqual('function');
        });
        it('returns a string', () => {
            expect(typeof code.getLast('string')).toEqual('string');
        });

        describe('returns the correct last letter', () => {
            it('returns the correct last letter for "string"', () => {
                expect(code.getLast('string')).toEqual('g');
            });
            it('returns the correct last letter for "a"', () => {
                expect(code.getLast('a')).toEqual('a');
            });
            it('returns the correct last letter for ""', () => {
                expect(code.getLast('')).toEqual('');
            });
        });
    });
});

// test function findLeast(nums)
describe('findLeast', () => {
    describe('works with correct types', () => {
        test('is a function', () => {
            expect(typeof code.findLeast).toEqual('function');
        });
        test('returns a number', () => {
            expect(typeof code.findLeast([1, 2])).toEqual('number');
        });

        describe('returns the correct least number', () => {
            // Generate and test 3 arrays of 5 random numbers between -50 and 50
            for (let i = 0; i < 3; i++) {
                const t = [];
                for (let j = 0; j < 5; j++) {
                    t.push(Math.floor(Math.random() * 100) - 50);
                }
                test('returns the correct least number', () => {
                    expect(code.findLeast(t)).toEqual(t.reduce((a, b) => Math.min(a, b)));
                });
            }
        });
    });
});

// test function shareFirstLetter(str1, str2)
describe('shareFirstLetter', () => {
    describe('works with correct types', () => {
        test('is a function', () => {
            expect(typeof code.shareFirstLetter).toEqual('function');
        });
        test('returns a boolean', () => {
            expect(typeof code.shareFirstLetter('string', 'string')).toEqual('boolean');
        });

        describe('returns the correct boolean', () => {
            test('returns the correct boolean for "string", "string"', () => {
                expect(code.shareFirstLetter('string', 'string')).toEqual(true);
            });
            test('returns the correct boolean for "string", "string2"', () => {
                expect(code.shareFirstLetter('string', 'string2')).toEqual(true);
            });
            test('returns the correct boolean for "string", "2string"', () => {
                expect(code.shareFirstLetter('string', '2string')).toEqual(false);
            });
            test('returns the correct boolean for "string", ""', () => {
                expect(code.shareFirstLetter('string', '')).toEqual(false);
            });
            test('returns the correct boolean for "", "string"', () => {
                expect(code.shareFirstLetter('', 'string')).toEqual(false);
            });
            test('returns the correct boolean for "", ""', () => {
                expect(code.shareFirstLetter('', '')).toEqual(false);
            });
        });
    });
});

// test `getFirstLast(array)` returns a _new_ array that contains the first and last elements of the given array.
describe('getFirstLast', () => {
    describe('works with correct types', () => {
        test('is a function', () => {
            expect(typeof code.getFirstLast).toEqual('function');
        });
        test('returns an array', () => {
            expect(Array.isArray(code.getFirstLast([1, 2, 3]))).toEqual(true);
        });

        describe('returns the correct array', () => {
            test('returns the correct array for [1, 2, 3]', () => {
                expect(code.getFirstLast([1, 2, 3])).toEqual([1, 3]);
            });
            test('returns the correct array for [1, 2]', () => {
                expect(code.getFirstLast([1, 2])).toEqual([1, 2]);
            });
        });
    });
});


// test function shareLastDigit(num1, num2)
describe('shareLastDigit', () => {
    test('is a function', () => {
        expect(typeof code.shareLastDigit).toEqual('function');
    });
    test('returns a boolean', () => {
        expect(typeof code.shareLastDigit(1, 2)).toEqual('boolean');
    });

    describe('returns the correct boolean', () => {
        test('returns the correct boolean for 1, 2', () => {
            expect(code.shareLastDigit(1, 2)).toEqual(false);
        });
        test('returns true when two numbers have same last digit', () => {
            expect(code.shareLastDigit(12, 22)).toEqual(true);
        });
        test('returns false when two numbers have different last digits', () => {
            expect(code.shareLastDigit(12, 23)).toEqual(false);
        });

        // Generate and test 3 arrays of 5 random numbers between -50 and 50
        for (let i = 0; i < 3; i++) {
            const t = [];
            for (let j = 0; j < 5; j++) {
                t.push(Math.floor(Math.random() * 100) - 50);
            }
            test('returns the correct boolean', () => {
                expect(code.shareLastDigit(t[0], t[1])).toEqual(t[0] % 10 === t[1] % 10);
            });
        }
    });
});
//#endregion Section 2