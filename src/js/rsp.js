const options = ['stone', 'scissors', 'paper'];

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

let compCounter = 0;
let userCounter = 0;

function getResult(userChoice, compChoice) {
  if (userChoice === compChoice) {
    return 'Нічия!';
  } else if (
    (userChoice === 'stone' && compChoice === 'scissors') ||
    (userChoice === 'scissors' && compChoice === 'paper') ||
    (userChoice === 'paper' && compChoice === 'stone')
  ) {
    userCounter++;
    return 'Ви виграли!';
  } else {
    compCounter++;
    return "Комп'ютер виграв!";
  }
}

document.querySelectorAll('.rsp__btn').forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.id.split('__')[0];
    const compChoice = computerChoice();
    const result = getResult(userChoice, compChoice);
    document.querySelector('.rsp__text').textContent = result;
    document.querySelector('.srp__comp__btn').textContent =
      'Варіант комп’ютера: ' + compChoice;
    document.getElementById('counter__comp').textContent =
      'Комп’ютер - ' + compCounter;
    document.getElementById('counter__user').textContent =
      'Ви - ' + userCounter;
  });
});
