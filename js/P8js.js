function info(cadena) {
    var resultado = `La Cadena "${cadena}"`;

    // Comprobar si la cadena está en mayúsculas o minúsculas
    if (cadena == cadena.toUpperCase()) {
        resultado += " está formada solo por mayúsculas.";
    } else if (cadena == cadena.toLowerCase()) {
        resultado += " está formada solo por minúsculas.";
    } else {
        resultado += " está formada por una mezcla de mayúsculas y minúsculas.";
    }
    
    return resultado;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('info1').innerText = info("OVNI = OBJETO VOLADOR NO IDENTIFICADO");
    document.getElementById('info2').innerText = info("En un lugar de la mancha...");
    document.getElementById('info3').innerText = info("aprendiendo javascript...");
});
