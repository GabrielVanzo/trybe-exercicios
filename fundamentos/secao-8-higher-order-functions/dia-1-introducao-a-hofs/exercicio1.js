// Exercício 1 - Nova pessoa Contratada

const names = (nome) => {
  return {nome, email: `${nome.replace(/ /g, '_').toLowerCase()}@trybe.com`};
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};
console.log(newEmployees(names));