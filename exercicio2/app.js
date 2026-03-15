const readline = require ("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})


entradaDeDados.question("digite o nome do aluno: ", function(nome){
    let nomeAluno = nome 

    entradaDeDados.question("qual é a diciplina: ", function(valor0){
        let diciplina = valor0 

        const validar = require("./modulo/validar.js")

        entradaDeDados.question("digite a nota 1: ", function(valor1){
            let nota1 = valor1 
                // VALIDANDO A NOTA 1
            let validacao1 = validar.validarNotas(nota1)
            if (validacao1 !== true) {
                console.log(validacao1)
                return entradaDeDados.close() 
            }

            entradaDeDados.question("digite a nota 2: ", function(valor2){
                let nota2 = valor2 

                let validacao2 = validar.validarNotas(nota2)
                if (validacao2 !== true) {
                    console.log(validacao2)
                    return entradaDeDados.close() 
                }

                entradaDeDados.question("digite a nota 3: ", function(valor3){
                    let nota3 = valor3

                    let validacao3 = validar.validarNotas(nota3)
                    if (validacao3 !== true) {
                        console.log(validacao3)
                        return entradaDeDados.close() 
                    }

                    entradaDeDados.question("digite a nota 4: ", function(valor4){
                        let nota4 = valor4 

                        let validacao4 = validar.validarNotas(nota4)
                        if (validacao4 !== true) {
                            console.log(validacao4)
                            return entradaDeDados.close() 
                        }
                                             
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
                               }

                               if(media >= 70){
                                console.log(`Aprovado com a Média final: ${media.toFixed(2)}`)
                                return entradaDeDados.close() 
                               }
                    })                  
                })
            })
        })
    })                   
})



