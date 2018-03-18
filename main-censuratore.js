/* *** CENSURATORE di parole  ***
 - Il software riceve in input un lungo testo e una serie di parole da censurare.
 - Restituisce il testo con xxx al posto delle parole censurate.
 - Stampa un "badword index" calcolato come il numero di parole censurate su il numero di parole totali
*/


//array con le parole da censurare
var bedwords = ["Lorem", "ipsum", "aliqua", "enim", "minim"];

//istruszione che chiede all'utente di inserire una frase la quale lo trasforma
//in un array e lo Stampa a video
var inputtext =  prompt("inserisci una frase");
var arraytext = inputtext.split(" ");
alert(arraytext);

//variabile che conta il numero delle parole da censurare
var counter=0;

//cicli for che fanno il confronto fra le parole e sostituiscono le parole censurate con la stringa xxx
for(var i=0; i<bedwords.length; i++){

  for(var j=0;j<arraytext.length; j++){
    if(bedwords[i]==arraytext[j]){
      arraytext[j] = "xxx";
      counter++;

    }
  }
}

//istruzione che stampa la nuova lista con le parole censurate sostituite
document.write(arraytext);
document.write("<br> Il numero delle parole censurate in questo testo è =  ", + counter );
