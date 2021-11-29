let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] < array[secondIndex]) {
//         let position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
//   }
//   console.log(array);

// for (index = 0 ; index < array.length ; index += 1) {
//     for (cont = 0 ; cont < array.length ; cont += 1) {
//         if (array[cont] > array[cont+1]) {
//             let auxiliar = array[cont]
//             array[cont] = array[cont+1]
//             array[cont+1] = auxiliar
//         }
//     }
// }
// console.log(array);

// let novoArray = []
// for (let index = 0 ; index < array.length ; index += 1) {
//     if (index!= array.length - 1) {
//         novoArray[index] = array[index] * array[index+1] 
//     } else {
//         novoArray[index] = array[index] * 2
//     }
// }
// console.log(novoArray);