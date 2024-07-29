let num1 = prompt('Digite um número inteiro ou decimal (use ponto(.) neste caso)');
let num2 = prompt('Digite outro número');

// const resultado = parseFloat(num1) + parseFloat(num2);
const resultado = Number(num1) + Number(num2);

alert(`O resultado da soma é: ${resultado}`);