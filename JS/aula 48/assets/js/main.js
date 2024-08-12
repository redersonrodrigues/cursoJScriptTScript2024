const inputNovaTarefa = document.querySelector('.input-nova-tarefa'); // input
const btnAddTarefa = document.querySelector('.btn-add-tarefa'); // button
const tarefas = document.querySelector('.tarefas'); // ul

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

inputNovaTarefa.addEventListener('keypress', function (e) {
    // console.log(e);
    if (e.keyCode === 13) {
        // console.log('ENTER pressionado');
        if (!inputNovaTarefa.value) return; // impede retornar se o input estiver vazio
        criaTarefa(inputNovaTarefa.value);

    }

});

function criaBotaoApagar(li) {
    li.innerText += ' '; // adiciona um espaço antes do botão
    const botaoApagar = document.createElement('button'); // cria o botão
    botaoApagar.innerText = 'Apagar'; // nomeia o botao criado
    // botaoApagar.classList.add('apagar'); // primeiro jeito de adicionar uma classe, a seguir usa o setAttribute
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar esta tarefa');

    li.appendChild(botaoApagar); // insere o botao criado e nomeado no 'li'

}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    // console.log('li');
    const listaDeTarefas = [];

    for (const tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // remover o texto Apagar (replace) e o espaço sobrando(trim)
        listaDeTarefas.push(tarefaTexto); //adiciona os testos no array listaDeTarefas
        // console.log(listaDeTarefas);
    }

    // converter em texto manipulavel
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    // console.log(tarefasJSON);
    // salva no Storage
    localStorage.setItem('tarefas', tarefasJSON);

};

function criaTarefa(textoInput) {
    // console.log(textoInput);
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
};

btnAddTarefa.addEventListener('click', function () {
    if (!inputNovaTarefa.value) return; // impede retornar se o input estiver vazio
    criaTarefa(inputNovaTarefa.value);
});

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        // console.log('apagar clicado.');
        // console.log(el.parentElement);// selecionando o elemento pai para que possa ser apagado apenas o li escolhido
        el.parentElement.remove(); // remove o elemento pai
        salvarTarefas(); // salvar após remoção para atualizar o localStorage também

    }
})

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // retornando para um array
    console.log('tarefas');
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();