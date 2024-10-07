/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */
function getInitials(names) {
    return names.map(name => {
        if (typeof name === 'string') {
            return name.charAt(0);
        } else {
            return '';
        }
    })
}

// Dichiara la funzione qui.
const names = ['Anna', 'Luca', 'Marco', 'Adele', 'Giovanni', 'Alessandra']

// Invoca la funzione qui e stampa il risultato in console
const initials = getInitials(names);
console.log(initials);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]