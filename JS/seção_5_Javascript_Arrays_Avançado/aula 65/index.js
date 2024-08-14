// Filter, Map, reduce
// Filter sempre vai retornar um array com a mesma quantidade de elementos ou menos
// Filter =  vai filtrar o array
// map = vai modificar o array
// reduce = vai reduzir o array (em um único valor)

// Retorne os números menores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor) { // recebe como parametro se for necessario, o indice e o valor do array = (valor, indice,array)
//     return valor > 10; // retorna true ou false
// }
// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);


// a forma mais comumente usada para filter é:

// const numerosFiltrados = numeros.filter(function (valor) {
//     return valor > 10;
// });
// console.log(numerosFiltrados);

// melhorando -> uso arrow function
// const numerosFiltrados = numeros.filter(valor =>  valor > 10); // como retorna um valor apenas posso eliminar (),{} e return
// console.log(numerosFiltrados);

// mostrando indice e arrays a titulo de conhecimento
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
    
//     return valor > 10;
// });
// console.log(numerosFiltrados);


// Exemplo com objeto
// - Retorne as pessoas que tem o nome com 5 letras ou mais
// - Retorne as pessoas com mais de 50 anos
// - Retorne as pessoas cujo nome termina com 'a'

const pessoas = [
    {nome: 'Luiz',      idade: 62},
    {nome: 'Maria',     idade: 23},
    {nome: 'Eduardo',   idade: 55},
    {nome: 'Letícia',   idade: 19},
    {nome: 'Rosana',    idade: 32},
    {nome: 'Wallace',   idade: 47},
];

// resposta 1
const pessoaNomeCincoLetrasOuMais = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoaNomeCincoLetrasOuMais);
// resposta 2
const pessoasMaisCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMaisCinquentaAnos);
// resposta 3
const pesssoasNomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pesssoasNomeTerminaComA);