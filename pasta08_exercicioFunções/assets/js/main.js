
//criando uma const que pega o formulário pela id
const form = document.querySelector("#formulario");
//adicionando o evento preventDefault no form para que nao envie o formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();

//adicionando as tags input do form dentro de const através do (e) que veio do form
  const getPeso = e.target.querySelector("#peso");
  const getAltura = e.target.querySelector("#altura");

//transformando o valor das tags input em números
  const peso = Number(getPeso.value)
  const altura = Number(getAltura.value )

//se peso for falso, ou seja, não for um numero.
  if(!peso) {
    setResultado ('Digite um peso válido!', false);
    return;
  }
//se altura for falsa, ou seja, não for um numero.
  if(!altura) {
    setResultado ('Digite uma altura válida!', false);
   return;
  }

//criando a constante imc, que chama a função getImc passando os
//parâmetros necessários para realizar o cálculo
  const imc = getImc(peso, altura);

//criando a constante nivelImc e atribuindo a ela
//a função getNivelImc, que recebe os valores de imc
//(peso e altura) e faz o cálculo e mostra a mensagem.
  const nivelImc = getNivelImc(imc)

//cria a constante msg que informa o IMC  e o Nivel
  const msg = `Seu IMC é ${imc} (${nivelImc}).`

//chama a função setResultado passando a mensagem
//e dizendo que é o resultado é um numero (true)
  setResultado(msg, true);
});
//-----------------------------------------------------------------------------------------

//criando a função getImc que recebe os parâmetros e calcula o imc 
function getImc(peso, altura){
  const imc = peso / altura ** 2
// retornando o resultado de imc com apenas 2 casas decimais
  return imc.toFixed(2);
}
//-----------------------------------------------------------------------------------------

//criando a função que recebe um valor, faz o calculo 
//do imc e exibe a mensagem
function getNivelImc (imc) {
//criando um array com todas as mensagens
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
//dependendo do valor do imc, exibe diferentes
//indices do array
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
 }
//----------------------------------------------------------------------------------------------------

//criando uma função que cria uma tag de parágrafo e recebe um 
//parâmetro com o nome da classe
function criaP (className) {
  const p = document.createElement('p');
  return p;
}
//-------------------------------------------------------------------------------------------

//criando uma função que muda o estado do resultado e recebe parâmetros
function setResultado(msg, isValid){
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = '';

//chamando a função criaP
  const p = criaP()

  isValid ? p.classList.add('paragrafo-resultado') : p.classList.add('bad')

//passando a msg para dentro do p
  p.innerHTML = msg;
//adicionando o p como elemento filho do resultado
  resultado.appendChild(p);
}

