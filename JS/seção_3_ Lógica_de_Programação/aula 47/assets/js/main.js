function relogio(){
function criaHoraDosSegunados(segundos) {
    const data = new Date(segundos * 1000); // ajustado para milésimos de segundo
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT',// ou UTC
    });
}
// console.log(criaHoraDosSegunados(10));


const relogio = document.querySelector('.relogio');
// não tem mais necessidade de selecionar os botões porque foi chamado abaixo no addEventListener.
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = criaHoraDosSegunados(segundos);
    }, 1000);
}

document.addEventListener('click', function (event) {
    const el = event.target; // escolhe o elemento 

    if (el.classList.contains('iniciar')) {
        //relogio.innerHTML = 'Cliquei no iniciar';
        relogio.classList.remove('pausado');
        clearInterval(timer); // para garantir que não tem dois timer rodando
        iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
        //alert('cliquei no pausar');
        clearInterval(timer);
        relogio.classList.add('pausado');
    }

    if (el.classList.contains('zerar')) {
        //alert('cliquei no zerar');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0;
    }

});

};

relogio();