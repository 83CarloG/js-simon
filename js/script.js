// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

// Funzione per generare un numero casuale
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //	The maximum is exclusive and the minimum is inclusive
}
//	Funzione che dato un array e un numero mi controlla che il numero non sia già nell'array
function inArray (arr, elemento) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === elemento) {
			return true;
		}
	}
	return false;
}
// funzione che genera x numeri casuali diversi tra loro x=quanti numeri voglio generare, min e max sono il range
function numeriCasualiDiversi (x, min, max) {
	var arrNumeri = [];
	for (var i = 0; i < x; i++) {
		var numeroProvv = getRandomInt(min, max);
		while (inArray(arrNumeri, numeroProvv)) {
			numeroProvv = getRandomInt(min, max);
		}
		arrNumeri.push(numeroProvv);
	}
	return arrNumeri;
}
// Messaggio di benvenuto
alert('Benvenuto a simon, il gioco della memoria.\n Appariranno 5 numeri casuali da 1 a 50.\n Avrai 30 secondi per memorizzarli.\n Dopo di che dovrai inserirli uno alla volta.\n Se li inserirari corretti avrai vinto. Pronto?' );
// Creazione array di 5 numeri casuali diversi tra loro da 1 a 50
var arrNumeriCasuali = numeriCasualiDiversi(5, 1, 50);

console.log(arrNumeriCasuali);
