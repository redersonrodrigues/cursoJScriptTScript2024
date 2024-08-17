
/******* MODO ANTIGO DE SE TRABALHAR COM AJAX (XMLHttpRequest)********/
// const request = obj => {
//   // return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         obj.success(xhr.responseText);
//         // resolve(xhr.responseText);
//       } else {
//         obj.error({
//           code: xhr.status,
//           msg: xhr.statusText
//         });
//         // reject(xhr.statusText);
//       }
//     });
//   // });
// };

// document.addEventListener('click', e => {
//   const el = e.target;
//   const tag = el.tagName.toLowerCase();

//   if (tag === 'a') {
//     e.preventDefault();
//     carregaPagina(el);
//   }
// });

// function carregaPagina(el) {
//   // async function carregaPagina(el) {
//   const href = el.getAttribute('href');

//   // console.log(href);
//   const objetoConfig = {
//     method: 'GET',
//     url: href,
//     success(response) {
//       carregaResultado(response);
//     },
//     error(errorText) {
//       console.log(errorText);
//     }
//   };

// request(objetoConfig);
// }

// function carregaResultado(response) {
//   const resultado = document.querySelector('.resultado');
//   resultado.innerHTML = response;
// }

/******* MODO COM PROMISE *******/
// 1 - remover os callbacks
const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}