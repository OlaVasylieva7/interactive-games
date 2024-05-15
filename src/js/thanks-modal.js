const thanksModal = document.querySelector('[data-thanks-modal]');
const openThanksModal = document.querySelector('[data-open-thanks-modal]');
const closeThanksModal = document.querySelector('[data-close-thanks-modal]');

openThanksModal.addEventListener("click", onOpenThanksModal);
closeThanksModal.addEventListener("click", onCloseThanksModal);
window.addEventListener('click', onBackdrop);

function onOpenThanksModal() {
    thanksModal.classList.add("show-modal");
    window.addEventListener('keydown', onEscape);
}

function onCloseThanksModal() {
    thanksModal.classList.remove("show-modal");
}

function onEscape(e) {
    if (e.code === "Escape") onCloseThanksModal();
}

function onBackdrop(e) {
    if (e.target === thanksModal) onCloseThanksModal();
}
