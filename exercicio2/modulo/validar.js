const validarNotas = function(valor1, valor2, valor3, valor4) {
   
    if (valor1 === '' || valor2 === '' || valor3 === '' || valor4 === '') {
        return "ERRO: É necessário digitar uma nota."
    }
    
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
        return "ERRO: A nota digitada não é um número válido."
    }

    if (valor1 < 0 || valor1 > 100) {
        return "ERRO: A nota deve estar entre 0 e 100."
    }else if(valor2 < 0 || valor2 > 100){
        return "ERRO: A nota deve estar entre 0 e 100."
    }else if(valor3 < 0 || valor3 > 100){
        return "ERRO: A nota deve estar entre 0 e 100."
    }else if(valor4 < 0 || valor4 > 100){
        return "ERRO: A nota deve estar entre 0 e 100."
    }
}



module.exports = {
    validarNotas
}