"use strict";
{
    const reverseString = (value) => {
        const reversed = value.split("").reverse().join("");
        return reversed;
    };
    reverseString("hello");
}
