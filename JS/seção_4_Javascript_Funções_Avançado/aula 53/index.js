// Global
function retornaFuncao(nome) {
    // const nome = 'Luiz';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz'); // closure 1
const funcao2 = retornaFuncao('João'); // closure 2
console.dir(funcao);
console.log(funcao2);
console.log(funcao(),funcao2());

// closure = é quando fecha um escopo da função (return)
// ou melhor, é a habilidade que a função tem de acessar o seu escopo léxico