{
    //interface - generic

    interface Developer<T , X = null> {
        name : string;
        computer : {
            brand : string;
            model : string;
            releaseYear : number;
        },
        smartWatch : T;
        bike ?: X;
    }

    interface EmilabWatch{
        brand : string;
        model : string;
        display : string;
    }

    interface AppleWatch {
        brand : string;
        model : string;
        heartRate : boolean;
        sleepTrack : boolean;
    }

    interface YamahaBike {
        model : string;
        cc : number;
    }

    const richDeveloper : Developer<EmilabWatch> = {
        name : "Borolok Manush",
        computer : {
            brand : "Hp",
            model : "Elitebook 840 G5",
            releaseYear : 2016, 
        },
        smartWatch : {
            brand : "Emilab",
            model : "kw66",
            display : "Odled",
        }
    }

    const poorDeveloper : Developer<AppleWatch , YamahaBike> = {
        name : "Gorib Manush",
        computer : {
            brand : "Macbook",
            model : "A1",
            releaseYear : 2022, 
        },
        smartWatch : {
            brand : "Apple Watch",
            model : "Ultra",
            heartRate : true,
            sleepTrack : true,
        },
        bike : {
            model : "Yamaha",
            cc : 100,
        }
    }
}