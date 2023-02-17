// Block 16 Workshop Solution

// Prompt 1, File should be appropriately named.

// Prompt 2, JavaScript Object is properly formatted with the correct information.
const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    eyeColor: "brown",
    favoriteFlavors: 32,
    cupSize: "waffle cone",
    favoriteStore: "Target",
    firstVisit: false,
}

// Prompt 3, customer object updates the following properties.
customer.email = "Jak3Smith1992@gmail.com";
customer.phone = 3195551234;
customer.cupSize = "medium";
customer.favoriteFlavors = ["coffee", "strawberry", "matcha"];

// Prompt 4, customer object deletes the following properties.
delete customer.eyeColor;
delete customer.favoriteStore;

// Prompt 5, customer object adds the following properties.
customer["toppings"] = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer["futureFlavors"] = "mango";
customer["todaysPurchaseCost"] = 5.32;

// Prompt 6, customer keys are printed in a single array.
console.log(Object.keys(customer));

