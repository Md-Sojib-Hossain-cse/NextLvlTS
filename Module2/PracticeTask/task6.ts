{
    // ### Task 6: Spread and Rest Operators, Destructuring

    // **Objective**: Write a function that uses the rest operator for variable-length arguments.

    // **Instructions**:

    // - Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.
    const total = (...numbers : number[]) : number =>{
        const sum = numbers.reduce((total : number , current : number) : number=>{ 
            return total + current } , 0);
        return sum;
    } 

    console.log(total(3, 5, 5 , 6, 7, 8));
}