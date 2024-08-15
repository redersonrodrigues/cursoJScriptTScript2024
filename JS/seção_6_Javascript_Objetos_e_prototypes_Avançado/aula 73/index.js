/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop') = retorna as propriedades
 * ... (spread)
 
 * // Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
 *
 */

const produto = { nome: 'Caneta', preco: 1.8};
// const outraCoisa = produto; // assim usa o mesmo local na memória
// const outraCoisa = { ...produto, material: 'porcelana'}; // spread = copia independente, ocupa local diferente na memária
// const outraCoisa = Object.assign({},produto,{material: 'qualquer'}); // copia independente (mesmo que spread)
// Object.freeze(produto);
// produto.nome = 'tentando alterar';
// const caneca = {nome: produto.nome, preco: produto.preco};
// console.log(Object.keys(produto));
Object.defineProperty(produto,'nome',{
    writable: false,
    configurable: false,
    value: 'mudei valor no defineProperty'
});
console.log(Object.getOwnPropertyDescriptor(produto,'nome'));

produto.nome = 'outra coisa';
delete produto.nome;
produto.preco = 'esse eu altero porque não mexi nas propriedades'

console.log(Object.values(produto));// mostra somente os valores (sem as chaves)
console.log(Object.entries(produto)); // separa em array, ['chave','valor']


for (const [chave,valor] of Object.entries(produto)) {
    console.log(chave,valor);
    
}

for (const valor of Object.entries(produto)) {
    console.log(valor[0],valor[1]);
    
}

//outraCoisa.nome = 'Outro nome';
// outraCoisa.preco = 2.5;
console.log(produto);
// console.log(outraCoisa);
