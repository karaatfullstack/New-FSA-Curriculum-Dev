const garageSale = require("./guided_practice_data_solution");


// Prompt 3
// Print an array of all the item names in garagaeSale.
const printName = (item) => {
    return item.name;
}
console.log(garageSale.map(printName));



// Prompt 4
// Print an array of arrays of all the items with their prices.
// For example: [["blue sweater", 20], ["yellow raincoat", 20]];
const nameAndPrice = (item) => {
    return [item.name, item.price];
}
console.table(garageSale.map(nameAndPrice));



// Prompt 5
// Print an array of all the items that are less or equal to $50.
const underFifty = (item) => {
    return item.price <= 50;
}
const itemsUnderFifty = garageSale.filter(underFifty);
console.table(itemsUnderFifty)



// Prompt 6
// Print an array of all the items whose condition are "used."
const isBroken = (item) => {
    return item.condition === "used";
}
const brokenItems = garageSale.filter(isBroken);
console.table(brokenItems);



// Prompt 7
// Print all the prices in garageSale array into a new array.
const findPriceArray = (item) => {
    return item.price;
}
const priceArray = garageSale.map(findPriceArray);
console.log(priceArray);



// Prompt 8
// Print the total cost of the garageSale array.
const sumTotalCost = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
const totalPrice = priceArray.reduce(sumTotalCost);
console.log(totalPrice);



// Prompt 9
// Print the average price for the garage sale.
const numberOfItems = garageSale.length;
const averagePrice = totalPrice / numberOfItems;
console.log(averagePrice);