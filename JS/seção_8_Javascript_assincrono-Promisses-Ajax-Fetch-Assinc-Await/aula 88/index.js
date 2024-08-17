function rand(min = 0, max = 3) { // com valores padrão
    min += 1000;
    max += 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                // reject(false)
                reject('CAI NO ERRO!(reject)');
                return;
            }
            resolve(msg.toUpperCase() + '- Passei na Promise');
            return;
        }, tempo);
    });
}
// esperaAi('Frase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Frase 2', rand()); // Retorna a nova promessa
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Frase 3', rand()); // Retorna a nova promessa
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log('Terminamos na fase: ', fase);        
//     })
//     .catch(e => {
//         console.log('Erro:', e);
//     });

/** Usando Async/Await */
async function executa() {
    try {
        // const fase1 =  esperaAi('Frase 1', rand()); // Promisse pending - ocorre quando não existe then/await
        // setTimeout(() => {
        //     console.log('Esta promise estava pendente', fase1);          
        // }, 1100);
        const fase1 =  await esperaAi('Frase 1', rand());
        const fase2 = await esperaAi('Frase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('Frase 3', rand());
        console.log(fase3);
        console.log('Terminamos na fase: ', fase3);
    } catch (e) {
        console.log(e);
    }
}
// executa();

// outro exemplo de promise pending
const teste2 = esperaAi('qlq',5000);
console.log(teste2);
