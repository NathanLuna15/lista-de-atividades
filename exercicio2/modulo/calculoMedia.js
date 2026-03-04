function mediaEscola (n1, n2, n3, n4){
   
    let nota1 = n1
    let nota2 = n2
    let nota3 = n3
    let nota4 = n4
    let media
    
    media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

    if(media >= 70){
        return media
    }else if(media <= 69)
        return media
        
    else if(media < 50){
        return media
    }else{ 
        return "ERRO"
    }
     
}

function mediaExame(exa, media){
    let notaExame = exa
    let mediaAnterior = media 
    
    let novaMedia = (Number(notaExame) + Number(mediaAnterior)) / 2;

    return novaMedia
}


module.exports = {
    mediaEscola,
    mediaExame

}

