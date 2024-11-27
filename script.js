
const display = document.getElementById("display");

function appendNumber(number) {
    if (display.textContent === "0") {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}
function clearDisplay() {
    display.textContent = "0";
}
function deleteNumber() {
    display.textContent = display.textContent.slice(0, -1) || "0";
}
function chooseOperation(operator) {
    display.textContent += ` ${operator} `;
}
function appendFunction(func) {
    display.textContent += `${func}(`;
}
function calculate() {
    try {
        const result = eval(display.textContent.replace("√", "Math.sqrt").replace("^", "**"));
        display.textContent = result;
    } catch {
        display.textContent = "خطأ!";
    }
}
