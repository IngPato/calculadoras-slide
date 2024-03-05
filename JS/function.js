// Define la función changeCalculator en el ámbito global
function changeCalculator(calculatorId) {
    const calculators = document.querySelectorAll('.calculator');

    calculators.forEach(calculator => {
        calculator.style.display = 'none';
    });

    const selectedCalculator = document.getElementById(calculatorId);
    selectedCalculator.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    // Inicialmente muestra la calculadora normal
    changeCalculator('calculator-normal');
});
