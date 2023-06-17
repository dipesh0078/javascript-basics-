//object as an argument

class Car{
constructor(model,year,color)
{
    this.model=model;
    this.year=year;
    this.color=color;
}
}

const car1=new Car("Mustang",2023,"red");
const car2=new Car("Corvette",2024,"blue");
const car3=new Car("Lambo",2022,"yellow");


displayInfo(car1);
displayInfo(car2);
displayInfo(car3);
change(car1,2001);//changing car1 model number
displayInfo(car1);
function displayInfo(car)
{
     console.log(car.model);
     console.log(car.year);
     console.log(car.color);
}

function change(car,year){
  car.model=year;
}