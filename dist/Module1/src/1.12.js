"use strict";
{
    //nullable type
    const searchName = (value) => {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    // searchName(null);
    //unknown type
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(convertedSpeed);
        }
        else if (typeof value === "string") {
            const [stringValue, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(stringValue) * 1000) / 3600;
            console.log(convertedSpeed, unit);
        }
    };
    // getSpeedInMeterPerSecond(45);
    // getSpeedInMeterPerSecond("45 km/s");
    //never type
    const throwErr = (msg) => {
        throw new Error(msg);
    };
    throwErr("Error ho geya");
}
