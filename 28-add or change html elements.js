//add and change html ellements;
//.innerHTML (vulnerable to XSS attacks)
//.textContent(more secure)


//const nameTag=document.createElement("h1");
//nameTag.textContent=window.prompt("Enter your Name");
//document.body.append(nameTag);


const myList=document.querySelector("#fruit");
const listItem=document.createElement('li');
listItem.textContent='mango';
//myList.prepend(listItem);
myList.insertBefore(listItem,myList.getElementsByTagName("li")[1]);