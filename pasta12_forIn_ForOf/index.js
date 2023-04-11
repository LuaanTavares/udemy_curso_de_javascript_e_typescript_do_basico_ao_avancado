//Funcionam com arrays e strings
const frutas = ['Maçã, Melancia, Banana, Abacate']

//For clássico
for (let i= 0; i < frutas.length; i++ ){
 console.log(frutas[i])};

//For in: a variável recebe os indices dos valores do array
for (let indicesDoArray in frutas){
console.log(frutas[indicesDoArray])};

//For of: a variável ja recebe os valores do array
for (let valoresDoArray of frutas){
console.log(valoresDoArray)};

frutas.forEach(function(valor, indice, array){
 console.log(valor, indice, array)
})
//--------------------------------------------------

//Funcionam com objetos também
const pessoa = {
  nome: 'Luan',
  sobrenome: 'Tavares',
  idade: 27,
}

//For in: a varíavel recebe as chaves 
for (let chave in pessoa){
 console.log(chave, pessoa[chave])
};



