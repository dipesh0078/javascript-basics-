//static= belongs to the class, not the objects 
//        properties: Useful for caches, fixed-configuration 
//        methods: useful for utility functions

class Car{
    static numberOfCars=0;

    constructor(model){

        this.model=model;
        Car.numberOfCars+=1;//access using class name
    }
    startRace(){
        console.log("3...2........1..........go");
    }
}

const car1=new Car("Mustang");
const car2=new Car("Toyota");
const car3=new Car("BMW");
car1.startRace();

console.log(Car.numberOfCars);//access using class name