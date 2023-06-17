//error = object with a description of something
//         went wrong
/* can't open a file
 lose  connection
user tyes incorrect input
TypeError   */
//throw = executes a user-defined error


try{

let x=window.prompt("Enter a #");
x=Number(x);
if(isNaN(x))
{
    throw("That is not a number");
}
 if(x=="")
 {
    throw("That is empty");
 }
console.log(`${x} is a number`);
}
catch(error){
console.log(error);
}

finally{
    console.log("This is always executes");
}

