// // IEEE 754-2008 - é o padrão que o javascript segue para tratamento de números
// let num1 = 10.89679978;   // number
// let num2 = 2.5; // number

// // console.log(num1.toString() + num2); // assim não altera o tipo de dado de num1
// // num1 = num1.toString(); // assim altera o tipo de dado para string
// // console.log(num1.toString(2)); // assim apresenta a representação binária
// // console.log(num1.toFixed(2)); // restringe a a quantidade de casas decimais, no caso 2
// // console.log(Number.isInteger(num1)); // verifica se o valor é inteiro
// let temp = num1 * '5';
// console.log(Number.isNaN(temp)); // resultado deve ser falso - isso confirma a existencia de NaN 

let num1 = 0.7;
let num2 = 0.1;

/** Resolvendo usando operadores */
// num1 += num2; // 0.8
// num1 += num2; // 0.9
// num1 += num2; // 1.0
// num1 += num2; // 1.1
// num1 += num2; // 1.2
// num1 += num2; // 1.3
// num1 += num2; // 1.4
// num1 += num2; // 1.5
// num1 += num2; // 1.6
// num1 += num2; // 1.7
// num1 += num2; // 1.8
// num1 += num2; // 1.9
// num1 += num2; // 2.0

// num1 = Number(num1.toFixed(2));

// console.log(num1);
// console.log(Number.isInteger(num1));

/** Resolvendo usando cálculos */
num1 = ((num1*100)+(num2*100))/100;// 0.8
num1 = ((num1*100)+(num2*100))/100;// 0.9
num1 = ((num1*100)+(num2*100))/100;// 1.0

console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));