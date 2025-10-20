const persona = {
    nombre: "Evelin",
    edad: 20,
    pais: "Mexico",
    hobbies: ["Bailar, comer, dormir, chismear, cocinar, hornear, criticar hombres"]
}; //Este es un objeto

//Convertir onjeto a JSON (texto)
const personaJSON = JSON.stringify(persona);

console.log(personaJSON);

const resultado = document.querySelector(".resultado");
resultado.textContent = personaJSON;

resultado.innerHTML = 
    "Nombre: " + persona.nombre + 
    "<p> Edad: " + persona.edad +
    "<p> Pais: " + persona.pais + 
    "<p> Hobbies: " + persona.hobbies