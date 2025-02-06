let wideNav = document.getElementById("wide-nav");
let content = document.getElementsByClassName("content")[0];

let active = false;

let wide = window.matchMedia("(max-width: 480px)")

function collapseNav() {
    if (!wide.matches) {
        if (active === false) {
            wideNav.style.width = "15%";
            wideNav.style.minWidth = "230px";
            wideNav.style.color = "#e5e7eb";
            content.addEventListener("click", collapseNav);
            // console.log(1);
            active = true;
        } else {
            wideNav.style.width = "0";
            wideNav.style.minWidth = "0";
            wideNav.style.color = "rgba(17,20,24,0.95)";
            content.removeEventListener("click", collapseNav);
            // console.log(2);
            active = false;
        }
    } else {
        if (active === false) {
            wideNav.style.minHeight = "50px";
            wideNav.style.height = "auto";
            // console.log(3);
            active = true;
        } else {
            wideNav.style.minHeight = "0";
            wideNav.style.height = "0";
            // console.log(4);
            active = false;
        }
    }
}