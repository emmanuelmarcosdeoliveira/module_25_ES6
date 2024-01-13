let meuMap = new Map();
meuMap.set("nome", "Emmanuel");
console.log(meuMap);
meuMap.set("stack", "SASS, GULP, JAVASCRIPT");

const nome = meuMap.get("nome");
console.log(nome);
console.log(meuMap.size);
console.log(meuMap.has("sobrenome"));
//meuMap.clear();
console.log(meuMap.size);
for (let valor of meuMap.values()) {
  console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
  console.log(`${chave} : ${valor}`);
}

meuMap.delete("stack");
console.log(meuMap);

const cpfs = new Set();
cpfs.add(258715376);
cpfs.add(266647588);
cpfs.add("024552552"); // Nesse caso temos que incluir como um string pois os numeros não podem começar com zero

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
  console.log(valor);
});

const array = [
  "Emmanuel",
  "Everton",
  "Elisangela",
  "Antonia",
  "Joao",
  "Emmanuel",
  "Everton",
];

const arrayComoSet = new Set([...array]);
const arraysSemItemDuplicados = [...arrayComoSet];

console.log(arrayComoSet);
console.log(arraysSemItemDuplicados);
