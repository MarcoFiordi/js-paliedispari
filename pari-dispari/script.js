'use strict'
// chiedo all'utente di scegliere pari o dispari
// chiedo all'utente di inserire un numero da 1 a 5
// genero un numero casuale per il computer tra 1 e 5 usando una funzione
// sommo il numero dell'utente a quello del computer
// creo una funzione per capire se la somma è pari o dispari
// confronto il risultato con la scelta dell'utente

// se la scelta dell'utente è corretta:
// stampo "hai vinto"
// altrimenti:
// stampo "ha vinto il computer"

const scelta = prompt("scegli pari o dispari").toLowerCase();
const numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));

if (scelta !== 'pari' && scelta !== 'dispari') {
    console.log('Scelta non valida');
} else if (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {
    console.log('Numero non valido')
}

else {
    console.log(scelta);
    console.log(numeroUtente);



    const numeroComputer = generaNumeroRandom();
    console.log(numeroComputer);
    const somma = numeroUtente + numeroComputer;
    console.log(somma);

    if (isPari(somma)) {
    if (scelta === "pari") {
        console.log("Hai vinto");
    } else {
        console.log("Ha vinto il computer");
    }
} else {
    if (scelta === "dispari") {
        console.log("Hai vinto");
    } else {
        console.log("Ha vinto il computer");
    }
}


}


