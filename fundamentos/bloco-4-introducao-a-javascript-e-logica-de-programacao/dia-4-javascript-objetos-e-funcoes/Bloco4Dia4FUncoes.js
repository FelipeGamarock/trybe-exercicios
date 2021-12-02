
// function verificaPalindromo(palavra) {
//     let invertido = palavra.split("").reverse().join('')
  
//     console.log(palavra);
//     console.log(invertido);
//     if (palavra === invertido) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(verificaPalindromo('urso'));
// console.log(verificaPalindromo('arara'));

// function maiorValor(numbers) {
//     let auxiliador = numbers[0]
//     let localMaior = 0
//     for (let index = 0 ; index < numbers.length ; index += 1) {
//         if (numbers[index] > auxiliador) {
//             auxiliador = numbers[index]
//             localMaior = index
//         }
//     }
//     return localMaior
// }
// console.log(maiorValor([2, 3, 6, 7, 10, 1]));
// console.log(maiorValor([20, 4, 6, 7, 1, 0, -3]));

// function menorValor(numbers) {
//     let auxiliador = numbers[0]
//     let localMenor = 0
//     for (let index = 0 ; index < numbers.length ; index += 1) {
//         if (numbers[index] < auxiliador) {
//             auxiliador = numbers[index]
//             localMenor = index
//         }
//     }
//     return localMenor
// }
// console.log(menorValor([2, 3, 6, 7, 10, 1]));
// console.log(menorValor([20, 4, 6, 7, 1, 0, -3]));

function maiorNome(nomes){
    let comparador = 0
    let maiorPalavra = nomes[0]
    for (let index = 0 ; index < nomes.length ;index += 1) {
        let arrayNome = nomes[index].split("")
        let quantidade = arrayNome.length
        if (quantidade > comparador) {
            comparador = quantidade
            maiorPalavra = arrayNome.join("")

        }
    }
    return maiorPalavra
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));