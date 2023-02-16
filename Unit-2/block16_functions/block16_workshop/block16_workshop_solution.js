const timmy = {
	prescription: "acetaminophen",
	price: 25,
	refills: 3,
	subscription: false,
	coupon: true
};

const sarah = {
	prescription: "diphenhydramine",
	price: 40,
	refills: 1,
	subscription: true,
	coupon: false
};

const rocky = {
	prescription: "phenylephrine",
	price: 30,
	refills: 5,
	subscription: true,
	coupon: true
};


// Function to find the initial cost of all refills.
function totalCost(price, refills) {
    return price * refills;
}
// console.log(totalCost(sarah.price, sarah.refills));
const totalCostWithoutDiscounts = totalCost(rocky.price, rocky.refills)


// Apply the subscription discount of 25% to the total cost of the refills.
function withDiscount(totalCostWithoutDiscounts, subscription) {
    if (subscription) {
        return totalCostWithoutDiscounts * 0.75;
    } else {
        return totalCostWithoutDiscounts;
    }
}
// console.log(withDiscount(totalCostWithoutDiscounts, sarah.subscription))
const costAfterSubscription = withDiscount(totalCostWithoutDiscounts, rocky.subscription)


// Apply the $10 coupon to the cost after the subscription discount.
function withCoupon(costAfterSubscription, coupon) {
    if (coupon) {
        return costAfterSubscription - 10;
    } else {
        return costAfterSubscription;
    }
}
// console.log(withCoupon(costAfterSubscription, timmy.coupon))
const finalTotal = withCoupon(costAfterSubscription, rocky.coupon)


// Final return
const result = "Your grand total is $" + finalTotal;
console.log(result);
return result;


// timmy => 65
// sarah => 30
// rocky => 102.5