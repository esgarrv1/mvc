export class Controlador {
    constructor(modelo, vista) {
        this.contador = modelo;
        this.contadorVista = vista;
        // Nos sucribimos a los eventos de la vista para que nos informe cuando se quiera
        // realizar un incremento o un decremento. Sería como el addEventListener
        this.contadorVista.alIncrementar(this.incrementar.bind(this));
        this.contadorVista.alDecrementar(this.decrementar.bind(this));
    }

    incrementar() {
        this.contador.incrementar();
        this.contadorVista.actualizarContador(this.contador.obtener());
    }

    decrementar() {
        if(this.contador.decrementar()){
            this.contadorVista.actualizarContador(this.contador.obtener());
        } else {
            this.contadorVista.mostrarMensaje('No puede bajar de cero');
        }
    }
}




