export function Loader() {
  const $loader = document.createElement("img");
  // No hay que subir carpetas porque se carga la imágen desde el index
  $loader.src = "app/assets/loader.svg";
  $loader.alt = "Cargando...";
  $loader.classList.add("loader");
  return $loader;
}
