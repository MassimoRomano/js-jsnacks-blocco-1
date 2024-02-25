//ask the user to write two numbers
var firstNumber = prompt("Inserisci il primo numero")
var secondNumber = prompt("Inserisci il secondo numero")

console.log("firstNumber, secondNumber");


// Convert string in number
var convertFirst = Number(firstNumber);
var convertSecond = Number(secondNumber);


console.log("convertFirst,convertSecond");

// determines the largest number
if (convertFirst > convertSecond) {
    console.log("Il numero maggiore è: " + convertFirst);
} else if (convertSecond > convertFirst) {
    console.log("Il numero maggiore è: " + convertSecond);
} else {
    console.log("I numeri sono uguali.");
}
