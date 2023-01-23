/* Creating an object called animal with a method called eat. */
const animal = {
    eat: function() {
        console.log("nom nom nom");
    }
};

/* Creating an object called dog with a method called bark. */
const dog = {
    bark: function() {
        console.log("Woof!");
    }
};

/* Setting the prototype of dog to animal. */
dog.__proto__ = animal;

/* Calling the eat method from the animal object. */
dog.eat(); // Output: "nom nom nom"