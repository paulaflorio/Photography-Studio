let menu = document.querySelector(".menu");
let menuIcon = document.querySelector("#menu-icon");

menuIcon.onclick = () => {
    menu.classList.toggle("active");
    let nav = document.querySelector(".nav");
    nav.classList.toggle("white");

}

window.onscroll = () => {
    menu.classList.remove("active");
}