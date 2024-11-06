{
    //access modifier
    class BankAccount{
        public readonly id : number;
        public name : string;
        protected _balance : number;

        constructor(id : number, name : string , balance : number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        public addDeposit(amount : number){
            this._balance = this._balance + amount;
        }

        public getBalance(){
            return this._balance;
        }
    }

    class StridentAccount extends BankAccount{
        test(){
            this._balance;
        }
    }

    const goribManusherAccount = new BankAccount(111 , "Mr.Gorib" , 100);

    goribManusherAccount.addDeposit(40);

    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);
}