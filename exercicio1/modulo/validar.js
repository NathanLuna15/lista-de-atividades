const validarIMC = function(valor1, valor2){
    if(valor1 == "" || valor2 == ""){
        return "canpo não preenchido"
    }

    if(isNaN(valor1) || isNaN(valor2)){
        return "você precisa digitar um numero valido"
    }
    
}

module.exports = {
    validarIMC
}