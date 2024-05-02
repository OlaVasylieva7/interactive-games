const list = document.querySelector(".submenu__list");
const sections = document.querySelectorAll("section");
const interactive = document.querySelector(".interactive");

function filter() {
    list.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.dataset.id;
        const interactiveText = {
            numerical: "Числовий",
            game: "Ігровий",
            acquaintance: "Ознайомчий"
        };

        if (interactiveText.hasOwnProperty(targetId)) {
            const text = interactiveText[targetId];
            interactive.innerHTML = `
        <a href="" class="interactive">${text}
          <svg class="arrow" width="10" height="14">
            <use href="/img/icons/symbol-defs.svg#icon-arrow"></use>
          </svg>
        </a>
      `;
            getSections(targetId);
        }
    });
}

function getSections(className) {
    sections.forEach(section => {
        section.style.display = section.classList.contains(className) ? "block" : "none";
    });
}

filter();