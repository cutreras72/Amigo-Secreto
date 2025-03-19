// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear un array para almacenar los nombre
let amigos = [];
// Función para agregar la lista de amigos

function agregarAmigo () {
    //amigos = amigos.concat(amigos.filter(amigos.filter()));
    let amigo1 = document.getElementById('amigo').value;
    if (amigo1 === "") {
        alert("El nombre no puede estar en blanco");
        limpiarCaja();
    } else
    if (amigos.includes(amigo1)) {
        alert("Los nombres no pueden repetirse");
        //limpiar campo para volver a ingresar otro amigo
        limpiarCaja();
        return ;
    } else { 
        amigos.push(amigo1);
        actualizarListaAmigos();
        //mostrar la lista de amigos en pantalla
        limpiarCaja();
        return;
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function asignarTextoElemento (elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = elementoHTML.innerHTML + '/ ' + texto;
    return;

//    document.documentElement.innerHTML =
//  "<pre>" + document.documentElement.innerHTML.replace(/</g, "&lt;") + "</pre>";
}

// Función para actualizar la lista de amigos
function actualizarListaAmigos () {
    //posFinal = amigos.length().value;
    //i = 0
    //while (posFinal = i + 1) {
    //    i++;
    //}
    document.querySelector('#listaAmigos').value = document.querySelector('#amigo').value;
    asignarTextoElemento('ul',document.querySelector('#listaAmigos').value);
}   


// Función para sortear los amigos

function sortearAmigo () {
    posicionMaxima = amigos.length;
  
    let numeroGenerado = Math.floor(Math.random()*posicionMaxima);
    //Si ya sorteamos todos los números
    alert(`El amigo asignado es ${amigos[numeroGenerado]}`);
    //document.querySelector('#resultado').value = amigos[numeroGenerado];
    //asignarTextoElemento('ul',document.querySelector('#resultado').value);
    amigos = [];
  
   
}
