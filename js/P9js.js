function palindromo(cadena) {
    var resultado = `La cadena "${cadena}"`;

    // Convertir la cadena a minúsculas y eliminar espacios
    var cadenaOriginal = cadena.toLowerCase().replace(/\s+/g, '');

    // Revisar si la cadena es un palíndromo
    var esPalindromo = cadenaOriginal === cadenaOriginal.split('').reverse().join('');

    resultado += esPalindromo ? " es un palíndromo." : " no es un palíndromo.";
    return resultado;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('resultado1').innerText = palindromo("La ruta nos aporto otro paso natural");
    document.getElementById('resultado2').innerText = palindromo("Esta frase no se parece a ningun palindromo");
});
