const input = document.querySelector('.nova-tarefa')
const botao = document.querySelector('.botao-nova-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi(){
  const li = document.createElement('li');
  return li;
}

input.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    if (!input.value) return;
    criaTarefa(input.value)
  }
})

function LimpaInput(){
  input.value = '';
  input.focus();
}

function criaBotaoApagar(li){
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  li.appendChild(botaoApagar);
  botaoApagar.setAttribute('class', 'apagar');
}

function criaTarefa(textoInput){
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li)
  LimpaInput()
  criaBotaoApagar(li)
  salvarTarefa();
}

botao.addEventListener('click', function(e){
  if (!input.value) return;
  criaTarefa(input.value)
})

document.addEventListener('click', function(e){
  const el = e.target;

  if (el.classList.contains('apagar')){
    el.parentElement.remove();
    salvarTarefa();
  } 
})

function salvarTarefa (){
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas){
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas()