const computerNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
const userNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;

if (computerNumber > userNumber){
    alert("Il computer Vince");
} else if (computerNumber == userNumber) {
    alert ("C'è un Pareggio")
} else {
    alert ("Il giocatore Vince")
}