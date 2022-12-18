const animal = {
    eat: function() {
        console.log("nom nom nom");
    }
};

const dog = {
    bark: function() {
        console.log("Woof!");
    }
};

dog.__proto__ = animal;
dog.eat(); // Output: "nom nom nom"