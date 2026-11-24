export class ContadorView {
    /* Propiedades para guardar las funciones del controlador que se deben ejecutar
    al pulsar el botón incrementar y el de decrementar */
    #funcionIncrementar = null;
    #funcionDecrementar = null;

    constructor() {
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
        // Cuando luego llame al método, que use este this, no el que fuese.
        // Ya que cuando se pulse el botón, this serían el button
        document.getElementById('btnIncrementar').addEventListener('click', this.incrementar.bind(this));
        document.getElementById('btnDecrementar').addEventListener('click', () => this.decrementar());
        document.body.addEventListener('keydown', (evt) => this.comprobarTecla(evt));
    }

    actualizarContador(valor) {
        document.getElementById('contador').textContent = valor;
    }

    mostrarMensaje(mensaje) {
        const texto = document.getElementById('mensaje');
        texto.textContent = mensaje;
        setTimeout(() => texto.textContent = '', 1000);
    }

    // Cuando se hace clic en el botón se ejecta esta función que debe llamar a la función
    // del controlador que guardamos anteriormente en la variable global
    incrementar(evt) {
        // El if por si no se "registró"
        if(this.#funcionIncrementar !== null) {
            this.#funcionIncrementar();
        }
    }
    decrementar(evt) {
        if(this.#funcionDecrementar !== null) {
            this.#funcionDecrementar();
        }
    }

    comprobarTecla(evt) {
        if(evt.key === '+') {
            this.incrementar(null);
        } else if(evt.key === '-') {
            this.decrementar(null);
        }
    }

    /* El controlador tiene que decirle a la vista que función suya quiere que se ejecute
    cuando pase algo en la vista. En este caso cuando se quiera incrementar el contador.
    Viene a ser el addEventListener.
    El parámetro funcion contiene una función del controlador.
    La guardamos en la variable global para poder ejecutarla más adelante */
    alIncrementar(funcion) {
        this.#funcionIncrementar = funcion;
    }
    
    alDecrementar(funcion) {
        this.#funcionDecrementar = funcion;
    }
}

