const form = document.querySelector("form");
const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const fechaInput = document.getElementById("fecha");
const hombreInput = document.getElementById("hombre");
const mujerInput = document.getElementById("mujer");
const terminosInput = document.getElementById("aceptar");
const resultadoDiv = document.getElementById("mostrarResultado");

function validarDatos(event) {
  event.preventDefault();

  const nombreValor = nombreInput.value.trim();
  const apellidoValor = apellidoInput.value.trim();
  const fechaValor = fechaInput.value;
  const generoSeleccionado = document.querySelector('input[name="opcion"]:checked');
  const terminosAceptados = terminosInput.checked;

  let mensaje = "";
  let color = "red";

  if (nombreValor === "") {
    mensaje = "Por favor, ingresa tu nombre.";
  } else if (apellidoValor === "") {
    mensaje = "Por favor, ingresa tu apellido.";
  } else if (fechaValor === "") {
    mensaje = "Por favor, selecciona tu fecha de nacimiento.";
  } else if (!generoSeleccionado) {
    mensaje = "Por favor, selecciona tu género.";
  } else if (!terminosAceptados) {
    mensaje = "Debes aceptar los términos y condiciones.";
  } else {
    mensaje = "Datos ingresados correctamente.";
    color = "green";
  }

  resultadoDiv.innerHTML = `<p style="color:${color}">${mensaje}</p>`;

  if (color === "green") {
    form.submit();
  }
}

form.addEventListener("submit", validarDatos);
