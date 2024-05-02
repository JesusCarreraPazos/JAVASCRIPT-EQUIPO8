document.addEventListener('DOMContentLoaded', function() {
    var numero = prompt("Introduce un número y se mostrará su factorial");
    var resultado = 1;

    if (numero !== null) {
        numero = parseInt(numero);
        for (var i = 1; i <= numero; i++) {
            resultado *= i;
        }
        document.getElementById('resultado').innerText = "El factorial de " + numero + " es: " + resultado;
    } else {
        document.getElementById('resultado').innerText = "No se introdujo un número válido.";
    }
});
