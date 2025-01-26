// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

/**
 * Muestra un mensaje en la interfaz dentro del contenedor de mensajes.
 * @param {string} mensaje - El mensaje a mostrar.
 * @param {string} tipo - Tipo de mensaje: 'error' o 'success'.
*/
function mostrarMensaje(mensaje, tipo) {
    const mensajeTexto = document.getElementById('mensaje-texto');
    mensajeTexto.textContent = mensaje;
    mensajeTexto.className = tipo

    setTimeout(() => {
        mensajeTexto.textContent = '';
    }, 3000);
}

/**
 * Crea un elemento HTML dinámicamente.
 * @param {string} tipo - Tipo de elemento HTML a crear.
 * @param {string} contenido - Contenido de texto del elemento.
 * @returns {HTMLElement} - Elemento HMTL creado.
*/
function crearElemento(tipo, contenido) {
    const elemento = document.createElement(tipo);
    elemento.textContent = contenido;
    return elemento;
}

/**
 * Convierte la primera letra de cada palabra a mayúscula.
 * @param {string} texto - Texto a convertir.
 * @returns {string} - Texto convertido.
 */
function convertirACapitalize(texto) {
    return texto.replace(/\b\w/g, (letra) => letra.toUpperCase());
}

/**
 * Captura el nombre ingresado en el input y lo agrega al array.
 * Valida que no esté vacío ni repetido.
 */
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = convertirACapitalize(input.value.trim());

    if (nombre === '') {
        mostrarMensaje('Por favor, ingresa un nombre válido.', 'error');
        return;
    }

    if (amigos.includes(nombre)) {
        mostrarMensaje('Este nombre ya está en la lista.', 'error');
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    limpiarInput();
    verificarEstadoBoton()
}

/**
 * Limpia el campo de entrada.
*/
function limpiarInput() {
    document.getElementById('amigo').value = '';
}

/**
 * Actualiza la lista visible en el HTML con los nombres del array.
*/
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = crearElemento('li', amigo);
        lista.appendChild(li);
    })
}

/**
 * Sortea un amigo secreto aleatoriamente.
*/
function sortearAmigo() {
    if (amigos.length < 2) {
        mostrarMensaje('Debe haber al menos 2 amigos para sortear.', 'error');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    mostrarResultado(amigoSeleccionado);
}

/**
 * Muestra el resultado del sorteo en la sección correspondiente.
 * @param {string} nombre - El nombre del amigo sorteado.
*/
function mostrarResultado(nombre) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const li = crearElemento('li', `🎉 Tu amigo secreto es: ${nombre}`);
    resultado.appendChild(li);
}

/**
 * Verifica si el botón de "Sortear amigo" debe estar habilitado o deshabilitado.
 */
function verificarEstadoBoton() {
    const boton = document.getElementById('button-draw');
    boton.disabled = amigos.length < 2;
}

// Inicializa el estado del botón al cargar la página
verificarEstadoBoton();