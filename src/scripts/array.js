const redesSociais = ["Facebook", "Instagran", "Twitter"];

for (let i = 0; i < redesSociais.length; i++) {
  console.log(`Eu tenho perfil nas Rede social : ${redesSociais[i]}`);
}

redesSociais.forEach((item, indice) => {
  console.log(`Eu tenho perfil nas Rede social : ${item}, ${indice}`);
});

const alunos = ["Gustavo", "Julia", "Paula", "Wagner"];
const meusAlunos = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: "Developer Front-end",
  };
});

console.log(meusAlunos);

const paula = meusAlunos.find(function (item) {
  return item.nome == "Paula"; // true ou false
});
console.log(paula);

const indiceDaPaula = meusAlunos.findIndex(function (item) {
  return item.nome == "Paula"; // true ou false
});

console.log(indiceDaPaula);

meusAlunos.push({
  nome: "Lucas",
  curso: "Developer Back-end",
});

//every

const alunosnoFrontEnd = meusAlunos.every(function (item) {
  return item.curso == "Developer Front-end";
});
console.log(alunosnoFrontEnd);

const existeAlunoBackEnd = meusAlunos.some(function (item) {
  return (
    item.curso === "Developer Back-end" && item.curso === "Developer Front-end"
  );
});

console.log(existeAlunoBackEnd);

function filtraAlunosdeFrontend(aluno) {
  return aluno.curso === "Developer Front-end";
}

//const filtraAlunosdeFrontend = (aluno) => aluno.curso === "Developer Front-End";

const alunosFrontend = meusAlunos.filter(filtraAlunosdeFrontend);

console.log(alunosFrontend);

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);

console.log(soma);

let somaComFor = 0;
for (let i = 0; i < nums.length; i++) {
  somaComFor += nums[i];
}

console.log(somaComFor);

const nomesDosAlunos = meusAlunos.reduce(function (acumulador, itemAtual) {
  acumulador += `${itemAtual.nome} `;
  return acumulador;
}, "");
console.log(nomesDosAlunos);

/*
const numeros = [1, 2, 3, 4, 5];
const dobroNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});

console.log(dobroNumeros);
*/
