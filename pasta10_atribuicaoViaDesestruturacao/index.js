// //Atribuição via desestruturação em arrays
// const numeros = [100,200,300,400,500,600,700,800,900];
// //-------------------------------------------------------
// const [cem, ,trezentos, ,quinhentos, ,setecentos, ,novecentos] = numeros; //A virgula pula 1 elemento
// console.log(cem, trezentos, quinhentos, setecentos, novecentos)
// //-------------------------------------------------------
// const [primeiroNumero, segundoNumero, ...resto] = numeros //O ...resto é a variavel que recebe o restante dos elementos
// console.log(primeiroNumero, segundoNumero);
// console.log(resto)
// //-------------------------------------------------------

// //Pegando o numero 6 através da desestruturação
// const array = [ [1,2,3], [4,5,6], [7,8,9]];
// const [,[,,seis]] = array;
// console.log(seis)
// //ou
// const [lista1, lista2, lista3] = array
// console.log(lista2[2])

//Atribuição via desestruturação em objetos
const pessoa = {
  nome: 'Luan',
  idade:27,
  //sobrenome direto na constante
  endereco:{
    estado:'Rio de Janeiro',
    cidade:'São Gonçalo'
  },
  Curso: 'ADS',
  Universidade: 'Estácio de Sá',
};
const { nome: primeiroNome, sobrenome = 'Tavares', idade, endereco, ...rest } = pessoa
console.log(primeiroNome, sobrenome, idade, endereco.estado, rest)