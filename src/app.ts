let state: number = 0;
let firstOperator: number = 0;
let secondOperator: number = 0;
let result: number = 0;
let operator: string = '';

function input(e: HTMLElement): void {
    if (!state) firstOperator += parseInt(e.innerText);
    else secondOperator += parseInt(e.innerText);
    document.querySelector("#display")!.innerHTML += e.innerText;
}

function operation(e: HTMLElement): void {
    const target = e as HTMLElement;
    if (state === 1) {
        calculate();
        firstOperator = result;
        secondOperator = 0;
    }
    operator = target.innerText;
    state = 1;
    document.querySelector("#display")!.innerHTML += target.innerText;
}

function calculate(): void {
    if (operator === "+") result = firstOperator + secondOperator;
    else if (operator === "-") result = firstOperator - secondOperator;
    else if (operator === "*") result = firstOperator * secondOperator;
    else if (operator === "/") result = firstOperator / secondOperator;

    document.querySelector("#display")!.innerHTML = result.toFixed(0);
    state = 0;
}

function reset(): void {
    document.querySelector("#display")!.innerHTML = " ";
    firstOperator = 0;
    secondOperator = 0;
    state = 0;
}

