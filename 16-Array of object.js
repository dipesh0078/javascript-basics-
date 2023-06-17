//array of obejct

class Car{
constructor(model,year,color)
{
    this.model=model;
    this.year=year;
    this.color=color;
}
drive(){
    console.log(`You drive the ${this.model}.`);
}
}

const car1=new Car("Mustang",2023,"red");
const car2=new Car("Corvette",2024,"blue");
const car3=new Car("Lambo",2022,"yellow");



const cars=[car1,car2,car3];//creating array of object
console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);
//cars[1].drive();
//cars[0].drive();
//cars[2].drive();


function lopper(array)
{
    let length=array.length;
    for(let i=0;i<length;i++)
    {
        array[i].drive();
    }
}

lopper(cars);