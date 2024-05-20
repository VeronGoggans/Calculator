const display = document.querySelector('#display-input');

function addToDisplay(input) {
    display.value += input;
    formatDisplay();
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Replace periods with empty strings and commas with periods for evaluation
        const result = eval(display.value.replace(/\./g, '').replace(/,/g, '.'));
        display.value = result;
        formatDisplay();
    } catch (error) {
        display.value = 'Error';
    }
}

function formatDisplay() {
    // Remove existing thousands separators for proper formatting
    let value = display.value.replace(/\./g, '');

    // Split into integer and decimal parts
    let [integerPart, decimalPart] = value.split(',');

    // Format integer part with periods as thousands separators
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Combine integer and decimal parts
    display.value = decimalPart ? `${integerPart},${decimalPart}` : integerPart;
}

function removeFromDisplay() {
    display.value = display.value.slice(0, -1);
    formatDisplay();
}

function handleKeyPress(event) {
    switch (event.key) {
        case 'Enter':
            calculate();
            break;
        case 'Backspace':
            removeFromDisplay();
            break;
        case '-':
        case '+':
        case '%':
        case '/':
        case '*':
            addToDisplay(event.key);
            break;
        case '.':
            addToDisplay(',');
            break;
        default:
            if (!isNaN(parseInt(event.key))) { // Only allow digits
                addToDisplay(event.key);
            }
            break;
    }
}

document.addEventListener('keydown', handleKeyPress);
