/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByInitial(names, letter) {
    return names.filter(name => {
        if (typeof name === 'string') {
            return name.charAt(0).toLowerCase() === (letter.toLocaleLowerCase())
        } else {
            return false;
        }
    }
    )
}
// Invoca la funzione qui e stampa il risultato in console
const filteredNames = filterByInitial(names, 'A');
console.log(filteredNames);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]