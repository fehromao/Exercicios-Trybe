// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(numeros){
  let maiorValor = 0;
  for(let indice in numeros){
  if(numeros[maiorValor] < numeros[indice]){
  maiorValor = indice
    }
  }
return maiorValor;
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));

