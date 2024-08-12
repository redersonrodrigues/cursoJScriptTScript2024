// try {
//     // é executado quando não há erro
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro.');
//     console.log('Fechei o arquivo');
//     try {
//         console.log(b);

//     } catch (error) {
//         console.log('Deu erro.');

//     }finally{
//         console.log('Eu também sou finally.');

//     }

// } catch (error) {
//     // é executado quando há erro
//     console.log('Tratando o erro');

// } finally {
//     // é executado sempre
//     console.log('FINALLY: Eu sempre sou executado.');

// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        // console.log('Não é');
        throw new TypeError("Esperando instancia de Date.");
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

// retornaHora();
// retornaHora('a');
// retornaHora(11);
// retornaHora(new Date());

try {
    const data = new Date('01-01-1970 15:58:36');
    //const hora = retornaHora(data);
    const hora = retornaHora(11); // gerando o erro para ser tratado
    console.log(hora);
} catch (error) {
    // tratar erro.
    console.log(error); // mostrar o erro

} finally {
    console.log('Tenha um bom dia.');
}


