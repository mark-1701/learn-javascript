import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");

  let { hash } = location;

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    $main.innerHTML = `<h2>Sección del Home</h2>`;
    await ajax({
      url: api.POSTS,
      cbSuccess: posts => {
        console.log(posts);
        let html = "";
        posts.forEach(post => {
          html += PostCard(post);
        });
        d.querySelector(".loader").style.display = "none";
        d.getElementById("main").innerHTML = html;
      }
    });
  } else if (hash.includes("#/search")) {
    $main.innerHTML = `<h2>Sección del Búscador</h2>`;

    let query = localStorage.getItem("wpSearch");

    if (!query) {
      d.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: search => {
        console.log(search);

        let html = "";

        if (search.length === 0) {
          html = `
          <p class="error">
            No existen resultados de búsqueda para el térmido
            <mark>${query}</mark>
          </p>
          `;
        } else {
          search.forEach(post => {
            html += SearchCard(post);
          });
        }

        $main.innerHTML = html;
      }
    });
  } else if (hash === "#/contacto") {
    $main.appendChild(ContactForm());
  } else {
    $main.innerHTML = `<h2>Aquí cargará del contenido del Post previamente seleccionado</h2>`;
    // console.log(`api.POST/${localStorage.getItem("wpPostId")}`);

    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: post => {
        console.log(post);
        $main.innerHTML = Post(post);
      }
    });
  }
  d.querySelector(".loader").style.display = "none";
}
