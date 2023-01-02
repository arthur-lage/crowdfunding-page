const hamburgerButton = document.querySelector(".hamburger");
const menuHeader = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const pledges = document.querySelectorAll(".pledges");
const modalClasses = ["modal__choice", "modal__success"];

let currentModalStep = "modal__choice";

function updateModal() {
  document.body.classList.remove("menu-active");
  clearModal();
  document.body.classList.add("menu-active");
  showModal(currentModalStep);
}

function closeModal() {
  overlay.classList.remove("active");
  document.body.classList.remove("menu-active");
  clearModal();
}

function clearModal() {
  modalClasses.forEach((className) => {
    document.querySelector(`.${className}`).classList.remove("active");
  });
}

function showModal(modalClassName) {
  document.body.classList.add("menu-active");
  overlay.classList.add("active");
  document.querySelector(`.${modalClassName}`).classList.add("active");
}

function clearPledges() {
  pledges.forEach((currentPledge) => {
    currentPledge.classList.remove("selected");
  });
}

hamburgerButton.addEventListener("click", () => {
  document.body.classList.toggle("menu-active");
  menuHeader.classList.toggle("menu-active");
  overlay.classList.toggle("active");
});

pledges.forEach((currentPledge) => {
  currentPledge.addEventListener("click", (e) => {
    e.target.classList.add("selected");
  });
});
