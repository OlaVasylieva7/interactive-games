const inputOne = document.getElementById('one__input');
const inputTwo = document.getElementById('two__input');
const inputThree = document.getElementById('three__input');

const resultText = document.querySelector('.enter__number__text');

function findMaxNumber(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

function eventInputChange() {
  const value1 = inputOne.value;
  const value2 = inputTwo.value;
  const value3 = inputThree.value;

  if (!isNaN(value1) && !isNaN(value2) && !isNaN(value3)) {
    const maxNumber = findMaxNumber(+value1, +value2, +value3);

    resultText.textContent = 'Найбільше число, яке ви ввели - ' + maxNumber;
  } else {
    resultText.textContent = 'Будь ласка, введіть тільки числа';
  }
}

inputOne.addEventListener('input', eventInputChange);
inputTwo.addEventListener('input', eventInputChange);
inputThree.addEventListener('input', eventInputChange);
