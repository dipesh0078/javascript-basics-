//this =reference to a particular object
//      the object depends on the immediate context

const car={
    model:'Mustang',
    color:"red",
    year:2023,
         
    drive: function(){
        console.log("You Drive the car "+ this.model);//acces the value of a vaiable present in the object
    },
    brake :function(){
        console.log("Brake Applied");
    }
}

console.log(car.model);
car.drive();  
car.brake();

