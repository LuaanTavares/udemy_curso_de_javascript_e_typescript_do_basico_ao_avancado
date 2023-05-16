// Função que recebe um numero de 1 a 100 e verifica se é divisivel por 3 ou 5;
// Primeiro identifica se o typeof do numero é igual a number;
// Se for divisivel por 3 e por 5, retorna 'FizzBuzz';
// Se for divisivel por 3, retorna 'Fizz';
// Se for divisivel por 5, retorna 'Buzz';
//Se nao for divisivel por nenhum, retorna o proprio numero digitado.

const numero = (num) =>{
 if (typeof num !== 'number') return num;
 if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
 if (num % 3 === 0) return 'Fizz';
 if (num % 5 === 0) return 'Buzz';
 return num;
}

for (let i = 0; i < 100; i++)
console.log(numero(i))

