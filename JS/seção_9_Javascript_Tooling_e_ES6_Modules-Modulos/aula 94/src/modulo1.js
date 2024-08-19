// const nome = 'Luiz';
// const sobrenome = 'Miranda';
// const idade = 3;

// function soma(x,y) {
//     return x + y;
// }

// export { nome, sobrenome, idade, soma };
// usando 'as' posso renomear os nomes das variaveis tanto na importação quanto na exportação
// Obs: é mais comum usar export no ato da criação comos segue abaixo

export const nome = 'Maria';
export const sobrenome = 'Mortadela';
export const idade = 300;

export function soma(x,y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome,sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export function multiplicacao(x,y) {  // default só pode haver 1 por módulo
    return x * y;
}

/**Para variaveis const serem usadas como padrão (default) é melhor usar a forma inicial de exportação 
 * Isso vale tampem para a função multiplicação e soma: basta apenas inserir 'as default'
*/
// export { nome, sobrenome, idade, soma, multiplicacao};
