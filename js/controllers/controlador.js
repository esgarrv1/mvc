import * as contador from '../models/contador.js'
import * as contadorVista from '../views/contador-view.js';

function incrementar() {
    contador.incrementar();
    contadorVista.actualizarContador(contador.obtener());
}

function decrementar() {
    if(contador.decrementar()){
        contadorVista.actualizarContador(contador.obtener());
    } else {
        contadorVista.mostrarMensaje('No puede bajar de cero');
    }
}

// Nos sucribimos a los eventos de la vista para que nos informe cuando se quiera
// realizar un incremento o un decremento. Sería como el addEventListener
contadorVista.alIncrementar(incrementar);
contadorVista.alDecrementar(decrementar);


