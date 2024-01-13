"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "Ola arrow Functions";
};
console.log(minhaFuncao());
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: "Ka",
    fabricante: "Ford"
  };
};
console.log(retornaUmCarro());
var carro = {
  velocidade: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    console.log(_this);
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);