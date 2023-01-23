const {calculateAge, canDrive, calculateCanDrive} = require('./index');

test('calculateAge should return the age of a person', () => {
    expect(calculateAge(1990)).toBe(32);
});

test('canDrive should return true if the person is 18 or older', () => {
    expect(canDrive(18)).toBe(true);
});


// STRETCH GOAL
test('calculateCanDrive should return true if the person is 18 or older', () => {
    expect(calculateCanDrive(1990)).toBe(true);
});