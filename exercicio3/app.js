const readline = require ("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})


entradaDeDados.question("qual o mutiplicador ", function(tab){

    let tabuada = tab

    entradaDeDados.question("qual é o mutiplicador inicial ", function(valor0){
        let mutiplicadorInicial = valor0 

        entradaDeDados.question("qual é o multiplicador final ", function(valor1){
            let mutiplicadorFinal = valor1 
            entradaDeDados.question( `você fez a tabuada do ${tabuada}, quer continuar até qual tabuada `, function(valor){
                let continuar = valor 

                    let calculos = require ("./modulo/calculoTB.js")

                    let resultado = calculos.tabuada(tabuada, mutiplicadorInicial, mutiplicadorFinal, continuar)
                    console.log(resultado)

                    
            })
        })
    })                   
})


