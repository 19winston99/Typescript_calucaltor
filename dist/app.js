"use strict";
let state = 0;
let firstOperand = 0;
let secondOperand = 0;
let result = 0;
let operator = '';
let display = document.querySelector("#display");
function setOperand(e) {
    if (!state)
        firstOperand += parseInt(e.innerText);
    else
        secondOperand += parseInt(e.innerText);
    display.innerHTML += e.innerText;
}
function operation(e) {
    if (state === 1) {
        calculate();
        firstOperand = result;
        secondOperand = 0;
    }
    operator = e.innerText;
    state = 1;
    display.innerHTML += e.innerText;
}
function calculate() {
    if (operator === "+")
        result = firstOperand + secondOperand;
    else if (operator === "-")
        result = firstOperand - secondOperand;
    else if (operator === "*")
        result = firstOperand * secondOperand;
    else if (operator === "/")
        result = firstOperand / secondOperand;
    if (Number.isInteger(result)) {
        display.innerHTML = result.toFixed(0);
    }
    else {
        display.innerHTML = result.toFixed(2);
    }
    state = 0;
}
function reset() {
    display.innerHTML = " ";
    firstOperand = 0;
    secondOperand = 0;
    state = 0;
}
