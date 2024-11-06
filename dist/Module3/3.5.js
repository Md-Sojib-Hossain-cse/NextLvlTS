"use strict";
{
    //access modifier
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    class StridentAccount extends BankAccount {
        test() {
            this._balance;
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mr.Gorib", 100);
    goribManusherAccount.addDeposit(40);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);
}
