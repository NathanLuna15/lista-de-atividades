const validarTB = function(valor1, valor2, valor3, valor4){
    if(valor1 == "" || valor2 == ""){
        return "canpo não preenchido"
    }

    if(isNaN(valor1) || isNaN(valor2)){
        return "você precisa digitar um numero valido"
    }

    if (valor1 < valor2 || valor3 < valor4) {
        console.log("ERRO: O valor final não pode ser menor que o valor inicial.");
        return false;
    }


}

  module.exports = {
    validarTB
}