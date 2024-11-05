{
    //Union Types
    // type FrontEndDeveloper = "Fakibaaz" | "Junior Developer";
    // type FullStackDeveloper = "FrontEnd" | "FullStack";

    // type Developer = FrontEndDeveloper | FullStackDeveloper;

    // const newDeveloper : FrontEndDeveloper = "Junior Developer";


    // type User = {
    //     name : string;
    //     age : number;
    //     gender : "Male" | "Female";
    //     bloodGroup : "O+" | "A+" | "AB+";
    // }


    // const user1 : User = {
    //     name : "Sojib",
    //     age : 22,
    //     gender : "Male",
    //     bloodGroup : "O+",
    // }

    type FrontEndDeveloper = {
        skills : string[];
        designation1 : "Front End Developer";
    }

    type BackEndDeveloper = {
        skills : string[];
        designation2 : "Back End Developer";
    }

    type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper

    const fullStackDeveloper : FullStackDeveloper = {
        skills : ["HTML" , "CSS" , "JS" , "Express"],
        designation1 : "Front End Developer",
        designation2 : "Back End Developer",
    }

}