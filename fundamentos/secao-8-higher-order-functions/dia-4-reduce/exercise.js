// Exercicio 1

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

// console.log(flatten(arrays));



const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Exercicio 2

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames(array) {
  return array.reduce((acc, curr) => `${acc} ${curr.author.name},`, '');
}
// console.log(reduceNames(books));

// Exercicio 3

const expectedResult2 = 43;

function averageAge(array) {
  const years = array.reduce((acc, curr) => (
    acc + (curr.releaseYear - curr.author.birthYear)
  ), 0);
  return years / array.length;
}
// console.log(averageAge(books))

//  Exercicio 4


const expectedResult3 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook(array) {
  return array.reduce((acc, curr) => {
    if (curr.name.length > acc.name.length) {
      return curr
    }
    return acc
  });
}

// console.log(longestNamedBook(books));

// Exercicio 5

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult4 = 20;

const containsA = (array) => sum = array.reduce((acc, curr) => acc + curr.toLowerCase().match(/a/g).length, 0)
// console.log(containsA(names));

// Exercicio 6

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(array, array2) {
  const createObject = array.map((element, index) => (
    {
      name: element,
      average: array2[index].reduce((acc, curr) => acc + curr, 0) / array2[index].length
    }
  ));
  return createObject
}
console.log(studentAverage(students, grades));

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];