let number1 = '';
let operator = '';
let number2 = '';
let result = null;
let isResultDisplayed = false;
let isBackspacedToZero = false;
let isNum1Floated = false;
let isNum2Floated = false;

const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        calculate(event.target)
    })
});

function calculate (button) {
    const value = button.textContent;
    
    if (button.id === 'clear'){
        number1 = '';
        number2 = '';
        operator = '';
        result = null;
        isResultDisplayed = false;
        isBackspacedToZero = false;
        isNum1Floated = false;
        isNum2Floated = false;
        output.textContent = '0';
        return;
    }

    if (button.className === 'digit'){
        if (operator === '') {
        if (isResultDisplayed || isBackspacedToZero) {
            number1 = value;
            isResultDisplayed = false;
            isBackspacedToZero = false;
        } else {
            number1 += value;
        }

        // Удаляем ведущие нули, кроме случая "0." или "0"
        if (!isNum1Floated) {
            number1 = number1.replace(/^0+(?=\d)/, '');
        }

        output.textContent = number1 || '0';

    } else {
        if (isBackspacedToZero) {
            number2 = value;
            isResultDisplayed = false;
            isBackspacedToZero = false;
        } else {
            number2 += value;
        }

        // Удаляем ведущие нули, кроме случая "0." или "0"
        if (!isNum2Floated) {
            number2 = number2.replace(/^0+(?=\d)/, '');
        }

        output.textContent = number2 || '0';
    }
    return;
    }

    if (button.className === 'operator'){
        if (number1 && number2){
            result = operate(number1, number2, operator);
            if (typeof result === 'string') {
                output.textContent = result;
                number1 = '';
                number2 = '';
                operator = '';
                isResultDispalyed = false;
                return;
            }
            
            isNum1Floated = false;
            isNum2Floated = false;
            number1 = result;
            number2 = '';
            output.textContent = number1;
        }
        operator = value;
        return;
    }

    if (button.id === 'calculate'){
        if(number1 && number2 && operator){
            result = operate(number1, number2, operator);
            if (typeof result === 'string') {
                output.textContent = result;
                number1 = '';
                number2 = '';
                operator = '';
                isResultDispalyed = false;
                return;
            }

            number1 = result;
            output.textContent = number1;
            number2 = '';
            operator = '';
            isResultDisplayed = true;
        }
    return;
    }   
    
    if (button.id === 'backspace'){
        if (output.textContent == number1){  
            if (output.textContent.slice(-1) === '.'){
                isNum1Floated = false;
            }          
            output.textContent = output.textContent.slice(0, -1) || '0';
            number1 = output.textContent || '0';
            if (output.textContent === '0') {isBackspacedToZero = true};
        } else if (output.textContent == number2){
            if (output.textContent.slice(-1) === '.'){
                isNum2Floated = false;
            }
            output.textContent = output.textContent.slice(0, -1) || '0';
            number2 = output.textContent || '0';
            if (output.textContent === '0') {isBackspacedToZero = true};
        }
    }

    if (button.id === 'float'){
        if (output.textContent == number1 && !isNum1Floated){
            output.textContent += value;
            number1 = output.textContent;
            isNum1Floated = true;
        } else if (output.textContent == number2 && !isNum2Floated){
            output.textContent += value;
            number2 = output.textContent;
            isNum2Floated = true;
        }        
        return;
    }
};

// #region operations
function add (x, y){
    return x + y;
};

function subtract (x, y){
    return x - y;
};

function multiply (x, y){
    return x * y;
};

function divide (x, y){
    if (y !== 0)
        return x / y;
    else
        return "you cannot divide by 0!";
}
// #endregion

function operate (number1, number2, operator){
    number1 = Number(number1);
    number2 = Number(number2);
    switch (operator) {
        case "+":
            return add(number1, number2)
        case "−":
            return subtract(number1, number2)
        case "×":
            return multiply(number1, number2)
        case "÷":
            return divide(number1, number2)    
    }
}