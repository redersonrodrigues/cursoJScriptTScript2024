// Exemplos
// Retorne a soma do dobro de todos os pares
// filtrar -> pares
// dobrar os valores
// reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// resolução separada feita por mim
const retornaPares = numeros.filter(valor => valor % 2 === 0);

const dobroPares = retornaPares.map(valor => valor * 2);

const somaPares = dobroPares.reduce((acumulador,valor)=>{
    acumulador += valor;
    return acumulador;
},0);
console.log(retornaPares);
console.log(dobroPares);
console.log(somaPares);

// resolução encadeada feita pelo professor

const somaParesEncadeado = numeros
        .filter(valor => valor % 2 === 0)
        .map(valor => valor * 2)
        .reduce((ac,valor)=> ac + valor);

console.log(somaParesEncadeado);



// const pessoas = [
//     {nome: 'Luiz',      idade: 62},
//     {nome: 'Maria',     idade: 23},
//     {nome: 'Eduardo',   idade: 55},
//     {nome: 'Letícia',   idade: 19},
//     {nome: 'Rosana',    idade: 64},
//     {nome: 'Wallace',   idade: 47},
// ];

// const pessoaMaisVelha = pessoas.reduce((acumulador, valor)=> {
//     // acumulador recebe o valor da comparação        
//     if (acumulador.idade > valor.idade) return acumulador;
// // após a comparação retorna o valor contido no acumulador
//             return valor; // resultado da comparação das idades, sendo que a maior foi armazenada no acumulador
// },0);

// console.log(pessoaMaisVelha);
