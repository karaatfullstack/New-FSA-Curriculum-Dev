const { getCountries } = require("./script");

describe("getCountries", () => {
    test("does getCountries exist", () => {
        expect(getCountries).toBeDefined();
    });
});