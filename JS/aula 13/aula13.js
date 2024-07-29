let umaString = "Exibir  \"aspas duplo\", barra invertida \\,"; // exibir o aspas
console.log(umaString);

let pegandoIndice = `indice`;
console.log(pegandoIndice[4]); // pegando o indice na posição 4 (como nos arrays) / indice negativo ou inexistente retorna undefined

// usando funções
console.log(pegandoIndice.charAt(4));

// concatenando
let stringDois = `Um texto`;
// console.log(stringDois.concat(' em um lindo dia'));
// console.log(stringDois + ' em um lindo dia');
console.log(`${stringDois} em um lindo dia`);

// indexOf e lastIndiceOf (case sensitive)
console.log(stringDois.indexOf('Um', 0)); // indexOf(texto procurado,indice que começa a procura) = retorna -1 se não encontrar - da esquerda pra direita
console.log(stringDois.lastIndexOf('Um',8)); // idem a indexOf mas do fim para o começo.

// match, search e replace
console.log(stringDois.match(/[a-z]/g));// match é com expressões regulares e retorna as letras
console.log(stringDois.search(/x/));// semelhante a match, também com expressões regulares, entretanto retorna o indice
console.log(stringDois.replace('Um', 'Outra')); // expressões regulares facultativas, se encontra substitui pela palavra desejada
console.log(stringDois.replace(/Um/, '(Mudei de novo)')); // replace usando expressões regulares
let stringTres = `O rato roeu a roupa do rei de roma.`;
console.log(stringTres.replace(/r/,'#')); // substitui apenas o primeiro que encontrar com esta expressão regular
console.log(stringTres.replace(/r/g,'#')); // desta forma substitui todos os 'r' que encontrar.
// lenght
console.log(stringTres.length); // retorna o total de caracteres de uma string
// splice (valor positivo (da esquerda pra direita)- valor negativo (de trás pra frente))
console.log(stringTres.slice(2,6)); // pega trechos pelos indices
console.log(stringTres.slice(-3)); // é o mesmo que console.log(stringTres.lenght(32))
// - sendo o 32 resultado do total de caracteres menos o valor negativo (-3 no caso)
console.log(stringTres.slice(-3,-1));// o -1 como segundo parâmetro subtrai -1 do total de caracteres e omite do resultado os caracteres sobrando

// substring
console.log(stringTres.substring(stringTres.length - 3, stringTres.length -1)); // obtem o mesmo resultado de slice
// split
console.log(stringTres.split(' ')); // separa a string em array, cortando no caracter escolhido
console.log(stringTres.split(' ',3)); // o segundo parametro define a quantidade de palavras a serem mostradas
// toUpperCase e toLowerCase
console.log(stringTres.toUpperCase()); // todos os caracteres em maiúsculo
console.log(stringTres.toLowerCase()); // todos os caracteres em minúsculo