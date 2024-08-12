const numero = 10;

if (numero >= 0 && numero <= 5) { // se isso ocorrer execute o {código}
    console.log('O número está entre 0 e 5');
} else { // se não faça isso {cidigo}
    console.log('O número NÂO está entre 0 e 5.');
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) { // Verdadeiro
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número NÂO está entre 0 e 11.');
}

// OBS: nunca poderá haver duas verificações verdadeiras no encadeamento if 
// porque ao encontrar a primeira condição que satisfaça ele sai do if e continua lendo o codigo logo abaixo