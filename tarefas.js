const ul = document.querySelector('#lista-tarefas');
const btnIncluirTarefa = document.querySelector('#incluir-nova-tarefa');
let inputNovaTarefa = document.querySelector('#nova-tarefa-nome');
const selectCategoriaNovaTarefa = document.querySelector('#nova-tarefa-categoria');

const tarefas = [
    {
        nome: "Comprar leite",
        categoria: "compras",
        realizada: false
    },
    {
        nome: "Escutar chimbinha",
        categoria: "lazer",
        realizada: true
    }
]

const carregaTarefasExistentes = item => {
    if (item.realizada) {
        ul.innerHTML += `<li class="item-tarefa marcado categoria-${item.categoria}">${item.nome}</li>`;    
    } else {
        ul.innerHTML += `<li class="item-tarefa categoria-${item.categoria}">${item.nome}</li>`;
    }
}

tarefas.forEach(carregaTarefasExistentes);

const incluiTarefa = () => {
    const novaTarefa = {
        nome: inputNovaTarefa.value,
        categoria: selectCategoriaNovaTarefa.value,
        realizada: false
    }
    
    carregaTarefasExistentes(novaTarefa)
    tarefas.push(novaTarefa)

    inputNovaTarefa.value = ''
    inputNovaTarefa.focus()
}

const incluiTarefaComEnter = e => {
    if (e.key === 'Enter') {
        incluiTarefa()
    }
}

btnIncluirTarefa.addEventListener('click', incluiTarefa)
inputNovaTarefa.addEventListener('keyup', incluiTarefaComEnter)
