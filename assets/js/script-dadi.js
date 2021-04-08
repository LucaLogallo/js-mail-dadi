/* 
  variabili
  -dadoCPU = numero da 1 a 6 generato randomicamente validi per il computer
  -dadoUtente = numero da 1 a 6 generato randomicamente validi per l'utente
  -nomeUtente = nome dell'utente che vuole giocare;


  faccio generare i due numeri con la funzione matematica e li confronto
  se il dadoUtente è maggiore ha vinto altrimenti ha vinto la cpu

*/

var nomeUtente = prompt("Il nome utente");
var selezioneFacce = prompt("Inserisci il numero di facce del dado");
if(parseInt(selezioneFacce) > 1){
  var dadoCPU = Math.round(Math.random()* parseInt(selezioneFacce - 1))+1;
  console.log(dadoCPU);
  document.getElementById("Dadi").innerHTML = '<br> il numero della cpu è: '+dadoCPU;
  var dadoUtente = Math.round(Math.random()* parseInt(selezioneFacce - 1))+1;
  console.log(dadoUtente);
  document.getElementById("Dadi").innerHTML = '<br> il tuo numero '+nomeUtente+' è: '+dadoUtente;
  if(dadoCPU < dadoUtente){
    console.log("hai vinto");
    document.getElementById("Dadi").innerHTML = '<br> 🔥!!!!HAI '+nomeUtente+' VINTO!!!!🔥';
  }else{
    console.log("hai perso");
    document.getElementById("Dadi").innerHTML = '<br> 🔥!!!!HAI '+nomeUtente+' PERSO!!!!🔥';
  }

}else{
  alert("numero di facce non valido");
}

