//Learning function
//Normal function 
//Arrow function

function add (num1 : number , num2 : number = 10) : number{
    return num1 + num2;
}

const add2 = (num1 : number , num2 : number) : number => num1 + num2;


const poorUser = {
    name : "SOJIB",
    balance : 0,
    addBalance(balance : number) : number{
        return this.balance + balance
    }
}

const numbers : number[]= [3, 4, 5];
const total : number[] = numbers.map((num : number) : number => num+num)