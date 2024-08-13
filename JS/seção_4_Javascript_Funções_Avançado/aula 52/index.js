// escopo léxico
const nome = 'Luiz';

function falaNome() {
    // const nome = 'Otávio'; // declarando no escopo da função falaNome
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otávio'; // embora declarada aqui não é usada porque esta usando falaNome apenas (acha o nome = Luiz fora da função)
    falaNome();
}

usaFalaNome();