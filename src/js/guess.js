const input = document.getElementById("date__input");
const dateButton = document.getElementById("date__button");
const text = document.getElementById("text");

dateButton.addEventListener("click", onBtnClick);

function onBtnClick() {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  let userNumber = Number(input.value);
  if (userNumber === randomNumber) {
    text.textContent = `Вітаю, ви вгадали число! ${randomNumber}`;
    text.style.color = "#039900"
  }
}
