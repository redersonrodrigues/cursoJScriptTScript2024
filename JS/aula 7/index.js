// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos, ou seja, que possibilitem o perfeito entendimento
// Não podemos começar o nome de uma constante com número
// Não pode conter espaços ou traços
// devemos utilizar camelCase , ou seja, em palavras compostas a primeira parte é minuscula
// e o inicio da outra parte é com letra maiúscula
// Case sensitive, ou seja, maiusculas são diferentes de minusculas e vice-versa
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.
// constante deve ter sempre um valor atribuido

const nome = 'João';
console.log(nome);

// operadores + - * /
const primeiroNumero =  '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);
const resultadoDuplicado=resultado*2;
let resultadoTriplicado=resultado*3;
resultadoTriplicado = resultadoTriplicado+5;
console.log(primeiroNumero);
// para verificar o tipo de dado use typeof
console.log(typeof primeiroNumero);
console.log(typeof segundoNumero);
console.log(typeof(primeiroNumero+segundoNumero));