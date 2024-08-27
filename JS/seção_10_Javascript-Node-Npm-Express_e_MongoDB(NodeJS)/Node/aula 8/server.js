const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // res.send('Hellow <b>World</b>!')
    // exemplo com formulário
    res.send(`<form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Olá mundo</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body); // req.body é o que vem digitado no input de acordo com o name colocado

    res.send(`O que você me enviou foi: ${req.body.nome}`);
    res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res.send('<p><b>Obrigado por entrar em contato conosco!...</b></p>')
});
// http://localhost:3000/teste/?nome=Luiz&sobrenome=Miranda&idade=30&facebookprofile=http://facebook/profile/154324
app.get('/teste/:idUsuarios?/:paramentro2?', (req, res) => {
    //  params = teste/parametro/1
    // query =  /?chave1=valor1&chave2=valor2$chave3=valor3
    // console.log(req.params.idUsuarios);
    console.log(req.params);
    console.log(req.query);


    // res.send(req.params.idUsuarios);
    // res.send(req.params);

    // res.send(req.query); // quando usa query strings
    res.send(req.query.facebookprofile); // quando usa query strings



});

app.listen(3000, () => {
    console.log('Acessar: http://localhost:3000');
    console.log('Servidor executando na porta 3000...');
    console.log('aperte "Ctrl + C" para parar');

}); // porta ouvida