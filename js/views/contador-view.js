export function actualizarContador(valor) {
    document.getElementById('contador').textContent = valor;
}

export function mostrarMensaje(mensaje) {
    const texto = document.getElementById('mensaje');
    texto.textContent = mensaje;
    setTimeout(() => texto.textContent = '', 1000);
}