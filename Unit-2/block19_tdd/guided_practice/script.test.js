// This imports your code so we can test it!
const code = require("./script.js");

// Helpers to generate random arrays for test cases
// Don't worry about how this works for now :)
function generateRandomInteger(low = -50, high = 50) {
    return low + Math.floor(Math.random() * (high - low + 1));
}
function generateRandomNumberArray(low = -50, high = 50, n = 5) {
    return Array.from({ length: n }, () => generateRandomInteger(low, high));
}

// tests multiplyNumbers
describe("multiplyNumbers(a, b)", function () {
    describe("works with correct types", function () {
        test("is a function", function () {
            expect(typeof code.multiplyNumbers).toEqual("function");
        });
        test("returns a number", function () {
            const actual = code.multiplyNumbers(1, 2);
            expect(typeof actual).toEqual("number");
        });
    });

    describe("returns the correct output", function () {
        test("returns error when either parameter is not a number", function () {
            const actual = code.multiplyNumbers(1, "2");
            expect(actual).toEqual("error");
        });
        test("returns the product of two random numbers between -50 and 50", function () {
            const a = generateRandomInteger(-50, 50);
            const b = generateRandomInteger(-50, 50);
            const expected = a * b;
            const actual = code.multiplyNumbers(a, b);
            expect(actual).toEqual(expected);
        });
    });
});

// tests sumArray
describe("sumArray(nums)", function () {
    describe("works with correct types", function () {
        test("is a function", function () {
            expect(typeof code.sumArray).toEqual("function");
        });
        test("returns a number", function () {
            const actual = code.sumArray([1, 2]);
            expect(typeof actual).toEqual("number");
        });
    });

    describe("returns the correct output", function () {
        test("returns 0 when given an empty array", function () {
            const actual = code.sumArray([]);
            expect(actual).toEqual(0);
        });
        test("returns the sum of a random array of numbers between -50 and 50", function () {
            const nums = generateRandomNumberArray(-50, 50, 5);
            const expected = nums.reduce((a, b) => a + b, 0);
            const actual = code.sumArray(nums);
            expect(actual).toEqual(expected);
        });
    });
});

// tests findMax
describe("findMax(nums)", function () {
    describe("works with correct types", function () {
        test("is a function", function () {
            expect(typeof code.findMax).toEqual("function");
        });
        test("returns a number", function () {
            const actual = code.findMax([1, 2]);
            expect(typeof actual).toEqual("number");
        });
    });

    describe("returns the correct output", function () {
        test("returns -Infinity when given an empty array", function () {
            const actual = code.findMax([]);
            expect(actual).toEqual(-Infinity);
        });

        test("returns the max of a random array of numbers between -50 and 50", function () {
            const nums = generateRandomNumberArray(-50, 50, 5);
            const expected = Math.max(...nums);
            const actual = code.findMax(nums);
            expect(actual).toEqual(expected);
        });
    });
});

// tests isSongInPlaylist
describe("isSongInPlaylist(song, playlist)", function () {
    describe("works with correct types", function () {
        test("is a function", function () {
            expect(typeof code.isSongInPlaylist).toEqual("function");
        });
        test("returns a boolean", function () {
            const actual = code.isSongInPlaylist("song", ["song"]);
            expect(typeof actual).toEqual("boolean");
        });
    });

    describe("returns the correct output", function () {
        test("returns true when the song is in the playlist", function () {
            const song = "song";
            const playlist = ["song"];
            const actual = code.isSongInPlaylist(song, playlist);
            expect(actual).toEqual(true);
        });

        test("returns false when the song is not in the playlist", function () {
            const song = "song";
            const playlist = ["song2"];
            const actual = code.isSongInPlaylist(song, playlist);
            expect(actual).toEqual(false);
        });
    });
});

// tests makeBoard
describe("makeBoard(cols, rows)", function () {
    describe("works with correct types", function () {
        test("is a function", function () {
            expect(typeof code.makeBoard).toEqual("function");
        });
        test("returns an array", function () {
            const actual = code.makeBoard(3, 4);
            expect(Array.isArray(actual)).toEqual(true);
        });
    });

    describe("returns the correct output", function () {
        // generate and test 3 random boards with size [1, 5]
        for (let i = 0; i < 3; i++) {
            const cols = generateRandomInteger(1, 5);
            const rows = generateRandomInteger(1, 5);
            const expected = Array.from({ length: rows }, () => Array.from({ length: cols }, () => "-"));
            test(`returns a ${rows}x${cols} board`, function () {
                expect(code.makeBoard(cols, rows)).toEqual(expected);
            });
        }
    });
});
