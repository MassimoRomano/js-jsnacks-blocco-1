// ask to user first word
var firstWord = prompt("Inserisci la prima parola:");
// ask to user second word
var secondWord = prompt("Inserisci la seconda parola:");

console.log("firstWord, secondWord");

//identifies the longest word
var lenghtFirst = firstWord.length
var lenghtSecond = secondWord.length

console.log("lenghtFirst,lenghtSecond");


// Prints the shortest and longest word
if (lenghtFirst < lenghtSecond) {
    console.log("La parola più corta è: " + firstWord);
    console.log("La parola più lunga è: " + secondWord);
} else if (lenghtSecond < lenghtFirst) {
    console.log("La parola più corta è: " + secondWord);
    console.log("La parola più lunga è: " + firstWord);
} else {
    console.log("Le parole hanno la stessa lunghezza.");
}