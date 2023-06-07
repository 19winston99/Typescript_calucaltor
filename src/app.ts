let state: number = 0;
let firstOperand: number = 0;
let secondOperand: number = 0;
let result: number = 0;
let operator: string = '';
let display: Element | null = document.querySelector("#display");

function setOperand(e: HTMLElement): void {
    if (!state) firstOperand += parseInt(e.innerText);
    else secondOperand += parseInt(e.innerText);
    display!.innerHTML += e.innerText;
}

function operation(e: HTMLElement): void {
    if (state === 1) {
        calculate();
        firstOperand = result;
        secondOperand = 0;
    }
    operator = e.innerText;
    state = 1;
    display!.innerHTML += e.innerText;
}

function calculate(): void {
    if (operator === "+") result = firstOperand + secondOperand;
    else if (operator === "-") result = firstOperand - secondOperand;
    else if (operator === "*") result = firstOperand * secondOperand;
    else if (operator === "/") result = firstOperand / secondOperand;

    if (Number.isInteger(result)) {
        display!.innerHTML = result.toFixed(0);
    } else {
        display!.innerHTML = result.toFixed(2);
    }
    state = 0;
}

function reset(): void {
    display!.innerHTML = " ";
    firstOperand = 0;
    secondOperand = 0;
    state = 0;
}

