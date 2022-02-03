// const a = 10;
// const b = 3;
// console.log("adição" + (a + b));
// console.log("subtração" + (a - b));
// console.log("multiplicação"+ (a * b));
// console.log("divisão"+ (a / b));
// console.log("modulo"+ (a % b));

// const a = 28;
// const b = 12;

// if(a > b) {
//   console.log("a é maior que b");
// }
// else{
//   console.log("b é menor que a");
// }

// const a = 75;
// const b = 300;
// const c = 100;

// if(a>b && a>c){
//   console.log("o maior numero é a");
// }
// else if (b>c && b>a) { 
//   console.log ("o maior numero é b")
// }

// else {
//   console.log ("o maior numero é c")
// }

// console.log("Exercicio 4")
// const a = 10;
// if (a > 0){
//   console.log("positive")
// } else if(a < 0){
//   console.log("negative")
// } else {
//   console.log("zero")
// }

// console.log("exercicio 5")
// const angulo1 = 50
// const angulo2 = 60
// const angulo3 = 60

// if( angulo1 + angulo2 +angulo3 === 180){
//   console.log("true")
// }
// else {
//   console.log("false")
// }

let peca = "cavalo";
switch(peca.toLowerCase()){
  case "bispo":
    console.log('mova-se na diagonal'); break;
  case "rainha":
    console.log("mova na horizontal ou vertical se estiver livre") ; break;
  case "rei":
    console.log("mova-se na horizontal, vertical ou diagonal") ;break;
  case "cavalo":
      console.log('mova-se em L'); break;
  case "peao":
        console.log('mova-se uma casa para frente'); break;
  case "torre":
    console.log('Se estiver livre movimente-se na horizontal ou vertical'); break;      
  default:
    console.log(' Erro, peça invalida!')     
}
