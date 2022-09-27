// Exercício 3 - Corretor automático de exame

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (arrayRight, arrayStudent) => {
  if (arrayRight === arrayStudent) {
    return 1;
  } if (arrayStudent === 'N.A') {
    return 0;
  }
  return -0.5;
};
const corretorAuto = (arrayRight, arrayStudent, callback) => {
  let count = 0;
  for (let i = 0; i < arrayRight.length; i += 1) {
    const retornoCallback = callback(arrayRight[i], arrayStudent[i]);
    count += retornoCallback;
  }
  return `O aluno acertou ${count} pontos`;
};
console.log(corretorAuto(RIGHT_ANSWERS, STUDENT_ANSWERS, check));