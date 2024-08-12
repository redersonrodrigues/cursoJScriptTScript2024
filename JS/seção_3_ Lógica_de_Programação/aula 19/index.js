/**
 * Primitivos (imutáveis) = string, number, boolean, undefined,
 * null (bigint, symbol) - valores copiados
 * Referência (mutável) - array, object, function - passados por referência
 */

// let nome = 'Luiz';
// nome = 'Otávio';
// nome[0] = 'R'

// console.log(nome[0],nome);

// let a = 'A';
// let b = a; // cópia
// console.log(a,b);
// a = 'Outra coisa';
// console.log(a,b);

// let a = [1,2,3];
// let b = a; // neste caso (referência) apontam para o mesmo local na memória
// let c = b;

// let a = [1,2,3];
// let b = [...a]; // neste caso (estou fazendo um spread) os valores de b se tornam totalmente independentes
// let c = b;



// console.log(a,b);

// a.push(4);
// console.log(a,b); // a e b terão os mesmos dados não importando em qual sofreu alteração

// b.pop();
// console.log(a,b); // a e b terão os mesmos dados não importando em qual sofreu alteração

// a.push('Luiz');
// console.log(a,c); // c possui os mesmos dados porque recebe os dados de b por referência, ou seja, apontam para o mesmo local na memória


const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

// const b = a; // assim (por referência) aponta para o mesmo local na memória, portanto, se altera um o outro tambem é alterado
const b = {...a}; // com spreed o valor de a não é mais dependente, e não altera se b for alterado

a.nome = 'João'; 

console.log(a);
console.log(b);
