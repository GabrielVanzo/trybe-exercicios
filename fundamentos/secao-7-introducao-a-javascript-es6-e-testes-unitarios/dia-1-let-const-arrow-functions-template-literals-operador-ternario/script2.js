// Exercicio 1

const factor = (number) => {
  let result = 1;
  for (let i = 2; i <= number; i += 1) {
      result *= i;
  }
  return result;
};
const show = factor(10);
console.log(`Esse é o fatorial ${show}`);

// Exercicio 2

const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// Exercicio 3
// script2-3.html

// Exercicio 4

// Função 1
const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }  
  return fraseArray.join(' ');
};

console.log(substituaX('Bebeto'));

// Função 2
const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${func}

  Minhas três principais habilidades são:`;

  skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
    resultado = `${resultado}
    - ${skill}`;
  }); // reatribui e adiciona a skill atual a variável resultado
  return resultado;
};

console.log(minhasSkills(substituaX('Bebeto')));