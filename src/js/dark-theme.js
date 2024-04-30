const icon = document.getElementById("icon");

icon.addEventListener("click", onIconClick);

function onIconClick() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "https://raw.githubusercontent.com/OlaVasylieva7/interactive-games/e8b8ec56d1ff175f06f884377424fc9dbc4ac883/src/img/icons/dark-theme.svg";
        icon.alt = "dark mode";
    } else {
        icon.src = "https://raw.githubusercontent.com/OlaVasylieva7/interactive-games/e8b8ec56d1ff175f06f884377424fc9dbc4ac883/src/img/icons/light-theme.svg";
    }
}