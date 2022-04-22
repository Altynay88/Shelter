"use strict";
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

if (nav) {
  burger.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    burger.classList.toggle("_active");
    nav.classList.toggle("_active");
  });
}
