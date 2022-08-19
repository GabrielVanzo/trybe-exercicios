// EXERCICIO 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0
let result = 0
for (let i = 0; i < numbers.length; i +=1) {
    sum += numbers[i]
    }
    result = sum / numbers.length
    if (result > 20) {
        console.log('Valor maior que 20 sendo,', result );
    } else if (result <= 20) {
        console.log('Valor menor que 20 sendo, ', result);
    }