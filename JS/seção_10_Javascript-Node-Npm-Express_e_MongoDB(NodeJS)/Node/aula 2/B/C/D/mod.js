// module.exports = function (x,y) {
//     return x * y;
// }

/** Exemplo com a classe */
module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }
    latir(){
        console.log(`O ${this.nome} está latindo: au au`);
        
    }
};

