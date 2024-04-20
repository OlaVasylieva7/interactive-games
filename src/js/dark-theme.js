const icon = document.getElementById("icon");

icon.addEventListener("click", onIconClick);

function onIconClick() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "/img/dark-theme.svg"
    } else {
        icon.src = "/img/light-theme.svg"
    }
}