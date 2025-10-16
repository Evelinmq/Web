const tareaInput = document.getElementById("tareaInput");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem('tareasGuardadas')) || [];
    
    listaTareas.innerHTML = ''; 

    tareas.forEach(tarea => {
        crearElementoTarea(tarea.texto, tarea.completada);
    });
}

function guardarTareas() {
    const tareas = [];
    listaTareas.querySelectorAll('li').forEach(item => {

        tareas.push({
            texto: item.textContent,
            completada: item.classList.contains('completada')
        });
    });

    localStorage.setItem('tareasGuardadas', JSON.stringify(tareas));
}


/**
 * Crea y añade un nuevo elemento <li> a la lista de tareas.
 * @param {string} texto 
 * @param {boolean} completada - Si la tarea ya está marcada como completada.
 */
function crearElementoTarea(texto, completada = false) {
    const li = document.createElement('li');
    li.textContent = texto;

    if (completada) {
        li.classList.add('completada');
    }

    li.addEventListener('click', () => {
        li.classList.toggle('completada');
        guardarTareas();
    });

    listaTareas.appendChild(li);
}


function agregarTarea() {
    const textoTarea = tareaInput.value.trim();


    if (textoTarea !== "") {
        crearElementoTarea(textoTarea);
        guardarTareas();
        tareaInput.value = "";
    }
}

cargarTareas(); 

btnAgregar.addEventListener("click", agregarTarea);

tareaInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        agregarTarea();
    }
});