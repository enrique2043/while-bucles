document.getElementById('promptButton').addEventListener('click', function() {
    const number1 = parseInt(prompt('Ingrese el primer número (entre 1 y 50):'));
    const number2 = parseInt(prompt('Ingrese el segundo número (entre 1 y 50):'));
    
    if (isNaN(number1) || isNaN(number2) || number1 < 1 || number1 > 50 || number2 < 1 || number2 > 50) {
        console.log('Ingrese dos números válidos entre 1 y 50.');
    } else {
        for (let i = 1; i <= 50; i++) {
            if (i === number1 || i === number2) {
                console.log(`${i} ¡Lotería!`);
            } else {
                console.log(i);
            }
        }
    }
});
