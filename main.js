let lastResult = null;
let newEquation = true;

function appendToDisplay(value) {
    let display = document.getElementById('display');
    
    if (newEquation && '+-*/'.includes(value)) {
        display.value = lastResult + value;
        newEquation = false;
    } else if (newEquation || display.value === '0') {
        display.value = value;
        newEquation = false;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    lastResult = null;
    newEquation = true;
}

function calculate() {
    try {
        let display = document.getElementById('display');
        let result = eval(display.value);
        result = parseFloat(result.toFixed(3));
        display.value = result;
        lastResult = result;
        newEquation = true;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        lastResult = null;
        newEquation = true;
    }
}

function changeSign() {
    let display = document.getElementById('display');
    if (display.value !== '' && display.value !== '0') {
        if (display.value.charAt(0) === '-') {
            display.value = display.value.slice(1);
        } else {
            display.value = '-' + display.value;
        }
    }
}