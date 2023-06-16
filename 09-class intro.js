//class=a blueprint for creating objects
 // define what properties and methods the have use a constructor for unique properties

 class Player{
    //properties
    score=0;
    //function
    pause(){
        console.log("You Paused the game");
          }
    exit(){
        console.log("You exited the game");
    }
 }

 let player1=new Player();
 let player2=new Player();
player1.score+=1;
 console.log(player1.score);
 console.log(player2.score);
 player1.pause();
 player2.exit();