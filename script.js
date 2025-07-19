let number1 = '';
let operator = '';
let number2 = '';
let result = null;
let isResultDispalyed = false;

const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');

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
        case "-":
            return subtract(number1, number2)
        case "*":
            return multiply(number1, number2)
        case "/":
            return divide(number1, number2)    
    }
}

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
        output.textContent = '0';
        return;
    }

    if (button.className === 'digit'){
        if (operator === ''){
            if (isResultDispalyed){
                number1 = value;
                isResultDispalyed = false;
            } else {
                number1 += value;
            }
            output.textContent = number1;
        } else {
            number2 += value;
            output.textContent = number2;
        }
        return;
    }

    if (button.className === 'operator'){
        if (number1 && number2){
            result = operate(number1, number2, operator);
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
            number1 = result;
            output.textContent = number1;
            number2 = '';
            operator = '';
            isResultDispalyed = true;
        }
    return;
    }       
};
