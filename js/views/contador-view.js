export function actualizarContador(valor) {
    document.getElementById('contador').textContent = valor;
}

export function mostrarMensaje(mensaje) {
    const texto = document.getElementById('mensaje');
    texto.textContent = mensaje;
    setTimeout(() => texto.textContent = '', 1000);
}

// CUando se hace clic en el botón se ejecta esta función que debe llamar a la función
// del controlador que guardamos anteriormente en la variable global
function incrementar(evt) {
    // El if por si no se "registró"
    if(funcionIncrementar !== null) {
        funcionIncrementar();
    }
}

function decrementar(evt) {
    if(funcionDecrementar !== null) {
        funcionDecrementar();
    }
}

function comprobarTecla(evt) {
    if(evt.key === '+') {
        incrementar(null);
    } else if(evt.key === '-') {
        decrementar(null);
    }
}

/* El controlador tiene que decirle a la vista que función suya quiere que se ejecute
cuando pase algo en la vista. En este caso cuando se quiera incrementar el contador.
Viene a ser el addEventListener.
El parámetro funcion contiene una función del controlador.
La guardamos en la variable global para poder ejecutarla más adelante */
export function alIncrementar(funcion) {
    funcionIncrementar = funcion;
}

export function alDecrementar(funcion) {
    funcionDecrementar = funcion;
}

/* Variables globales para guardar las funciones del controlador que se deben ejecutar
al pulsar el botón incrementar y el de decrementar */
let funcionIncrementar = null;
let funcionDecrementar = null;

document.body.innerHTML = `
 <div class="w-50 bg-light m-auto mt-3 p-2">
        <p class="h2 text-center">Contador</p>
        <p id="contador" class="fs-1 text-center">0</p>
        <div class="d-flex gap-2">
            <button class="btn btn-primary flex-grow-1" id="btnIncrementar">Incrementar</button>
            <button class="btn btn-danger flex-grow-1" id="btnDecrementar">Decrementar</button>
        </div>
        <p id="mensaje" class="h6 text-danger text-center mt-2"></p>
    </div>
`;

document.getElementById('btnIncrementar').addEventListener('click', incrementar);
document.getElementById('btnDecrementar').addEventListener('click', decrementar);
document.body.addEventListener('keydown', comprobarTecla);