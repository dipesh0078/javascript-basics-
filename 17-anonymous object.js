//anonymous object= objects without a name
//                   Not directly referenced 
//                   Less syntax. No need for unique names

//its is done using array consisting decleration of object
// object are not directly acessed but can be accessed from the array providing the index value


class Card{
       constructor(value,suit)
       {
        this.value=value;
        this.suit=suit;
       }
}

let cards=[
    new Card("A","Hearts"),
    new Card("A","Spades"),
    new Card("A","Diamonds"),
    new Card("A","Clubs"),
    new Card("2","Hearts"),
    new Card("2","Spades"),
    new Card("2","Diamonds"),
    new Card("2","Clubs"),
];

console.log(cards[0].value+cards[0].suit);

cards.forEach(card=>console.log(card.value+" "+card.suit));