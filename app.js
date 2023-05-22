const argv = require('process').argv;
const calculadora = require('./module/calculadora');
let operacion = argv[2];
let numA = argv[3];
let numB = argv[4];

// console.log(+numA);
// console.log(+numB);
if(numA === undefined || numB === undefined){
    console.log("Para operar se necesita 2 valores")
}else{
    numA = +numA;
    numB = +numB;

    if(isNaN(numA) || isNaN(numB)){

        console.log("El valor ingresado no es un número, por favor vuelva ingresar!")
        
    }else{

        switch (operacion) {
            case "sumar":
                let resulSum = calculadora.sumar(numA, numB);
                console.log("el resultado de la suma es: "+resulSum);
                break;
            case "restar":
                let resulRest = calculadora.restar(numA, numB);
                console.log("el resultado de la resta es: "+resulRest);
                break;
            case "multiplicar":
                let resulMult = calculadora.multiplicar(numA, numB);
                console.log("el resultado de la multiplicación es: "+resulMult);
                break;
            case "dividir":
                let resulDiv = calculadora.dividir(numA, numB);
                console.log("el resultado de la división es: "+resulDiv);
                break;
            default:
                console.log("operación desconocida, muy pronro se agregara más funciones!")
                break;
        }

    }
}


