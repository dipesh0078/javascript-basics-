//super =Refers to the parent class.
//        commonly used to invoke constructor of a parent class

class Animal{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}

class Rabbit extends Animal{
    constructor(name,age,runspeed)
    {
        super(name,age);
        this.runspeed=runspeed;
    }
}

class Fish extends Animal{
    constructor(name,age,runspeed)
    {
        super(name,age);
        this.runspeed=runspeed;
    }
}

class Hawk extends Animal{
    constructor(name,age,runspeed)
    {
        super(name,age);
        this.runspeed=runspeed;
    }
} 

let rabbit=new Rabbit('rabbit',2,30);
console.log(rabbit.name);