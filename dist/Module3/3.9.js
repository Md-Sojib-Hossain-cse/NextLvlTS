"use strict";
{
    //read implementation
    class Car1 {
        startEngine() {
            console.log("Start the car Engine");
        }
        stopEngine() {
            console.log("Stopping Car Engine");
        }
        move() {
            console.log("Moving the car");
        }
        test() {
            console.log("Im just testing");
        }
    }
    const toyotaCar = new Car1();
    toyotaCar.startEngine();
    //abstract class
    class Car2 {
        test() {
            console.log("Im just testing");
        }
        ;
    }
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log("Started Engine");
        }
        stopEngine() {
            console.log("Stopped Engine");
        }
        move() {
            console.log("Car is moving");
        }
    }
    const hondaCar = new ToyotaCar();
    hondaCar.startEngine();
}
