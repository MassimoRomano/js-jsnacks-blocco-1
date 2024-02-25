//Invited list
let invitedList = ["Michele", "Giuseppe", "Antonio", "Massimo"];

console.log(invitedList);

//Invited name
let invitedName = prompt("Inserisci il tuo nome");

console.log(invitedName);


let invitedFound = false

//I scroll through the guest list to see if the name is there

for(let i = 0 ; i < invitedList.leght ; i++){
    if(invitedList[i] === invitedName){
    invitedFound = true ;
    break // close cycle for
    }
}

