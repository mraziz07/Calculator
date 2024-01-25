const display = document.querySelector('.display');
const darkMode = document.querySelector('#dark-mode');
const darkModeInput = document.querySelector('#mode-name');
const body = document.body;
const historyDisplay = document.querySelector('.history-display');

// Input Display;
function appendToDisplay(input) {
    display.value += input;
}

//For all clear button;
function clearDisplay() {
    display.value = "";
}

//For Backspace button;
function backSpaceBtn() {
    display.value = display.value.slice(0,-1);
}

//For calculation;
const calculate = () => {
    try{
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}

//Dark Mode;
darkMode.addEventListener('click', () => {
    body.classList.toggle('dark-color'); //Darkmode switching;
    const darkModeCheck = body.classList.contains('dark-color');
    darkModeInput.innerHTML = darkModeCheck ? "Light M" : "Dark M"
    darkModeInput.style.color = darkModeCheck ? "#d8d8d8" : "grey"
    historyDisplay.style.color =  darkModeCheck ? "#d8d8d8" : "grey"
})
