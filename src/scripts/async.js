const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
  try {
    let execusoes = 0;
    for (let i = 0; i < 1000000000; i++) {
      execusoes++;
    }
    resolve(execusoes);
  } catch (e) {
    reject(" Deu erro na interação dos numeros");
  }
});
console.log("inicio");
funcaoMuitoPesadaPromise.then((resultado) => console.log(resultado));
console.log("Fim das execuções");

const minhaPromise = new Promise((resolve, reject) => {
  try {
    let execusoes = 0;
    for (let i = 0; i < 1000000000; i++) {
      execusoes++;
    }
    resolve(execusoes);
  } catch (e) {
    reject("Deu pau irmão");
  }
});

const promiseComParametros = (login, senha) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Logado com  o usuario :${login}`);
    }, 3000);
  });
};

console.log("incio");
minhaPromise
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.log(erro));
console.log("Terminou mano");

async function execusaoPrincipal() {
  console.log("incio");
  //  await minhaPromise
  //  .then((resultado) => console.log(resultado))
  // .catch((erro) => console.log(erro));
  promiseComParametros("emmanuelmarcosdeoliveira@gmail.com", 123456).then(
    (resultado) => {
      console.log(resultado);
    }
  );

  try {
    const resultado = await funcaoMuitoPesadaPromise;
    console.log(resultado);
  } catch (e) {
    console.log(e);
  }
  console.log("Fim");
}

execusaoPrincipal();
