const readline = require ("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})


entradaDeDados.question("qual é o numero a ser fatorado?: ", function(valor){
    let fator = valor 

    let calculos = require ("./modulo/calculoFT.js")
    let contagem = calculos.fatorial(fator)

    if(fator > 0)
        console.log(contagem)
    else
        console.log("ERRO não é possivel fazer fatorial por zero!")

})                   

