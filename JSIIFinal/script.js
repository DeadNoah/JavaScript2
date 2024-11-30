function calculateAddition(num) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${num} + ${i} = ${num + i}\n`;
    }
    document.getElementById("addition").innerText = result;
}

function calculateSubtraction(num) {
    let result = "";
    let i = 1;
    while (i <= 10) {
        result += `${num} - ${i} = ${num - i}\n`;
        i++;
    }
    document.getElementById("subtraction").innerText = result;
}

function calculateMultiplication(num) {
    let result = "";
    let i = 1;
    do {
        result += `${num} * ${i} = ${num * i}\n`;
        i++;
    } while (i <= 10);
    document.getElementById("multiplication").innerText = result;
}

function calculateDivision(num) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${num} / ${i} = ${(num / i).toFixed(2)}\n`;
    }
    document.getElementById("division").innerText = result;
}

function calculate() {
    const numInput = document.getElementById("num").value;
    const num = parseFloat(numInput);
    if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
    }
    calculateAddition(num);
    calculateSubtraction(num);
    calculateMultiplication(num);
    calculateDivision(num);
}

document.getElementById("calculateButton").addEventListener("click", calculate);