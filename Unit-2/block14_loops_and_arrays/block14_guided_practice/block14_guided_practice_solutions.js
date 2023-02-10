// Guided Practice 1 Solution

// Using array methods, transform 
//
// ["Honda", "Toyota", "Ford", "Subaru"];
//
// to
//
// ["Hyundai", "Toyota", "Mercedes", "Ford", "Audi"];


// Possible Solution 1:

const cars = ["Honda", "Toyota", "Ford", "Subaru"];
cars.pop();
cars.push("Subaru");
cars.shift();
cars.unshift("Hyundai");
cars.splice(2,0, "Mercedes");
console.log(cars);

// Possible Solution 2:

const cars2 = ["Honda", "Toyota", "Ford", "Subaru"];
cars2.pop();
cars2.pop();
cars2.push("Mercedes", "Ford", "Audi");
cars2.shift();
cars2.unshift("Hyundai");
console.log(cars2)



// Guided Practice 2 Solution

const sentence = "There once was a donkey named Eeyore."
let counter = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "e") {
        counter++
    }
}

console.log(counter)