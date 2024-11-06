{
    //type guard

    //typeof ---> type guard

    const add = (param1 : string | number , param2 : string | number):string | number => {
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    }

    console.log(add(2, 4));
    console.log(add("3", 4));


    //in guard
    type NormalUser = {
        name : string;
    }

    type AdminUser = {
        name : string;
        role : "admin";
    }

    const getUser = (user : NormalUser | AdminUser) : void => {
        if("role" in user){
            console.log(`I'm ${user.name} and my role is ${user.role}.`);
        }
        else{
            console.log(`I'm ${user.name} and my role is user.`);
        }
    }

    const normalUser : NormalUser = {
        name : "Sojib",
    }

    const adminUser : AdminUser = {
        name : "Ariful",
        role : "admin",
    }

    getUser(normalUser);
    getUser(adminUser);
}