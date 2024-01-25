const display = document.querySelector(".display");
const backSpace = document.querySelector(".back-btn");
const darkMode = document.querySelector("#dark-mode");
const darkMsg = document.querySelector("#darkmsg");
const historyDisplay = document.querySelector(".history-display");

//For displaying Input
function appendToDisplay(input) {
    display.value += input;
}

//AC button
const clearDisplay = () => {
    display.value = "";
}

//backspace button
backSpace.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
})

//Calculation
const calculate = () => {
    try{
        display.value = eval(display.value)
    } catch(error){
        display.value = "ERROR";
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++
//darkmode
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-color');
    const darkModeCheck = document.body.classList.contains('dark-color');
    darkMsg.innerText = darkModeCheck ? "Light M" : "Dark M"
    darkMsg.style.color = darkModeCheck ? "#d8d8d8" : "black"
    historyDisplay.style.color = darkModeCheck ? "#d8d8d8" : "grey"
})
// ++++++++++++++++++++++++++++++++++++++++++++++++



