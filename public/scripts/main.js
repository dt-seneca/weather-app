const locationInput = document.getElementById('locationInput');
const clearButton = document.getElementById('clearButton');

const showClearButton = () => {
    clearButton.style.visibility = 'visible';
}
const clearAndHideButton = () => {
    locationInput.value = '';
    clearButton.style.visibility = 'hidden';
}

locationInput.addEventListener('input', showClearButton);
clearButton.addEventListener('click', clearAndHideButton);

