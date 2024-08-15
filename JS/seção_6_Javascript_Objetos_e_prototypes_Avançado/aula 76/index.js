// Herança

// Produto -> aumento e desconto
// Camiseta - cor; Caneca - material

function Produto(nome, preco) {
    this.nome = nome,
        this.preco = preco
};

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

// função construtora para Caneca
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
// linkar os prototype
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;

// função construtora para Camiseta
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // linkar com classe pai (Produto)
    this.cor = cor;
}
// linkar os prototype
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;


// subscrever o metodo aumento a titulo de estudo
Produto.prototype.aumento = function (percentual) { this.preco += (this.preco * (percentual / 100)) };

const produto = new Produto('Genérico', 111);
const camiseta = new Camiseta('Regata', 7.50, 'preta');
const caneca = new Caneca('Caneca Amiga', 13, 'porcelana', 5)
// caneca.estoque = 'teste';
caneca.estoque = 100;
camiseta.aumento(100); // aumento de 10 reais no preço
produto.aumento(100);
caneca.desconto(10); // desconto de 10 reais
caneca.aumento(100); // aumento de 100 porcento - porque foi subscrito aumento
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);
console.log(produto);

