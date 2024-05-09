import darkUrl from "../../assets/dark-theme.svg";
import lightkUrl from "../../assets/light-theme.svg";


const icon = document.getElementById("icon");
icon.addEventListener("click", onIconClick);

function onIconClick() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.src = darkUrl;
        // icon.src = "/img/icons/dark-theme.svg";
        icon.style.animation
    } else {
        icon.src = lightkUrl;
        // icon.src = "/img/icons/light-theme.svg";
    }
}