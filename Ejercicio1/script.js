document.getElementById('promptButton').addEventListener('click', function() {
    const userInput = prompt('Ingrese un número:');
    const number = parseInt(userInput);
    const resultElement = document.getElementById('result');
    
    if (isNaN(number) || number < 1) {
        resultElement.textContent = 'Por favor, ingrese un número válido mayor o igual a 1.';
    } else {
        const multiplesOfFive = [];
        
        for (let i = 1; i <= number; i++) {
            if (i % 5 === 0) {
                multiplesOfFive.push(i);
            }
        }
        
        resultElement.textContent = `Los múltiplos de 5 desde 1 hasta ${number} son: ${multiplesOfFive.join(', ')}`;
    }
});
