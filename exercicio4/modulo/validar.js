const validaFatorial = function(valor0){
    if(valor0 == "" || valor0 == 0){
        return "ERRO não é possivel fazer fatorial por zero ou nenhum numero!"
    
    }else if(isNaN(valor0)){
        return "voce precisa colocar um numero"
    }
}

module.exports = {
    validaFatorial
};

