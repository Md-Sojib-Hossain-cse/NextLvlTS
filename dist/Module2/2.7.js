"use strict";
{
    const owner = "car";
    const user = {
        name: "sojib",
        age: 22,
        address: "sonargaon",
    };
    function getPropertyValue(obj, key) {
        return obj[key];
    }
    getPropertyValue(user, "name");
    // user["age"]; //22
}
