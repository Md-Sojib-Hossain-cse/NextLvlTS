"use strict";
var _a, _b;
{
    //Ternary operator || Optional Chaining || nullish coalescing operator
    const age = 15;
    if (age >= 18) {
        // console.log("adult");
    }
    else {
        // console.log("Not adult");
    }
    const isAdult = age >= 18 ? "Adult" : "Not adult";
    // console.log(isAdult);
    //nullish coalescing operator 
    //null / undefined ---> decision making
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const user = {
        name: "sojib",
        address: {
            city: "Cumilla",
            road: "Nai",
            presentAddress: "Sonargaon"
        }
    };
    const myAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No permanent Address";
    console.log(myAddress);
}
