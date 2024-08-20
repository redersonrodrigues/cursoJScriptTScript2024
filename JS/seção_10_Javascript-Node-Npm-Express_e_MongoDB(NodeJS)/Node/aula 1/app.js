// const mod1 = require('./mod1');
// const mod1 = require('./mod1').falaNome;
// const falaNome = mod1.falaNome;
// console.log(mod1);
// console.log(mod1.falaNome());

// const { nome, sobrenome, falaNome} = require('./mod1') 
// console.log(nome,sobrenome);

// console.log(falaNome());

/** Importação de pacotes instalados */
const path = require('path');
const axios = require('axios');

axios.get('https://www.otaviomiranda.com.br/files/json/pessoas.json')
  .then(response => console.log(response.data))
  .catch(e => console.log(e));


 //const {Pessoa} = require('./mod1');

// const p1 = new Pessoa('Luis');

// console.log(p1);
