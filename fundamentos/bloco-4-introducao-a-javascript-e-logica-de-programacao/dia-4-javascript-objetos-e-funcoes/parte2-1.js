// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificarPalindromo(palavra) {
  return palavra === palavra.split('').reverse().join('');
}
console.log(verificarPalindromo('arara'));
console.log(verificarPalindromo('desenvolvimento'));