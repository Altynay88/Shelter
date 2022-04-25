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

function openModal() {
  fetch("pets.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      popup.classList.add("showPopup");
      document.body.classList.toggle("_lock");
      document.querySelector(".popup__img").src = data[0].img;
      document.querySelector(".popup__title").innerText = data[0].name;
      document.querySelector(".popup__subtitle").innerText = data[0].breed;
      document.querySelector(".popup__text").innerText = data[0].description;
      document.querySelector(".popup-age").innerText = data[0].age;
      document.querySelector(".popup-inoculations").innerText =
        data[0].inoculations;
      document.querySelector(".popup-diseases").innerText = data[0].diseases;
      document.querySelector(".popup-parasites").innerText = data[0].parasites;
    });
}
