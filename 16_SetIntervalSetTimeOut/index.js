function mostraHora() {
  let data = new Date();
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

//realiza uma função em um certo intervalo de tempo
const timer = setInterval(function(){
  console.log(mostraHora())
}, 1000);

//realiza uma função depois de um determinado tempo
setTimeout(() => {
  clearInterval(timer)
}, 3000);

setTimeout(() => {
  console.log('Fim')
}, 4000);
