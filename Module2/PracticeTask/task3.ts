{
// ### Task 3: Object Types, Type Alias, & Literal Types

// **Objective**: Define a structured `Person` object using Type Aliases.

// **Instructions**:

// - Define a `Person` type alias with properties for `Name`, `Address`, `Hair and Eye Color`, `Income and Expense`, `Hobbies`, `Family Members`, `Job`, `Skills`, `Marital Status`, and `Friends`.


type Person = {
    Name : string;
    Address : string;
    HairAndEyeColor : string;
    Income : number;
    Expense : number;
    Hobbies : string[];
    FamilyMembers : {
        father : boolean;
        mother : boolean;
        brother : number;
        sister : number;
    };
    Job : boolean;
    skills : string[];
    MaritalStatus : "UnMarried" | "Married";
    Friends : string[];
}

const person : Person = {
    Name : "Sojib",
    Address : "Cumilla , Bangladesh",
    HairAndEyeColor : "Black",
    Income : 0,
    Expense : 2000,
    Hobbies : ["Reading Books" , "Traveling" , "Watching Movie"],
    FamilyMembers : {
        father : true,
        mother : true,
        brother : 0,
        sister : 1,
    },
    Job : false,
    skills : ["HTML" , "CSS" , "JS" , "React" , "Express" , "MongoDB" , "Firebase"],
    MaritalStatus : "UnMarried",
    Friends : ["Mahin" , "Sakib"]
}
}