function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}
function multiplicar(a,b){
    return a*b;
}
function dividir(a,b){
    return b==0? "no se puede operar por 0, ingresa otro número!": a/b;
}

module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
}