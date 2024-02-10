const display = document.querySelector('#display-input');

function addToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}

function removeFromDisplay() {
    display.value = display.value.replace(display.value, display.value.slice(0, -1));
}