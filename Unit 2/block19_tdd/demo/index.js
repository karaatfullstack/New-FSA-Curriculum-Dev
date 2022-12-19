function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

const canDrive = (age) => age >= 18;

// STRETCH GOAL - function `calculateCanDrive` takes birth year, calculates age, and returns true if age is 18 or older
function calculateCanDrive(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age >= 18;
}

module.exports = {calculateAge, canDrive, calculateCanDrive};