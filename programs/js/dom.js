console.log("");
console.warn("----------------------------DOM---------------------------");
console.log("");

//objeto global
console.log(window);
console.log(document);

let texto = "Hola, soy tu amigo y docente digital... Jonathan Mircha";

//Prueba de una API para usar el speak
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

/*
El DOM, o Document Object Model (Modelo de Objetos del Documento), es una interfaz de programación para documentos HTML, XML y XHTML. Es una representación estructurada en forma de árbol de un documento web, lo que permite a los programas o scripts acceder dinámicamente y actualizar el contenido, estructura y estilo de un documento.

console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
console.log(document.getSelection().toString());
}, 2000);
document.write("<h2>Hola Mundo desde el DOM</h2>");*/

//hablar(texto); 

console.log("***************DOM****************");
//DOM

/*Si seleccionas elementos usando métodos como document.getElementById, document.querySelector o document.querySelectorAll, obtendrás uno o varios elementos del DOM (Modelo de Objetos del Documento), que son representaciones de los elementos HTML en la página web. */

console.log(window.document);
console.log(document);
//devuelve el head del document
console.log(document.head);
//devuelve el head del body
console.log(document.body);
//devuelve el html
console.log(document.documentElement);
//devuelve el tipo de document html
console.log(document.doctype);
//devuelve el tipo de juego de caracteres
console.log(document.charset);
console.log(document.title);
//coleccion de elaces del documento
console.log(document.links);
//coleccion de imágenes
console.log(document.images);
//colección de fórmularios
console.log(document.forms);
//colección de estilos css
console.log(document.styleSheets);
//colección de scripts
console.log(document.scripts);
setTimeout(() => {
    //obtiene los elementos seleccionados
    console.log(document.getSelection().toString());
}, 3000);
//escribir un elemento html al document
document.write("<h2>Hola Mundo</h2>");

console.log("***NODOS, ELEMENTOS Y SELECTORES**");
//NODOS, ELEMENTOS Y SELECTORES

//En el contexto de JavaScript y elementos HTML, los nodos son objetos que representan diferentes tipos de elementos en una estructura de árbol, como el DOM (Document Object Model). El DOM es una representación jerárquica de los elementos HTML de un documento, donde cada elemento, atributo y fragmento de texto se considera un nodo.

//tipos de nodos: https://developer.mozilla.org/en-US/docs/Web/API/Node

//es una colección html de elementos por etiqueta
console.log(document.getElementsByTagName("li"));
//elementos por clase
console.log(document.getElementsByClassName("card"));
//elementos por name
console.log(document.getElementsByName("nombre"));
//elementos por id
console.log(document.getElementById("menu"));

//seleccionar con querySelector por clase
console.log(document.querySelector(".card"));
//seleccionar con querySelector por id
console.log(document.querySelector("#menu"));
//seleccionar con querySelector por etiqueta
console.log(document.querySelector("a"));

//seleccionar con querySelector por etiqueta varios elementos
//también podemos seleccionar por clase, id, name...
console.log(document.querySelectorAll("a"));

//retornar el elemento html de cada elemtno de la selección
document.querySelectorAll("img").forEach(el => console.warn(el));

//podemos seleccioanr un elemento especifico
console.log(document.querySelectorAll(".card")[2]);

//elementos li del menu
console.log(document.querySelectorAll("#menu li")[2]);

console.log("***ATRIBUTOS Y DATA-ATTRIBUTES****");
// ATRIBUTOS Y DATA-ATTRIBUTES

//<!-- data-(cualquiero otro nombre) -->
//<a href="http://10_dom.html" data-description="Document ObjectModel">DOM</a>

//devuelve el lang del html
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
//no es el mismo link
console.log(document.querySelector(".link-dom").href);
//otra forma correcta para acceder a los atributos
console.log(document.querySelector(".link-dom").getAttribute("href"));

//cambiar el atributo
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
//Otra forma de cambiar el atributo
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

//Algunas veces se pone un $ al principio para diferenciar los elementos del dom
//const linkDOM = document.querySelector(".link-dom"); 
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
//quita dependencias con la nueva pestaña abierta
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.youtube.com/jonmircha");

//verificar la existencia de un atributo específico
//devuelve true
console.log($linkDOM.hasAttribute("rel"));

//eliminar un atributo específico
$linkDOM.removeAttribute("rel");
//devuelve false
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
//imprime { "id": "1","description": "Document ObjectModel"}
//devuelve todos los datas
console.log($linkDOM.dataset);
//imprime Document ObjectModel
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a mi cana y comparte";
console.log($linkDOM.dataset.description);

console.log("******ESTILOS Y VARIABLES CSS*****");
//ESTILOS Y VARIABLES CSS

//devuelve un map sobre todos los estilos disponibles
console.log($linkDOM.style)
//imprime rgb(247, 223, 30)
console.log($linkDOM.style.backgroundColor);

//imprime directamente el atributo descrito
//imprime background-color: #F7DF1E; color: black;
console.log($linkDOM.getAttribute("style"));

//otra forma de traer los estilos de un elemento específico 
console.log(window.getComputedStyle($linkDOM));
//obtener atributo especifico con getComputedStyle
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

/*tendriamos 3 formas en total para obtener el css: 
.style
.getAttribute
.getComputedStyle */

//MODIFICAR LOS VALORES
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "8px";

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");

//VARAIBLES CSS - CUSTOM PROPERTIES 
const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

//establecer las variables css a nuestros elementos
//$body.style.backgroundColor = varDarkColor; 
//$body.style.color = varYellowColor; 

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

//serían dos formas para modificar el css, con . o con setProperty
//$body.style.setProperty("background-color", varDarkColor); 

console.log("************CLASES CSS***********");
//CLASES CSS

const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
//retorn DOMtokenList que retorna los nombres de las clases que contiene
console.log($card.classList);
//retorn si contiene una clase especifica
//imprime false
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
//imprime true
console.log($card.classList.contains("rotate-45"));
//elimina una clase específica
$card.classList.remove("rotate-45");
//si no tiene la clase, se la agrega
$card.classList.toggle("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.toggle("rotate-45");
//reemplaza una clase por otra
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");


console.log("**********TEXTO Y HTML***********");
//TEXTO Y HTML

const $whatisDOM = document.getElementById("que-es");
let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></br>) es una API para documentos HTML Y XML
</p> 
<p>
Este proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS
</p>
<p>
<mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</p>
`;

//cambiar contenido html del elemento, se usaba para internet explorer
//no reconoce las etiquetas html
$whatisDOM.innerText = text;

//quita las tabulaciones y tampoco interprete código html
$whatisDOM.textContent = text;

//innerHTML si identifica las etiquetas HTML
$whatisDOM.innerHTML = text;

//reordena el html. En este caso tendrías tres p, envés de solo un p conteniendo los 3 p. Puede servir para mejorar las prácticas en HTML
$whatisDOM.outerHTML = text;

console.log("*******DOM TRAVERSING: RECORRIENDO EL DOM*******");
//DOM TRAVERSING: RECORRIENDO EL DOM

const $cards = document.querySelector(".cards");
console.log($cards);
//devuelve una colección de nodos hijos de cards 
console.log($cards.children);
console.log($cards.children[2]);
//imprime el elemento padre
console.log($cards.parentElement);
console.log($cards.parentNode);
//imprime el primer nodo hijo
console.log($cards.firstChild);
//imprime el primer elemento hijo
console.log($cards.firstElementChild);
//imprime el último nodo hijo
console.log($cards.lastChild);
//imprime el último elemento hijo
console.log($cards.lastElementChild);

//imprime el primer nodo previo hermano
console.log($cards.previousSibling);
//imprime el primer elemento previo hermano
console.log($cards.previousElementSibling);
//también tenemos nextElementSibling

//método para búscar el ancestro padre más cercano del selector
//imprime null porque no tiene ancestro div
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));

//console.log(document.getElementById("menu")); 
//console.log(document.querySelector("#menu")); 

console.log("********CREANDO ELEMENTOS Y FRAGMENTOS*********");
//CREANDO ELEMENTOS Y FRAGMENTOS

const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"); //nodo de texto

const $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://picsum.photos/id/239/200/200");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//otra forma de agregar contenido usando innerHTML
$figure2.innerHTML = `
<img src="https://picsum.photos/id/1/200/200" alt="Tech" srcset="">
<figcaption>Tech</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otonño", "Invierno"],
    $ul = document.createElement("ul");
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

//recorrer un array para agregar múltiples elementos
estaciones.forEach(element => {
    const $li = document.createElement("li");
    $li.textContent = element;
    $ul.appendChild($li);
});
document.body.appendChild($ul);

//recorrer un array para agregar múltiples elementos con innnerHTML
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
    $ul2 = document.createElement("ul");
document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach(element => {
    $ul2.innerHTML += `<li>${element}</li>`;
});

//UTLIZACIÓN DE FRAGMENTOS 
//un fragmento puede mejorar significativamente el rendimiento debido a que solo tendremos que insertar un solo elemento acumulado con todos los elementos, envés de de agregar cada elemento uno por uno.

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

//no se puede usar la técnica de innerHTML
meses.forEach(element => {
    const $li = document.createElement("li");
    $li.textContent = element;
    $fragment.appendChild($li);
});

document.write("<h3>Meses de año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

console.log("****************TEMPLATES HTML*****************");
//TEMPLATES HTML

const $template = document.getElementById("template-card").content,
    $fragment2 = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnología",
            img: "https://picsum.photos/id/1/200/200"
        },
        {
            title: "Animales",
            img: "https://picsum.photos/id/237/200/200"
        },
        {
            title: "Personas",
            img: "https://picsum.photos/id/65/200/200"
        },
        {
            title: "Arquitectura",
            img: "https://picsum.photos/id/101/200/200"
        },
        {
            title: "Naturaleza",
            img: "https://picsum.photos/id/10/200/200"
        }
    ];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    //CLON, TRUE la estructura completa
    let $clone = document.importNode($template, true);
    $fragment2.appendChild($clone);
});

$cards.appendChild($fragment2);

console.log("******MODIFICACIÓN ELEMENTOS (OLD STYLE)******");
//MODIFICACIÓN ELEMENTOS (OLD STYLE)

//const $cards = document.querySelector(".cards"); 
const $newCard = document.createElement("figure"),
    //clonar un elemento
    $cloneCards = $cards.cloneNode();
//false solo clona el nodo padre, true es para clonar todo

$newCard.innerHTML = `
<img src="https://picsum.photos/seed/picsum/200/200" alt="Any">
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

//metodo para reemplazar un elemento
//("nuevo elemento", "elemento viejo")
//$cards.replaceChild($newCard, $cards.children[2]); 

//inserta antes que el primer elemento
//$cards.insertBefore($newCard, $cards.firstElementChild); 

//eliminar el último elemento de cards
$cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards);

console.log("******MODIFICACIÓN ELEMENTOS (COOL STYLE)******");
//MODIFICACIÓN ELEMENTOS (COOL STYLE)

/*
.insertAdjacent...
    .insertAdjacentElement(position, el)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position, text)

Posiciones: 
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)
*/

const $cards2 = document.querySelector(".cards");
const $newCard2 = document.createElement("figure");
const $newCard3 = document.createElement("figure");

$newCard2.innerHTML = `
<img src="https://picsum.photos/seed/picsum/200/200" alt="Any">
<figcaption>Any</figcaption>
`;
$newCard2.classList.add("card");

//se inserto antes del nodo de referencia
$cards2.insertAdjacentElement("beforebegin", $newCard2);
//primer hijo
$cards2.insertAdjacentElement("afterbegin", $newCard2);
//ultimo hijo
$cards2.insertAdjacentElement("beforeend", $newCard2);
//después del nodo de referencia
$cards2.insertAdjacentElement("afterend", $newCard2);

let $contentCard = `
<img src="https://picsum.photos/id/20/200/200" alt="Any">
<figcaption></figcaption>
`;
$newCard3.classList.add("card");
//se le inserta el contenido html
$newCard3.insertAdjacentHTML("beforeend", $contentCard);
//se busca el figcatipon y se inserta el Texto Any
$newCard3.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
//$cards2.insertAdjacentElement("beforebegin", $newCard3) 

//inserta como primer hijo
//$cards2.prepend($newCard3); 
//se inserto antes del nodo de referencia
//$cards2.before($newCard3); 
//ultimo hijo
//$cards2.append($newCard3);
//después del nodo de referencia 
$cards2.after($newCard3);

console.log("************MANEJADORES DE EVENTOS*************");
//MANEJADORES DE EVENTOS

const holaMundo = () => {
    alert("Hola Mundo");
    //imprime PointerEvent
    console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");

//EVENTO SEMÁNTICO
//-------------------------

//sin paréntesis para que no se cargue al principio
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = (e) => {
    alert("Nuevo hola Mundo");
    //podemos usar e o event 
    console.warn(e);
    console.warn(event);
}
//una vez definido el evento semático, solo se podrá ejecutar una sola función

//EVENTO MÚLTIPLE
//--------------------------
const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo Manejador de Eventos Múltiples");
    console.log("--------------------------");
    console.warn(e);
    console.warn(e.type);
    //código html del evento
    console.warn(e.target);
    console.warn(event);
});

console.log("***EVENTOS CON PARÁMETROS Y REMOVER EVENTOS****");
//EVENTOS CON PARÁMETROS Y REMOVER EVENTOS

function saludar(nombre = "Desconocid@") {
    alert(`Hola ${nombre} - ${event}`);
}
//toda función no puede recibir otro parámetro que no sea el evento en si
$eventoMultiple.addEventListener("click", saludar);

$eventoMultiple.addEventListener("click", () => {
    saludar("Marco");
});

$eventoRemover = document.getElementById("evento-remover");

//la función debe ser obligatoriamente Expresada
const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    //método para eliminar un evento
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick);

console.log("*****FLUJO DE EVENTOS (BURBUJA Y CAPTURA*******");
//FLUJO DE EVENTOS (BURBUJA Y CAPTURA)

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
//SELECCIONA LOS 3 DIVS 
console.warn($divsEventos);

function flujoEventos(e) {
    //this haría referencia al div en cuestión
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
}

$divsEventos.forEach(div => {
    // - false: Burbuja
    //div.addEventListener("click", flujoEventos, false);
    // - true: Captura 
    //se captura el elemento más externo al más interno
    //div.addEventListener("click", flujoEventos, true);

    //once es para que solo haya una sola ejecución del evento
    div.addEventListener("click", flujoEventos, {
        capture: true,
        once: true
    })
});

console.log("*******stopPropagation & preventDefault********");
//stopPropagation & preventDefault

const $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos2(e) {
    console.warn("--------------------------")
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
    //Evita la propagación de eventos
    e.stopPropagation();
}

$divsEventos.forEach(div => {
    //Modo burbuja
    div.addEventListener("click", flujoEventos2);
    //Modo captura
    //div.addEventListener("click", flujoEventos2, true);
});

$linkEventos.addEventListener("click", e => {
    alert("Hola soy tu amigo");
    //cancela el evento del enlace
    //podemos cancelar cualquier evento por defecto 
    e.preventDefault();
    e.stopPropagation();
});

console.log("************DELEGACIÓN DE EVENTOS**************");
//DELEGACIÓN DE EVENTOS

//La delegación de eventos en JavaScript es un concepto que se refiere a la técnica de manejar eventos en elementos hijos a través de un elemento padre. En lugar de adjuntar un controlador de eventos a cada elemento hijo individualmente, se aprovecha la propagación de eventos en el árbol DOM.
console.warn("--------------------------");
const $divsEventos2 = document.querySelectorAll(".eventos-flujo2 div");
const $linkEventos2 = document.querySelector(".eventos-flujo2 a");

function flujoEventos3(e) {
    console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);
    e.stopPropagation();
}

//capta el evento de document
document.addEventListener("click", e => {
    console.log("Click en: ", e.target);

    if (e.target.matches(".eventos-flujo2 div")) {
        flujoEventos3(e);
    }

    if (e.target.matches(".eventos-flujo2 a")) {
        alert("Hola soy tu amigo");
        e.preventDefault();
        //ya no es necesario el stop propagation porque el padre ya es el document
    }

});

console.log("");
console.warn("----------------------------BOM---------------------------");
console.log("");


console.log("************PROPIEDADES Y EVENTOS**************");
//PROPIEDADES Y EVENTOS

/*
El BOM, o Browser Object Model (Modelo de Objetos del Navegador), es una parte de JavaScript que provee a los desarrolladores acceso y control sobre el navegador web en sí, permitiendo manipular aspectos como ventanas, frames, historial, entre otros elementos del entorno del navegador.
*/

//evento para el cambio del tamaño de la ventana
window.addEventListener("resize", e => {
    console.clear(); 
    //tamaño de viewport
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    //tamaño de la ventana
    console.log(window.outerWidth);
    console.log(window.outerHeight);

    //es sobre cuanto han recorrido
    console.log(scrollX);
    console.log(scrollY); 
    console.log(e); 
});

//evento para el scroll
window.addEventListener("scroll", e => {
    console.clear(); 
    console.log("********** Evento Scroll **********");
    console.log(window.scrollX);
    console.log(window.scrollY); 
    console.log(e);  
});

//load: El evento 'load' se activa cuando todos los recursos de la página web han sido cargados completamente, incluyendo imágenes, hojas de estilo, scripts y otros recursos externos. Este evento puede tardar más en dispararse que DOMContentLoaded ya que espera a que toda la página y los recursos asociados se carguen por completo.

window.addEventListener("load", e => {
    console.log("********** Evento Load **********");
    console.log(window.screenX);
    console.log(window.screenY); 
    console.log(e);
})

//DOMContentLoaded: Este evento se dispara cuando el DOM (Document Object Model) ha sido completamente cargado y parseado, lo que significa que la estructura de la página HTML está lista, pero los recursos externos como imágenes, hojas de estilo, y scripts pueden no haber terminado de cargarse. Es útil cuando se desea ejecutar un código JavaScript que manipula el DOM sin tener que esperar a que todos los recursos estén completamente descargados.

document.addEventListener("DOMContentLoaded", e => {
    console.log("********** DOMContentLoaded **********");
    console.log(window.screenX);
    console.log(window.screenY); 
    console.log(e);
}); 

console.log("*******************MÉTODOS*********************");
//MÉTODOS

//window.alert("Alerta");
//window.confirm("Confirmación"); 
//window.prompt("Aviso"); 
//alert("marco"); 

const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar = document.getElementById("cerrar-ventana"),
$btnImprimir = document.getElementById("imprimir-ventana"); 
let ventana;

$btnAbrir.addEventListener("click", e => {
    ventana = window.open("https://jonmircha.com/")
}); 
$btnCerrar.addEventListener("click", e => {
    //window.close(); 
    //Cierra la ventana de la referencia
    ventana.close(); 
}); 
$btnImprimir.addEventListener("click", e => {
    //imprimir el contenido
    window.print(); 
}); 

console.log("******OBJETOS: URL, HISTORIAL Y NAVEGADOR******");
//OBJETOS: URL, HISTORIAL Y NAVEGADOR

//objeto URL (location)
console.log("******* Objeto URL (location) ********"); 

// Muestra el objeto Location completo, que contiene información sobre la URL actual.
console.log(location);

// Muestra el origen (protocolo, dominio y puerto) de la URL actual.
console.log(location.origin);

// Muestra el protocolo utilizado (http:, https:, etc.) de la URL actual.
console.log(location.protocol);

// Muestra el nombre del host (dominio) de la URL actual.
console.log(location.host);

// Muestra el nombre del host (dominio) de la URL actual sin el prefijo del protocolo.
console.log(location.hostname);

// Muestra el número de puerto de la URL actual.
console.log(location.port);

// Muestra la URL completa de la página actual.
console.log(location.href);

// Muestra el fragmento (hash) de la URL actual, que sigue al símbolo '#' en la URL.
console.log(location.hash);

//Muestra los valores enviados a través de una url
console.log(location.search);

// Muestra la ruta y el nombre de archivo de la URL actual.
console.log(location.pathname);
//location.reload(); 

//HISTORIAL
console.log("******* Historial ********"); 
//es una interfaz que representa la sesión de historial del navegador. Proporciona métodos y propiedades para interactuar con el historial del navegador, permitiendo a los desarrolladores controlar la navegación entre páginas y manipular el historial del navegador.

console.log(window.history); 
console.log(window.history.length); 
//regresar y adelantar según los botones de atrás y adelante
//history.back(3)
//history.forward(3)
//history.go(-1)

//NAVEGADOR
console.log("******* Navegador ********"); 
//proporciona información sobre el navegador del usuario y su entorno. Contiene propiedades que permiten a los desarrolladores acceder a detalles sobre el agente de usuario, el sistema operativo, la geolocalización, el idioma del navegador, entre otros detalles relacionados con la configuración y el entorno del usuario.

// Muestra toda la información disponible sobre el objeto navigator.
console.log(navigator);

// Muestra detalles sobre la conexión de red del usuario.
console.log(navigator.connection);

// Muestra información sobre la geolocalización del usuario si está disponible.
console.log(navigator.geolocation);

// Muestra información sobre los dispositivos multimedia disponibles.
console.log(navigator.mediaDevices);

// Muestra información sobre los tipos MIME admitidos por el navegador.
console.log(navigator.mimeTypes);

// Muestra un valor booleano que indica si el navegador está en línea o no.
console.log(navigator.onLine);

// Muestra información sobre el service worker registrado en el navegador.
console.log(navigator.serviceWorker);

// Muestra información sobre el almacenamiento disponible en el navegador.
console.log(navigator.storage);

// Muestra información sobre dispositivos USB conectados, si el navegador lo admite.
console.log(navigator.usb);

// Muestra una cadena de texto que representa la identificación del agente de usuario del navegador.
console.log(navigator.userAgent);