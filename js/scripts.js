// Richiesta numero km più controllo se il numero inserito è valido
const numeroKm = prompt("Quanti chilometri vuoi percorrere?");
const numeroKmInt = parseInt(numeroKm);
if(isNaN(numeroKm)) {
    alert("Il numero inserito non è valido");
} else {
    alert("Il numero inserito è valido. Puoi procedere.");
}

// Richiesta età più controllo se il numero inserito è valido
const etaPaseggero = prompt("Quanti anni hai?");
const etaPaseggeroInt = parseInt(etaPaseggero);
if(isNaN(etaPaseggero)) {
    alert("Il numero inserito non è valido");
} else {
    alert("Il numero inserito è valido. Puoi procedere.");
}

// Prezzo biglietto
const prezzoBiglietto = numeroKm * 0.21;
let prezzoPercentuale;
let prezzoTotale;

// Controllo Età
if(etaPaseggero < 18) {
    prezzoPercentuale = (prezzoBiglietto * 20)/100;
    prezzoTotale = prezzoBiglietto - prezzoPercentuale;
} else if (etaPaseggero > 65) {
    prezzoPercentuale = (prezzoBiglietto * 40)/100;
    prezzoTotale = prezzoBiglietto - prezzoPercentuale;
} else {
    prezzoTotale = prezzoBiglietto;
}

// Prezzo Totale
alert(prezzoTotale.toFixed(2));