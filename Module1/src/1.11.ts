{
    //Ternary operator || Optional Chaining || nullish coalescing operator

    const age : number = 15;

    if(age >= 18){
        // console.log("adult");
    }
    else{
        // console.log("Not adult");
    }

    const isAdult = age >= 18 ? "Adult" : "Not adult";
    // console.log(isAdult);

    //nullish coalescing operator 
    //null / undefined ---> decision making
    const isAuthenticated = null ;

    const result1 = isAuthenticated ?? "Guest";
    // console.log(result1);



    //Optional chaining
    type User = {
        name : string;
        address : {
            city : string;
            road : string;
            presentAddress : string;
            permanentAddress ?: string;
        }
    }

    const user : User = {
        name : "sojib",
        address : {
            city : "Cumilla",
            road : "Nai",
            presentAddress : "Sonargaon"
        }
    }

    const myAddress = user?.address?.permanentAddress ?? "No permanent Address";

    console.log(myAddress);
}