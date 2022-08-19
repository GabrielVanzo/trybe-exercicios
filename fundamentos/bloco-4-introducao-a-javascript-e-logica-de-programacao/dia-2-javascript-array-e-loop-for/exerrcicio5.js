// EXERCICIO 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  }
}
// Toda vez que o loop passa na linha 9, o maiorNumero, recebe o numero que estiver no indice,
// caso seja maior, então sempre que volta para linha 8 já volta com o numero maior.
console.log(maiorNumero);