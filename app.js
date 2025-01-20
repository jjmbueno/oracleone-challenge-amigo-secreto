//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function adicionarNome() {
    let nomeInput = document.getElementById('nome-input');
    let nome = nomeInput.value.trim();

    if (nome) {
        nomes.push(nome);
        atualizarListaNomes();
        nomeInput.value = '';
        nomeInput.focus();
    }else{
        alert('Por favor, insira um nome');
        return;
    }
}

function atualizarListaNomes() {
    let listaNomes = document.getElementById('lista-nomes');
    listaNomes.innerHTML = "";

    nomes.forEach((nome, index) => {
        let li = document.createElement('li');
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Adicione nomes à lista antes de sortear!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nomes.length);
    let nomeSorteado = nomes[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
}