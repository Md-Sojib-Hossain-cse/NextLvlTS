{
    //instance of guard
    class Animal {
        name : string;
        species : string;
        constructor ( name : string , species : string){
            this.name = name ;
            this.species = species;
        }

        makeSound(){
            console.log("Im making Sound")
        }
    }

    class Dog extends Animal{
        constructor(name : string,  species : string){
            super(name , species)
        }
        makeBark(){
            console.log("Im Barking")
        }
    }

    class Cat extends Animal{
        constructor(name : string,  species : string){
            super(name , species)
        }
        makeMeaw(){
            console.log("Im Meawing")
        }
    }

    const isDog = (animal : Animal) : boolean => {
        return animal instanceof Dog;
    }

    const isCat = (animal : Animal) : animal is Cat  => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal : Animal) => {
        if(animal instanceof Dog){
            animal.makeBark();
        }
        else if(isCat(animal)){
            animal.makeMeaw();
        }
        else{
            animal.makeSound();
        }
    }

    const dog = new Dog("Bagha" , "Dog");
    const cat = new Cat("Mini" , "Cat");

    getAnimal(dog);
    getAnimal(cat);
}