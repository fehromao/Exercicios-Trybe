// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for( let index = 0; index < numbers.length; index += 1){
//   console.log(numbers[index])
// }

// let soma = 0;
// for( let index = 0; index < numbers.length; index += 1){
//     soma += numbers[index]
//   }
// // console.log(soma);
// console.log(soma / numbers.length)

// if( soma / numbers.length > 20) {
//       console.log("Valor maior que 20")
//     }
//     else {
//       console.log("Valor menor ou igual a 20!")  
//     }

// let impares = []

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = []
for (let index = 0; index < numbers.length; index+=1) {
 if (numbers[index] % 2 !== 0 ) {
  impar +=1
 }  
}
if( impar === 0){
  console.log("Nenhum valor encontrado")
}
else{
  console.log(impar)
}

