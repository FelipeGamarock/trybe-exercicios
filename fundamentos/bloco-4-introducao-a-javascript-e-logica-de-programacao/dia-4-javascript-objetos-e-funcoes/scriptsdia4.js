// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
// console.log('Bem vinda, ' + info.personagem);
  
// info['recorrente'] = "sim"
// console.log(info);

// for (let index in info){
//   console.log(index);
// }

// for (let index in info){
//   console.log(info[index]);
// }

// let info2 = {
//   personagem: 'Tio Patinha',
//   origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'sim'
//   };
 

//   for (let key in info){
//     if (info[key] === info2[key]) {
//       console.log('Ambos recorrentes');
//     } else {
//     console.log(info[key], "e", info2[key])
//     }
//   }
  
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [ {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      }, ]
  };
  // console.log('O livro favorito de ' + leitor['nome'], leitor['sobrenome'] + ' se chama ' + leitor.livrosFavoritos[0].titulo);
  
  leitor.livrosFavoritos.push({
      titulo: 'Harry Potter e o Prisoneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    },
  )
  console.log(leitor);
console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos');
