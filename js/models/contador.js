let contador = 0;

export function incrementar() {
    contador++;
}

export function decrementar() {
    if(contador === 0) {
        return false;
    } else {
        contador--;
        return true;
    }
}

export function obtener() {
    return contador;
}