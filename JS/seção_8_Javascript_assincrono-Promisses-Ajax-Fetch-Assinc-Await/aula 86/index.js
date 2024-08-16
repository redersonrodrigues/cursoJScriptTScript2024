function rand(min, max) {
    min += 1000;
    max += 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
// if (typeof msg !== 'string') reject('Bad Value!');
// if (typeof msg !== 'string') reject(new Error('Erro!'));
if (typeof msg !== 'string') reject(false);

        setTimeout(() => {
            // console.log(msg);
            resolve(msg);
        }, tempo);
    });


}

esperaAi('Conexao com DB', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe os dados da tela');
    })
    .catch(e => {
        console.log('Erro: ', e);
    });


console.log('Isso vai ser exibido antes de qualquer promisse');

