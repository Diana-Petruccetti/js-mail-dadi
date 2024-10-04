
/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

// 0. Strumenti conosciuti:
/* 
- Let, const
- Prompt
- Console.log
- Operatori aritmetici e di comparazione relazionali e logici
- String
- Numbers
- Conditionals if/elseif/else
- Loop
- Array
*/

//CREA SISTEMA CONTROLLO EMAIL
// 1. Preparazione
// Creo variabile email
let email;

// Crea lista array di chi può accedere al gioco
const emails = [
    'topogigio@live.it',
    'dianapetruccetti@gmail.com',
    'topolino@live.it',
    'winniethepooh@alice.it'
]

// 2. Raccolta Dati
// Chiedi all'utente la sua email e controlla che possa partecipare (prompt)
// Se può partecipare fai comparire il gioco
// Altrimenti fai comparire messaggio adatto
canAccess = false;
email = prompt('Scrivi la tua email');


// 3. Elaborazione Dati
/* canAccess = emails.includes(email); */
for (let i = 0; i < emails.length; i++) {
    const thisEmail = emails [i];

    if (thisEmail == email) {
        canAccess = true;
        break
    }
}

console.log(canAccess, emails, email);

// 4. Output
if (canAccess) {
    alert ('Benvenuto/a');
} else {
    alert ('Accesso negato');
    exit ();
}


// CREA IL GIOCO
let wannaPlayAgain = true;
while (wannaPlayAgain) {
// 1. Preparazione
let playerNumber;
let pcNumber;
let message;

// 2. Raccolta Dati
playerNumber = Math.floor(Math.random() * 6) + 1;
pcNumber = Math.floor(Math.random() * 6) + 1;

console.log(playerNumber, pcNumber);

// 3. Elaborazione Dati
if (playerNumber > pcNumber) {
    message = `Hai vinto! Il tuo numero è: ${playerNumber} | Il numero del PC è: ${pcNumber}`;
} else if (playerNumber < pcNumber) {
    message = `Hai perso! Il tuo numero è: ${playerNumber} | Il numero del PC è: ${pcNumber}`;
} else {
    message = `Ritenta! Il tuo numero è: ${playerNumber} | Il numero del PC è: ${pcNumber}`;
}

alert(message);
wannaPlayAgain = confirm('Vuoi giocare ancora?');
}
alert ('Grazie, alla prossima!');
// 4. Output