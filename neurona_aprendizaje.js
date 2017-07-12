/**
 * Created by msarabia on 7/1/17.
 */
"use strict";

class neurona {
  constructor(i) {
    this.state = {
      nInputs: i,
      weights: [],
      inputs : [],
      bias   : 1,  // Parametro para que funcione el percetron con valores 0
      U      : -0.4, //umbral de activacion
      output : 0,
      E      : 0.6   //Factor de aprendizaje
    };
    // generamos los pesos
    this.generateInputs();
    this.learning = this.learning.bind(this);
  }

  generateInputs() {
    for (var i = 0; i < this.state.nInputs; i++)
      this.state.weights.push(Math.random());
  }

  addInput(i) {
    if (this.state.nInputs <= this.state.inputs.length)
      this.state.inputs.push(i);
    else
      console.log("Solo se aceptan " + this.state.nInputs + " Entradas");
  }

  setActivateUmbral(u) {
    this.state.U = u;
  }

  learning(training) {
    var i    = 0;
    var cont = 1;
    var size = training.length;
    var E    = this.state.E;
    var W    = this.state.weights;
    var U    = this.state.U;
    var len = training[0].length-1;


    while (i < size && cont < 1000) {

      // suma de Input * Pesos
      var sum = 0;
      for (var p=0; p<len; p++)
        sum += training[i][p] * W[p];

      // Correcion del error
      sum += (-1 * this.state.U);
      sum=Math.tanh(sum);

      sum = (sum >= this.state.U) ? 1 : -1;

      console.log("Entrada:", training[i][0], training[i][1], "Valor Esperado:", training[i][2], "Salida:", sum);

      if (sum == training[i][len]) {
        i++;
      }
      else {
        // Se ajustan los pesos
        this.state.weights.forEach(function (a, p) {
          W[p] = W[p] + 2 * E * training[i][len] * training[i][p];
          //    w1 w2 t
          //0   1  1  1     0[ 1]
          //1   1 -1  1     1[ 1]   3[]
          //2  -1  1  1     2[ 1]   2[ 1]
          //3  -1 -1 -1     3[-1]   1[-1]
        });
        this.state.U = this.state.U + 2 * E * training[i][len] * (-1);

        //w1 = w1 + 2 * E * training[i][2] * training[i][0];
        //w2 = w2 + 2 * E * training[i][2] * training[i][1];
        //θ  = θ + 2 * E * training[i][2] * (-1);

        console.log("Ajustando pesos #", cont);
        console.log(this.state.weights, this.state.U);
        cont++;
        i = 0;
      }
    }

  }

  resolve() {
  }
}

var tabla_verdad = [
  [1, 1, 1],
  [1, -1, 1],
  [-1, 1, 1],
  [-1, -1, -1]
];

//// Pesos iniciales
//var w1 = Math.random();
//var w2 = Math.random();
//
////Umbral
//var θ = -0.4;
//var y = 0;
//
////factor de aprendizaje
//var E = 0.6;
//
//console.log("w1:", w1, "W2:", w2, "θ:", θ);
//
////Fase de aprendizaje
//var i    = 0;
//var cont = 1;
//
//while (i < tabla_verdad.length && cont < 1000) {
//  y = Math.tanh((tabla_verdad[i][0] * w1 ) + (tabla_verdad[i][1] * w2 ) + (-1 * θ));
//  y = (y >= θ) ? 1 : -1;
//  console.log("Entrada:", tabla_verdad[i][0], tabla_verdad[i][1], "Valor Esperado:", tabla_verdad[i][2], "Salida:", y);
//
//  if (y == tabla_verdad[i][2]) {
//    i++;
//  }
//  else {
//    // Se ajustan los pesos
//    w1 = w1 + 2 * E * tabla_verdad[i][2] * tabla_verdad[i][0];
//    w2 = w2 + 2 * E * tabla_verdad[i][2] * tabla_verdad[i][1];
//    θ  = θ + 2 * E * tabla_verdad[i][2] * (-1);
//
//    console.log("Ajustando pesos #", cont);
//    console.log("w1:", w1, "W2:", w2, "θ:", θ);
//    cont++;
//    i = 0;
//  }
//}
//
//if (cont <= 9999) {
//  console.log("Aprendizaje termiando con exito");
//  console.log("Resultados");
//  console.log("w1:", w1, "W2:", w2, "θ:", θ);
//  console.log("Probando");
//
//  y = ((-1 * w1) + (-1 * w2) + (-1 * θ));
//  y = (y > θ) ? 1 : -1;
//  console.log(-1, -1, y);
//
//  y = ((-1 * w1) + (1 * w2) + (-1 * θ));
//  y = (y > θ) ? 1 : -1;
//  console.log(-1, 1, y);
//
//  y = ((1 * w1) + (-1 * w2) + (-1 * θ));
//  y = (y > θ) ? 1 : -1;
//  console.log(1, -1, y);
//
//  y = ((1 * w1) + (1 * w2) + (-1 * θ));
//  y = (y > θ) ? 1 : -1;
//  console.log(1, 1, y);
//}

// Ejecucion


// Ejecucion
var n = new neurona(2);
console.log(n.state.weights);

n.learning(tabla_verdad);
console.log(n.state.weights);