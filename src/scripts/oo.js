// function Pokemon(nomePokemon, tipoPokemon) {
//   this.nome = nomePokemon;
//   this.tipo = tipoPokemon;
// }

// const picachu = new Pokemon("Picachu", "eletrico")

class Pokemon {
  constructor(nomeDoPokemon, tipoPokemon) {
    this.nome = nomeDoPokemon;
    this.tipo = tipoPokemon;
  }
  //atacar(nomeDoAtaque) {
  //console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
  //}
}

class Pikachu extends Pokemon {}

const pikachuDoAsh = new Pikachu("pikachu", "Elétrico");
const pikachu = new Pokemon("pikachu", "Elétrico");
//pikachu.atacar("Choque do Trovão");
console.log(pikachu);
console.log(pikachuDoAsh);
console.log(pikachuDoAsh instanceof Pikachu);
