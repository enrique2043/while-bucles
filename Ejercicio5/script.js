document.getElementById('startButton').addEventListener('click', function() {
    while (true) {
        const userInput = prompt('Ingrese un día de la semana (ej: lunes, jueves, domingo):').toLowerCase();
        
        if (userInput === null || userInput.trim() === '') {
            alert('Por favor, ingrese un día válido.');
            continue;
        }
        
        switch (userInput) {
            case 'lunes':
                alert('¡Comienza la semana con energía!');
                break;
            case 'martes':
                alert('¡Es martes, sigue adelante!');
                break;
            case 'miércoles':
                alert('¡Mitad de semana, ya casi llegamos!');
                break;
            case 'jueves':
                alert('¡Jueves, casi es viernes!');
                break;
            case 'viernes':
                alert('¡Es viernes, fin de semana a la vista!');
                break;
            case 'sábado':
                alert('¡Es sábado, disfruta tu día!');
                break;
            case 'domingo':
                alert('Ve a descansar');
                return;  // Termina la captura de información
            default:
                alert('Día no reconocido, por favor ingrese un día de la semana válido.');
        }
    }
});
