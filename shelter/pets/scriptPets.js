"use strict";

//Navigation Bar//

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const blockPage = document.querySelector(".block-page");
const burgerLogo = document.querySelector(".burger__logo");

if (nav) {
  burger.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    burger.classList.toggle("_active");
    nav.classList.toggle("_active");
    blockPage.classList.toggle("_active");
    burgerLogo.classList.toggle("_active");
  });
}

nav.addEventListener("click", () => {
  document.body.classList.remove("_lock");
  burger.classList.remove("_active");
  nav.classList.remove("_active");
  blockPage.classList.remove("_active");
  burgerLogo.classList.remove("_active");
});

blockPage.addEventListener("click", () => {
  document.body.classList.remove("_lock");
  burger.classList.remove("_active");
  nav.classList.remove("_active");
  blockPage.classList.remove("_active");
  burgerLogo.classList.remove("_active");
});

// POPUP //

const popup = document.querySelector(".popup");
const popupBtns = document.querySelectorAll(".slider__card");
const closePopupBtn = document.querySelector(".popup__close");

const popupViews = function (popupClick) {
  popup.classList.add("showPopup");
  document.body.classList.toggle("_lock");
};

closePopupBtn.addEventListener("click", () => {
  popup.classList.remove("showPopup");
  document.body.classList.remove("_lock");
});

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popupViews(i);
  });
});

function openModal(name) {
  fetch("pets.json")
    .then((response) => response.json())
    .then((data) => {
      document.body.classList.add("_lock");
      let html = "";
      let pets = name.getAttribute("data-name");
      let p = data.find((el) => el.name === name.dataset.name);
      html += popup.classList.add("showPopup");
      document.querySelector(".popup__title").innerText = p.name;
      document.querySelector(".popup__img").src = p.img;
      document.querySelector(".popup__subtitle").innerText = p.breed;
      document.querySelector(".popup__text").innerText = p.description;
      document.querySelector(".popup-age").innerText = p.age;
      document.querySelector(".popup-inoculations").innerText = p.inoculations;
      document.querySelector(".popup-diseases").innerText = p.diseases;
      document.querySelector(".popup-parasites").innerText = p.parasites;
    });
}
