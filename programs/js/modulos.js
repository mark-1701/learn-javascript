import Saludar, {PI, Marco, usuario, saludar} from "./constantes.js";
//aritmentica con el alias calculos
import {aritmetica as calculos} from "./aritmetica.js";

console.log("Archivo modulosjs");
console.log(PI);
Marco.saludar();
console.log(usuario);

console.log(calculos.sumar(3, 7));
let saludo = new Saludar();
