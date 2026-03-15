const readline = require ("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})


entradaDeDados.question("qual é o numero a ser fatorado?: ", function(valor){
    let fator = valor 

    let vailidar = require ("./modulo/validar.js")
    let valido = vailidar.validaFatorial(fator)
    let calculos = require ("./modulo/calculoFT.js")
    let contagem = calculos.fatorial(fator)

    

    if(fator > 0){
        console.log(contagem)
    }
    else{
        if(valido != true){
        console.log(valido)
        return entradaDeDados.close() 
    }
        
    }
     return entradaDeDados.close()
})                   

