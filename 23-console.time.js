//console.time() = Starts a timer you can use to
//                  track how long an operation takes
//                  Give each timer a unique name.


//start
console.time("Response time");
alert("Click The ok Button");
 setTimeout(()=>console.log("asynchrous is not tracked"),5000);
 //end
 console.timeEnd("Response time");
