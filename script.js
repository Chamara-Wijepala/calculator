let displayValue = "";
let operator = "";
let num1 = "";
let num2 = "";
let currentValue = "";

function setDisplay(displayValue) {
    document.getElementById('display').innerText = displayValue;
};

function clearDisplay() {
    displayValue = "";
    setDisplay(displayValue);
};

function clear() {
    operator = "";
    num1 = "";
    num2 = "";
    currentValue = "";
};

document.querySelector('#clear').addEventListener('click', clear);

function buttonClick(e) {
    let button = e.target.innerText.toString();

    switch(button) {
        default:
            displayValue += button;
            currentValue += button;
            setDisplay(displayValue);
            break;
        case "÷":
        case "×":
        case "+":
        case "-":
            num1 = currentValue;
            operator = button;
            displayValue += " " + button + " ";
            currentValue = "";
            setDisplay(displayValue);
            break;
        case "=":
            num2 = currentValue;
            operate(operator, num1, num2);
            clear();
            break;
    };
};

document.querySelectorAll('.key').forEach(button => {button.addEventListener('click', buttonClick)});

function add(x, y) {console.log(x + y)};
function subtract(x, y) {console.log(x - y)};
function multiply(x, y) {console.log(x * y)};
function divide(x, y) {console.log(x / y)};

function operate(operator, num1, num2) {
    let value1 = Number(num1);
    let value2 = Number(num2);

    switch(operator) {
        case "+":
            add(value1, value2);
            break;
        case "-":
            subtract(value1, value2);
            break;
        case "×":
            multiply(value1, value2);
            break;
        case "÷":
            divide(value1, value2);
            break;
    };
};