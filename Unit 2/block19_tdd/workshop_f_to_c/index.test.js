const fahrenheitToCelsius = require('./index');

test('converts 32 degrees Fahrenheit to 0 degrees Celsius', () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
});

test('converts 212 degrees Fahrenheit to 100 degrees Celsius', () => {
    expect(fahrenheitToCelsius(212)).toBe(100);
});

test('converts -40 degrees Fahrenheit to -40 degrees Celsius', () => {
    expect(fahrenheitToCelsius(-40)).toBe(-40);
});
