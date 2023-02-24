/* Creating an object called animal with a method called eat. */
const animal = {
    eat: function() {
        console.log("nom nom nom");
    }
};

/* Creating an object called dog with a method called bark. */
const dog = {
    woof: function() {
        console.log("Woof!");
    }
};

/* Setting the prototype of dog to animal. */
dog.__proto__ = animal;

/* Calling the eat method from the animal object. */
dog.eat(); // Output: "nom nom nom"

// Define a base class for pets
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    birthday() {
        return `${this.name} is ${this.age} years old.`;
    }
}

// Define a subclass for dogs
class Dog extends Pet {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    bark() {
        return `${this.name} is barking!`;
    }
}

// Define a subclass for cats
class Cat extends Pet {
    constructor(name, age, furColor) {
        super(name, age);
        this.furColor = furColor;
    }

    meow() {
        return `${this.name} is meowing!`;
    }
}

// Create some instances of the classes
const pet1 = new Pet("Spot", 3);
console.log(pet1.eat()); // Output: "Spot is 3 years old."

const pet2 = new Dog("Rover", 2, "Labrador");
console.log(pet2.eat()); // Output: "Rover is 2 years old."
console.log(pet2.bark()); // Output: "Rover is barking!"

const pet3 = new Cat("Fluffy", 1, "white");
console.log(pet3.eat()); // Output: "Fluffy is 1 year old."
console.log(pet3.meow()); // Output: "Fluffy is meowing!"

// Check if the instances are instances of their respective classes
console.log(pet1 instanceof Pet); // Output: true
console.log(pet2 instanceof Dog); // Output: true
console.log(pet3 instanceof Cat); // Output: true
