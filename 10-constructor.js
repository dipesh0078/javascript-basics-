//constructor =a special method of a class,
//              accepts argumments and assigns properties
 
class Student{
    constructor(name,age,gpa){
        this.name=name;
        this.age=age;
        this.gpa=gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1=new Student('Bob',34,3);
student1.study();
let age=student1.age;
console.log(age);
