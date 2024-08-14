// indices       0        1         2           3          4        5           6
const nomes = ['João', 'Pedro', 'Claudio', 'Suliana', 'Pedrina', 'Claudia', 'Genaro'];

// splice = (indice, delete(qtos elem deseja remover), elem 1 add, alem 2 add, elem 3 add ...)
// simular o comando pop
// const removidos = nomes.splice(-1,1)
// simular o comando shift
// const removidos = nomes.splice(0,1);
// simular o comando push
// const add = nomes.splice(nomes.length, 0, 'Luiz', 'Otávio', 'Miranda');
// simular o comando unshift
const add = nomes.splice(0, 0, 'Primeiro', 'Segundo', 'Terceiro');

// const removidos = nomes.splice(6,1); // apagar o indice 6 (1 indica quantos elementos desejo excluir)
// const removidos = nomes.splice(5,2); // começando no indice 5, remova dois elementos
// const removidos = nomes.splice(-2,1); // começando do -2 remova 1 elemento
// const removidos = nomes.splice(-2,2); // começando do -2 remova dois elementos
// const removidos = nomes.splice(-2,Number.MAX_VALUE);// começando do -2 remova o maximo valor aceito em javascript
// const removidos = nomes.splice(3,2,'João','Otávio'); // começando no indice 3 remova 2 elementos e adicione Jõao e Otávio, ou seja
// removi do indice 3 Suliana e do indice 4 Pedrina (dois elem que pedi para remover) e no indice 3 adicionei João e no indice 4 Otávio
// se tivesse pedido para adicionar mais um outro nome seria adicionado no indice 5 e empurraria os indices subsequentes, se existissem,
// para a direita
console.log(nomes);