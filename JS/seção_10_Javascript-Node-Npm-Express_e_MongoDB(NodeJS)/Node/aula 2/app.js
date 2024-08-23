// const multiplicacao = require('./B/C/D/mod'); // (ponto + barra = avança as pastar a partir de onde esta o arquivo)
// console.log(multiplicacao(2,2));
const Cachorro = require('./Z/mod2'); // : (dois pontos + barra = volta uma pasta a partir de onde esta o arquivo)

const c1 = new Cachorro('Dog');
c1.latir();

// console.log(Cachorro);

/*** __dirname e __filename */
console.log(__dirname); // nome da pasta atual - caminho absoluto
console.log(__filename); // nome do arquivo atual - caminho absoluto

const path = require('path');
console.log(path.resolve(__dirname, '..','..')); // desta forma exclui dois niveis do path
console.log(path.resolve(__dirname, '..','..', 'aquivos','imagem')); // desta forma volta dois niveis e acrescenta outros dois (.. = retroage / . =  mantem a pasta)
console.log(path.resolve(__dirname, '.','.', 'aquivos','imagem')); // desta forma volta dois niveis e acrescenta outros dois (.. = retroage / . =  mantem a pasta)