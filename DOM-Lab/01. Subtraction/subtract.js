function subtract() {
   let firstNumb = Number(document.getElementById('firstNumber').value);
   let secondNumb = Number(document.getElementById('secondNumber').value);
   let result = firstNumb - secondNumb;

   document.getElementById('result').textContent = result;
}