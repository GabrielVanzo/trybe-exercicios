// EXERCICIO 11

const valorb = 3000
let valorm = '';
let valorl = '';

if (valorb <= 1556.94) {
    valorm = valorb - (valorb * 8 / 100)
} else if (valorb >= 1556.95 && valorb <= 2594.92) {
    valorm = valorb - (valorb * 9 / 100)
} else if (valorb >= 2594.93 && valorb <= 5189.92) {
    valorm = valorb - (valorb * 11 / 100)
} else if (valorb >= 5189.83) {
    valorm = valorb - 570.88
}
console.log('O valor do salário já descontado o INSS é de R$' ,valorm)

if (valorm <= 1903.98) {
    valorl = valorm
} else if (valorm >= 1903.99 && valorm <= 2826.65) {
    valorl = valorm - (valorm * 7.5 / 100 - 142.80)
} else if (valorm >= 2826.66 && valorm <= 3751.05) {
    valorl = valorm - (valorm * 15 / 100 - 354.80)
} else if (valorm >= 3751.06 && valorm <= 4664.68) {
    valorl = valorm - (valorm * 22.5 / 100 - 636.13)
} else if (valorm >= 4664.69) {
    valorl = valorm - (valorm * 27.5 / 100 - 869.36)
}
console.log('O valor do salário líquido, ou seja, livre de todos descontos é de R$', valorl)