function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: false, // reconfigurável?
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Estoque deve receber um número válido!");
      }
      estoquePrivado = valor;
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
p1.estoque = 10;
console.log(p1.estoque);

//---------------------------------------------------------

function criaNome(nome) {
  return {
    get nome(){
      return nome
    }, 
    set nome (valor){
      valor = valor.replace('Ribeiro', 'Tavares'); //replace substitui uma palavra por outra
      nome = valor
    }
  };
}

const nome1 = criaNome('Luan')
console.log(nome1.nome)
nome1.nome = 'Acsa Ribeiro'
console.log(nome1.nome)