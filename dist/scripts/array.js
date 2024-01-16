"use strict";

var redesSociais = ["Facebook", "Instagran", "Twitter"];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil nas Rede social : ".concat(redesSociais[i]));
}
redesSociais.forEach(function (item, indice) {
  console.log("Eu tenho perfil nas Rede social : ".concat(item, ", ").concat(indice));
});
var alunos = ["Gustavo", "Julia", "Paula", "Wagner"];
var meusAlunos = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: "Developer Front-end"
  };
});
console.log(meusAlunos);
var paula = meusAlunos.find(function (item) {
  return item.nome == "Paula"; // true ou false
});
console.log(paula);
var indiceDaPaula = meusAlunos.findIndex(function (item) {
  return item.nome == "Paula"; // true ou false
});
console.log(indiceDaPaula);
meusAlunos.push({
  nome: "Lucas",
  curso: "Developer Back-end"
});

//every

var alunosnoFrontEnd = meusAlunos.every(function (item) {
  return item.curso == "Developer Front-end";
});
console.log(alunosnoFrontEnd);
var existeAlunoBackEnd = meusAlunos.some(function (item) {
  return item.curso === "Developer Back-end" && item.curso === "Developer Front-end";
});
console.log(existeAlunoBackEnd);
function filtraAlunosdeFrontend(aluno) {
  return aluno.curso === "Developer Front-end";
}

//const filtraAlunosdeFrontend = (aluno) => aluno.curso === "Developer Front-End";

var alunosFrontend = meusAlunos.filter(filtraAlunosdeFrontend);
console.log(alunosFrontend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomesDosAlunos = meusAlunos.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
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