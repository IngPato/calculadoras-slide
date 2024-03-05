function calculateIMC() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultElement = document.getElementById('result');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultElement.textContent = 'Por favor, ingrese valores válidos para altura y peso.';
        return;
    }

    const bmi = weight / Math.pow(height / 100, 2);
    const bmiRounded = bmi.toFixed(2);

    resultElement.textContent = `Su IMC es: ${bmiRounded}`;
}
