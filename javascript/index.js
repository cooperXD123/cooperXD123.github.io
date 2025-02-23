let pH = document.getElementById('pH');
let button = document.getElementById('button');
let result = document.getElementById('result');

button.addEventListener('click', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Parse the pH value as a float
    let ph = parseFloat(pH.value);

    // Check the pH value and determine the water quality
    if (isNaN(ph) || ph < 0 || ph > 14) {
        result.innerHTML = "Invalid pH value";
    } else if (ph > 7 && ph <= 14) {
        result.innerHTML = "เบส";
    } else if (ph == 7) {
        result.innerHTML = "กลาง";
    } else if (ph < 7 && ph >= 0) {
        result.innerHTML = "กรด";
    }
});