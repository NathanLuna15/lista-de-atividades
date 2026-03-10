const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
});

entradaDeDados.question("qual é o numero inicial ", function(valor0){
    let inicial = Number(valor0); 

    entradaDeDados.question("qual é o numero final ", function(valor1){
        let final = Number(valor1); 

        const calculos = require("./moduloIP/calculoIP.js");
        calculos.calcularParesImpares(inicial, final);


        entradaDeDados.close();
    });
});
