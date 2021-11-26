const a1 = 90;
const a2 = 90;
const a3 = 0;
let soma = a1 +a2 +a3;
if (a1 <= 0 || a2 <= 0 || a3 <= 0){
    console.log("angulos invalidos")
}
else  if (soma === 180){
    console.log("é um triangulo")
}
else {
    console.log("n é triangulo")
}
