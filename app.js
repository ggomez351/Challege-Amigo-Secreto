// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
// Función para inicializar la aplicación al cargar la página
function inicializarJuego() {
    document.getElementById('resultado').classList.remove('active');
    document.getElementById('btn-reiniciar').style.display = 'none';
}
// Llamar a la función de inicialización cuando la página cargue
window.onload = inicializarJuego;

function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();
    const alertMessage = document.getElementById('alert-message');

    if (nombre === '') {
        alertMessage.textContent = 'Por favor, ingresa un nombre.';
        alertMessage.classList.add('active');
        setTimeout(() => alertMessage.classList.remove('active'), 3000);
        return;
    }

    if (nombres.includes(nombre)) {
        alertMessage.textContent = 'Ese nombre ya ha sido agregado. Por favor, ingresa uno diferente.';
        alertMessage.classList.add('active');
        setTimeout(() => alertMessage.classList.remove('active'), 3000);
        nombreInput.value = '';
        return;
    }

    nombres.push(nombre);
    mostrarNombresEnLista();
    nombreInput.value = '';
    
    // Ocultar resultado y botón de reinicio al agregar un nuevo nombre
    document.getElementById('resultado').classList.remove('active');
    document.getElementById('btn-reiniciar').style.display = 'none';
}

function mostrarNombresEnLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia la lista antes de actualizarla

    for (let i = 0; i < nombres.length; i++) {
        const li = document.createElement('li');
        li.textContent = nombres[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    const nombreSorteado = document.getElementById('nombre-sorteado');
    const alertMessage = document.getElementById('alert-message');
    
    if (nombres.length < 2) {
        alertMessage.textContent = 'Necesitas al menos dos personas para el sorteo.';
        alertMessage.classList.add('active');
        setTimeout(() => alertMessage.classList.remove('active'), 3000);
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const amigoSecreto = nombres[indiceAleatorio];

    nombreSorteado.textContent = amigoSecreto;
    resultado.classList.add('active');
    document.getElementById('btn-reiniciar').style.display = 'block';
}

function reiniciarJuego() {
    nombres = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').classList.remove('active');
    document.getElementById('btn-reiniciar').style.display = 'none';
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = '¡El juego ha sido reiniciado! Puedes agregar nuevos nombres.';
    alertMessage.classList.add('active');
    setTimeout(() => alertMessage.classList.remove('active'), 3000);
}
