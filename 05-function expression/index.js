let count=0;
document.getElementById("decreasebtn").onclick=function(){
    count=count-1;
    document.getElementById("myLabel").innerHTML=count;
}
document.getElementById("increasebtn").onclick=function(){
    count=count+1;
    document.getElementById("myLabel").innerHTML=count;
}