const input = document.querySelector(".date__input");
const btn = document.querySelector(".date__btn");
const answer = document.querySelector(".date__text");

btn.addEventListener("click", onDateBtn);

function onDateBtn(e) {
    if (input.value % 4 === 0 && input.value > 0) {
        answer.textContent = "Ви народилися у високосний рік!";
        answer.style.color = "#039900";
    } else if (input.value % 4 !== 0) {
        answer.textContent = "Ви народилися не у високосний рік!";
        answer.style.color = "#900";
    } else {
        answer.textContent = "Потрібно ввести рік народження";
        answer.style.color = "#900";
    }
    input.value = '';
}