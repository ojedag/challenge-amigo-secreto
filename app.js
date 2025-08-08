// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiarCampo() {
    document.getElementById('amigo').value = '';
}

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo').value;
    if (inputAmigo === '') {
        alert("¡Por favor, inserte un nombre!");
    } else if (amigos.includes(inputAmigo)) {
        alert(`${inputAmigo} ya exite en la lista, ingresar otro por favor`);
        limpiarCampo();
    } else {
        amigos.push(inputAmigo);
        actualizarListaAmigo();
        limpiarCampo();
    }
    return amigos;
}

function actualizarListaAmigo() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = document.getElementById('resultado');
        amigoSecreto.innerHTML = `El amigo secreto sorteado es: ${amigos[indiceAleatorio]}`;
        
    } else {
        alert(`No tienes amigos inscritos para el sorteo`);
    }
}