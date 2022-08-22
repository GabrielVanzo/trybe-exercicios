// EXERCICIO 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numeroImpar = 0

for (let i = 0; i < numbers.length; i += 1) {
    if ((numbers[i] % 2) === 1) {
        numeroImpar += 1
    }
}
if (numeroImpar === 0) {
    console.log('Não existem números ímpares encontrados');
} else {

    console.log('Existem', numeroImpar, 'números ímpares.');
}
