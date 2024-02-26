/* let somma = 0;

for (let i = 0; i < 10; i++) {
    let numero = +prompt("Scrivi un numero");
    somma += numero;
}

console.log("La somma dei tuoi numeri è: " + somma); */

let somma = 0;
let contatore = 0;

while (contatore < 10) {
    let numero = +prompt("Scrivi un numero");
    somma += numero;
    contatore++;
}

console.log("La somma dei tuoi numeri è: " + somma);