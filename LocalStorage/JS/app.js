//Clase
    const btnGuardar = document.querySelector(".btnGuardar");
    const nombre = document.querySelector(".nombre");
    const apellido = document.querySelector(".apellido");
    const fecha = document.querySelector(".fecha");
    const saludo = document.querySelector(".saludo");

//Mostrar info de localStorage
    const textoGuardado = localStorage.getItem("texto texto2 texto3");
    if(textoGuardado != ""){
        saludo.textContent = `Guardado: ${textoGuardado}`;
    }
    
    btnGuardar.addEventListener("click", ()=>{
        const texto = nombre.value;
        const texto2 = apellido.value;
        const texto3 = fecha.value;
        if(nombre != "" && apellido != "" && fecha != null){
            localStorage.setItem("texto", texto, texto2, texto3);
            saludo.textContent = `Guardado: ${texto + " " + texto2 + " " + texto3}`;
        }
    });