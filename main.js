const hamburgerButton = document.querySelector(".hamburger")
const menuHeader = document.querySelector("header")
const overlay = document.querySelector(".overlay")

hamburgerButton.addEventListener("click", () => {
    document.body.classList.toggle("menu-active")
    menuHeader.classList.toggle("menu-active")
    overlay.classList.toggle("active")
})