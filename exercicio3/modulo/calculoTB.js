function tabuada(tabu, inicial, final, continuar){
    let tabuadaInicial = tabu 
    let mutiplicadorInicial = inicial
    let mutiplicadorFinal = final
    let tabuadaFinal = continuar
    
    let resultado

 
    for (contadorTab = tabuadaInicial; contadorTab <= tabuadaFinal; contadorTab++) {
        for (contadorMult = mutiplicadorInicial; contadorMult <= mutiplicadorFinal; contadorMult++) {
            resultado = contadorMult * contadorTab  
            console.log(contadorTab  + " x " + contadorMult + " = " + resultado)
        }  
    }  

}


module.exports = {
    tabuada
}
