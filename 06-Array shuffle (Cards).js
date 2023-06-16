let cards=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];


function shuffle(array){
    let currentIndex=array.length-1;
    while(currentIndex!=0)
    {
        let randomIndex=Math.floor(Math.random()*array.length);
        let temp=array[randomIndex];
        array[randomIndex]=array[currentIndex];
        array[currentIndex]=temp;
        currentIndex=currentIndex-1;
    }
    return array;
}
shuffle(cards);
cards.forEach(card=>console.log(card));