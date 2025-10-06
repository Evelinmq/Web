//Declaraciòn de variables
    var nombre;
    let nombreUsuario;

    let suma;
    let resta;
    let multiplicacion;
    let division;
    let mostrarSuma = document.getElementById("suma");
    let mostrarResta = document.getElementById("resta");
    let mostrarMultiplicacion = document.getElementById("multiplicacion");
    let mostrarDivision = document.getElementById("division");



    suma = 8 + 9;

    resta = 50 - 10;

    multiplicacion = 2 * 8;

    division = 80 / 20;

    console.log("Suma " + suma + ", resta " + resta + ", multiplicacion " + multiplicacion + ", division " + division);


    //Pàrrafo en la pàgina web
    mostrarSuma.innerHTML="La suma es: " + suma;
    mostrarResta.innerHTML="La resta es: " + resta;
    mostrarMultiplicacion.innerHTML="La multiplicacion es: " + multiplicacion;
    mostrarDivision.innerHTML="La division es: " + division;

    const numero1 = document.getElementById("n1");
    const numero2 = document.getElementById("n2");
    let res;
    
    let msuma = document.getElementById("res");

    res = numero1 + numero2;

    msuma.innerHTML = "Tu resultado es: " + res;
