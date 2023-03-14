const {Pet, Dog, Cat} = require('./index');

describe('Pet', () => {
    it('should create a new Pet object', () => {
        const pet1 = new Pet('Spot', 3);
        expect(pet1.name).toBe('Spot');
        expect(pet1.age).toBe(3);
    });
});

describe('Dog', () => {
    it('should create a new Dog object', () => {
        const dog1 = new Dog('Spot', 3, 'Pug');
        expect(dog1.name).toBe('Spot');
        expect(dog1.age).toBe(3);
        expect(dog1.breed).toBe('Pug');
    });
});

describe('Cat', () => {
    it('should create a new Cat object', () => {
        const cat1 = new Cat('Spot', 3, 'Black');
        expect(cat1.name).toBe('Spot');
        expect(cat1.age).toBe(3);
        expect(cat1.furColor).toBe('Black');
    });
});