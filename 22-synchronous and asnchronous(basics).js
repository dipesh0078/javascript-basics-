// synchronous code = In an ordered sequence.
//                    Step-by-step linear instructions 
//                    (start now,finish now) wait until a synchronous task get completed


//asynchronous code= Out of sequence.
//                   Ex. access a database
//                   fetch a file
//                  Tasks that take time
//                  (start now,finish sometime later) 


//synchronous
console.log("START");
console.log("This step is synchronous ");
console.log("END");
//asynchrous
console.log("START");
setTimeout(()=>console.log("This step is asynchronous "),5000);
console.log("END");