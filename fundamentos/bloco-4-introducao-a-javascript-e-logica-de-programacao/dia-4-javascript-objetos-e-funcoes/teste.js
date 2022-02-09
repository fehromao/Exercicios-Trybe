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