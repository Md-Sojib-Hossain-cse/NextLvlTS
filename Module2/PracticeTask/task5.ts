{
// **Objective**: Write a function that reverses a string.

// **Instructions**:

// - Write a function `reverseString` that:
// - Takes a single string argument.
// - Returns the string in reverse order.
// - **Example**:
// - Input: `"hello"`
// - Output: `"olleh"`


type ReverseString = (value : string) => string;

const reverseString : ReverseString = (value) => {
    const reversed = value.split("").reverse().join("");
    return reversed;
}

reverseString("hello");

}