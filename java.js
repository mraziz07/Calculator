const display = document.querySelector(".display");
const backSpace = document.querySelector(".back-btn");

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



