let displayValue = "";
let operator = "";
let num1 = "";
let num2 = "";
let resetCounter = "";

function setDisplay(displayValue) {
    document.getElementById('display').innerText = displayValue;
};

function clear() {
    operator = "";
    displayValue = "";
    setDisplay(displayValue);
};

document.querySelector('#clear').addEventListener('click', clear);

function buttonClick(e) {
    let button = e.target.innerText.toString();

    switch(button) {
        default:
            if (operator !== "" && resetCounter !== "") { //This runs second. Fix it.
                clear();
                displayValue += button;
                setDisplay(displayValue);
                break;
            };
            displayValue += button; //This runs first
            setDisplay(displayValue);
            break;
        case "÷":
        case "×":
        case "+":
        case "-":
            num1 = displayValue;
            operator = button;
            displayValue = "";
            resetCounter = "";
            setDisplay(displayValue);
            break;
        case "=":
            num2 = displayValue;
            resetCounter = button;
            operate(operator, num1, num2);
            break;
    };
};

document.querySelectorAll('.key').forEach(button => {button.addEventListener('click', buttonClick)});

function add(x, y) {
    displayValue = x + y;
    setDisplay(displayValue);
};
function subtract(x, y) {
    displayValue = x - y;
    setDisplay(displayValue);
};
function multiply(x, y) {
    displayValue = x * y;
    setDisplay(displayValue);
};
function divide(x, y) {
    displayValue = x / y;
    setDisplay(displayValue);
};

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