// // Arrays são valores por referência = apontam para o mesmo local na memória
// // O que faz em um também é feito no outro (no caso de renomear por exemplo)
// // indexado =>    0           1        2
// // const nomes = ['Eduardo', 'Maria', 'Joana']; // array literal
// const nomes = new Array('Eduardo', 'Maria', 'Joana'); // array criado usando o construtor
// // nomes[2] = 'João';
// // delete nomes[2];
// // console.log(nomes);

// // const novo = nomes;
// // novo.pop();

// // console.log(novo);

// // para que não seja mais por referencia eu faço spred

// // novo = [...nomes];// com spreed = faz uma copia fiel
// novo = nomes; // sem spreed = sofre alterações
// // const removido = novo.pop(); // exclui o ultimo indice do array 
// const removido = novo.shift(); // exclui o primeiro indice do array e desloca os demais para a esquerda
// console.log(novo, removido);
// console.log(novo.push('João'));// adiciona um valor na ultima posição após o ultimo indice
// console.log(novo.push('Pedrita'));
// console.log(novo.unshift('Saulo'));// adiciona um valor na primeira posição antes do primeiro indice (zero)
// console.log(novo.unshift('Silas'));
// console.log(nomes);
// console.log(nomes.length);
// console.log(nomes.slice(1,3));// exibe indice 1 e 2, o indice 3 não será incluido.
// // se negativo no 2º parâmetro, remove o ultimo (-1 = remove um; -2 = remove os dois ultimos da lista e assim por diante)
// console.log(nomes.slice(0,-1)); // o parâmetro da esquerda indica o índice onde começa a ser exibido

/** converter uma string num array */
// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' ');
// console.log(nomes);

/** unir os elementos de um array */
const nomes = ['Luiz','Otávio','Miranda'];
const nome = nomes.join(' ');
console.log(nome);

