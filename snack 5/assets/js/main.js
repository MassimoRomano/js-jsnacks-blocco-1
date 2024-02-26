let numeri = []


for(let i = 0 ; i < 6 ; i++){
    let userNumb = prompt ('Inserisci un numero');

    if(userNumb % 2 !== 0){
        numeri.push(Number(userNumb));
    }
}

console.log('Numeri dispari', numeri);