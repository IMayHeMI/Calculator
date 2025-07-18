let number1 = 0;
let operator = "";
let number2 = 0;

const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');

// #region operations
function add (x, y){
    return x + y;
};

function substract (x, y){
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
    switch (operator) {
        case "+":
            add(number1, number2)
            break;
        case "-":
            substract(number1, number2)
            break;
        case "*":
            multiply(number1, number2)
            break;
        case "/":
            divide(number1, number2)
            break;    
    }
}

Array.from(buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.id == 'calculate'){
            if (output.textContent == '0'){
                output.textContent = '0';
            }
        }
        else{
            output.textContent += event.target.textContent; 
        } 
        if (event.target.id == 'clear'){
            output.textContent = '0';
        }     
    })
}))