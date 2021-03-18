let displayValue = "0";

function setDisplay(displayValue) {
    document.getElementById('display').innerText = displayValue;
};

function buttonClick(e) {
    let button = e.target.innerText.toString();
    // displayValue = displayValue + " " + button;
    // setDisplay(displayValue);

    switch(button) {
        default:
            displayValue += button;
            setDisplay(displayValue);
            break;
        case "÷":
        case "×":
        case "+":
            displayValue += " " + button + " ";
            setDisplay(displayValue);
            break;
        case "-":
        case "=":
            break;
    };
};

document.querySelectorAll('#key').forEach(button => {button.addEventListener('click', buttonClick)});

function add(x, y) {return x + y};
function subtract(x, y) {return x - y};
function multiply(x, y) {return x * y};
function divide(x, y) {return x / y};

function operate(operator, num1, num2) {
    switch(operator) {
        case "add":
            add(num1, num2);
            break;
        case "subtract":
            subtract(num1, num2);
            break;
        case "multiply":
            multiply(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break;
    };
};