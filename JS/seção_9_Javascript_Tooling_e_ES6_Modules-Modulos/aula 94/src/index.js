// import { nome as nome2, sobrenome, idade, soma, Pessoa } from "./modulo1"; // usa 'as' para renomear variavel para evitar conflito
// const nome = 'João';
// console.log(nome2, nome, sobrenome, idade);
// console.log(soma(5,5));
// const p1 = new Pessoa('Maria','Machado');
// console.log(p1);

// Importar tudo de uma vez
// import * as MeuModulo from './modulo1';
// console.log(MeuModulo);

/** Importar padrão (default) */
// import qualquerNome from "./modulo1";
// console.log(qualquerNome(3,4));

import Pessoa, { nome, sobrenome } from "./modulo1";
const p1 = new Pessoa(nome, sobrenome);
console.log(p1);
