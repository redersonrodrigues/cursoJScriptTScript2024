// ForEach => só se aplica a arrays

const a1 = [10, 20, 30];

// for (let valor of a1) {
//     console.log(valor);
// }

// forEach faz o mesmo que o for
// a1.forEach(function(valor,indice,array){
//     console.log(valor,indice,array);
// });

//Exemplo - simular o reduce com forEach
let total = 0;
a1.forEach(valor => {
    total += valor;
});
console.log(total);
