// Before you begin coding, be sure that you:
// a. Cleaned up the coffee_data.js file
// b. Connect the coffee_data.js file to this index.js file.


const coffeeMenu = require("./coffee_data.js");


// Prompt 2:
// Print an array of all the drinks.
const allDrinks = (drink) => {
    return drink.name;
}
const drinkNames = coffeeMenu.map(allDrinks);
console.table(drinkNames);



// Prompt 3
// Print an array of drinks that cost 5 and under.
const findCheapDrinks = (drink) => {
    return drink.price <= 5;
}
const cheapDrinks = coffeeMenu.filter(findCheapDrinks);
console.table(cheapDrinks);



// Prompt 4
// Print an array of drinks that are priced at an even number.
const findEvenNumber = (drink) => {
    return (drink.price % 2 === 0);
}
const evenPricedDrink = coffeeMenu.filter(findEvenNumber);
console.table(evenPricedDrink);



// Prompt 5
// Print the total if you were to order one of every drink.
const getPrices = (drink) => {
    return drink.price;
}

const findMenuTotal = (accumulator, currentValue) => {
    return accumulator + currentValue;
}

const menuPrices = coffeeMenu.map(getPrices);
const menuTotal = menuPrices.reduce(findMenuTotal);
console.log(menuTotal);



// Prompt 6
// Print an array with all the drinks that are seasonal.
const findSeasonal = (drink) => {
    return drink.seasonal;
}
const seasonalDrinks = coffeeMenu.filter(findSeasonal);
console.table(seasonalDrinks);



// Prompt 7
// Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans"

const addPhrase = (drink) => {
    console.log(drink.name + " with imported beans");
}
seasonalDrinks.forEach(addPhrase);