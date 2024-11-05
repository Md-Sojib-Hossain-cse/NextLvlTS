{
    //Utility Types

    //Pick 
    type Person = {
        name : string;
        age : number;
        email ?: string;
        contactNo : string;
    }

    //Pick
    type NameAge = Pick<Person , "name" | "age">;

    //Omit
    type ContactInfo = Omit<Person , "name" | "age">;

    //Required
    type PersonRequired = Required<Person>;

    //Partial
    type PersonPartial = Partial<Person>;

    //ReadOnly
    type PersonReadOnly = Readonly<Person>;

    //Record
    // type MyObj = {
    //     a : string;
    //     b : string;
    // }

    type MyObj = Record<string , string>

    const myObj : MyObj = {
        a : "aa",
        b : "bb",
        c : "cc",
    }
}