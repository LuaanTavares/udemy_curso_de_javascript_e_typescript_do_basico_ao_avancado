function relogio (){
  function criarDataSegundos(Milisegundos) {
    const data = new Date(Milisegundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }
  
  const relogio = document.querySelector(".timer");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  let segundos = 0;
  let timer;
  
  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criarDataSegundos(segundos);
    }, 1000);
  }
  
  document.addEventListener("click", function (e) {
    const el = e.target;
  
    if (el.classList.contains("iniciar")) {
      console.log(el);
      clearInterval(timer);
      iniciaRelogio();
    }
  
    if (el.classList.contains("pausar")) {
      clearInterval(timer);
      if (segundos != 0) iniciar.innerHTML = "Continuar";
    }
  
    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      segundos = 0;
      iniciar.innerHTML = "Iniciar";
    }
  });
}
relogio()