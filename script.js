function calculateEmission() {
    const vehicleType = document.getElementById('vehicle-type').value;
    const distance = parseFloat(document.getElementById('distance').value);

   
    const emissionFactors = {
        car: 120,  
        motorcycle: 80   
       
    };

    if (isNaN(distance) || distance <= 0) {
        alert('Please enter a valid distance.');
        return;
    }

    if (!emissionFactors.hasOwnProperty(vehicleType)) {
        alert('Invalid vehicle type selected.');
        return;
    }

    const emission = distance * emissionFactors[vehicleType];
    displayResult(emission.toFixed(2));
}

function displayResult(emission) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<p>Carbon Emission: ${emission} gCO2</p>`;
}
