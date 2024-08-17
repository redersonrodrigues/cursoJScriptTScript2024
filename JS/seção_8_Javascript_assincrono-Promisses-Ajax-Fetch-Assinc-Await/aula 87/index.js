function rand(min, max) {
    min += 1000;
    max += 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        // if (typeof msg !== 'string') reject('Bad Value!');
        // if (typeof msg !== 'string') reject(new Error('Erro!'));
        // aqui cai no erro diretamente se houver
        // if (typeof msg !== 'string') {
        //     // reject(false)
        //     reject('CAI NO ERRO!(reject)');
        //     return;
        // }
        setTimeout(() => {
            if (typeof msg !== 'string') {
                // reject(false)
                reject('CAI NO ERRO!(reject)');
                return;
            }
            // console.log(msg);
            resolve(msg.toUpperCase() + '- Passei na Promise');
            return;
        }, tempo);
    });
}

// Promise.all Promise.resolve Promise.race Promise.reject
const promises = [
    // 'Primeiro valor', // para executar Promise.race desativei o que não é promessa porque resolve primeiro e encerraria após a execução
    esperaAi(1000,rand(1,5)),
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1,5)),
    esperaAi('Promise 3', rand(1,5)),
    // esperaAi(1000, 1000),
    // 'Outro valor'
];

// Promise.all(promises)
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     });

Promise.race(promises) // retorna o que executa mais rápido
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    });


    function baixaPagina(params) {
        const emCash = true;

        if (emCash) {
            // return Promise.resolve('A página está em cash(resolve)'); // retorna o acerto
            return Promise.reject('A página está em cash (regect)'); // retorna o erro
        } else {
            return esperaAi('Baixei a página',3000);
        }
    }

    baixaPagina()
    .then(dadosPagina =>{console.log(dadosPagina);
    })
    .catch(e => console.log('Erro (catch)',e));