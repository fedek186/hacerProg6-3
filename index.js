let cartas = [
  {
    numero: 1,
    tipo: "espada",
    valor: 100,
  },
  {
    numero: 1,
    tipo: "basto",
    valor: 90,
  },
  {
    numero: 7,
    tipo: "espada",
    valor: 85,
  },
  {
    numero: 7,
    tipo: "oro",
    valor: 80,
  },
  {
    numero: 3,
    tipo: "espada",
    valor: 75,
  },
  {
    numero: 3,
    tipo: "basto",
    valor: 75,
  },

  {
    numero: 3,
    tipo: "oro",
    valor: 75,
  },
  {
    numero: 3,
    tipo: "copa",
    valor: 75,
  },
  {
    numero: 2,
    tipo: "espada",
    valor: 75,
  },
  {
    numero: 2,
    tipo: "basto",
    valor: 65,
  },
  {
    numero: 2,
    tipo: "oro",
    valor: 65,
  },
  {
    numero: 2,
    tipo: "copa",
    valor: 65,
  },
  {
    numero: 1,
    tipo: "oro",
    valor: 50,
  },
  {
    numero: 1,
    tipo: "copa",
    valor: 50,
  },
  {
    numero: 12,
    tipo: "espada",
    valor: 45,
  },
  {
    numero: 12,
    tipo: "basto",
    valor: 45,
  },
  {
    numero: 12,
    tipo: "oro",
    valor: 45,
  },
  {
    numero: 12,
    tipo: "copa",
    valor: 45,
  },
  {
    numero: 11,
    tipo: "espada",
    valor: 40,
  },
  {
    numero: 11,
    tipo: "basto",
    valor: 40,
  },
  {
    numero: 11,
    tipo: "oro",
    valor: 40,
  },
  {
    numero: 11,
    tipo: "copa",
    valor: 40,
  },
  {
    numero: 10,
    tipo: "espada",
    valor: 35,
  },
  {
    numero: 10,
    tipo: "basto",
    valor: 35,
  },
  {
    numero: 10,
    tipo: "oro",
    valor: 35,
  },
  {
    numero: 10,
    tipo: "copa",
    valor: 35,
  },
  {
    numero: 7,
    tipo: "oro",
    valor: 33,
  },
  {
    numero: 7,
    tipo: "copa",
    valor: 33,
  },
  {
    numero: 6,
    tipo: "espada",
    valor: 30,
  },
  {
    numero: 6,
    tipo: "basto",
    valor: 30,
  },
  {
    numero: 6,
    tipo: "oro",
    valor: 30,
  },
  {
    numero: 6,
    tipo: "copa",
    valor: 30,
  },
  {
    numero: 5,
    tipo: "espada",
    valor: 25,
  },
  {
    numero: 5,
    tipo: "basto",
    valor: 25,
  },
  {
    numero: 5,
    tipo: "oro",
    valor: 25,
  },
  {
    numero: 5,
    tipo: "copa",
    valor: 25,
  },
  {
    numero: 4,
    tipo: "espada",
    valor: 20,
  },
  {
    numero: 4,
    tipo: "basto",
    valor: 20,
  },
  {
    numero: 4,
    tipo: "oro",
    valor: 20,
  },
  {
    numero: 5,
    tipo: "copa",
    valor: 20,
  },
];
let contadorJug1 = 0;
let contadorJug2 = 0;
let mano1 = [];
let mano2 = [];
let numero1 = 0;
let numero2 = 0;
let recorrerCartas = (num1, num2) => {
  let verif = true;
  if (num1 != num2) {
    //Recorro mano 1
    for (let i = 0; i < mano1.length; i++) {
      if (cartas[num1] == mano1[i] || cartas[num2] == mano1[i]) {
        verif = false;
      }
    }
    //Recorro mano 2
    for (let i = 0; i < mano2.length; i++) {
      if (cartas[num1] == mano2[i] || cartas[num2] == mano2[i]) {
        verif = false;
      }
    }
  } else {
    verif = false;
  }
  return verif;
};
let repartirCartas = () => {
  for (let i = 0; i < 3; i++) {
    do {
      numero1 = Math.round(Math.random() * 39);
      numero2 = Math.round(Math.random() * 39);
    } while (recorrerCartas(numero1, numero2) == false);
    mano1.push(cartas[numero1]);
    mano2.push(cartas[numero2]);
  }
};
function envido2cartas(carta1, carta2) {
  let envido;
  if (carta1 && carta2 >= 10) {
    envido = 20;
  } else if (carta1 >= 10 && carta2 < 10) {
    envido = 20 + carta2;
  } else if (carta1 < 10 && carta2 >= 10) {
    envido = 20 + carta1;
  } else {
    envido = carta1 + carta2 + 20;
  }
  return envido;
}
let calcularEnvido = (mano) => {
  //Mazo 1
  let envidomano = 0;
  if (mano[0].tipo == mano[1].tipo) {
    let envidoCarta1 = envido2cartas(mano[0].numero, mano[1].numero);
    if (envidoCarta1 > envidomano) {
      envidomano = envidoCarta1;
    }
  }
  if (mano[0].tipo == mano[2].tipo) {
    let envidoCarta2 = envido2cartas(mano[0].numero, mano[2].numero);
    if (envidoCarta2 > envidomano) {
      envidomano = envidoCarta2;
    }
  }
  if (mano[1].tipo == mano[2].tipo) {
    let envidoCarta3 = envido2cartas(mano[1].numero, mano[2].numero);
    if (envidoCarta3 > envidomano) {
      envidomano = envidoCarta3;
    }
  }
  return envidomano;
};
let comprbarCartasUsadas = (carta, usadas) => {
  let verif = true;
  for (let i = 0; i < usadas.length; i++) {
    if (carta == usadas[i]) {
      verif = false;
    }
  }
  return verif;
};
let devolverCartas = (usadas) => {
  do {
    carta = Math.round(Math.random() * 2);
  } while (comprbarCartasUsadas(carta, usadas) == false);
  return carta;
};

let turno = (mano1, mano2) => {

  let numCartaJug1 = 0;
  let numCartaJug2 = 0;
  let cartasUsadas1 = [];
  let cartasUsadas2 = [];
  let cont1 = 0;
  let cont2 = 0;
  let seguirJugando = true;
  while (seguirJugando) {
    
    numCartaJug1 = devolverCartas(cartasUsadas1);
    cartasUsadas1.push(numCartaJug1);
    console.log(mano1[numCartaJug1]);
    numCartaJug2 = devolverCartas(cartasUsadas2);
    cartasUsadas2.push(numCartaJug2);
    console.log(mano2[numCartaJug2]);
    
    console.log("--------------");

    if (mano1[numCartaJug1].valor > mano2[numCartaJug2].valor) {
      cont1++;
    } else if (mano1[numCartaJug1].valor < mano2[numCartaJug2].valor) {
      cont2++;
    } else if (mano1[numCartaJug1].valor == mano2[numCartaJug2].valor) {
      console.log('pardo')
      if(cont1 != 1 && cont2 != 1) {cont1++; cont2++;}
      else {cont1++}
    }



    console.log(cont1, cont2)
    if(cont1 == 2){
      seguirJugando = false;
      console.log("Gano JUG1")
    } else if (cont2 == 2){
      seguirJugando = false;
      console.log("Gano JUG2")
    }

  }
  console.log('Termino')
};

repartirCartas();
console.log(mano1,mano2)
/* turno(mano1, mano2); */
