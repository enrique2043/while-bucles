document.getElementById('startButton').addEventListener('click', function() {
    const numbers = [];
    let userInput;
    
    while (true) {
        userInput = prompt('Ingrese un número (ingrese 0 para terminar):');
        const number = parseInt(userInput);

        if (number === 0) {
            break;
        } else if (!isNaN(number)) {
            numbers.push(number);
        } else {
            alert('Por favor, ingrese un número válido.');
        }
    }
    
   
    console.log('Números capturados:', numbers);
    
    
    document.getElementById('result').textContent = `Números capturados: ${numbers.join(', ')}`;
});
