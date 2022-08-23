// EXERCICIO 7

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  leitor.livrosFavoritos[0].titulo += [', Harry Potter e o Prisioneiro de Azkaban']
  leitor.livrosFavoritos[0].autor += [', JK Rowling']
  leitor.livrosFavoritos[0].editora += [', Rocco']

  console.log(leitor);