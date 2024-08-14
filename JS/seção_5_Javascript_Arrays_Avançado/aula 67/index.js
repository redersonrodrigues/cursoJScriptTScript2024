// // Exemplos
// // Some todos os numeros (reduce)
// // Retorne um array com os pares (Filter)
// // Retorne um array com o dobro dos valores (Map)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// // resposta 1
// const SomaTodosNumeros = numeros.reduce(function(acumulador, valor,indice,array){
//     // console.log(acumulador, valor);
//     acumulador += valor;
//     return acumulador;
// }, 0); // zero é o valor atribuido ao acumulador
// console.log(SomaTodosNumeros);

// // resposta 2
// // com reduce
// const retornaNumerosPares = numeros.reduce(function(acumulador, valor,indice,array){
//     if (valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []); // [] = array vazio a ser formado com os numeros pares
// console.log(retornaNumerosPares);
// // com filter
// const retornaNumParFilter =  numeros.filter(valor => valor % 2 === 0);
// console.log(retornaNumParFilter);

// // resposta 3
// // com reduce
// const retornaDobroValores = numeros.reduce(function(acumulador, valor,indice,array){
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []); // [] = array vazio a ser formado com os numeros dobrados
// console.log(retornaDobroValores);
// // com map
// const retornaDobroValoresMap =  numeros.map(valor => valor * 2);
// console.log(retornaDobroValoresMap);

// Exemplo com objeto
// - Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Luiz',      idade: 62},
    {nome: 'Maria',     idade: 23},
    {nome: 'Eduardo',   idade: 55},
    {nome: 'Letícia',   idade: 19},
    {nome: 'Rosana',    idade: 64},
    {nome: 'Wallace',   idade: 47},
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor)=> {
    // acumulador recebe o valor da comparação        
    if (acumulador.idade > valor.idade) return acumulador;
// após a comparação retorna o valor contido no acumulador
            return valor; // resultado da comparação das idades, sendo que a maior foi armazenada no acumulador
},0);

console.log(pessoaMaisVelha);
