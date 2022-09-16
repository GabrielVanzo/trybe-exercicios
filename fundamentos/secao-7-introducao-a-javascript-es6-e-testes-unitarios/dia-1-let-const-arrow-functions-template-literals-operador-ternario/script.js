// Exercicio 1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Exercico 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => oddsAndEvens.sort((x,y) => x - y);
  console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente!`);