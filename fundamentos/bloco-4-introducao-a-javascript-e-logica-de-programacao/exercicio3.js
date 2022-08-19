// EXERCICIO 3

const a = 7;
const b = 8;
const c = 22;
let result;

if (a > b && a > c) {
    result = a
} else if (b > a && b > c) {
    result = b
} else {
    result = c
}

console.log(result)