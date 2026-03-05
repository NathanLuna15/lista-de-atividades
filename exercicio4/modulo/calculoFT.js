function fatorial(fator){
    let numeroFatorial = fator
    let valor
    let multiplicar = 1
    let sequencia = ""

    for (contador = numeroFatorial; contador >= 1; contador--) {
        multiplicar = multiplicar * contador
        sequencia = multiplicar + " X "
    }
  
    return sequencia 

}

module.exports = {
    fatorial
}