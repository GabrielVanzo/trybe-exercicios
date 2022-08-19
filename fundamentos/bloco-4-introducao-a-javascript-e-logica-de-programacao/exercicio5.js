// EXERCICIO 5

let a = 40
let b = 50
let c = -91

let sum = a + b + c

if (sum === 180) {
    console.log(true);
} else if (sum >= 0 || sum >= 179 || sum >= 181) {
    console.log(false);
} else if (sum <= -1) {
    console.log('Você descreveu um valor inválido');
}