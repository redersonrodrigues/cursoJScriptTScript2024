function meuEscopo() {
    const form = window.document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = []; // array para receber o resultado

    // form.onsubmit = function (evento) {
    /**Forma convencional */
    // evento.preventDefault();// previne que atualize a pagina e perca os dados     
    // alert(1);
    // console.log('Foi enviado...');

    /**Forma mais moderna */
    //         let contador = 1;
    // function recebeEventoForm(evento) {
    //     evento.preventDefault();
    //     console.log(`Form não foi enviado ${contador}`);
    //     contador++;
    // }

    /**Resolvendo a proposta do exercício */
    function recebeEventoForm(evento) {
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // criar objeto com os dados vindos do form
        pessoas.push = ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} `+
        `${peso.value} ${altura.value}</p>`; 
    };


    form.addEventListener('submit', recebeEventoForm); // observar o evento submit quando for acionado
};
// }
meuEscopo();