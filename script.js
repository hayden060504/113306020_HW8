
function calculate() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Result = Invalid input";
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultElement.textContent = "Result = Division by zero error";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.textContent = "Result = Invalid operation";
            return;
    }

    resultElement.textContent = `Result = ${result.toFixed(2)}`;
}
