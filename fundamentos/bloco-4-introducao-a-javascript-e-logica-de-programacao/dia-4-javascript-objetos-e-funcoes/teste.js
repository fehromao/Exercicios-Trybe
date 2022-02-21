function soma(a,b){
  let resultado = a+b;
  return resultado
}
console.log(soma(110,250))

function highestCount(numeros) {
  let number = [];
  for(let index =0; index < numeros.length; index +=1){
  let value = numeros[index];
  if (number[value] === undefined){
    number[value] = 1;
  } else{
    number[value] = number[value] + 1;
  } 
  }
  return number;
}

let number = arrayNumeros[0];
  let contador = 0;
  for(let index =0; index < arrayNumeros.length; index +=1){
  if (arrayNumbers[index] > number){
    number = arrayNumeros[index];
    }
   } 
  for( let values in arrayNumeros) {
    if(arrayNumeros[values] === number){
      contador +=1;
    }
  }
  return contador