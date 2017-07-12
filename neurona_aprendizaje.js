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
      E      : 0.2   //Factor de aprendizaje
    };
    // generamos los pesos
    this.generateWeight();
    this.learning = this.learning.bind(this);
  }

  generateWeight() {
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
    var len  = training[0].length - 1;


    while (i < size && cont < 10000) {

      // suma de Input * Pesos
      var sum = 0;
      for (var p = 0; p < len; p++)
        sum += training[i][p] * W[p];

      // Correcion del error
      sum += (-1 * this.state.U);
      sum = Math.tanh(sum);

      sum = (sum >= this.state.U) ? 1 : -1;

      console.log("Entrada:", training[i][0], training[i][1],training[i][2], "Valor Esperado:", training[i][3], "Salida:", sum);
      console.log("Pesos:",this.state.weights);
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

  resolve(values) {
    var res = 0;
    if (values) {
      var W = this.state.weights;
      values.forEach(function (v, i) {
        res += (v * W[i])
      });
      res+= (-1 * this.state.U);
      console.log("Res:",res, "Umbral:", this.state.U);
      if (res >= this.state.U) {
        return 1;
      } else {
        return -1;
      }

    }

  }
}
//OR
var tabla_verdad = [
  [1, 1, 1],
  [1, -1, 1],
  [-1, 1, 1],
  [-1, -1, -1]
];

// AND
var tv_and = [
  [1, 1, 1],
  [1, -1, -1],
  [-1, 1, -1],
  [-1, -1, -1]
];

module.exports = neurona;

// Como usarla
var texto= "crear la clase neurona (entradas)\n"+
           "pasar a la clase la matriz de valores que necesita aprender \n"+
           "neurona.learning([entrada1,entrada2,...,entradan, resultado])n"+
           "resolver el ejercicio \n "+
           "n.resolve([entrada1,entrada2,...,entradan]) ";

console.log(texto);

var n = new neurona(3);

var tv_and = [
  [-1, -1, -1, -1],
  [-1, -1,  1,  1],
  [-1,  1, -1,  1],
  [-1,  1,  1,  1],
  [ 1, -1, -1,  1],
  [ 1, -1,  1,  1],
  [ 1,  1, -1,  1],
  [ 1,  1,  1,  1]
];

var tv_and2 = [
  [1, 1, 1],
  [1, -1, -1],
  [-1, 1, -1],
  [-1, -1, -1]
];

n.learning(tv_and);
