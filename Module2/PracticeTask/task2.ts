{
//### Task 2: Functions, Optional, and Literal Types

// **Objective**: Create a function with parameters and an optional literal type.

// **Instructions**:

// - Define a function that takes:
//   - `name` (string)
//   - `age` (number)
//   - `role` (optional, with type `'admin' | 'user' | 'guest'`)
// - The function should log these values or perform a basic action.


type RandomFunc = (name : string , age : number , role ?: 'admin' | 'user' | 'guest') => void;

const randomFunc : RandomFunc = (name , age , role = "guest") => {
    console.log(name , age , role);
}

randomFunc("Sojib" , 22 , "user")
}