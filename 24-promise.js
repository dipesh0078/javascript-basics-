//promise = object that encapsulates the result of an asynchrous operation
//          let asynchronous methods return values like synchronous mthods
//             "I promise to return something in the future"

//          the STATE is 'pending' then: 'fulfilled' or 'rejected'
//           the result is what can be returned
//           2 parts producing & consuming
const promise= new Promise((resolve,reject)=>{
    let fileLoaded=true;
    if(fileLoaded)
   {
    resolve("File Loaded");
   }
   else
   {
    reject('File not loaded');
   }
});


promise.then((value)=>console.log(value));
promise.catch((error)=>console.log(error));

const promise1=new Promise(resolve=>{
    setTimeout(resolve,5000);
});

promise1.then(()=>console.log("Thanks For waiting!"));


