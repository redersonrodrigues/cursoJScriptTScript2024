const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
// const middleware = require('./src/middlewares/middleware'); // forma 1 de chamado do middleware
const { middlewareGlobal, outroMiddleware} = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

// Pasta de conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')));

// caminho absoluto da pasta de views
app.set('views', path.resolve(__dirname, 'src', 'views'));

// funciona tambem com o caminho relativo mas por questão pessoal prefiro o absoluto
// app.set('views','./src/views');

// usar um engine
app.set('view engine', 'ejs');

// Nossos proprios middlewares
// app.use(meuMiddleware);
app.use(middlewareGlobal);
app.use(outroMiddleware);

app.use(routes);


app.listen(3000, () => {
    console.log('Acessar: http://localhost:3000');
    console.log('Servidor executando na porta 3000...');
    console.log('aperte "Ctrl + C" para parar');

}); // porta ouvida