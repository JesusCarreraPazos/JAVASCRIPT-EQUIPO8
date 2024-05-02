function agregarTarea() {
    const tarea = document.getElementById('nuevaTarea').value;
    if (tarea.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = tarea;
        li.onclick = function() {
            this.parentNode.removeChild(this);
        };
        document.getElementById('listaTareas').appendChild(li);
        document.getElementById('nuevaTarea').value = '';
    }
}