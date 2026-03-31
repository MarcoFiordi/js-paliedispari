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

// chiedo all'utente di inserire una parola tramite prompt
const parola = prompt('inserisci una parola');

// invoco la funzione isPalindroma passando la parola inserita
const risultato = isPalindroma(parola);
if (risultato) {
    console.log('La parola è palindroma'); // se è true la parola è palindroma
}
else {
    console.log('La parola non è palindroma') // se è false la parola non è palindroma
}