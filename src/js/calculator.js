const calcFirstElem = document.getElementById("first-number");
const calcSecondElem = document.getElementById("second-number");

function calculateResult() {
  const calcFirstNumber = +calcFirstElem.value || 0;
  const calcSecondNumber = +calcSecondElem.value || 0;
  // if(calcSecondNumber === 0) {
  //   return 'ділення на нуль!';
  // }
  const calcOperatorElem = document.querySelector(
    'input[name="operator"]:checked'
  );
  const calcOperator = calcOperatorElem.value;

  switch (calcOperator) {
    case "+":
      return calcFirstNumber + calcSecondNumber;
    case "-":
      return calcFirstNumber - calcSecondNumber;
    case "*":
      return calcFirstNumber * calcSecondNumber;
    case "/":
      return calcFirstNumber / calcSecondNumber;
    default:
      return "";

  }
}



const operatorElements = document.querySelectorAll('input[name="operator"]');
operatorElements.forEach((elem) => {
  elem.addEventListener("click", function () {
    buttonResult.disabled = false;
  });
});

const buttonResult = document.getElementById("button-result");
buttonResult.addEventListener("click", function () {
  const resultValue = document.getElementById("calculator-result");
  const result = calculateResult();
  resultValue.innerText = result; 
});

