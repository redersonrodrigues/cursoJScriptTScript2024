function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

// // console.log(mostraHora());
// function funcaoDoInterval(params) {
//     console.log(mostraHora());
    
// }

// setInterval(funcaoDoInterval,1000); // referencia ,intervalo de tempo (1000 = 1 seg)

// Usando uma função anônima
const timer = setInterval(function(){
    console.log(mostraHora());
    
},1000);

// função para parar a execução
setTimeout(() => {
    clearInterval(timer);
}, 5000);// 5seg

// tambem pode exibir uma mensagem na tela depois de um tempo
setTimeout(() => {
    console.log('Olá Mundo');
}, 7000); // 7 seg