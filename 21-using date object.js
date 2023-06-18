// The date object is used to work with date and time


setInterval(time,1000);
function time(){
    let clock= new Date();
    clock=clock.toLocaleString();
    document.getElementById("myLabel").innerHTML=clock;
}

