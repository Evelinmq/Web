const persona = {
    nombre: "Evelin",
    edad: 20,
    pais: "Mexico"
}; //Este es un objeto

//Convertir onjeto a JSON (texto)
const personaJSON = JSON.stringify(persona);

console.log(personaJSON);

const resultado = document.querySelector(".resultado");
resultado.textContent = personaJSON;