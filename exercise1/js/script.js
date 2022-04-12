const userEmail = prompt("Inserire la tua email:");
const allowEmails = ["Arturo@gmail.com", "Santi@mail.it", "Artorias@alice.it", "EzioAuditore@mail.com", "HitagiSenjougahara@hotmail.com", "SanSciain@mail.com", "JohnSnow@alice.it", "ErenJager@libero.it", "JackSparrow@gmail.com", "CaptainJackSparrow@gmail.com", "EdwardSnowden@libero.it", "Gabibbo@hotmail.com", "ImagineDragons@gmail.com", "Avicii@rip.com", "LelouchViBritannia@rip.com", "JulianAssange@libero.it", "HelloWorld@mail.com"];

let flag = false;

// Senza interruzione del ciclo
/*
for (let i=0; i<allowEmails.length; i++) {
    if( userEmail === allowEmails[i] ){
        flag = true;
    }
}
*/

// Con interruzione del ciclo
for (let i=0; i<allowEmails.length && !flag; i++) {
    if( userEmail === allowEmails[i] ){
        flag = true;
    }
    console.log(allowEmails[i]);
}



if (flag) {
    alert("Hello and welcome back");
} else {
    alert("Non hai i permessi per accedere");
}