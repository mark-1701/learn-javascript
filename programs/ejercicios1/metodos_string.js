const str = "Hola, mundo";

// length: Devuelve la longitud de la cadena.
const length = str.length; // Devuelve 11

// charAt(index): Devuelve el carácter en la posición especificada.
const character = str.charAt(1); // Devuelve 'o'

// charCodeAt(index): Devuelve el valor Unicode del carácter en la posición especificada.
const charCode = str.charCodeAt(1); // Devuelve 111

// concat(string): Combina dos o más cadenas y devuelve una nueva cadena.
const str1 = "Hola, ";
const str2 = "mundo";
const result = str1.concat(str2); // Devuelve "Hola, mundo"

// indexOf(substring): Devuelve la posición de la primera ocurrencia de la subcadena especificada.
const position = str.indexOf("mundo"); // Devuelve 6

// lastIndexOf(substring): Devuelve la posición de la última ocurrencia de la subcadena especificada.
const position = str.lastIndexOf("mundo"); // Devuelve 6

// slice(start, end): Devuelve una subcadena desde la posición `start` hasta la posición `end`.
const subStr = str.slice(0, 4); // Devuelve "Hola"

// substring(start, end): Similar a `slice`, pero no admite valores negativos.

// substr(start, length): Devuelve una subcadena a partir de la posición `start` con la longitud especificada.
const subStr = str.substr(5, 5); // Devuelve "mundo"

// replace(search, replace): Reemplaza la primera ocurrencia de la cadena de búsqueda con la cadena de reemplazo.
const newStr = str.replace("mundo", "amigos"); // Devuelve "Hola, amigos"

// replaceAll(search, replace): Reemplaza todas las ocurrencias de la cadena de búsqueda con la cadena de reemplazo.
const newStr = str.replaceAll("mundo", "amigos"); // Devuelve "Hola, amigos"

// toUpperCase(): Convierte todos los caracteres de la cadena en mayúsculas.

// toLowerCase(): Convierte todos los caracteres de la cadena en minúsculas.

// trim(): Elimina los espacios en blanco al principio y al final de la cadena.

// split(separator): Divide la cadena en un array de subcadenas basado en el separador especificado.
const str = "Manzana,Plátano,Uva";
const arr = str.split(","); // Devuelve ["Manzana", "Plátano", "Uva"]
