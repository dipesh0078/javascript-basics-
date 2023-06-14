let prices=[5,12,14,11,2,4,6,8,7];
let total=prices.reduce(checkOut);
console.log("The total is $"+total);


function checkOut(total,element){
    return total+element;
}