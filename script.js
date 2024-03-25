function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function squareRoot() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = Math.sqrt(parseFloat(value));
}

function square() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = Math.pow(parseFloat(value), 2);
}

function sin() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = Math.sin(parseFloat(value));
}

function cos() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = Math.cos(parseFloat(value));
}

function tan() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = Math.tan(parseFloat(value));
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
