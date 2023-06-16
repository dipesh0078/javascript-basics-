const store=new Map([
    ['shirt',20],
    ['coat',300],
    ['jeans',40],
    ['cap',20]
]);

console.log(store.get('shirt'));
//return the value of the provided element

store.set("mask",5);
//to add new set of elements 
console.log(store);

store.delete('cap');
//delete a pairs of data

console.log(store.size);
 console.log(store.has('belt'));
 //to check if the class contain the provided data and return boolean value
 