document.getElementById('startButton').addEventListener('click', function() {
    const words = [];
    let userInput;
    
    while (true) {
        userInput = prompt('Ingrese una letra o palabra (deje vacío y presione Enter para terminar):');
        
        if (userInput === null || userInput.trim() === '') {
            break;
        } else {
            words.push(userInput);
        }
    }
    
    // Concatenar todas las palabras capturadas
    const concatenatedWords = words.join(' ');
    
    // Mostrar el resultado en la consola
    console.log('Palabras capturadas:', concatenatedWords);
    
    // Mostrar el resultado en la página web
    document.getElementById('result').textContent = `Palabras capturadas: ${concatenatedWords}`;
});
