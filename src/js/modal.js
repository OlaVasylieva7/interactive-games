const backdrop = document.querySelector('.js-backdrop');
const closewModalBtn = document.querySelector('.modal__btn-close');
const openThanksModalBtn = document.querySelector('[data-action="open-thanks-modal"]');
const thanksModal = document.querySelector(".thanks__modal")
// const saveBtn = document.querySelector('.modal__save-btn');
// const modal = document.querySelector('.modal');
// const openModalBtn = document.querySelector('.modal__btn-open');
// const modalInput = document.querySelector(".modal__input");
// const output = document.getElementById("user__name");
// const thanksModal = document.querySelector(".thanks__modal")


// openModalBtn.addEventListener('click', onOpenModal);
// saveBtn.addEventListener('click', onCloseModal);
// saveBtn.addEventListener('click', onSaveBtn);
// modalInput.addEventListener("input", onInputChange);


backdrop.addEventListener('click', onBackdropClose);
closewModalBtn.addEventListener('click', onCloseModal);
openThanksModalBtn.addEventListener("click", onOpenThanksModal);
// openThanksModalBtn.addEventListener("click", onBackdropClose);


function onOpenThanksModal() {
    document.body.classList.add('show-modal');
    window.addEventListener('keydown', onEscapePress);
}
// function onOpenModal() {
//     document.body.classList.add('show-modal');
//     window.addEventListener('keydown', onEscapePress);
// }


function onCloseModal() {
    document.body.classList.remove('show-modal');
    // window.removeEventListener('keydown', onEscapePress);
}

function onBackdropClose(e) {
    if (e.target === e.currentTarget) onCloseModal();
}

function onEscapePress(e) {
    e.press;
    if (e.code === 'Escape') onCloseModal();
}

// function onInputChange(e) {
//     output.textContent = e.currentTargent.value || "Незнайомець";
// }

// function onSaveBtn() {
//     onInputChange();
//     onCloseModal();
// }