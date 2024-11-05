{
    //Mapped type

    const arrOfNumbers : number[] = [2, 3, 4]; 
    // const arrOfStrings : string[] = ["2" , "3" , "4"];
    const arrOfStrings : string[] = arrOfNumbers.map((number :  number) : string => number.toString())
    // console.log(arrOfStrings);

    type AreaNumber = {
        height : number;
        width : number;
    }

    // type AriaString = {
    //     height : string;
    //     width : string;
    // }

    type AreaString<T> = {
        [key in keyof T] : T[key];
    }


    //Lookup type
    type Height = AreaNumber["height"];

    const area : AreaString<{height : number; width : number}> = {
        height : 50 ,
        width : 100,
    }
}