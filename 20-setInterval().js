//setInterval()= invokes a function repeatedly after a number of miliseconds
//               asynchronous function (doesn't pause execution)


let count=0;
let max=window.prompt("Count upto?");
max=Number(max);

const timeout=setInterval(countUp,1000);//storing id of setInterval method

console.log("random");//gets executed 
function countUp()
{
    count+=1;
    console.log(count);
    if(count>=max){
        clearInterval(timeout);// clearing the setInterval sing the clearInterval(passing id)
    }
}