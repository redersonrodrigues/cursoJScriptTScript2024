// const nome = 'Luiz';
// const sobrenome = 'Miranda';

// const falaNome  = () => nome + ' ' + sobrenome;


// module.exports.nome = nome; // modo que exporta no npm
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome; // não estou executando, apenas declarando a exportação
// levando em conta valores por referencia o que está abaixo é identico ao que está acima
// exports.nome = nome; // modo que exporta no npm
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome; // não estou executando, apenas declarando a exportação
// this.qualquerCoisa = 'Qualquer coisa que eu quiser exportar';



// console.log(module.exports);
// console.log(exports);


/**** com classe */
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;