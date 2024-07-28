let nome = 'Otávio';

console.log(nome, 'nasceu em 1984');
console.log('Em 2000 ', nome, 'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve um filho com ', nome, 'em 2015');
console.log('O filho de ', nome,  'se chama Eduardo.');


// valor undefined
let variavelUndefined; // Declarou a variável
variavelUndefined = 'Qualquer valor'; // Inicializando a variável
console.log(variavelUndefined);
variavelUndefined = 'Valor novo';
console.log(variavelUndefined);

// Não podemos criar variáveis com palavras reservadas
// exemplo: let if;
// Variáveis precisam ter nomes significativos, ou seja, que possibilitem o perfeito entendimento
// exemplo: let nomeCliente;
// Não podemos começar o nome de uma variável com número
// Não pode conter espaços ou traços
// devemos utilizar camelCase , ou seja, em palavras compostas a primeira parte é minuscula
// e o inicio da outra parte é com letra maiúscula
// variáveis são case sensitive, ou seja, maiusculas são diferentes de minusculas e vice-versa
// Não podemos redeclarar variáveis com let, ou seja, apenas repete-se o nome da variavel sem let
// NÃO UTILIZE VAR, UTILIZE LET