'use strict'
// chiedo all'utente di inserire una parola

// creo una funzione che controlla se la parola è palindroma

// dentro la funzione:
//   creo una nuova stringa vuota per la parola invertita

//   ciclo la parola dalla fine all'inizio
//   ad ogni giro aggiungo la lettera alla parola invertita

//   confronto la parola originale con quella invertita

//   se sono uguali:
//       restituisco true
//   altrimenti:
//       restituisco false

// chiamo la funzione passando la parola dell'utente

// se la funzione restituisce true:
//   stampo "la parola è palindroma"
// altrimenti:
//   stampo "la parola NON è palindroma"

const parola = prompt('inserisci una parola');

function isPalindroma(parola) {
    parola = parola.toLowerCase();
    parola = parola.replace(/[^a-z]/g, '')
    let parolaInvertita = ''

    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInvertita = parolaInvertita + parola[i];
    }
    if (parola === parolaInvertita) {
        return true;
    } else {
        return false;
    }
}