let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// // maneira mais simples de remover
// const varATemp = varA
// varA = varB;
// varB = varC;
// varC = varATemp;

// maneira aprimorada mais recente de se resolver
[varA,varB,varC] = [varB,varC,varA]




console.log(varA,varB,varC);