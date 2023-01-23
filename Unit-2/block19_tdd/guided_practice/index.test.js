const { reverseString, generateRandomPhoneNumber } = require('./index');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('reverseString reverses a string', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('reverseString reverses a string with uppercase letters', () => {
    expect(reverseString('HeLLo')).toEqual('oLLeH');
});

test('reverseString reverses a string with special characters', () => {
    expect(reverseString('he!ll$o')).toEqual('o$ll!eh');
});

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
