let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//  for (let number of numbers) {
//      console.log(number)
//  }

// let sum = 0
// for (let number of numbers) {
//     sum = sum + number
// }
// console.log(sum)

// let sum = 0;
// for (let number of numbers) {
//     sum = sum + number;
// }
// media = sum / numbers.length
// console.log(media)

// let sum = 0
// for (index = 0 ; index < numbers.length ; index += 1) {
//     sum += numbers[index]
// }
// media = sum / numbers.length
// if (media > 20) {
//     console.log("Valor maior que 20")
// }
// else {
//     console.log("Valor igual ou menor que 20")
// }

// let comparador = 0
// for (index = 0 ; index < numbers.length ; index += 1) {
//     if (numbers[index] > comparador) {
//         comparador = numbers[index]
//     }
// }
// console.log("O maior numero é o", comparador );

// let impares = 0
// let pares = 0
// for (index = 0 ; index < numbers.length ; index += 1) {
//     if (numbers[index]%2 === 0){
//         pares += 1
//     }
//     else {
//         impares +=1
//     }
// }
// console.log("existem", pares, "numeros pares");
// console.log("existem", impares, "numeros impares");

// let menor = numbers[0];
// for (let index = 1 ; index < numbers.length ; index += 1) {
//     if (numbers[index] < menor) {
//         menor = numbers[index]
//     }
// }
// console.log("O menor numero é o", menor);

let sequencia = []
for (let index = 0 ; index < 25 ; index += 1) {
    sequencia.push(index+1)
}
console.log(sequencia);
for (let cont = 0 ; cont < sequencia.length ; cont += 1) {
    let metade = sequencia[cont] / 2
    console.log("A metade de", sequencia[cont], "é", metade);
}