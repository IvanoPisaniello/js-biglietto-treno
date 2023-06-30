const numeroKm = prompt("inserisci quanti km vuoi percorrere");
const età = prompt("inserisci la tua età");
const prezzoFinale = ((numeroKm) * 0.21);
const discount18 = ((prezzoFinale * 20) / 100);
const discount65 = ((prezzoFinale * 40) / 100);
const totale18 = (prezzoFinale - discount18);
const totale65 = (prezzoFinale - discount65);
document.getElementById("chilometri").innerHTML = numeroKm;

if (età <= 18) {
    document.getElementById("sconto").innerHTML = (Math.round((discount18 + Number.EPSILON) * 100) / 100) + "€";
    document.getElementById("prezzo-finale").innerHTML = (Math.round((totale18 + Number.EPSILON) * 100) / 100) + "€";
    document.getElementById("complimenti").innerHTML = ("Complimenti! hai uno sconto del 20% riservato ai minorenni!")
}

else if (età >= 65) {
    document.getElementById("sconto").innerHTML = (Math.round((discount65 + Number.EPSILON) * 100) / 100) + "€";
    document.getElementById("prezzo-finale").innerHTML = (Math.round((totale65 + Number.EPSILON) * 100) / 100) + "€";
    document.getElementById("complimenti").innerHTML = ("Complimenti! hai uno sconto del 40% riservato agli over 65 anni!")
}

else {
    document.getElementById("sconto").innerHTML = ("ci dispiace non c'è uno sconto disponibile per te");
    document.getElementById("prezzo-finale").innerHTML = (Math.round((prezzoFinale + Number.EPSILON) * 100) / 100) + "€";
}












