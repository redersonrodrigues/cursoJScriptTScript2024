/*** INTERAÇÃO CO ARRAY */

//            0123...
// const nome = 'Luiz Otávio'; // usando string
// const nomes = ['Luiz', 'Otávio', 'Miranda'];
// // for convencional
// for (let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i]);
// }
// console.log('################################################');

// // for in
// for (let i in nomes) {
//     console.log(nomes[i]);  
// }
// console.log('################################################');
// // for of
// for (const valor of nomes) {
//     console.log(valor);    
// }
// console.log('################################################');
// // usando forEach -  interar com array
// nomes.forEach(function (valor, indice,array) { // obtenho = (valor, indice, arrayCompleto)
//     console.log(valor, indice,array);

// })


/*** INTERAÇÃO COM OBJETO */
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

// obs: o for convencional não dá para usar com objeto (iteraveis, arrays ou strings)
// for of -  não dá pra usar com objeto (iteráveis, arrays ou strings)
// isso se explica porque objetos não são iteráveis
// for in - dá certo com objeto ( porque retorna o indice) - pode ser usado com iteraveis, arrays, strings ou objetos
for (const chave in pessoa) {
 console.log(chave,pessoa[chave]);
 
}