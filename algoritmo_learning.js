
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
/**
 * Created by msarabia on 7/12/17.
 */
