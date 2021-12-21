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

const classLiItemTarefa = "item-tarefa";
const classLiMarcado = "marcado";
const ul = document.querySelector('#lista-tarefas');

const carregaTarefasExistentes = item => {
    if (item.realizada) {
        ul.innerHTML += `<li class="${classLiItemTarefa} ${classLiMarcado} categoria-${item.categoria}">${item.nome}</li>`;    
    } else {
        ul.innerHTML += `<li class="${classLiItemTarefa} categoria-${item.categoria}">${item.nome}</li>`;
    }
}

tarefas.forEach(carregaTarefasExistentes);