

function isPalindroma(parola) {
    // controllo che sia una stringa
    if (typeof parola !== 'string') return false;
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