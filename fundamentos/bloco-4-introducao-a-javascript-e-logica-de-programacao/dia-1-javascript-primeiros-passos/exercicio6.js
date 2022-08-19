// EXERCICIO 6

let peca = '?';
// Altere a variável 'peca' para saber qual forma de andar.

let lower = peca.toLowerCase();

switch (lower) {
    case 'peao':
        console.log('Anda Uma Casa Pra Frente');
        break;
    case 'bispo':
        console.log('Anda Várias Casas Em Diagonais');
        break;
    case 'torre':
        console.log('Anda Várias Casas Para Frente E Lados');
        break;
    case 'cavalo':
        console.log('Anda 3 Casas, Sendo 2 Para Frente E 1 Pro Lado');
        break;
    case 'rainha':
        console.log('Anda Para Qualquer Direção Várias Casas');
        break;
    case 'rei':
        console.log('Anda Uma Casa Em Qualquer Direção');
        break;
    default:
        console.log('Peça Inexistente');
        break;
}