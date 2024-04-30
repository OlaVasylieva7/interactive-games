const dateInput = document.querySelector(".date__input");
const dateBtn = document.querySelector(".date__btn");
const dateAnswer = document.querySelector(".date__text");

dateBtn.addEventListener("click", onDateBtn);

function onDateBtn(e) {
    if (dateInput.value !== "") {
        if (dateInput.value % 4 === 0) {
            dateAnswer.textContent = "Ви народилися у високосний рік!";
            dateAnswer.style.color = "#039900";
        } else {
            dateAnswer.textContent = "Ви народилися не у високосний рік!";
            dateAnswer.style.color = "#900";
        }
    } else {
        dateAnswer.textContent = "Потрібно ввести рік народження";
        dateAnswer.style.color = "#900";

    }
}