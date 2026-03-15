const readline = require ("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
});

entradaDeDados.question("qual é o numero inicial ", function(valor0){
    let inicial = Number(valor0); 

    entradaDeDados.question("qual é o numero final ", function(valor1){
        let final = Number(valor1); 

        const validar = require ("./moduloIP/validar.js");
        const valido = validar.validarIPPA(inicial, final)

        if(valido != true){
            console.log(valido)
            entradaDeDados.close();
            console.log()
        }else{
            const calculos = require("./moduloIP/calculoIP.js");
            const calcular = calculos.calcularParesImpares(inicial, final);
            console.log(calcular)
            entradaDeDados.close();
        }


 
    });
});
