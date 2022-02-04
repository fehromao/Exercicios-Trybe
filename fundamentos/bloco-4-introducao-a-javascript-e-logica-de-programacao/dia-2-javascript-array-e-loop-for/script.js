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

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];
for(index = 1;index < numbers.length; index +=1){
  if ( numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}

console.log(menorValor)