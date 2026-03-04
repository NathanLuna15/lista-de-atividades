const readline = require ("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})
//  nome do cliente 
entradaDeDados.question("qual o seu peso? ", function(Kg){
    let peso = Kg

      entradaDeDados.question("qual é a sua altura? ", function(alt){
        let altura = alt 

            let calculos = require ("./modulo/calculo.js")

            let mediaIMC = calculos.calculoIMC(peso, altura)

            if(mediaIMC)
                console.log("você esta " + mediaIMC)
            else
                return false


   })
 })
  