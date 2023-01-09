/**
 * The Car function is a constructor function that creates a new object with properties make, model,
 * and year.
 * @param make - The make of the car (e.g. Honda)
 * @param model - The model of the car.
 * @param year - The year the car was made.
 */
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

/* Adding a method to the Car prototype. */
Car.prototype.getDescription = function() {
    return `${this.make} ${this.model} (${this.year})`;
};

/**
 * ElectricCar is a Car that has a range.
 * @param make - The make of the car.
 * @param model - The model of the car.
 * @param year - The year the car was made.
 * @param range - The range of the car in miles.
 */
function ElectricCar(make, model, year, range) {
    Car.call(this, make, model, year);
    this.range = range;
}

/* Setting the prototype of ElectricCar to be an object that inherits from Car.prototype. */
ElectricCar.prototype = Object.create(Car.prototype);

/* Setting the constructor property of the ElectricCar prototype to be the ElectricCar function. */
ElectricCar.prototype.constructor = ElectricCar;

/* Overriding the getDescription method of the Car prototype. */
ElectricCar.prototype.getDescription = function() {
    return `${this.make} ${this.model} (${this.year}), ${this.range} miles`;
};

/* Creating a new Car object with the make Ford, model F-150, and year 2021. */
export const myTruck = new Car("Ford", "F-150", 2021);

console.log(myTruck.getDescription());

/* Creating a new ElectricCar object with the make Tesla, model Model S, year 2020, and range 300. */
const myTesla = new ElectricCar("Tesla", "Model S", 2019, 300);

console.log(myTesla.getDescription());