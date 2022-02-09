// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function arrayDeNomes (nomes) {
  let arrayDeNomes = [0];
  for(let index in nomes) {
    if(arrayDeNomes.length < nomes[index].length){
    arrayDeNomes = nomes[index];
   }
  }
  return arrayDeNomes;
}
console.log(arrayDeNomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana' ,'Gilmelandia']))

// function maiorPalavra(palavras) {
//   let maiorPalavra = palavras[0];
//   for (let indice in palavras) {
//     if (maiorPalavra.length < palavras[indice].length) {
//       maiorPalavra = palavras[indice];
//     }
//   }
//   return maiorPalavra;
// }

// console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda