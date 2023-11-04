let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("oprt").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("oprt").value = "";
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("oprt").value = displayValue;
    } catch (error) {
        document.getElementById("oprt").value = "Error";
    }
}
