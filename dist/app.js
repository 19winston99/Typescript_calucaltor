"use strict";
let state = false;
let firstOperand = '';
let secondOperand = '';
let result = '';
let operator = '';
let display = document.querySelector("#display");
function handleKeyDown(e) {
    const key = e.key;
    const numberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operatorKeys = ['+', '-', '*', '/'];
    if (numberKeys.includes(key)) {
        const button = document.querySelector(`button[data-key="${key}"]`);
        if (button) {
            setOperand(button);
        }
    }
    else if (operatorKeys.includes(key)) {
        const button = document.querySelector(`button[data-operator="${key}"]`);
        if (button) {
            operation(button);
        }
    }
    else if (key === "Enter") {
        calculate();
    }
    else if (key === "Backspace") {
        reset();
    }
}
function setOperand(e) {
    if (!state && !result) {
        firstOperand += e.innerText;
    }
    else {
        secondOperand += e.innerText;
    }
    display.innerHTML += e.innerText;
}
function operation(e) {
    if (firstOperand && secondOperand) {
        calculate();
        firstOperand = result;
        secondOperand = "";
        operator = e.innerText;
        display.innerHTML += e.innerText;
    }
    else {
        operator = e.innerText;
        display.innerHTML = firstOperand + e.innerText;
        state = true;
    }
}
function calculate() {
    if (firstOperand && secondOperand) {
        switch (operator) {
            case '+':
                result = (+firstOperand + +secondOperand).toFixed(2);
                break;
            case '-':
                result = (+firstOperand - +secondOperand).toFixed(2);
                break;
            case '*':
                result = (+firstOperand * +secondOperand).toFixed(2);
                break;
            case '/':
                result = (+firstOperand / +secondOperand).toFixed(2);
                break;
        }
    }
    else if (firstOperand && !secondOperand) {
        switch (operator) {
            case '+':
                result = (+firstOperand + +firstOperand).toFixed(2);
                break;
            case '-':
                result = (+firstOperand - +firstOperand).toFixed(2);
                break;
            case '*':
                result = (+firstOperand * +firstOperand).toFixed(2);
                break;
            case '/':
                result = (+firstOperand / +firstOperand).toFixed(2);
                break;
        }
    }
    else {
        display.innerHTML = 'Type a correct expression';
    }
    display.innerHTML = result.toString();
    firstOperand = result;
    secondOperand = '';
    state = false;
}
function reset() {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = '';
    state = false;
    display.innerHTML = '';
}
