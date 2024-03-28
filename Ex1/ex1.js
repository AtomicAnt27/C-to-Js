function calcular() {
    var n1 = parseInt(document.getElementById("numero1").value);
    var n2 = parseInt(document.getElementById("numero2").value);
    var soma = 0;
    var multi = 0;
    var resp = "";

    calcula(n1, n2, function(soma, multi, resp) {
        document.getElementById("resultado").innerHTML = "A soma dos números é = " + soma + ".<br>";
        document.getElementById("resultado").innerHTML += "O produto dos números é = " + multi + ".<br>";
        document.getElementById("resultado").innerHTML += "O resultado é " + resp + ".<br><br>";
    });
}

function calcula(n1, n2, callback) {
    var soma = n1 + n2;
    var multi = n1 * n2;
    var pi;

    if (soma % 2 === 0) {
        pi = 'Par';
    } else {
        pi = 'Ímpar';
    }

    callback(soma, multi, pi);
}