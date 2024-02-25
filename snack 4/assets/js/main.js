// Invited list
const invitedList = ['Michele', 'Giuseppe', 'Antonio', 'Massimo'];

console.log(invitedList);

// Invited name
const invitedName = prompt("Inserisci il tuo nome:");

console.log(invitedName);

let invitedFound = false;

// Scroll through the guest list to see if the name is there
for(let i = 0 ; i < invitedList.length ; i++){
    if(invitedName === invitedList[i]){
        invitedFound = true ;
        break;
    }
}

if(invitedFound){
    console.log(alert('Benvenuto alla festa'));
} else {
    console.log(alert("VAI FUORI"));
}
