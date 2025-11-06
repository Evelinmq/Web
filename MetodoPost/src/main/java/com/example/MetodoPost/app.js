const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit",(e)=>{ //for exclusivo para arreglos
    //for(let i = 0; i < elementos.length; i++)
   const elementos = document.querySelectorAll(".campoObligatorio") ;
   const mostrarError = document.querySelector(".mostrarError");

   for(let elemento of elementos){
       if(elemento.value===""){
           e.preventDefault(); //Evita que se envíe la información antes de verificar
           mostrarError.innerHTML="<p>Faltan llenar campos</p>";
       }
   }
});