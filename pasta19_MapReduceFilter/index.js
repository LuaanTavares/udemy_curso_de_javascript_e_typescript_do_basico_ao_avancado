const array = [1,2]
const arrayEditado = array.map((el) => 'numero: ' + el)
console.log(arrayEditado)

const numeros = [1,2,3,4]
const pares = numeros.filter(val => val % 2 === 0)
console.log(pares)

const soma = numeros.reduce((acumulado, atual) => acumulado + atual)
console.log(soma)