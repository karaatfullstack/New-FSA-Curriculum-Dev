const { generateRandomPhoneNumber } = require('./index');

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