// Exercício 2 - Sorteador de loteria

const verificador = (aposta, aleatoryNumber) => aposta === aleatoryNumber
const number = Math.floor(Math.random() * 5) + 1;

const result = (aposta, callback) => {
  const aleatoryNumber = Math.floor(Math.random() * 5) + 1;
  return callback(aposta, aleatoryNumber) ? 'Parabéns você ganhou' : 'Tente novamente'
}
console.log(result(number, verificador))