//get= binds an object property to a function
//      when that property is accessed
// property name and the getter cannot have same name so take propert name and put underscore(_)
// increses data security and can perform additional logic when ascessing property
// set = binds an objct property to a function
//           when that property is assigned a value
class Car{
  constructor(power)
  {
     this._gas=25;
    this._power=power;
  }
  get gas(){
    return `${this._gas}L (${this._gas/50*100}%)`;
  }
  get power()
  {
    return `${this._power}hp`; //this is read only and nt write able
  }
  set gas(value){
    if(value>50){
        value=50;
    }
    else if(value<0)
    {
        value=0;
    }

    this._gas=value;
  }
}

let car=new Car(400);
car.power=10000000;//protected (no change in property data)
console.log(car.power);

car.gas=40;
console.log(car.gas);