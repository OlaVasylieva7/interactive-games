import stonekUrl from "../../assets/stone.svg";
import scissorskUrl from "../../assets/scissors.svg";
import paperUrl from "../../assets/paper.svg";

const options = ['stone', 'scissors', 'paper'];
const elementCompBtn = document.getElementById('comp__button');

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  const compChoice = options[randomIndex];
  if (compChoice === 'stone') {
    elementCompBtn.innerHTML = `<img src="${stonekUrl}"/>`;
    // elementCompBtn.innerHTML = '<img src="./img/rsp/stone.svg"/>';
  } else if (compChoice === 'scissors') {
    elementCompBtn.innerHTML = `<img src="${scissorskUrl}"/>`;
    // elementCompBtn.innerHTML = '<img src="./img/rsp/scissors.svg"/>';
  } else if (compChoice === 'paper') {
    elementCompBtn.innerHTML = `<img src="${paperUrl}"/>`;
    // elementCompBtn.innerHTML = '<img src="./img/rsp/paper.svg"/>';
  } else {
    elementCompBtn.innerHTML = '';
  }

  return compChoice;
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
    document.getElementById('counter__comp').textContent =
      'Комп’ютер - ' + compCounter;
    document.getElementById('counter__user').textContent =
      'Ви - ' + userCounter;
  });
});
