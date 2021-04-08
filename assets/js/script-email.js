/*
  variabili
  -emailInserita = email che viene inserita dall'utente da confrontare con le email nel vettore
  -vettoreAccount = è il vettore che contiene tutte le email che possono accedere al servizio
  
  faccio inserire l'email all'utente
  inizia un ciclo for che gira fino alla fine del vettore con un confronto tra l'email inserita e ogni singola email contenuta nel vettore
  appena l'email viene trovata attivo un flag e interrompo la ricerca 
*/


var emailInserita = prompt("Inserire l'email per poter accedere ai servizi");
if(emailInserita.endsWith("@gmail.com")||emailInserita.endsWith("@hotmail.it")||emailInserita.endsWith("@virgilio.it")||emailInserita.endsWith("@libero.it")){

  var vettoreAccount =[
    "lucalogallo@gmail.com",
    "lucalogallo@hotmail.it",
    "lucalogallo@virgilio.it",
    "rossiluigi@gmail.com"
  ]
  
  var flag = false;
  
  for(i = 0 ; i < vettoreAccount.length; i++){
    if(emailInserita === vettoreAccount[i]){
      flag=true;
      break;
    }
  }
  
  if(flag){
    document.getElementById("Accesso").innerHTML = 'ACCESSO CONSENTITO <br> - Benvenut* :'+emailInserita;
  }else{
    document.getElementById("Accesso").innerHTML = 'ACCESSO NEGATO <br> - !!!!!UTENTE '+emailInserita+' NON TROVATO!!!!!';
  }
}else{
  alert("email inserita in un formato non valido");
  window.close();
}