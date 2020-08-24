// attraverso il click del button genera i vari processi dei campi da compilare
document.getElementById('genera').addEventListener("click",
  function () {

// la sezione del biglietto con questo codice è in scomparsa
    document.getElementById('biglietto').classList.remove("display-none");

    var nome = document.getElementById('nome').value;

    var km = document.getElementById('km').value;

    var fasciaEta = document.getElementById('fascia-eta').value;
    console.log(fasciaEta);

    document.getElementById('nome-passeggero').innerHTML = nome;

    var prezzoAlKm = 0.21;

    var carrozza = (Math.floor(Math.random() * 10) + 1);
    document.getElementById('carrozza').innerHTML = carrozza;

    var cp = (Math.floor(Math.random() * 9999) + 90000);
    document.getElementById('cp').innerHTML = cp;


    if (fasciaEta == "minorenne") {
      document.getElementById('offerta').innerHTML = "sconto minorenne";
      prezzoAlKm = 0.21 * 0.8;
    } else if (fasciaEta == "over65") {
      document.getElementById('offerta').innerHTML = "sconto over 65";
      prezzoAlKm = 0.21 * 0.6;
    } else {
      document.getElementById('offerta').innerHTML = "biglietto standard";
    }
    var prezzoBiglietto = prezzoAlKm * km;
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    document.getElementById('costo').innerHTML = prezzoBiglietto + "€";

  }
);

document.getElementById('annulla').addEventListener("click",
  function () {
   document.getElementById('biglietto').classList.add("display-none");
   nome = "";

   document.getElementById('nome').value = "";
   document.getElementById('km').value = "";

  }
);
