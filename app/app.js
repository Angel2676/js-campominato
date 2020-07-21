// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 84 numeri ogni volta potrebbe essere un po’ scocciante :wink:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…

// 1.Il computer deve generare 16 numeri casuali tra 1 e 100.
// // I numeri non possono essere duplicati

// *********************************************************************
// BONUS
do {
    var scelta = prompt("Inserisci un valore facile, medio o difficile")

} while (scelta != "facile" && scelta !="medio" && scelta !="difficile" ) {
    
}

switch (scelta) {
    case "difficile":
    var massimo = 100;
    break;
    case "medio":
    var massimo = 80;
    break;
    case "facile":
    var massimo = 50;
    break;



    default:
    var massimo = 100;

}


// Creata Array Numero random PC
var numeriPc = [];
var numeriGenerati;

// Creata la condizione per cui non ci devono essere numeri doppi nell'array del PC
while (numeriPc.length < 16) {
    numeriGenerati = generaRandom(1,100);
    if (trovaElemento(numeriPc, numeriGenerati) == false) {
    numeriPc.push(numeriGenerati)
    }


}
console.log(numeriPc);

// Creatta array Utente e richiesta prompt di inserire i numeri massimo meno la lunghezza dell'array del PC

var utente = [];
var numeriUte;
var massimo = 100;
var possibilita = massimo - numeriPc.length;
// Generata condizione While in cui viene fatto alla riga 59 confronto fra i numeri dell'utente e i numeri e l'array del PC.
// Poi viene fattio cil controllo affinche i numeri siano compresi fra 0 e 100
// Controllo se vengono scritti dei numeri


while (utente.length < possibilita && trovaElemento(numeriPc, numeriUte)!= true) {
numeriUte = parseInt(prompt("inserisci i tuoi numeri"));
if (numeriUte < 0 || numeriUte > 100 ) {
    alert("inserisci un altro numero compreso fra 0 e 100")

} else if (isNaN(numeriUte)) {
    alert("Insersci un numero");
}

// Se numeri dell'utente che sono confrontati con l'array del PC sono true il gioco è finito
if (trovaElemento(numeriPc,numeriUte) == true) {
    alert("Hai Perso con un numero di tentativi pari a " + (utente.length + 1));
// se inserisci uno stesso numero devi inserire un altro numero
} else if (trovaElemento(utente,numeriUte) == true) {
    alert ("Inserisci un altro numero");
// Se il numero scelto dall'utente è un numero che ha scritto una sola volta ed è non si trova nell'array del PC viene pushato.
} else if (trovaElemento(utente, numeriUte) == false ) {
    utente.push(numeriUte);


}

// Nel momento in cui dopo il ciclo while i numeri dell'array dell'utente combaciano con il numeri di possibilita
if (utente.length == possibilita) {
    alert ("Hai Vinto");
}
// console.log(utente.length);
// console.log(possibilita);

}

console.log(utente);

// Controlla numeri









// ********FUNZIONI*********

function generaRandom(min, max) {
 return Math.floor(Math.random()*(max - min + 1) + min);
}

// ricera un elemento in un array e puo essere un valore boolenano, vero se lo trova falso se non lo torva
function trovaElemento(lista,elemento) {
    var i=0;
    while (i < lista.length ) {
        if(elemento == lista[i]){
            return true;
        }
        i++;
    }
    return  false;
 }
