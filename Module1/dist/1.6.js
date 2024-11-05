"use strict";
//Learning function
//Normal function 
//Arrow function
function add(num1, num2 = 10) {
    return num1 + num2;
}
const add2 = (num1, num2) => num1 + num2;
const poorUser = {
    name: "SOJIB",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
const numbers = [3, 4, 5];
const total = numbers.map((num) => num + num);
