function display(value) {
    let display = document.getElementById('display');
    if (display.value === '0' && value !== '.') {
    display.value = value;
    } else {
    display.value += value;
    }
}

function displayclear() {
    document.getElementById('display').value = '';
}

function del() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
    display.value = '0';
    }
}

function calculate() {
    let display = document.getElementById('display');
    try {
    display.value = eval(display.value);
    } catch {
    display.value = 'Error';
    }
}
