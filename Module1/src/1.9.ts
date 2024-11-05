{
    //Type alias 

    type Student =
        {
            name: string;
            age: number;
            gender: string;
            contactNo ?: string;
            address: string;
        }

    const student: Student = {
        name: "Sojib",
        age: 22,
        gender: "Male",
        contactNo: "019000000000",
        address: "Dhaka , Bangladesh"
    }

    const student2: Student = {
        name: "Sojib",
        age: 22,
        gender: "Male",
        address: "Dhaka , Bangladesh"
    }

    type UserName = string;
    type IsAdmin = boolean;

    const name : UserName = "Sojib";
    const isAdmin : IsAdmin = true;


    type AddTwo = (num1 : number , num2 : number) => number;
    const add : AddTwo = (num1 , num2) => num1 + num2;


}