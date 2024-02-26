/* let somma = 0; 

let userNumber = prompt (' Inserisci un numero di 4 cifre');

for (let i = 0; i < userNumber.length; i++) {

    let element = userNumber[i];

    element = Number(element);
    
    somma += element;
    
}

console.log("La somma delle cifre di", userNumber, "è:", somma); */


//cycle while

let somma = 0;
let userNumber = prompt('Inserisci un numero di 4 cifre:');

let i = 0;
while (i < userNumber.length) {
    let cifra = Number(userNumber[i]);
    somma += cifra;
    i++;
}

console.log("La somma delle cifre di", userNumber, "è:", somma);