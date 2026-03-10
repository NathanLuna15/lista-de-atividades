function calcularParesImpares(inicio, fim) {
    let pares = [];
    let impares = [];
  
    for (i = inicio; i <= fim; i++) {
      if (i % 2 === 0) {
        pares.push(i); 
      } else {
        impares.push(i); 
      }
    }
  
    console.log("\nLista de números Pares");
    pares.forEach(num => console.log(num)); 
    console.log("Qtde de números encontrados: " + pares.length);
  
    console.log("\nLista de números Impares");
    impares.forEach(num => console.log(num)); 
    console.log("Qtde de números encontrados: " + impares.length);
  }
  
  module.exports = {
    calcularParesImpares
}
