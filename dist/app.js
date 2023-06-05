"use strict";
let state = 0;
let firstOperator = 0;
let secondOperator = 0;
let result = 0;
let operator = '';
function input(e) {
    if (!state)
        firstOperator += parseInt(e.innerText);
    else
        secondOperator += parseInt(e.innerText);
    document.querySelector("#display").innerHTML += e.innerText;
}
function operation(e) {
    const target = e;
    if (state === 1) {
        calculate();
        firstOperator = result;
        secondOperator = 0;
    }
    operator = target.innerText;
    state = 1;
    document.querySelector("#display").innerHTML += target.innerText;
}
function calculate() {
    if (operator === "+")
        result = firstOperator + secondOperator;
    else if (operator === "-")
        result = firstOperator - secondOperator;
    else if (operator === "*")
        result = firstOperator * secondOperator;
    else if (operator === "/")
        result = firstOperator / secondOperator;
    document.querySelector("#display").innerHTML = result.toFixed(0);
    state = 0;
}
function reset() {
    document.querySelector("#display").innerHTML = " ";
    firstOperator = 0;
    secondOperator = 0;
    state = 0;
}
