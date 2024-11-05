{
    //function with generics

    const createArray = (param : string) : string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param : T) : T[] => {
        return [param]
    }

    type User = {id : number ; name : string};

    const result1 = createArray("Bangladesh");
    const resultGeneric = createArrayWithGeneric<boolean>(true);
    const resultGeneric2 = createArrayWithGeneric<number>(45);
    const resultGeneric23 = createArrayWithGeneric<User>({id : 1 , name : "Sojib"});


    //generic tuple
    const createGenericWithTuple = <T, Q>(param1 : T , param2 : Q) : [T , Q] => {
        return [param1 , param2]
    }

    const res1 = createGenericWithTuple<string , number>("Sojib" , 22);
    const res2 = createGenericWithTuple<string , {age : number}>("Arif" , {age : 22});




    const assignCourseToStudent = <T>(student : T) => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course
        }
    }

    const response1 = assignCourseToStudent({name : "Sojib" , email : "a@gamil.com"})
}