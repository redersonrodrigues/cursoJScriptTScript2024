// try {
//   console.log(naoExisto);  
// } catch (error) {
//     console.log('naoExisto não existe.');
//     console.log(error);

// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // throw ('x e y precisam ser um número');
        // throw new Error("x e y precisam ser um número");
        throw new ReferenceError("x e y precisam ser um número");


    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error) {
    // console.log(error);
    console.log('Alguma coisa mais amigável para o usuário.');
    
}




