const {calculateAge, canDrive, calculateCanDrive} = require('./index');

/* Testing the function calculateAge. It is testing that if the person is born in 1990, it should
return 32. */
test('calculateAge should return the age of a person', () => {
    expect(calculateAge(1990)).toBe(32);
});

/* This is a test case. It is testing the function canDrive. It is testing that if the person is 18 or
older, it should return true. */
test('canDrive should return true if the person is 18 or older', () => {
    expect(canDrive(18)).toBe(true);
});


// STRETCH GOAL
test('calculateCanDrive should return true if the person is 18 or older', () => {
    expect(calculateCanDrive(1990)).toBe(true);
});