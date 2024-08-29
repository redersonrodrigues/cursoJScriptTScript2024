exports.paginaInicial = (req, res) => {
    // console.log('Respondendo ao cliente...');
    res.render('index');
    // console.log(`'pagina Inicial' = Olha o que tem na req.session.nome ${req.session.nome}`);
    return;
};

exports.trataPost = (req, res) => {
    // res.send('Ei, sou sua nova rota de POST.');
    res.send(req.body);
    return;
};