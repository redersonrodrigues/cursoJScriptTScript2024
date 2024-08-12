// // let nome = 'Luiz';
// var nome = 'Luiz';
// var nome = 'Otavio';// com var aceita multi declaração
// console.log(nome);


// nome = 'Luiz'; // NUNCA FAÇA ASSIM -> é uma declaração aceita mas é errado

/*
 * Tipos de dados primitivos
 */

let nome                = 'Luiz'; // string
let nome1               = "Luiz"; // string
let nome2               = `Luiz`; // string
let number              =     10; // number
let number1             =  10.53; // number
let nomeAluno;                    // undefined = não aponta para local nenhum na memória
const sobrenomeAluno    = null;   // nulo = não aponta para local nenhum na memória
const aprovado          = true;   // boolean = true/false (lógico)

console.log(typeof nome, nome); // assim mostra o tipo (typeof) e o dado (nome da variável)
console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);
console.log(typeof number, number);
console.log(typeof number1, number1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

let a = 2;
const b = a;
console.log(a,b); // 2,2

a = 3;
console.log(a,b) // 3,2