export class Contador {
    #contador = 0;

    incrementar() {
        this.#contador++;
    }

    decrementar() {
        if(this.#contador === 0) {
            return false;
        } else {
            this.#contador--;
            return true;
        }
    }
    obtener() {
        return this.#contador;
    }
}