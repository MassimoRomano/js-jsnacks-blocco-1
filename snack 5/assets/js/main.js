/* let numeri = []


for(let i = 0 ; i < 6 ; i++){
    let userNumb = prompt ('Inserisci un numero');

    if(userNumb % 2 !== 0){
        numeri.push(Number(userNumb));
    }
}

console.log('Numeri dispari', numeri); */


//cycle while


let numeri = [];
let contatore = 0;

while (contatore < 6) {
    let userNumb = prompt("Inserisci un numero:");
    if (userNumb % 2 !== 0) { 
        numeri.push(userNumb); 
    }
    contatore++;
}


console.log("Numeri dispari inseriti:", numeri);