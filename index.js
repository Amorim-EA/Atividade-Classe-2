class Jogadordefutebol {
  constructor(nome, posicao, data_de_nascimento, nacionalidade, altura, peso) {
    this.nome = nome;
    this.posicao = posicao;
    this.data_de_nascimento = data_de_nascimento;
    this.nacionalidade = nacionalidade;
    this.altura = altura;
    this.peso = peso;
  }

  atributos() {
    return "Nome: " + this.nome + "\n" + "Posição: " + this.posicao + "\n" + "Data de Nascimento: " + this.data_de_nascimento + "\n" + "Nacionalidade: " + this.nacionalidade + "\n" + "Altura: " + this.altura + "\n" + "Peso: " + this.peso;
  }

  mostrarAtributos() {
    return this.atributos();
  }

  calcularIdade() {
    let data = new Date();
    let ano_atual = data.getFullYear();
    let anoNascimento = this.data_de_nascimento.split("/")[2];
    let calculandoIdade = (ano_atual - anoNascimento);
    return calculandoIdade;
  }

  tempoAposentar() {
    if (this.posicao == "defesa") {

      if (this.calcularIdade() < 40) {
        let tempo = 40 - this.calcularIdade();
        console.log("Pode se aposentar dentro de " + tempo + "anos!");
      } else {
        console.log("Pode se aposentar!");
      }

    } else if (this.posicao == "meio-campo") {

      if (this.calcularIdade() < 38) {
        let tempo = 38 - this.calcularIdade();
        console.log("Pode se aposentar dentro de " + tempo + " anos!");
      } else {
        console.log("Pode se aposentar!");
      }

    } else if (this.posicao == "atacante") {

      if (this.calcularIdade() < 35) {
        let tempo = 35 - this.calcularIdade();
        console.log("Pode se aposentar dentro de " + tempo + " anos!");
      } else {
        console.log("Pode se aposentar!");
      }

    } else {
      console.log("Posição não está cadastrado para a aposentadoria !")
    }
  }
}
let jogador1 = new Jogadordefutebol("Lionel Messi", "atacante", "24/06/1987", "Argentino", "1,69m", "67 kg");
console.log(jogador1.mostrarAtributos() + "\n" + jogador1.tempoAposentar() + "\n");

let jogador2 = new Jogadordefutebol("Eduardo Pereira Rodrigues", "meio-campo", "07/01/1992", "Brasileiro", "1,66m", "63 kg");
console.log(jogador2.mostrarAtributos() + "\n" + jogador2.tempoAposentar());