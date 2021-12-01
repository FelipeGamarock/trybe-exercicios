let n = 7;

// Exercicio 1
// let sequencia = "";
// for (let index = 0 ; index < n ; index += 1) {
//     sequencia += "*";
// }
// for (let cont = 0 ; cont < n ; cont += 1) {
//     console.log(sequencia);
// }

// Exercicio 2
// let sequencia = "";
// for (let index = 0 ; index < n ; index += 1) {
//     sequencia += "*";
//     console.log(sequencia);
// }

// Exercicio 3
// for (let index = 1 ; index <= n ; index += 1) {
//     let sequencia = "";
//     for (let cont = 0 ; cont <= (n-index) ; cont += 1) {
//         sequencia += " "    
//     } 
//     for (let marc = 0 ; marc < index ; marc += 1) {
//         sequencia += "*"
//     }
//     console.log(sequencia);
// }

// Exercicio 4
// for (let index = 1 ; index <= n ; index += 2) {
//     let sequencia = "";
//     for (let cont = 0 ; cont < ((n-index)/2) ; cont += 1 ){
//         sequencia += " ";
//     }
//     for (let marc = 0 ; marc < index ; marc += 1) {
//         sequencia += "*"
//     }
//     console.log(sequencia);
// }

// Exercicio 4
// for (let index = 1 ; index <= n ; index += 2) {
//     let sequencia = "";
//     for (let cont = 0 ; cont < ((n-index)/2) ; cont += 1 ){
//         sequencia += " ";
//     }
//     for (let marc = 0 ; marc < index ; marc += 1) {
//         sequencia += "*"
//     }
//     console.log(sequencia);
// }

// Exercicio Bonus 1
// for (let index = 1 ; index <= n ; index += 2) {
//     let sequencia = "";
//     for (let cont = 0 ; cont < ((n-index)/2) ; cont += 1 ){
//         sequencia += " ";
//     }
//     for (let marc = 0 ; marc < index ; marc += 1) {
//         if (marc === 0 || marc === (index-1) || index === n) {
//             sequencia += "*"
//         } else {
//             sequencia += " "
//         }
//     }
//     console.log(sequencia);

// Exercicio Bonus 2
// let divisores = 0
// let number = 31;
// for (let divisor = 1 ; divisor <= number ; divisor += 1) {
//     if (number % divisor === 0) {
//         divisores += 1;
//     }
// }
// if (divisores === 2) {
//     console.log("É primo");
// } else {
//     console.log("Não é primo");
// }