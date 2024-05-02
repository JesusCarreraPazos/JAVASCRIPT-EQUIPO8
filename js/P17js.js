function mostrarSigno() {
    const fecha = document.getElementById('fechaNacimiento').value;
    if (!fecha) {
        alert("Por favor, selecciona tu fecha de nacimiento.");
        return;
    }

    const signoInfo = determinarSigno(new Date(fecha));
    document.getElementById('resultado').style.backgroundColor = signoInfo.color;
    document.getElementById('resultado').innerHTML = 
        `Tu signo zodiacal es <strong>${signoInfo.signo}</strong>.<br>` +
        `Tu número de la suerte es <strong>${signoInfo.numeroSuerte}</strong>.`;
}

function determinarSigno(fechaNacimiento) {
    const month = fechaNacimiento.getMonth() + 1;
    const day = fechaNacimiento.getDate();
    let signo = '';
    let color = '';
    const numeroSuerte = Math.floor(Math.random() * 100) + 1;

    if ((month == 1 && day <= 19) || (month == 12 && day >= 22)) {
        signo = 'Capricornio';
        color = '#646464'; // Gris oscuro
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        signo = 'Acuario';
        color = '#00FFFF'; // Cyan
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        signo = 'Piscis';
        color = '#2e8b57'; // Sea green
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        signo = 'Aries';
        color = '#FF0000'; // Rojo
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        signo = 'Tauro';
        color = '#008000'; // Verde
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        signo = 'Géminis';
        color = '#FFFF00'; // Amarillo
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        signo = 'Cáncer';
        color = '#C0C0C0'; // Plata
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        signo = 'Leo';
        color = '#FFA500'; // Naranja
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        signo = 'Virgo';
        color = '#6b8e23'; // Verde oliva
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        signo = 'Libra';
        color = '#FFC0CB'; // Rosa
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        signo = 'Escorpio';
        color = '#A52A2A'; // Marrón
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        signo = 'Sagitario';
        color = '#FF4500'; // Rojo naranja
    }

    return { signo, color, numeroSuerte };
}


