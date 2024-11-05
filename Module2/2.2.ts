{
    //interface 

    type User1 = {
        name: string;
        age: number;
    }

    type UserWithRole = User1 & {
        role: string;
    }

    const userWithRole1: UserWithRole = {
        name: "Sojib",
        age: 22,
        role: "user",
    }

    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user1: User2 = {
        name: "Sojib",
        age: 22,
    }

    const userWithRole2: UserWithRole2 = {
        name: "Sojib",
        age: 22,
        role: "user",
    }


    interface UserWithBoth extends User1 {
        isBoth: boolean;
    }




    //js -> Object -> Array -> Function ---->All are Object
    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number;
    }

    const roll1: Roll2 = [2, 3, 4, 5];



    //function
    type Add1 = (num1: number, num2: number) => number;

    interface Add2 {
        (num1: number, num2: number): number;
    }

    const add: Add2 = (num1, num2) => num1 + num2;
}