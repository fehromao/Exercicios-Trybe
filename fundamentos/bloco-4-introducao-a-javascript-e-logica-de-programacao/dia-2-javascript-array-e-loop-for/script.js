// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for( let index = 0; index < numbers.length; index += 1){
//   console.log(numbers[index])
// }

//Questão 3
// let soma = 0;
// for( let index = 0; index < numbers.length; index += 1){
//     soma += numbers[index]
//   }
// // console.log(soma);
// console.log(soma / numbers.length)

//Questao 4
// if( soma / numbers.length > 20) {
//       console.log("Valor maior que 20")
//     }
//     else {
//       console.log("Valor menor ou igual a 20!")  
//     }

// let impares = []
//Questao 6
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impar = []
// for (let index = 0; index < numbers.length; index+=1) {
//  if (numbers[index] % 2 !== 0 ) {
//   impar +=1
//  }  
// }
// if( impar === 0){
//   console.log("Nenhum valor encontrado")
// }
// else{
//   console.log(impar)

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 0; index < numbers.length; index+=1) {
//   console.log (maiorNumero)
// }

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorValor = numbers[0];
// for (let i = 0; i < numbers.length; i +=1) {
//   if( numbers[i] > maiorValor) {
//     maiorValor = numbers[i]
//   }
  
// }
// console.log(maiorValor);



// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorValor = numbers[0];
// for(index = 1;index < numbers.length; index +=1){
//   if ( numbers[index] < menorValor) {
//     menorValor = numbers[index];
//   }
// }

// console.log(menorValor)

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let numeros = [];
// for (let index = 1; index <= 25; index+=1) {
//   numeros.push(index);
  
// }
// console.log(numeros);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numeros = [ 1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]


for (let index = 1; index < numeros.length; index+=1){
  console.log(numeros[index] / 2)

}

 