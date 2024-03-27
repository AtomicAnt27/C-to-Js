function Calcular() {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;

    var calcPlus = firstNumber + secondNumber;
    var calcMultiplie = firstNumber * secondNumber;
    
    var plusText = document.createElement('p');
    plusText.className = "result";
    var resultPlus = document.createElement('span');
    resultPlus.innerHTML = calcPlus;

    document.getElementsByClassName('wrapCalc').appendChild(plusText);
    plusText.appendChild(resultPlus);

    var resultMultiplie = document.getElementById('resultMultiplie');
    resultMultiplie.textContent = calcMultiplie;
}
window.addEventListener('load', Calcular);