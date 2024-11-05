{
    //Generic types
    type GenericType<T> = Array<T>;


    const numbers: number[] = [3, 4, 5];
    const numbers2: Array<number> = [3, 4, 5];
    const numbers3: GenericType<number> = [3, 4, 5];

    const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
    const mentors2: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
    const mentors3: GenericType<string> = ["Mr. X", "Mr. Y", "Mr. Z"];


    type User = {
        name : string;
        age : number;
    }

    const users: GenericType<User> = [
        {
            name: "Sojib",
            age: 22,
        },
        {
            name: "Mahin",
            age: 21,
        },
        {
            name: "Sakib",
            age: 21,
        },
    ]



    //generic tuple
    type GenericTuple<x, y> = [x, y];
    const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];
    const userWithId: GenericTuple<number, { name: string; email: string }> = [1, { name: "sojib", email: "sojibhossain.cse@gmail.com" }]
}