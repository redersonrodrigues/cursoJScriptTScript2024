// string (indices)     012345678910 
const nome          =  'Luiz Otávio'
console.log(nome[3]);
// array(indices)        0      1       2
const alunos        =  ['Luiz','Maria','João'];
console.log(alunos);
console.log(alunos[1]);

alunos[0] = 'Eduardo'; // editando indice 0
alunos[3] = 'Luiza'; // inserindo o indice 3 diretamente
console.log(alunos);

console.log(alunos.length); // saber tamanho do array - quantidade de indices
// adicionar usando length
alunos[alunos.length] = 'Luzia';
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Luana';

console.log(alunos);
console.log(alunos.length); // agora o array ficou com o tamanho (0 ... x)

// adicionara ao final do array usando a função push
alunos.push('Otávio');
console.log(alunos);
console.log(alunos.length); // agora o array ficou com o tamanho (0 ... x)

// adicionara ao inicio do array usando a função unshift
alunos.unshift('AdicionadoPorUnshift');
alunos.unshift('AdicionadoPorSegundoComUnshift')
console.log(alunos);
console.log(alunos.length); // agora o array ficou com o tamanho (0 ... x)

// Remover do final do array usando a função pop
const removidoComPop = alunos.pop();// permite salvar o valor removido numa variável
console.log(`Foi removido com pop e salvo na variavel o valor: ${removidoComPop} ${alunos}`);
console.log(alunos.length); // agora o array ficou com o tamanho (0 ... x)

// Remove do começo do array usando a função shift
const removidoComShift = alunos.shift();// permite salvar o valor removido numa variável
console.log(`Foi removido com shift e salvo na variavel o valor: ${removidoComShift} ${alunos}`);
console.log(alunos.length); // agora o array ficou com o tamanho (0 ... x)

// deletar apenas o valor sem apagar o indice
delete alunos[1];
console.log(alunos[1]); // exibindo o valor do campo deletado 
console.log(alunos);

// undefined indica que é um valor inexistente em javascript
console.log(alunos[50]);

// fatiamento do array com slice
console.log(alunos.slice(0, -1)); // escolhe os arquivos de tras para frente, sendo -1 o que deve ser excluido da consulta
console.log(alunos.slice(0, 3));// escolhe os arquivos da equerda pra direita, contando do 1 ao x.

// array é um objeto indexado em javascript
// portanto retorna com typeof o tipo de dado object ao invés de array
console.log(typeof alunos);
console.log(alunos instanceof Array); // verifica se é um array = true/false