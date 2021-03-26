let displayValue = "";
let operator = "";
let num1 = "";
let num2 = "";
let caseSelector = "";

function setDisplay(displayValue) {
    document.getElementById('display').innerText = displayValue;
};

function clear() {
    num1 = "";
    num2 = "";
};

document.querySelector('#clear').addEventListener('click', clear);

function buttonClick(e) {
    let button = e.target.innerText.toString();

    switch(button) {
        default:
            if (operator !== "" && caseSelector === "0") {
                operator = "";
                displayValue = "";
                displayValue += button;
                setDisplay(displayValue);
                console.log("1");
                break;
            }
            else if (caseSelector === "1") {
                caseSelector = "";
                num1 = displayValue;
                displayValue = "";
                displayValue += button;
                setDisplay(displayValue);
                console.log("1.5");
                break;
            }
            displayValue += button;
            setDisplay(displayValue);
            console.log("2");
            break;
        case "÷":
        case "×":
        case "+":
        case "-":
            if (num1 !== "" && operator !== "") {
                num2 = displayValue;
                operator = button;
                caseSelector = "1";
                displayValue = "";
                setDisplay(displayValue);
                operate(operator, num1, num2);
                console.log("3");
                break;
            };
            num1 = displayValue;
            operator = button;
            caseSelector = "";
            displayValue = "";
            setDisplay(displayValue);
            console.log("4");
            break;
        case "=":
            num2 = displayValue;
            caseSelector = "0";
            operate(operator, num1, num2);
            console.log("5");
            break;
    };
};

document.querySelectorAll('.key').forEach(button => {button.addEventListener('click', buttonClick)});

function add(x, y) {
    clear();
    displayValue = x + y;
    setDisplay(displayValue);
};
function subtract(x, y) {
    clear();
    displayValue = x - y;
    setDisplay(displayValue);
};
function multiply(x, y) {
    clear();
    displayValue = x * y;
    setDisplay(displayValue);
};
function divide(x, y) {
    clear();
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