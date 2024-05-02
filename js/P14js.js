function modificar(tipo) {
    lista = document.getElementById("lista");

    switch(tipo) {
        case 'D': 
                    var elemento = document.createElement("li");
                    var texto = document.createElement("Nuevo DOM");
                    elemento.appendChild(texto);
                    lista.appendChild(elemento);
                    break;
        case 'H':
                    var nuevoElemento = "<li>Nuevo HTML</li>";
                    lista.innerHTML = lista.innerHTML + nuevoElemento;
                    break;
        default: 
                    alert("Eliminar");
                    elemento_li = document.getElementsByTagName("li");
                    lista.removeChild(elemento_li[elemento_li.lengh-1]);
    }
}