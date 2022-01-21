const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const countAllAs = names.reduce((total, letters) => {
  total + letters.split('').reduce((acc, atual) => {
    if (atual === 'a' || atual === 'A') {
      return acc + 1
    }
  return total
}, 0), 0});

console.log(countAllAs);

// const allAs = names.reduce((acc, curr) =>
//   acc + curr.split('').reduce((acumulator, current) => {
//     if (current === 'a' || current === 'A') return acumulator + 1;
//       return acumulator;
//   }, 0), 0);

// console.log(allAs);