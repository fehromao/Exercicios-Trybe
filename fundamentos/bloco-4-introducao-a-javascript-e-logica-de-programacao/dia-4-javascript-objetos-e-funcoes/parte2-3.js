// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
function menorValor(numeros){
  let menorValor = 0;
  for(let indice in numeros){
  if(numeros[menorValor] > numeros[indice]){
  menorValor = indice
    }
  }
return menorValor;
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));
