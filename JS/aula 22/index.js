/**
 * Operadores lógicos
 * && -> AND -> E // todas as expressões precisam ser verdadeiras para retornar true
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 * 
 */

console.log(true && true && true && true); // todas as expressões precisam ser verdadeiras

// com expressão
const expressaoAnd = true && true && false && true;
const expressaoOr  = true || false; // Se apenas 1 for verdadeira retorna true
const expressaoNot = !true; // Nega true, quero falso /// ou Nega falso, quero true
console.log(expressaoNot);
