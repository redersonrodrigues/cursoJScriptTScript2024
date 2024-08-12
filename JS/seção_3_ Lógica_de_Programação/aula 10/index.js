/**
 * Operadores Aritméticos
 * + = adição/concatenação
 * - = subtração
 * / = divisão
 * * = multiplicação
 * ** = potenciação
 * % = resto da divisão
 * 
 * A precedência para execução dos operadores é
 * 1º - ()
 * 2º - **
 * 3º - * / %
 * 4º - + -
 */

const num1 = 2;
const num2 = 10;

console.log(`Adição: ${num1 + num2}`);

const num3 = '2';
const num4 = 10;

console.log(`Concatenação: ${num3 + num4}`);

console.log(`Subtração: ${num1 - num2}`);

console.log(`Divisão: ${num1 / num2}`);

console.log(`Multiplicação: ${num1 * num2}`);

console.log(`Potenciação: ${num1 ** num2}`);

console.log(`Resto da divisão: ${num1 % num2}`);

// Incremento: se colacar depois  no nome mostra primeiro o valor antigo, mas se colocar antes, mostra o valor esperado
let contador = 1;
console.log(`Depois = ${contador++}`); // pré incremento
console.log(`Mostra o valor com o incremento aplicado = ${contador}`);// pós incremento
console.log(`Antes = ${contador++}`);// mostra o resultado do valor incrementado na linha anterior (pós incremento)

// Para o decremento é a mesma coisa, só que com sinal de --


/** Operadores de atribuição **/
const passo = 2;
let contadorTipo2 = 0;
// OBS: vale para qualquer operador +,-,*,**,/
contadorTipo2 += passo; // é o mesmo que contadorTipo2 = contadorTipo2 + passo
contadorTipo2 += passo;
contadorTipo2 += passo;
contadorTipo2 += passo;
console.log(contadorTipo2);

// NaN - Not a Number
const num5 = 10;
const num6 = parseInt('5'); // ou parseFloat() se for decimal, ou melhor ainda, Number() = vale para os dois tipos

console.log(`Converteu a string em numero: ${num5 + num6}`);