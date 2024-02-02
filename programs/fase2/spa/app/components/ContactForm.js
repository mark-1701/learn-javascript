export function ContactForm() {
  const d = document,
    $form = d.createElement("form"),
    $styles = d.getElementById("dynamic-styles");

  $form.classList.add("contact-form");

  $styles.innerHTML = `
  .contact-form {
    margin-left: auto;
    margin-right: auto;
    width: 60%;
  }

  /* todos los hijos de .contact-form */
  .contact-form > * {
    padding: 0.5rem;
    margin: 1rem auto;
    display: block;
    width: 100%;
  }

  .contact-form textarea {
    resize: none;
  }

  .contact-form legend,
  .contact-form-response {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 1rem;
    font-family: sans-serif;
  }

  .contact-form input[type="submit"] {
    width: 50%;
    font-weight: bold;
    cursor: pointer;
  }

  /* todos los elementos que tengan el atributo placeholder */
  .contact-form *::placeholder {
    color: #000;
  }

  /* atributo required valido */
  .contact-form [required]:valid {
    border: thin solid var(--form-ok-color);
  }

  .contact-form [required]:invalid {
    border: thin solid var(--form-error-color);
  }

  .contact-form-error {
    margin-top: -1rem;
    font-size: 80%;
    background-color: var(--form-error-color);
    color: #fff;
    transition: all 800ms ease;
  }

  .contact-form-error.is-active {
    display: block;
    animation: show-message 1s 1 normal 0s ease-out both;
  }

  .contact-form-loader {
    text-align: center;
  }

  .none {
    display: none;
  }

  @keyframes show-message {
    0% {
      visibility: hidden;
      opacity: 0;
    }

    100% {
      visibility: visible;
      opacity: 1;
    }
  }  
  `;

  $form.innerHTML = `
  <legend>Envíanos tus comentarios</legend>
      <!-- title sería un alert-->
      <!-- pattern es para expresiones regulares -->
      <input
        type="text"
        name="name"
        id=""
        placeholder="Escribe tu nombre"
        title="El nombre sólo acepta letras y espacios en blanco"
        pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$"
        required
      />

      <input
        type="email"
        name="email"
        id=""
        placeholder="Escribe tu correo"
        title="Email incorrecto"
        pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9\\-]+(\\.[a-z0-9\\-]+)*(\\.[a-z]{2,})$"
        required
      />

      <input
        type="text"
        name="subject"
        id=""
        placeholder="Asunto a tratar"
        title="El asuto es requerido"
        required
      />

      <!-- textarea pattern no es valido -->
      <textarea
        name="comments"
        id=""
        cols="50"
        rows="5"
        placeholder="Escribe tus comentarios"
        title="Tu comentario no debe extender los 255 caracteres"
        data-pattern="^.{1,255}$"
        required
      ></textarea>

      <input type="submit" value="Enviar" />
      <div class="contact-form-loader none">
        <img src="app/assets/loader.svg" alt="Cargando" srcset="" class="" />
      </div>
      <div class="contact-form-response none">
        <p>Los datos han sido enviados</p>
      </div>

  `;
  
  function validationsForm() {
    const $form = d.querySelector(".contact-form"),
      $inputs = d.querySelectorAll(".contact-form [required]");

    console.log($inputs);

    $inputs.forEach(input => {
      const $span = d.createElement("span");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none");
      input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", e => {
      if (e.target.matches(".contact-form [required]")) {
        let $input = e.target,
          pattern = $input.pattern || $input.dataset.pattern;
        // console.log($input, pattern);
        if (pattern && $input.value !== "") {
          let regex = new RegExp(pattern);
          return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }

        if (!pattern) {
          return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }
      }
    });

    d.addEventListener("submit", e => {
      e.preventDefault();

      const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

      $loader.classList.remove("none");

      fetch("https://formspree.io/f/mrgnganj", {
        method: "POST",
        body: new FormData(e.target),
        headers: {
          Accept: "application/json"
        }
      })
        .then(res => (res.ok ? res.json() : Promise.reject(res)))
        .then(json => {
          console.log(json);
          $loader.classList.add("none");
          $response.classList.remove("none");
          $response.innerHTML = `<p>Mensaje enviado correctamente</p>`;
          $form.reset();
        })
        .catch(err => {
          console.log(err);
          let message = err.statusText || "Ocurrió un erro al enviar, intenta nuevamente";
          $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        })
        .finally(() => {
          setTimeout(() => {
            $response.classList.add("none");
            $response.innerHTML = "";
          }, 3000);
        });
    });
  }

  setTimeout(() => {
    
    validationsForm();
  }, 100);

  return $form;
}
