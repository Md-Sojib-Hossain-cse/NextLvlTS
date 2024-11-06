{
    //Getter and setter

    class BankAccount{
        public readonly id : number;
        public name : string;
        protected _balance : number;

        constructor(id : number, name : string , balance : number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        //Setter
        set deposit(amount : number){
            this._balance = this._balance + amount;
        }

        public addDeposit(amount : number){
            this._balance = this._balance + amount;
        }



        //Getter 
        get balance(){
            return this._balance;
        }

        // public getBalance(){
        //     return this._balance;
        // }
    }

    const goribManusherAccount = new BankAccount(111 , "Mr.Gorib" , 100);

    goribManusherAccount.addDeposit(50); //function call korte hocche
    goribManusherAccount.addDeposit(80); //function call korte hocche
    goribManusherAccount.deposit = 50;
    goribManusherAccount.deposit = 80;


    // const myBalance = goribManusherAccount.getBalance(); //function call korte hocche
    // console.log(myBalance);
    const balance = goribManusherAccount.balance; //property er moto kore access kora jacche
    console.log(balance);
}