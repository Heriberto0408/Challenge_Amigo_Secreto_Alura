let amigos = [];
let numeroSecreto = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let nombreUsuario = document.getElementById('amigo').value.trim(); //trim() para eliminar espacios al inicio y al final

    // Validar que el nombre no esté vacío
    if (nombreUsuario == '') {
        alert('Por favor, inserte un nombre');
        return;
    } 

    amigos.push(nombreUsuario);   
              
    limpiarCaja();
    mostrarAmigos();
}


function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = ''; // Limpiar la lista antes de mostrar los amigos

    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista para cada amigo
        let lista = `<li>${amigos[i]}</li>`;
        // Agregar el nuevo elemento a la lista de amigos
        listaAmigos.innerHTML += lista;
    }

}


function sortearAmigo() {
    let numeroSecreto = Math.floor(Math.random() * amigos.length) + 1;

    if (amigos.length  == 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    let amigoSecreto = amigos[numeroSecreto - 1]; // Restamos 1 porque los índices de los arrays comienzan en 0
    document.getElementById('resultado').innerHTML = `<strong style="color: green"> El amigo secreto sorteado es: ${amigoSecreto} </strong>`;

    document.getElementById('listaAmigos').innerHTML = ''; // Limpiar la lista de amigos después de sortear
    amigos = []; // Limpiar la lista de amigos después de sortear

}

function limpiarCaja(){
     document.querySelector('#amigo').value = '';
}