"use strict";
{
    //OOP - class
    class Animal {
        // public species : string;
        // public sound : string;
        //parameter properties
        constructor(name, species, sound) {
            this.species = species;
            this.sound = sound;
            this.name = name;
            // this.species = species;
            // this.sound = sound;
        }
        makeSound() {
            console.log(`This ${this.name} says ${this.sound}.`);
        }
    }
    const dog = new Animal("Tiger", "dog", "ghew ghew");
    const cat = new Animal("Mini", "cat", "meaw  meaw");
    cat.makeSound();
}
