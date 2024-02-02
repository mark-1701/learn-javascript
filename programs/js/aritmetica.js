function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

//objeto para exportar las funciones
export const aritmetica = {
    //solo una vez porque se llaman igual sumar = sumar
    sumar,
    restar
}

