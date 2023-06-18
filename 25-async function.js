//async = makes a function return a Promise

async function  loadFile(){
   let fileLoaded=false;

   if(fileLoaded){
    return "File Loaded";
   }
   else{
    throw "file is Not Loaded";
   }
}

loadFile().then(value=>console.log(value));
loadFile().catch(error=>console.log(error));