const word = 'javascript';

// Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno
function contaVocali(stringa) {
    const vocali = 'aeiou';
    let conteggio = 0;

    // Dichiara la funzione qui.
    for (let i = 0; i < stringa.length; i++) {
        if (vocali.includes(stringa[i].toLowerCase())) {
            conteggio++;
        }
    }
    
    return conteggio;
}

// Invoca la funzione qui e stampa il risultato in console
const risultato = contaVocali(word);
console.log(risultato); // Risultato atteso se si passa 'javascript': 3 (a, a, i)

