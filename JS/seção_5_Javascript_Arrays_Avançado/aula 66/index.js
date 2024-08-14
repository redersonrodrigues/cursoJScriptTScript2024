// map = similar ao filter, entretanto pode alterar os valores do array

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// exemplo mostrando valor, indice e array como no filter
// const dobraValarNumeros = numeros.map(function (valor, indice, array) {
//     console.log(valor, indice, array);
// });

// Exemplos
// - Dobrar o valor dos numeros
// const dobraValorNumeros = numeros.map(function (valor) { // modo convencional de função
//     return valor*2;
// });
// console.log(dobraValorNumeros);

// melhorado com arrow function
const dobraValorNumeros = numeros.map(valor => valor * 2);
console.log(dobraValorNumeros);

// Exemplo com objeto
// Para cada elemento:
// - Retorne apenas uma string com o nome da pessoa
// - Remova apenas a chave "nome" do objeto
// - Adicione uma chave id em cada obj
const pessoas = [
    {nome: 'Luiz',      idade: 62},
    {nome: 'Maria',     idade: 23},
    {nome: 'Eduardo',   idade: 55},
    {nome: 'Letícia',   idade: 19},
    {nome: 'Rosana',    idade: 32},
    {nome: 'Wallace',   idade: 47},
];

// resposta 1
const retornaStringComNomeDaPessoa = pessoas.map( obj => obj.nome);
console.log(retornaStringComNomeDaPessoa);
// resposta 2
// modo 1
// const removaApenasChaveNomeDoObjeto = pessoas.map((obj) => {delete obj.nome; return obj});
// console.log(removaApenasChaveNomeDoObjeto);
// modo 2
const removaApenasChaveNomeDoObjeto = pessoas.map(obj => ({idade: obj.idade})); // usei parentes no lugar da chaves no arrow function para adequar
console.log(removaApenasChaveNomeDoObjeto);
// modo 3
// const removaApenasChaveNomeDoObjeto = pessoas.map(obj => obj.idade);
// console.log(removaApenasChaveNomeDoObjeto);

// resposta 3
const addChaveIdObjeto = pessoas.map((obj,indice) => {
    const novoObjeto = { ...obj }; // spread para evitar mudar o objeto original
    novoObjeto.id = (indice +1)* 100;
    return novoObjeto;
});
console.log(addChaveIdObjeto);
