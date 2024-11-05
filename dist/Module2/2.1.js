"use strict";
{
    //Type Assertion
    let anything;
    anything = "Something rakhlam";
    anything;
    const kgToGram = (value) => {
        if (typeof value === "string") {
            const intValue = parseFloat(value);
            const result = intValue * 1000;
            return `Converted Value is : ${result}`;
        }
        else if (typeof value === "number") {
            const result = value * 1000;
            return result;
        }
    };
    const result = kgToGram(45);
    const result2 = kgToGram("40");
    const result3 = kgToGram("fdkalfe");
    console.log(result, result2, result3);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
