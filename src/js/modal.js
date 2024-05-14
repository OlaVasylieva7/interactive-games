const backdrop = document.querySelector('.js-backdrop');
const closewModalBtns = document.querySelectorAll('.modal__btn-close');
const openThanksModalBtn = document.querySelector('[data-action="open-thanks-modal"]');
const modal = document.querySelector('.modal');
const thanksModal = document.querySelector(".thanks__modal")
const saveBtn = document.querySelector('.modal__save-btn');
const modalInput = document.querySelector(".modal__input");
const output = document.getElementById("user__name");

openThanksModalBtn.addEventListener("click", onOpenThanksModal);
// closewModalBtn.addEventListener('click', onCloseModal);
closewModalBtns.forEach(closeModalBtn => closeModalBtn.addEventListener("click", onCloseModal))

backdrop.addEventListener('click', onBackdropClose);
saveBtn.addEventListener('click', onCloseModal);
modalInput.addEventListener("input", onInputChange);

function onOpenThanksModal() {
    document.body.classList.add('show-modal');
    window.addEventListener('keydown', onEscapePress);
}

function onCloseModal() {
    document.body.classList.remove('show-modal');
    window.removeEventListener('keydown', onEscapePress);
}

function onBackdropClose(e) {
    if (e.target === e.currentTarget) onCloseModal();
}

function onEscapePress(e) {
    if (e.code === 'Escape') onCloseModal();
}

function onInputChange(e) {
    output.textContent = e.currentTarget.value || "User";
}