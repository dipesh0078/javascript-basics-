let age=[12,13,14,15,16,18,20,22,24,23,21];
let adult=age.filter(checkAge);
adult.forEach(print);
function checkAge(element){
    return element>=18;
}
function print(element){
    console.log(element);
}

