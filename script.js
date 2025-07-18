let number1 = 0;
let operator = "";
let number2 = 0;

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