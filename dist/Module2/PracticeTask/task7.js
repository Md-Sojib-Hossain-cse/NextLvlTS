"use strict";
{
    // ### Task 7: Type Assertion and Narrowing
    // **Objective**: Write a function that behaves differently based on the input type.
    // **Instructions**:
    // - Create a function that accepts a parameter of type `string | number`.
    // - The function should:
    // - Return the length if the input is a string.
    // - Return the square if the input is a number.
    const lengthOrSquare = (value) => {
        if (typeof value === "string") {
            return value.length;
        }
        else if (typeof value === "number") {
            return value * value;
        }
        else {
            return 0;
        }
    };
    console.log(lengthOrSquare("kire vai"));
    console.log(lengthOrSquare(5));
}
