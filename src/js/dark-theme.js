const icon = document.getElementById("icon");

icon.addEventListener("click", onIconClick);

function onIconClick() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "/img/icons/dark-theme.svg"
    } else {
        icon.src = "/img/icons/light-theme.svg"
    }
}