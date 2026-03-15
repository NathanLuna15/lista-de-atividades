const validarIPPA = function(valor1, valor2){
       if(valor1 == "" || valor2 == ""){
        return "ERRO não é possivel fazer o calculo por zero ou nenhum numero!"
        
        }else if(isNaN(valor1) || isNaN(valor2)){
            return "voce precisa colocar um numero valido"
        }else if(valor1 <= 0 || valor2 <= 0){
            return "você não pode colocar um numero menor ou igual a zero"
        }
}

module.exports = {
    validarIPPA
};
