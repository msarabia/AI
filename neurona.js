/**
 * Created by msarabia 20/jun/2021
 */

// class Neurona {
//     constructor (inputs, debug=false){
//         this.debug = debug;

//         this.wy =[];
//         this.w  =0;
//         this.y  =1;
//         this.ir =2;

//         this.Y=[];
//         this.W=[];
        
//         this.initialize(inputs);
//     }

//     initialize(inputs){
//         if (Array.isArray(inputs) ){
//             inputs.forEach((v,i)=>{

//                 // manejamos los valores en un solo array
//                 let w = Math.random();
//                 this.wy[i]= [v,w,Math.random()];
                
//                 // manejamos los valores de forma separada 
//                 this.Y.push(v);
//                 this.W.push(w);
//             });
//         } else {
//             this.wy.push(inputs,Math.random(),Math.random());
//             this.Y.push(inputs)
//             this.W.push(Math.random());
//         }

//         if (this.debug) {
//             // console.log(this.Y);
//             // console.log(this.W);

//             console.log(this.wy);
//         }
//     }

//     // se usa para los vectores independientes
//     doPropagation2() {
//         let y1=0;
//         this.wy.forEach((v,i)=>{
//             y1+= this.W[i] * this.Y[i];
//         });    

//         return Math.tanh(y1);
//     }

//     doPropagation(){
//         let y1=0;
//         this.wy.forEach((v,i)=>{
//             y1+= this.wy[i][this.w] * this.wy[i][this.y];
//         });    

//         return Math.tanh(y1);
//     }
// }


/**
 * creacion de neurona
 * al settear los inputs se tiene que calcular el valor y propagarlo
 * 
 */

class Neurona {
    // setter & getter
    set ValueNeuron(v){
        this.value = v;
    }

    get ValueNeuron() {
        return this.value;
    }

    constructor (inputs, debug=false){
        this.debug = debug;
        this.E =0;
        this.nInputsRequired = 1;
        this.nInputsReceived =0;
        this.dendritas=[];
        this.neuronValue=0;
        

        // variables de la clase
        this.wy =[];        
        this.y  =0;
        this.w  =1;
        this.ir =2;
        this.bias =1;
        this.Y=[];
        this.W=[];
        
        this.initialize(inputs);        
    }

    /**
     * Initialize the class 
     * @param {Array of values or single value} inputs 
     */
    initialize(inputs){
        // propagation reference
        if (Array.isArray(inputs) ){            
            this.nInputsRequired = inputs.length;
            inputs.forEach((v,i)=>{

                // dendrita a la sig. neurona
                if ( v instanceof Neurona) {
                    v.addDendrite( this.calculateY);
                }
               
                // manejamos los valores en un solo array
                let w = Math.random();
                this.wy[i]= [v,w,Math.random()];
                
                // manejamos los valores de forma separada 
                this.Y.push(v);
                this.W.push(w);
            });
        } else {
            this.wy.push(inputs,Math.random(),Math.random());
            this.Y.push(inputs)
            this.W.push(Math.random());
        }

        if (this.debug) {
            // console.log(this.Y);
            // console.log(this.W);

            console.log(this.wy);
        }
    }

    notifyPropagation(){
        this.nInputsReceived++;
        if (this.nInputsReceived == this.nInputsRequired){
            
        }
    }

    setInputs(inputs){
        if (Array.isArray(inputs) ){            
            inputs.forEach((v,i)=>{

                // manejamos los valores en un solo array
                this.wy[i][this.y]= [v];
                
                // manejamos los valores de forma separada 
                this.Y[i] = v;
            });
        } else {
            this.wy[this.y] =inputs;
            this.Y[0] = inputs;            
        } 
        this.ValueNeuron = this.calculateY();
    }

    setWeigths(weights){
        if (Array.isArray(weights) ){
            inputs.forEach((v,i)=>{

                // manejamos los valores en un solo array
                this.wy[i][this.w]= [v];
                
                // manejamos los valores de forma separada 
                this.W[i] = v;
            });
        } else {
            this.wy.push(inputs,Math.random(),Math.random());
            this.Y[0] = inputs;            
        }        

    }

    // set learn Factor
    setLearnFactor(factor){
        this.E = factor;
    }

    // se usa para los vectores independientes
    calculateY2() {
        let y1=0;
        this.wy.forEach((v,i)=>{
            y1+= this.W[i] * this.Y[i];
        });    
        y1 +=1;
        return Math.tanh(y1);
    }

    calculateY(){

        let y1=0;
        this.wy.forEach((v,i)=>{
            y1+= this.bias + this.wy[i][this.w] * this.wy[i][this.y];
        });    
        y1 +=1; // sumamos el bias
        return Math.tanh(y1);
    }

    addDendrite(sipnasis){
        this.dendritas.push(sipnasis);
    }

}



class Network{
    // layers is array with integers, neurons have neuron by layer
    constructor(layers,neurons ){
        this.layers =[];        


        this.initialize(layers, neurons);
    }

    initialize(layers,neurons){
        layers.forEach((v,index)=>{
            let l =[];
            for (i=0; i<v; i++){
                l.push(new Neurona2());
            }
            this.layers.push(l);
            // falta la interconexion
        })
    }
}


//neuronas de entrada 
let a = [];
for ( i= 0; i<= 2; i++){
    a.push(new Neurona(i,false));
}

//layer 2
let b = [];
for ( i= 0; i<= 6; i++){
    b.push(new Neurona(a,false));
}

let c = new Neurona(a,false);
console.log(c);