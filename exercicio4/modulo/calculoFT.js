function fatorial(fator) {
    let numeroFatorial = Number(fator); // Garante que é um número
    let multiplicar = 1;
    let sequencia = "";

    
    for (let contador = numeroFatorial; contador >= 1; contador--) { 
        multiplicar = multiplicar * contador;
        sequencia = sequencia + contador;

        if (contador > 1) {
            sequencia = sequencia + " x ";
        }
    }

   
    return `${numeroFatorial} é ${sequencia} = ${multiplicar}`;
}

module.exports = {
    fatorial
};