
// definisco una funzione che controlla se la parola passata come argomento è palindroma
function isPalindroma(parola) {
    // controllo che il valore ricevuto sia una stringa
    // se non è una stringa la funzione restituisce subito false
    if (typeof parola !== 'string') return false;

    
    parola = parola.toLowerCase();// trasformo tutta la parola in minuscolo
    
    parola = parola.replace(/[^a-z]/g, '')// rimuovo tutti i caratteri che non sono lettere
    let parolaInvertita = '' // creo una variabile vuota che userò per costruire la parola al contrario

    // ciclo la parola partendo dall'ultioma lettera fino ad arrivare alla prima
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInvertita = parolaInvertita + parola[i]; //ad ogni giro aggiungo il carattere corrente alla stringa invertita
    }
    // confronto la parola,originale con quella invertita
    if (parola === parolaInvertita) {
        return true; // se sono uguali la parola è palindroma
    } else {
        return false; // altrimenti la parola non è palindroma
    }
}