const {Sumar} = require('./Funciones/Sumar');
const {Restar} = require('./Funciones/Restar');
const {Multiplicar} = require('./Funciones/Multiplicar');
const {Dividir} = require('./Funciones/Dividir');

const accion = process.argv[2];
const num1 = parseInt(process.argv[3]);
const num2 = parseInt(process.argv[4]);



if (!accion || !num1 || !num2) {
    console.log("Error")
    return
}

switch (accion) {
case "sumar":{
    console.log(num1, "+", num2, "=", Sumar(num1, num2));
    break;
}
case "restar":{
    console.log(num1, "-", num2, "=", Restar(num1, num2));
    break;
}
case "multiplicar":{
    console.log(num1, "*", num2, "=", Multiplicar(num1, num2));
    break;
}
case "dividir":{
    console.log(num1, "/", num2, "=", Dividir(num1, num2));
    break;
}
default:
    console.log("Accion indefinida");
    break;
}