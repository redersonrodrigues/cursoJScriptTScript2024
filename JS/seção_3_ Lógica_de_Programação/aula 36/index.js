// For in lê os indices ou chaves do objeto
//                  0       1       2
const frutas =  ['Maça', 'Pera', 'Uva'];

for (let index in frutas) {
console.log(frutas[index]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (const chave in pessoa) {
console.log(chave, pessoa[chave]);

}
