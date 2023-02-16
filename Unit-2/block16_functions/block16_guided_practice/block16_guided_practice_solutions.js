// Function keyword syntax

const budget = 200;
const price1 = 140;
const price2 = 50;

// The price of the two gifts are added.
function sumOfGifts(gift1, gift2) {
    return gift1 + gift2;
}

// The price of the two gifts are stored in the variable giftTotal.
const giftTotal = sumOfGifts(price1, price2)

// The sales tax is added to the giftTotal.
function addTax(giftTotal) {
    return giftTotal + (giftTotal * 0.08);
}

// The price of the gifts including tax is stored in the variable giftsWithTax
const giftsWithTax = addTax(giftTotal);


// We compare our budget to the cost of the gifts with tax.
function holidayShopping(budget, giftsWithTax) {
    return budget > giftsWithTax;
}

// We invoke holidayShopping, allowing us to see if we have more budget than the cost of the gifts with tax.
holidayShopping(budget, giftsWithTax);




// Arrow Function Syntax:

// The price of the two gifts are added.
const sumOfGiftsArrow = (gift1, gift2) => gift1 + gift2;


// The price of the two gifts are stored in the variable giftTotal.
const giftTotalArrow = sumOfGiftsArrow(price1, price2)

// The sales tax is added to the giftTotal.
const addTaxArrow = (giftTotalArrow) => giftTotalArrow + (giftTotalArrow * 0.08);

// The price of the gifts including tax is stored in the variable giftsWithTax
const giftsWithTaxArrow = addTaxArrow(giftTotalArrow);


// We compare our budget to the cost of the gifts with tax.
const holidayShoppingArrow =(budget, giftsWithTaxArrow) => budget > giftsWithTaxArrow;


// We invoke holidayShopping, allowing us to see if we have more budget than the cost of the gifts with tax.
holidayShoppingArrow(budget, giftsWithTaxArrow);