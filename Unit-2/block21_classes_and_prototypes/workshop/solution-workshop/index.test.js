const { Car, ElectricCar } = require('./index');

describe('Car', () => {
    test('should create a Car object with the make Ford, model F-150, and year 2021', () => {
        const myTruck = new Car('Ford', 'F-150', 2021);

        expect(myTruck.make).toBe('Ford');
        expect(myTruck.model).toBe('F-150');
        expect(myTruck.year).toBe(2021);
    });

    test('should create a Car object with the make Ford, model F-150, and year 2021', () => {
        const myTruck = new Car('Ford', 'F-150', 2021);

        expect(myTruck.getDescription()).toBe('Ford F-150 (2021)');
    });
});

describe('ElectricCar', () => {
    test('should create an ElectricCar object with the make Tesla, model Model S, year 2020, and range 300', () => {
        const myTesla = new ElectricCar('Tesla', 'Model S', 2019, 300);

        expect(myTesla.make).toBe('Tesla');
        expect(myTesla.model).toBe('Model S');
        expect(myTesla.year).toBe(2019);
        expect(myTesla.range).toBe(300);
    });

    test('should create an ElectricCar object with the make Tesla, model Model S, year 2020, and range 300', () => {
        const myTesla = new ElectricCar('Tesla', 'Model S', 2019, 300);

        expect(myTesla.getDescription()).toBe('Tesla Model S (2019), 300 miles');
    });
});