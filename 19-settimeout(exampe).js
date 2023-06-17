// setTimeout()= invokes a function after a number of miliseconds
//                asynchronous function(does not pause execution)



let item='crytpocurrency';
let price=420.69;
let timer1=setTimeout(firstMessage,3000);
let timer2=setTimeout(secondMessage,6000);
let timer3=setTimeout(thirdMessage,9000);

function firstMessage(){
    alert("Buy this "+item+" for $"+price);
}

function secondMessage(){
    alert("This is not a scam!");
}

function thirdMessage(){
    alert("DO IT!!!");
}

document.getElementById("myButton").onclick=function(){
     clearTimeout(timer1);
     clearTimeout(timer2);
     clearTimeout(timer3);
     alert("THANKS FOR BUYING <3");
}