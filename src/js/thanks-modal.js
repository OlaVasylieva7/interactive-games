const thanksModal = document.querySelector('[data-thanks-modal]');
const openThanksModal = document.querySelector('[data-open-thanks-modal]');
const closeThanksModal = document.querySelector('[data-close-thanks-modal]');

openThanksModal.addEventListener("click", onOpenThanksModal);
closeThanksModal.addEventListener("click", onCloseThanksModal);
window.addEventListener('keydown', onBackdropOrEscape);
window.addEventListener('click', onBackdropOrEscape);

function onOpenThanksModal() {
    thanksModal.classList.add("show-modal");
}

function onCloseThanksModal() {
    thanksModal.classList.remove("show-modal");
}

function onBackdropOrEscape(e) {
    if (e.target === thanksModal || e.code === "Escape") thanksModal.classList.remove("show-modal");
}