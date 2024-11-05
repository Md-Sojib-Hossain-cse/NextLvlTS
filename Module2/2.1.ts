{
    //Type Assertion
    let anything : any;

    anything = "Something rakhlam";

    (anything as string)


    const kgToGram = (value : string | number) : string | number | undefined => {
        if(typeof value === "string"){
            const intValue = parseFloat(value);
            const result = intValue * 1000;
            return `Converted Value is : ${result}`;
        }
        else if(typeof value === "number"){
            const result = value * 1000;
            return result;
        }
    }

    const result = kgToGram(45) as number;
    const result2 = kgToGram("40") as string;
    const result3 = kgToGram("fdkalfe") as undefined;
    console.log(result , result2 , result3);



    type CustomError = {
        message : string;
    }


    try{
    }
    catch(error){
        console.log((error as CustomError).message);
    }
    //
}