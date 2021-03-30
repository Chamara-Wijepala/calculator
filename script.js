let displayValue = "";
let operator = "";
let num1 = "";
let num2 = "";
let caseSelector = "";

function setDisplay(displayValue) {
    document.getElementById('display').innerText = displayValue;
};

function clearAll() {
    operator = "";
    num1 = "";
    num2 = "";
    caseSelector = "";
    displayValue = "";
    setDisplay(displayValue);
};

function clear() {
    num1 = "";
    num2 = "";
};

document.querySelector('#clear').addEventListener('click', clearAll);

function buttonClick(e) {
    let button = e.target.innerText.toString();

    switch(button) {
        case ".":
            if (displayValue.includes(".")) {
                break;
            }
        default:
            if (operator !== "" && caseSelector === "0") {
                operator = "";
                displayValue = "";
                displayValue += button;
                setDisplay(displayValue);
                break;
            }
            else if (caseSelector === "2") {
                caseSelector = "";
                num1 = displayValue;
                displayValue = "";
                displayValue += button;
                setDisplay(displayValue);
                break;
            }
            displayValue += button;
            setDisplay(displayValue);
            break;
        case "÷":
        case "×":
        case "+":
        case "-":
            if (num1 !== "" && operator !== "") {
                num2 = displayValue;
                caseSelector = "2";
                displayValue = "";
                setDisplay(displayValue);
                operate(operator, num1, num2);
                operator = button;
                break;
            };
            num1 = displayValue;
            operator = button;
            caseSelector = "1";
            displayValue = "";
            setDisplay(displayValue);
            break;
        case "=":
            if (caseSelector === "0") {
                break;
            }
            num2 = displayValue;
            caseSelector = "0";
            operate(operator, num1, num2);
            break;
    };
};

document.querySelectorAll('.key').forEach(button => {button.addEventListener('click', buttonClick)});

function add(x, y) {
    clear();
    displayValue = (x + y).toFixed(2);
    setDisplay(displayValue);
};
function subtract(x, y) {
    clear();
    displayValue = (x - y).toFixed(2);
    setDisplay(displayValue);
};
function multiply(x, y) {
    clear();
    displayValue = (x * y).toFixed(2);
    setDisplay(displayValue);
};
function divide(x, y) {
    if (x === 0 && y === 0) {
        clear();
        displayValue = "You can't divide by 0";
        setDisplay(displayValue);
    }
    else {
        clear();
        displayValue = (x / y).toFixed(2);
        setDisplay(displayValue);
    };
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