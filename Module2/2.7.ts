{
    //generic constraints with keyof operator

    type Vehicle = {
        bike : string;
        car : string;
        ship : string;
    }

    type Owner = "bike" | "car" | "ship";

    type Owner2 = keyof Vehicle;


    const owner : Owner2 = "car";

    const user = {
        name : "sojib",
        age : 22,
        address : "sonargaon",
    }

    function getPropertyValue<X , Y extends keyof X>(obj : X , key : Y){
        return obj[key];
    }

    getPropertyValue(user , "name")



    // user["age"]; //22
}