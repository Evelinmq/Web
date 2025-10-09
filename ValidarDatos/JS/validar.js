const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const fechaInput = document.getElementById("fecha");
const hombreInput = document.getElementById("hombre");
const mujerInput = document.getElementById("mujer");
const terminosInput = document.getElementById("aceptar");
const resultadoDiv = document.getElementById("mostrarResultado");
const validarBoton = document.getElementById("validar");

function validarDatos() {

    const nombreValor = nombreInputInput.value.trim(); 
    const apellidoValor = apellidoInput.value.trim();
    const fechaValor = fechaInput.value.trim();
    const hombreValor = hombreInput.value.trim();
    const mujerValor = mujerInput.value.trim();
    const terminosValor = terminosInput.value.trim();


    if (nombreValor === "" && apellidoValor === ""
        && fechaValor === "" && hombreValor == "" || mujerValor == ""
        && terminosInput === ""
    ) {
        resultadoDiv.innerHTML = "<p>Por favor, ingresa un correo y una contraseña.</p>";
    } else if (correoValor === "") {
        resultadoDiv.innerHTML = "<p>Aún no has ingresado un correo.</p>";
    } else if (contraseniaValor === "") {
        resultadoDiv.innerHTML = "<p>Aún no has ingresado una contraseña.</p>";
    } else {
        resultadoDiv.innerHTML = "<p>Datos ingresados correctamente.</p>";
    }
}

if (validarBoton) {
    validarBoton.addEventListener("click", validarDatos);
}