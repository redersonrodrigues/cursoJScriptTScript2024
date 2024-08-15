// defineProperty e defineProperties
function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // exibe/omite
        value: estoque, // atribui valor
        // aceita função
        // value: function () {
        //     return estoque;
        // },
        writable: false, // permite/proibe alterar
        configurable: false, // pode/não pode configurar (reconfigurar/apagar/etc)
    });

    Object.defineProperties(this,{
        nome:{
            enumerable: true, // exibe/omite
            value: nome, // atribui valor
            writable: true, // permite/proibe alterar
            configurable: true, // pode/não pode configurar (reconfigurar/apagar/etc)
        },
        preco: {
            enumerable: true, // exibe/omite
            value: preco, // atribui valor
            writable: true, // permite/proibe alterar
            configurable: true, // pode/não pode configurar (reconfigurar/apagar/etc)
        }
    })
}

const p1 = new Produto('Camiseta', 20, 5);
p1.estoque = 5000;
delete p1.estoque;
// console.log(p1.estoque()); // exibe se for função
console.log(p1);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
    
}