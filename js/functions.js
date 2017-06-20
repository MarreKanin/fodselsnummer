function checkBirthId() {
    "use strict";
    var d1, d2, m1, m2, y1, y2, i1, i2, i3, k1, k2, k1c, k2c;
    var value = document.getElementById("fnrinput").value;
    value = value.replace(/\D/g, '');
    if (value.length === 11) {
        d1 = value.substr(0, 1);
        d2 = value.substr(1, 1);
        m1 = value.substr(2, 1);
        m2 = value.substr(3, 1);
        y1 = value.substr(4, 1);
        y2 = value.substr(5, 1);
        i1 = value.substr(6, 1);
        i2 = value.substr(7, 1);
        i3 = value.substr(8, 1);
        k1 = value.substr(9, 1);
        k2 = value.substr(10, 1);
    } else {
        //ERROR!
        console.log("false");
    }

    //Regner ut kontrollsiffer k1
    k1c = 11 - (((3 * d1) + (7 * d2) + (6 * m1) + (1 * m2) + (8 * y1) + (9 * y2) + (4 * i1) + (5 * i2) + (2 * i3)) % 11);
    if (k1c === 11) {
        k1c = 0;
    }

    //Regner ut kontrollsiffer k2
    k2c = 11 - (((5 * d1) + (4 * d2) + (3 * m1) + (2 * m2) + (7 * y1) + (6 * y2) + (5 * i1) + (4 * i2) + (3 * i3) + (2 * k1c)) % 11);
    if (k2c === 11) {
        k2c = 0;
    }
    return parseInt(k1) === k1c && parseInt(k2) === k2c;
}

function validateBirthID(){
  if (checkBirthId() === true) {
  //Make stuff happen
  document.getElementById('message').innerHTML = "Det er korrekt"
  }
  else {
  document.getElementById('message').innerHTML = "Ikke riktig"
  }
}

//Sjekker om D-nummer eller vanlig fnrlabel
function validateFnrtype(){
  if (value.startsWith(0 && 1 && 2 && 3)) {
    console.log("Dette er et vanlig fødselsnummer")
  }
  if (value.startsWith(4 && 5 && 6 && 7)) {
    console.log("Dette er et D-nummer")
  }
}
