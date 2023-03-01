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