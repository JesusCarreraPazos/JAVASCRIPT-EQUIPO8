function esPar(numero){
    var resultado = parInpar(numero);
    alert("El numero " + numero + " es " + resultado);
}

function parInpar(numero){
    if(numero % 2 == 0) return "par";
    else return "impar"
}