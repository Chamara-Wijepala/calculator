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

function buttonClick(e) {
    let button;

    if (e.type === "click") {
        button = e.target.innerText.toString();
    }
    else {
        button = e;
    };

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
        case "DEL":
            displayValue = displayValue.slice(0, -1);
            setDisplay(displayValue);
            break;
        case "AC":
            clearAll();
            break;
    };
};

function buttonPress(e) {
    let key = e.key;

    switch(key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
        case "-":
        case "+":
            buttonClick(key);
            break;
        case "*":
            buttonClick("×");
            break;
        case "/":
            buttonClick("÷");
            break;
        case "=":
        buttonClick("+");
        break;
        case "Enter":
            buttonClick("=");
            break;
        case "c":
            buttonClick("AC");
            break;
        case "Backspace":
            buttonClick("DEL");
            break;
        default:
            break;
    };
};

document.querySelectorAll('button').forEach(button => {button.addEventListener('click', buttonClick)});

document.addEventListener('keydown', buttonPress);

function add(x, y) {
    clear();
    if (Number.isInteger(x) && Number.isInteger(y)) {
        displayValue = x + y;
    }
    else {
    displayValue = (x + y).toFixed(2);
    };
    setDisplay(displayValue);
};
function subtract(x, y) {
    clear();
    if (Number.isInteger(x) && Number.isInteger(y)) {
        displayValue = (x - y);
    }
    else {
    displayValue = (x - y).toFixed(2);
    };
    setDisplay(displayValue);
};
function multiply(x, y) {
    clear();
    if (Number.isInteger(x) && Number.isInteger(y)) {
        displayValue = x * y;
    }
    else {
        displayValue = (x * y).toFixed(2);
    }
    setDisplay(displayValue);
};
function divide(x, y) {
    clear();
    if (x === 0 && y === 0) {
        displayValue = "You can't divide by 0";
    }
    else if (Number.isInteger(x) && Number.isInteger(y)) {
        displayValue = x / y;
    }
    else {
        displayValue = (x / y).toFixed(2);
    };
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