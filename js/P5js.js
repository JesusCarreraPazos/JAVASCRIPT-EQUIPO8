function limpiar(){
   var lista = document.querySelectorAll('p');

    if(lista.lenght != 0) {
        i = lista.lenght-1;
        while(i>-1)
            lista[i].parentNode.removeChild(lista[i--]);
    }
    else alert("No hay parrafos a eliminar");
}

function esPar(numero){
    var resultado = parInpar(numero);
    alert("El numero " + numero + " es " + resultado);
}

function parInpar(numero){
    if(numero % 2 == 0) return "par";
    else return "impar"
}