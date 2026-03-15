function calculoIMC(Kg, alt) {
    
    let peso = Kg
    let altura = alt

    let imc = peso / altura **2


    if(imc < 18.5){
        console.log("Abaixo do peso")
        console.log(`IMC de ${imc}`)
    }
    else if(imc <= 24.9){
        console.log("Peso normal")
        console.log(`IMC de ${imc}`)
    }
    else if(imc <= 29.9){
        console.log("Acima do peso")
        console.log(`IMC de ${imc}`)
    }
    else if(imc <= 34.9){
        console.log("Obesidade gral 1")
        console.log(`IMC de ${imc}`)
    }
    else if(imc < 40){
         console.log("Obesidade gral 2")
         console.log(`IMC de ${imc}`)
    }
    else if(imc >= 40){
         console.log("Obesidade gral 3")
         console.log(`IMC de ${imc}`)
    }
    else{
        return false
    }

}


module.exports = {
    calculoIMC
}

