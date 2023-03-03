function saludo () {
    console.log("Hola Mundo", "saludo");
}

function despedirse () {
    console.log("Adios", "despedirse");
}

function diElNombre (nombre) {
    console.log("Hola " + nombre, "diElNombre");
}

function imprimeElNombreCompleto (nombre, apellidoP, apellidoM) {
    var nombreCompleto = nombre + " " + apellidoP + " " + apellidoM;

    console.log(nombreCompleto, "imprimeElNombreCompleto");
}

function simplificaLaVariableNombreCompleto(nombre, apellidoP, apellidoM) {
    var nombreCompleto = `${nombre} ${apellidoP} ${apellidoM}`;

    console.log(nombreCompleto, "simplificaLaVariableNombreCompleto");
}

function devuelveUnTexto() {
    return "Este texto ha cambiado";
}

function comparaDosNumerosYDevuelveElMayor (primerNumero, segundoNumero) {
    var resultado = 0;

    // Encuentra el mayor entre los dos números y guarda el resultado
    if (primerNumero > segundoNumero) {
        resultado = primerNumero
    } else {
        resultado = segundoNumero
    }

    return resultado;
}

function elMayorEntreTres (num1, num2, num3) {
    var elMayorEntreDos = 0
    var elMayorDeTodos = 0

    // Compara dos numeros y el mayor se guarda en elMayorEntreDos
    elMayorEntreDos = comparaDosNumerosYDevuelveElMayor(num1, num2);
    // Compara dos numeros y el mayor se guarda en elMayorDeTodos
    elMayorDeTodos = comparaDosNumerosYDevuelveElMayor(elMayorEntreDos, num3);

    console.log("El mayor de los tres números es: " + elMayorDeTodos);
}

(function () {
    // saludo();
    // despedirse();
    // diElNombre("Fran");
    // imprimeElNombreCompleto("Fran", "Escobar", "Cruz");
    // simplificaLaVariableNombreCompleto("Fran", "Escobar", "Cruz");
    // var texto = devuelveUnTexto()
    // console.log(texto, "Uso desde una variable")
    // console.log(devuelveUnTexto(), "Uso directo del return de la función")
    elMayorEntreTres(13, 15, 11);
})();
