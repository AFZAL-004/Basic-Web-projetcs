/* script.js */
function clearDisplay() {
    document.getElementById('result').value = '';
}

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function calculateResult() {
    const result = document.getElementById('result').value;
    if (result) {
        document.getElementById('result').value = eval(result);
    }
}
