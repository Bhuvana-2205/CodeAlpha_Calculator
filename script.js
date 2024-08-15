function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

function appendSymbol(symbol) {
    document.getElementById('display').innerText += symbol;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText.replace('%', '/100'));
    } catch {
        display.innerText = 'Error';
    }
}
