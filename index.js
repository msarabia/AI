/**
 * Created by msarabia on 7/1/17.
 */
"use strict";

// Neurona Simple
class Neurona {
  constructor(X1,X2,W1,W2) {
    this.x1=X1;
    this.x2=X2;
    this.w1=W1;
    this.w2=W2;
  }

  getY1(){
    let wx, y1;

    //Funcion de propagacion
    wx=(this.x1 * this.w1) + (this.x2 * this.w2);

    // Salida
    y1= Math.tan(wx);
    return y1;
  }
}

class Perceptron {
  constructor() {
    this.x1 = 1.4;
    this.x2 = -0.33;

    //pesos
    this.w1 = Math.random();
    this.w2 = Math.random();

    var neurona = new Neurona(this.x1,this.x2,this.w1,this.w2);
    console.log("X1:", this.x1, "X2:", this.x2, "Salida Y1:", neurona.getY1());
  }
}


new Perceptron();