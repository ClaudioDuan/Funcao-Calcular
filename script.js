function getInputValues() {
    var num1 = document.getElementById('tn1');
    var num2 = document.getElementById('tn2');
    return [parseFloat(num1.value), parseFloat(num2.value)];
}

function updateResult(message) {
    var res = document.getElementById('res');
    res.innerHTML = message;
}

function somar() {
    var [n1, n2] = getInputValues();
    var soma = n1 + n2;
    updateResult(`A soma entre ${n1} + ${n2} = ${soma}`);
}

function diminuir() {
    var [n1, n2] = getInputValues();
    var diminuir = n1 - n2;
    updateResult(`A Subtração entre ${n1} - ${n2} = ${diminuir}`);
}

function multiplicar() {
    var [n1, n2] = getInputValues();
    var multiplicar = n1 * n2;
    updateResult(`A Multiplicação entre ${n1} x ${n2} = ${multiplicar}`);
}

function dividir() {
    var [n1, n2] = getInputValues();
    var dividir = n1 / n2;
    updateResult(`A Divisão entre ${n1} / ${n2} = ${dividir}`);
}

function limpar() {
    location.reload();
}