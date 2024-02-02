import api from "./helpers/wp_api.js";
import { App } from "./App.js";

//no se usa () porque sería ejecución inmediata
document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", e => {
  api.page = 1;
  App();
});
