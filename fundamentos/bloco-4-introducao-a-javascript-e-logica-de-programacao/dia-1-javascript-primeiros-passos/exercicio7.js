// EXERCICIO 7

const nota = -1;
let conceitosigla = '';

if (nota >= 90 && nota <= 100) {
    console.log('Sua nota foi ', nota, 'em conceito de sigla, sua nota foi ', conceitosigla = 'A')  
} else if (nota >= 80 && nota < 90) {
    console.log('Sua nota foi ', nota, 'em conceito de sigla, sua nota foi ', conceitosigla = 'B')
} else if (nota >= 70 && nota < 80) {
    console.log('Sua nota foi ', nota, 'em conceito de sigla, sua nota foi ', conceitosigla = 'C')
} else if (nota >= 60 && nota < 70) {
    console.log('Sua nota foi ', nota, 'em conceito de sigla, sua nota foi ', conceitosigla = 'D')
} else if (nota >= 50 && nota < 60) {
    console.log('Sua nota foi ', nota, 'em conceito de sigla, sua nota foi ', conceitosigla = 'E')
} else if (nota < 50 && nota >= 0) {
    console.log('Sua nota foi ', nota, 'em conceito de sigla, sua nota foi ', conceitosigla = 'F')
} else {
    console.log('Nota Inexistente');
}

