function tabuada(tabu, inicial, final, continuar) {
    let tabuadaInicial = Number(tabu);
    let multiplicadorInicial = Number(inicial);
    let multiplicadorFinal = Number(final);
    let tabuadaFinal = Number(continuar);


    for (let contadorTab = tabuadaInicial; contadorTab <= tabuadaFinal; contadorTab++) {
        console.log(`\n--- Tabuada do ${contadorTab} ---`); 
        
        for (let contadorMult = multiplicadorInicial; contadorMult <= multiplicadorFinal; contadorMult++) {
            let resultado = contadorTab * contadorMult;
            console.log(`${contadorTab} x ${contadorMult} = ${resultado}`);
        }
    }
}

  module.exports = {
    tabuada
}
