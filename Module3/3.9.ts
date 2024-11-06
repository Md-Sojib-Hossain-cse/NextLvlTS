{
    //abstraction  --> interface & abstract

    //idea
    interface Vehicle1 {
        startEngine() : void;
        stopEngine() : void;
        move() : void;
    }


    //read implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log("Start the car Engine");
        }
        stopEngine(): void {
            console.log("Stopping Car Engine");
        }
        move(): void {
            console.log("Moving the car")
        }
        test(): void {
            console.log("Im just testing");
        }
    }

    const toyotaCar = new Car1();

    toyotaCar.startEngine();




    //abstract class
    abstract class Car2 {
        abstract startEngine(): void ;
        abstract stopEngine(): void ;
        abstract move(): void ;
        test(): void {
            console.log("Im just testing");
        };
    }

    class ToyotaCar extends Car2{
        startEngine(): void {
            console.log("Started Engine");
        }
        stopEngine(): void {
            console.log("Stopped Engine");
        }
        move(): void {
            console.log("Car is moving");
        }
    }

    const hondaCar = new ToyotaCar();
    hondaCar.startEngine()
}