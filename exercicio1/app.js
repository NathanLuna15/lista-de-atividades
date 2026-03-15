const readline = require ("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})

const validando = require ("./modulo/validar.js")

entradaDeDados.question("qual o seu peso? ", function(Kg){
    let peso = Kg

    let valiadar1 = validando.validarIMC(peso)
    if(valiadar1 !== true){
        console.log(valiadar1)
         return entradaDeDados.close() 
    }

      entradaDeDados.question("qual é a sua altura? ", function(alt){
        let altura = alt 

            let valiadar2 = validando.validarIMC(altura)
            if(valiadar2 !== true){
                console.log(valiadar2)
                return entradaDeDados.close() 
            }

            let calculos = require ("./modulo/calculo.js")

            let mediaIMC = calculos.calculoIMC(peso, altura)

            if(mediaIMC)
                console.log("você esta " + mediaIMC)
            else
                return false


   })
 })
  