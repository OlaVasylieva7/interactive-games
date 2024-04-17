// const openModalBtn = document.querySelector('[data-action="open-modal"]');
const modalBtn = document.querySelector('.modal__save-btn');
// const closewModalBtn = document.querySelector('.modal__btn');
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('[data-action="open-modal"]')

openModalBtn.addEventListener('click', onOpenModal);
modalBtn.addEventListener('click', onCloseModal);

function onOpenModal() {
    document.body.classList.add('show-modal');
    window.addEventListener('keydown', onEscapePress);
}

function onCloseModal() {
    document.body.classList.remove('show-modal');
    window.removeEventListener('keydown', onEscapePress);
}


const backdrop = document.querySelector('.js-backdrop');

backdrop.addEventListener('click', onBackdropClose);

function onBackdropClose(e) {
    if (e.target === e.currentTarget) onCloseModal();
}

function onEscapePress(e) {
    e.pre;
    if (e.code === 'Escape') onCloseModal();
}



const modalInput = document.querySelector(".modal__input");
const output = document.getElementById("user__name");

modalInput.addEventListener("input", onInputChange);

function onInputChange(e) {
    output.textContent = e.currentTarget.value || "Незнайомець";
}
