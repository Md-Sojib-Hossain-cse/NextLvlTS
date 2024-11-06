"use strict";
{
    //type guard
    //typeof ---> type guard
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    console.log(add(2, 4));
    console.log(add("3", 4));
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`I'm ${user.name} and my role is ${user.role}.`);
        }
        else {
            console.log(`I'm ${user.name} and my role is user.`);
        }
    };
    const normalUser = {
        name: "Sojib",
    };
    const adminUser = {
        name: "Ariful",
        role: "admin",
    };
    getUser(normalUser);
    getUser(adminUser);
}
