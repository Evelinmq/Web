function cargarDatos(datos){
    const contenido = document.querySelector(".contenido");
    contenido.innerHTML = `<p>Nombre: ${datos.nombre}>/p>
                        <p>Apellido: ${datos.apellido}</p>
                        <p>Correo: ${datos.correo}</p>`;
}

//Leer JSON
fetch("datos.json")
.then(respuesta => respuesta.json()) // Convertir objeto a JSON
.then(datos => cargarDatos(datos)) // Mostrar los datos
.catch(error => console.error("Error al cargar el JSON", error))