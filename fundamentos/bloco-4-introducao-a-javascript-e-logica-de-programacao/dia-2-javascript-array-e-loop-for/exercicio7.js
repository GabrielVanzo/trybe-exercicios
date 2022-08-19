// EXERCICIO 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < menorNumero) {
    menorNumero = numbers[i];
  }
}
// Toda vez que o loop passa na linha 9, o menorNumero, recebe o numero que estiver no indice,
// caso seja menor, então sempre que volta para linha 8 já volta com o numero menor.
console.log(menorNumero);