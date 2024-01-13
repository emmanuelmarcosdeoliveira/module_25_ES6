//rest

function somar() {
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}
console.log(somar(10, 20, 30, 40));

function somarComRest(...numeros) {
  const soma = numeros.reduce((total, numeroAtual) => {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somarComRest(10, 20, 30));

//spread

const numeros = [1, 2, 3, 4];
console.log(...numeros);

const timesDeSp = ["santos", "corinthians", "palmeiras", "São paulo"];
const timesDoRio = ["Flamengo", "Vasco", "Fluminense", "Botafogo"];

//const timesFutebol = timesDeSp.concat(timesDoRio);
const timesFutebol = [...timesDeSp, ...timesDoRio];

console.log(timesFutebol);

// Utilizando  o spread em objetos

const carroDaJulia = {
  modelo: "gol",
  marca: "Volks",
  motor: 1.6,
};

const carroDaAna = {
  ...carroDaJulia,
  motor: 1.8,
};

console.log(carroDaAna);

// Desestruturação = é qunado queremos pergar apenas um elemento de um objeto

const { motor: motorDoCarroDaAna } = carroDaAna; // aqui estamos peganod apenas o motor do carro da ana
const { motor: motorDoCarroDaJulia } = carroDaJulia; // aqui estamos peganod apenas o motor do carro da Julia
console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

const [item1, item2, item3, ...outrosTimes] = timesFutebol;
console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);
