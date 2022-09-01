const Multiplicar = (numero1,numero2) => { 
    if (numero1==0 || numero2==0) {
        Resultado = 0;
        return Resultado;
    }    
    var Resultado = numero1*numero2;
    return Resultado
}
module.exports = {Multiplicar};