
const sum = (...param) => param.reduce((acc, number) => acc + number, 0)

console.log(sum(1,2,3,4,5));