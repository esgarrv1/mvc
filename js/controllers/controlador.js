import * as contador from '../models/contador.js'
import { actualizarContador, mostrarMensaje } from '../views/contador-view.js';

function incrementar(evt) {
    contador.incrementar();
    actualizarContador(contador.obtener());
}

function decrementar(evt) {
    if(contador.decrementar()){
        actualizarContador(contador.obtener());
    } else {
        mostrarMensaje('No puede bajar de cero');
    }
}

document.getElementById('btnIncrementar').addEventListener('click', incrementar);
document.getElementById('btnDecrementar').addEventListener('click', decrementar);