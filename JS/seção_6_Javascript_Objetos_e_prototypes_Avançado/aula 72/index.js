// defineProperty - Getter e Setter
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // exibe/omite
        configurable: true, // pode/não pode configurar (reconfigurar/apagar/etc)
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                // console.log('Bad value!');   
                // return;
                throw new TypeError("O valor do estoque tem que ser um número inteiro");
            }
            // console.log(valor); 
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 5);
console.log(p1);
// p1.estoque = 'O valor que eu quero';
// p1.estoque = 500;
console.log(p1.estoque);


// numa factory function
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa',' ');
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);
