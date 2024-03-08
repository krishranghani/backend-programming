var calculatorOn = true;

function appendCharacter(character) {
    if (calculatorOn) {
        document.getElementById('display').value += character;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
        document.getElementById('display').style.color = '#fff';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        document.getElementById('display').style.color = 'red';
    }
}

function removeLastCharacter() {
    var currentInput = document.getElementById('display').value;
    document.getElementById('display').value = currentInput.substring(0, currentInput.length - 1);
}

function turnOn() {
    calculatorOn = true;
    clearDisplay();
}

function turnOff() {
    calculatorOn = false;
    clearDisplay();
}
