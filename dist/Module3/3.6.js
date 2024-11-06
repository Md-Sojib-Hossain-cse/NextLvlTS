"use strict";
{
    //Getter and setter
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        //Setter
        set deposit(amount) {
            this._balance = this._balance + amount;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        //Getter 
        get balance() {
            return this._balance;
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mr.Gorib", 100);
    goribManusherAccount.addDeposit(50); //function call korte hocche
    goribManusherAccount.addDeposit(80); //function call korte hocche
    goribManusherAccount.deposit = 50;
    goribManusherAccount.deposit = 80;
    // const myBalance = goribManusherAccount.getBalance(); //function call korte hocche
    // console.log(myBalance);
    const balance = goribManusherAccount.balance; //property er moto kore access kora jacche
    console.log(balance);
}
