/*
   Il software ha una lista di objects che rappresentano aerei in volo:
   ogni oggetto contiene latitudine e longitudine della posizione dell'aereo,
   quanto kg di carburante ha a bordo e quanti km può fare con ogni kg
    di carburante.
   Inoltre, il software ha una lista di lat e long di aeroporti.
   La domanda a cui deve rispondere il software è la seguente:
   c'è qualche aereo che non ha abbastanza carburante per atterrrare
   in un qualsiasi aeroporto?
   Se c'è deve lanciare un alert() (nel vero senso della parola :P)
*/
//oggetti aereo
var Aerei = {
                    "num" : ["AZ890", "LO452", "PP326" , "XD987"],
                    "lat" : [19.890, 18.980, 16.120 , 17.115],
                    "long" : [11.250, 17.555, 13.986, 18.464],
                    "kerosene" : [10, 1200, 1100, 1150],
                    "consumo" : [10, 150, 125, 200]
                  };

// oggetti aerporto
var Aeroporti ={
                      "nomeAeroporto" : ["Pisa", "Bergen", "Madrid"],
                      "lat" : [18.890, 17.222, 15.325],
                      "long" : [20.365, 14.356, 16.458]
                    }



//istruzioni per calcolare la distanza che un aereo puo' ancora percorrere
var listaconsumo = [];
for(var i=0; i<Aerei.kerosene.length; i++){

  listaconsumo.push(riservaRimasta(Aerei.kerosene[i], Aerei.consumo[i]));

}
alert(listaconsumo);


//istruzioni per calcolare le dstanze di ciascun aereo dagli aeroporti che sono nella lista












//funzione che calcola i km che puo' ancora percorrere l'aereo
function riservaRimasta(riserva, consumo) {
  var riserva;
  var consumo;
  return riserva/consumo;
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
