// VARIABLES
const $email = document.querySelector("#email");
const $asunto = document.querySelector("#asunto");
const $mensaje = document.querySelector("#mensaje");
const $btnEnviar = document.querySelector("#enviar");
const $formulario = document.querySelector("#enviar-mail");
const $btnReset = document.querySelector("#resetBtn");

// EVENT LISTENERS
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", inicioApp);
  $email.addEventListener("blur", validarCampo);
  $asunto.addEventListener("blur", validarCampo);
  $mensaje.addEventListener("blur", validarCampo);
  $formulario.addEventListener("submit", enviarFormulario);
  $btnReset.addEventListener("click", resetearFormulario);
}

// FUNCTIONS
function inicioApp() {
  $btnEnviar.disabled = true;
}

function resetearFormulario(e) {
  e.preventDefault();
  $formulario.reset();
}

function validarCampo() {
  validarCampoLongitud(this);
  if (this.type === "email") {
    validarCampoEmail(this);
  }

  let errores = document.querySelectorAll(".error");
  if ($email.value !== "" && $asunto.value !== "" && $mensaje.value !== "") {
    if (errores.length === 0) {
      $btnEnviar.disabled = false;
    }
  } else {
  }
}

function validarCampoLongitud(campo) {
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}

function validarCampoEmail(campo) {
  let email = campo.value;
  if (email.indexOf("@") !== -1) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}

function enviarFormulario(e) {
  e.preventDefault();
  const gifSpinner = document.querySelector("#spinner");
  gifSpinner.style.display = "block";
  const gifEmail = document.createElement("img");
  gifEmail.src = "./img/mail.gif";
  gifEmail.style.display = "block";

  setTimeout(() => {
    gifSpinner.style.display = "none";
    document.querySelector("#loaders").appendChild(gifEmail);
    setTimeout(() => {
      gifEmail.remove();
      resetearFormulario(e);
    }, 3000);
  }, 3000);
}
