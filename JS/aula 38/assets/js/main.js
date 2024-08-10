const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);


for (const p of ps) {
    // console.log('p');
    p.style.backgroundColor = backgroundColorBody; // cor igual ao fundo da pagina
    p.style.color = '#FFFFFF'; // cor do texto dos paragrafos em branco
    
}