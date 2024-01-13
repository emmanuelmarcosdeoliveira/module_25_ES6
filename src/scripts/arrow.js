const minhaFuncao = () => "Ola arrow Functions";
console.log(minhaFuncao());

const retornaUmCarro = () => ({
  modelo: "Ka",
  fabricante: "Ford",
});
console.log(retornaUmCarro());

const carro = {
  velocidade: 40,
  acelerar: function () {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: () => {
    console.log(this);
    this.velocidadeAtual -= 10;
  },
};
carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);
