// 1. Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
//
// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
// link : https://edabit.com/challenge/erFxBbqzZPSegMwnc

const changeEnough = (change, amountDue) => {
    change[0] *= 0.25;
    change[1] *= 0.10;
    change[2] *= 0.05;
    change[3] *= 0.01;
return change.reduce((acc, val) => acc + val, 0) >= amountDue;

}
console.log(changeEnough([2,2,1,1],5.80))

// 2. Write a function that converts an object into an array of keys and values.
function objectToArray(obj) {
    return Object.keys(obj).map((key) => [key, obj[key]]);
}
console.log(objectToArray({1:2, 3:4,5:6}))