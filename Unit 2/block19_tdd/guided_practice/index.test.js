const reverseString = require('./index');

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