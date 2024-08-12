/**
 * && -> false && true -> false "o valor mesmo"
 * 
 * 
 * Avaliação de Curto-Circuito (Short-Circuit): // para a execução
 * FALSY -> analisam falso e com isso para a execução
 * false
 * 0
 * ' " ``
 * null / undefined
 * NaN
 * 
 *  */

// console.log('Luiz Otávia' && 0 && 'Maria');
// console.log('Luiz Otávia' && true && 'Maria');
// console.log('Luiz Otávia' && true && 'NaN');
// console.log(0 || false || null || 'Luiz Otávio'||true);

// // const corUsuario = null;

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);