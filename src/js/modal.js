const modal = document.querySelector('[data-modal]');
const closeModal = document.querySelector('[data-modal-close]');
const saveBtn = document.querySelector('.modal__save-btn');
const input = document.querySelector(".modal__input");
const output = document.getElementById("user__name");

closeModal.addEventListener("click", onCloseModal);
saveBtn.addEventListener("click", onCloseModal);
window.addEventListener('keydown', onBackdropOrEscape);
window.addEventListener('click', onBackdropOrEscape);

function onCloseModal(e) {
    e.preventDefault();
    modal.classList.remove("show-modal");
    output.textContent = input.value || "User";
}

function onBackdropOrEscape(e) {
    if (e.target === modal || e.code === "Escape") modal.classList.remove("show-modal");
}