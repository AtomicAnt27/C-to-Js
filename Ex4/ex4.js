function idealHomem(altura) {
    return (72.7 * altura) - 58;
}

function idealMulher(altura) {
    return (62.1 * altura) - 44.7;
}

function calcularPesoIdeal() {
    var sexo = document.getElementById("sexo").value.toUpperCase();
    var altura = parseFloat(document.getElementById("altura").value);

    var pesoIdeal;
    if (sexo === 'M') {
        pesoIdeal = idealHomem(altura);
    } else if (sexo === 'F') {
        pesoIdeal = idealMulher(altura);
    } else {
        alert("Informe um sexo válido (M ou F)!");
        return;
    }

    document.getElementById("resultado").textContent = "Seu peso ideal é: " + pesoIdeal.toFixed(2);
}