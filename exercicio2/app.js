const readline = require ("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})

// Entrada de dados do nome
entradaDeDados.question("digite o nome do aluno: ", function(nome){
    // Recebe o nome do aluno
    let nomeAluno = nome 
    //entrada de dados da nota 1
    entradaDeDados.question("qual é a diciplina: ", function(valor0){
        let diciplina = valor0 
        //entrada de dados da nota 2
        entradaDeDados.question("digite a nota 1: ", function(valor1){
            let nota1 = valor1 
            //entrada de dados da nota 3
            entradaDeDados.question("digite a nota 2: ", function(valor2){
                let nota2 = valor2 
                //entrada de dados da nota 4
                entradaDeDados.question("digite a nota 3: ", function(valor3){
                    let nota3 = valor3
                    entradaDeDados.question("digite a nota 4: ", function(valor4){
                        let nota4 = valor4 
                     
                            let calculos = require("./modulo/calculoMedia.js")

                            let media = calculos.mediaEscola(nota1, nota2, nota3, nota4)

                               if(media == 50 || media <= 69){
                                entradaDeDados.question("digete a nota do exame: ", function(ex){
                                    let resultadoExame = ex 
                                    
                                    let exe = calculos.mediaExame(resultadoExame, media)

                                    if (exe >= 60) {
                                        console.log(`Aprovado no exame! Média final: ${exe.toFixed(2)}`);
                                    } else {
                                        console.log(`Reprovado no exame. Média final: ${exe.toFixed(2)}`);
                                    }
                                  })
                               }else{
                                    console.log(`Reprovado direto com média: ${media.toFixed(2)}`);
                               }  

                        
                    })                  
                })
            })
        })
    })                   
})



