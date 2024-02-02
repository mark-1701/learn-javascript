export const PI = Math.PI;

export const Marco = {
    nombre: "Marco",
    apellido: "Muralles",
    saludar: function() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

//Podemos exportar solo lo que necesitamos
export let usuario = "Jon";

//DEFAUL
/*
- cuando usamos default se carga la variable por defecto, las que no usan default se cargan hasta que se invocan.
- Ahora la forma de la importación es solamente con la palabra saludar
   - import saludar, {PI, Marco, usuario} from "./constantes.js";
- Solo podemos tener sola una exportación por default
*/

let password = "qwerty";
//para poder usar default a una variable declarada
//export default password;

//Solo funciona con funciones declaradas
export function saludar() {
    console.log("Hola módulos +ES6");
}

export default class Saludar {
    constructor() {
        console.log("Hola Clases +ES6");
    }
}


