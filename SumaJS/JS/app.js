//Suma-------------------------------------------------------
let sumar = document.getElementById("sumar");

function realizarSuma(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 + numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML = "<p>El resultado es: " + resultado + "</p>";

    console.log("El resultado es: " + resultado)
}

sumar.addEventListener("click", realizarSuma);


//Resta---------------------------------------------------------
let restar = document.getElementById("restar");

function realizarResta(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 - numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML = "<p>El resultado es: " + resultado + "</p>";

    console.log("El resultado es: " + resultado)
}
restar.addEventListener("click", realizarResta);


//Multiplicacion--------------------------------------------------
let multiplicar = document.getElementById("multiplicar");

function realizarMultiplicacion(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 * numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML = "<p>El resultado es: " + resultado + "</p>";

    console.log("El resultado es: " + resultado)
}
multiplicar.addEventListener("click", realizarMultiplicacion);


//Division-------------------------------------------------------
let dividir = document.getElementById("dividir");

function realizarDivision(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 / numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML = "<p>El resultado es: " + resultado + "</p>";

    console.log("El resultado es: " + resultado)
}
dividir.addEventListener("click", realizarDivision)