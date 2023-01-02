const hamburgerButton = document.querySelector(".hamburger");
const menuHeader = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const pledges = document.querySelectorAll(".pledge");
const continueButtons = document.querySelectorAll(".continue");
const modalClasses = ["modal__choice", "modal__success"];
const bookmarkButton = document.querySelector(".button__bookmark");
const bookmarkImage = document.querySelector(".button__bookmark img");

let isBookmarked = false;
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
  currentModalStep = "modal__choice";
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

pledges.forEach((currentPledge) => {
  currentPledge.addEventListener("click", (e) => {
    clearPledges();
    currentPledge.classList.add("selected");
  });
});

continueButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentModalStep = "modal__success";
    updateModal();
  });
});

hamburgerButton.addEventListener("click", () => {
  document.body.classList.toggle("menu-active");
  menuHeader.classList.toggle("menu-active");
  overlay.classList.toggle("active");
});

bookmarkButton.addEventListener("click", () => {
  console.log(isBookmarked);

  if (!isBookmarked) {
    bookmarkButton.classList.add("bookmarked");
    bookmarkImage.src = "./images/icon-bookmarked.svg";
    isBookmarked = true;
  } else {
    bookmarkButton.classList.remove("bookmarked");
    bookmarkImage.src = "./images/icon-bookmark.svg";
    isBookmarked = false;
  }
});
