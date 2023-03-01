const { generateRandomPhoneNumber } = require('./index');

describe('generateRandomPhoneNumber(a, b, c)', () => {
    describe('works with correct types', () => {
        test('generateRandomPhoneNumber function exists', () => {
            expect(generateRandomPhoneNumber).toBeDefined();
        });

        test('generateRandomPhoneNumber generates a random phone number', () => {
            expect(generateRandomPhoneNumber(3, 3, 4)).toMatch(/\(\d{3}\) \d{3}-\d{4}/);
        });

        test('generateRandomPhoneNumber generates two different phone numbers with the same parameters', () => {
            expect(generateRandomPhoneNumber(3, 3, 4)).not.toEqual(generateRandomPhoneNumber(3, 3, 4));
        });

        test('generateRandomPhoneNumber generates a random phone number with the correct number of digits', () => {
            expect(generateRandomPhoneNumber(3, 3, 4)).toMatch(/\(\d{3}\) \d{3}-\d{4}/);
        });
    });

    describe('errors with incorrect types', () => {
        test('generateRandomPhoneNumber throws an error if a is not a number', () => {
            expect(() => generateRandomPhoneNumber('a', 3, 4)).toThrow();
        });

        test('generateRandomPhoneNumber throws an error if b is not a number', () => {
            expect(() => generateRandomPhoneNumber(3, 'b', 4)).toThrow();
        });

        test('generateRandomPhoneNumber throws an error if c is not a number', () => {
            expect(() => generateRandomPhoneNumber(3, 3, 'c')).toThrow();
        });
    });

    describe('returns the correct ouput', () => {
        test('generateRandomPhoneNumber returns a string', () => {
            expect(typeof generateRandomPhoneNumber(3, 3, 4)).toBe('string');
        });

        test('generateRandomPhoneNumber returns a string with the correct format', () => {
            expect(generateRandomPhoneNumber(3, 3, 4)).toMatch(/\(\d{3}\) \d{3}-\d{4}/);
        });

        // generate three random phone numbers with the same parameters
        // and make sure they are all different
        test('generateRandomPhoneNumber generates three different phone numbers with the same parameters', () => {
            const phoneNumbers = [
                generateRandomPhoneNumber(3, 3, 4),
                generateRandomPhoneNumber(3, 3, 4),
                generateRandomPhoneNumber(3, 3, 4),
            ];
            expect(phoneNumbers[0]).not.toEqual(phoneNumbers[1]);
            expect(phoneNumbers[0]).not.toEqual(phoneNumbers[2]);
            expect(phoneNumbers[1]).not.toEqual(phoneNumbers[2]);
        });
    });
});