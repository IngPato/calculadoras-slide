function calculateDiscount() {
    const originalPriceInput = document.getElementById('originalPrice');
    const discountPercentageInput = document.getElementById('discountPercentage');
    const discountedPriceElement = document.getElementById('discountedPrice');

    const originalPrice = parseFloat(originalPriceInput.value);
    const discountPercentage = parseFloat(discountPercentageInput.value);

    if (isNaN(originalPrice) || isNaN(discountPercentage) || originalPrice < 0 || discountPercentage < 0 || discountPercentage > 100) {
        discountedPriceElement.textContent = 'Por favor, ingrese valores válidos para el precio original y el porcentaje de descuento.';
        return;
    }

    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;

    discountedPriceElement.textContent = `Precio con descuento: S/${discountedPrice.toFixed(2)}`;
}
