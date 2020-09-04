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
// funzioncina per il messaggio
function mexInizoGioco () {
	prompt('inserisci il primo numero');
}
// Messaggio di benvenuto
alert('Benvenuto a simon, il gioco della memoria.\n Appariranno 5 numeri casuali da 1 a 50.\n Avrai 30 secondi per memorizzarli.\n Dopo di che dovrai inserirli uno alla volta.\n Se li inserirari corretti avrai vinto. Pronto?' );

// Creazione array di 5 numeri casuali diversi tra loro da 1 a 50
var arrNumeriCasuali = numeriCasualiDiversi(5, 1, 50);
alert('Ecco i numeri  ' + arrNumeriCasuali);
console.log(arrNumeriCasuali);


var numeroTentativi = 0;
var arrTentativi = [];

setTimeout(inserimentoNumeri, 30000); //	30s prima dell'inserimento

function inserimentoNumeri () {
	// variabili booleana haPerso = false
	var haiPerso = false;

	do {
		// prompt in cui chiedo all'utente un numero
		var tentativo = parseInt(prompt('inserisci un numero da 1 a 50'));
		// check che il numero sia una variabile di tipo number
		// check che il numero sia compreso tra 1 e 50
		while (isNaN(tentativo) || tentativo < 1 || tentativo > 50 )	{
			tentativo = parseInt(prompt('Non hai inserito un numero da 1 a 50'));
		}
		// check che il numero non sia duplicato nell'array utente
		while (inArray(arrTentativi, tentativo)) {
			tentativo = parseInt(prompt('Numero già inserito!! inserisci un numero da 1 a 50'));
		}
		tentativo = parseInt(tentativo);
		// se non è duplicato, salvo il numero nell'array utente
		arrTentativi.push(tentativo);
		// check che il numero sia nell'array dei numeri da indovinare
		haiPerso = inArray(arrNumeriCasuali, tentativo);
		numeroTentativi++;
		console.log(tentativo);
		console.log(arrTentativi);
	} while ((numeroTentativi < arrNumeriCasuali.length) && (haiPerso));

	return haiPerso ? alert('Hai vinto!') : alert('Hai perso, i numeri da indovinare erano: ' + arrNumeriCasuali);
}
