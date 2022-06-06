"use strict";

const data = `[
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]`;

const dataPets = JSON.parse(data);

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
  burger.classList.remove("_active");
  nav.classList.remove("_active");
  blockPage.classList.remove("_active");
  burgerLogo.classList.remove("_active");
});

blockPage.addEventListener("click", () => {
  burger.classList.remove("_active");
  nav.classList.remove("_active");
  blockPage.classList.remove("_active");
  burgerLogo.classList.remove("_active");
});

// POPUP //

const popup = document.querySelector(".popup");
const popupBtns = document.querySelectorAll(".slider__card");
const closePopupBtn = document.querySelector(".popup__close");

const popupViews = function () {
  document.body.classList.toggle("_lock");
  popup.classList.add("showPopup");
  blockPage.classList.toggle("_active");
};

closePopupBtn.addEventListener("click", () => {
  document.body.classList.remove("_lock");
  popup.classList.remove("showPopup");
  blockPage.classList.remove("_active");
});

popup.addEventListener("click", () => {
  document.body.classList.remove("_lock");
  popup.classList.remove("showPopup");
  blockPage.classList.remove("_active");
});

function addEventListeners() {
  window.addEventListener("DOMContentLoaded", () => {
    loadJSON();
  });
}

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

// Slider //

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const SLIDER_LEFT = document.querySelector("#slider_left");
const SLIDER_RIGHT = document.querySelector("#slider_right");

BTN_LEFT.addEventListener("click", () => {
  CAROUSEL.classList.add("transition-left");
});

BTN_RIGHT.addEventListener("click", () => {
  CAROUSEL.classList.add("transition-right");
});

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName == "move-left") {
    CAROUSEL.classList.remove("transition-left");
    const leftItems = document.querySelector("#slider_left").innerHTML;
    document.querySelector("#slider_left").innerHTML;
    document.querySelector("#slider_active").innerHTML = leftItems;

    const newSlider = document.createElement("div");
    newSlider.setAttribute("data-name", `${dataPets.name}`);
    newSlider.classList.add("slider__card");
    newSlider.innerHTML = `
                <img class="slider__card__img" '${dataPets.img}' alt="Sophia" />
                  <p class="slider__card__name">${dataPets.name}</p>
                  <button data-name='${dataPets.name}'class="slider__card__btn">Learn more</button>
            `;

    // SLIDER_LEFT.innerHTML = "";
    // for (let i = 0; i < 3; i++) {
    //   const card = createCard();
    //   card.innerText = Math.floor(Math.random() * 8);
    //   SLIDER_LEFT.appendChild(newSlider);
    // }
  } else {
    CAROUSEL.classList.remove("transition-right");
  }
  CAROUSEL.classList.remove("transition-left");
  CAROUSEL.classList.remove("transition-right");
});

// BTN_RIGHT.addEventListener("click", moveRight);

// carousel.addEventListener("animationend", (animationEvent) => {
//   let changedItem = SLIDER_LEFT;
//   if (animationEvent.animationName === "move-left") {
//     carousel.classList.remove("transition-left");
//     changedItem = SLIDER_RIGHT;
//     document.querySelector("#slider_active").innerHTML = SLIDER_RIGHT.innerHTML;

// function createCard(i) {
//   const newCard = document.createElement("div");
//   newCard.classList.add("slider__card");
//   newCard.setAttribute("data-name", `${dataPets[i].name}`);
//   newCard.innerHTML = `
//                   <img class="slider__card__img" src='${dataPets[i].img}'/>
//                   <p class="slider__card__name">${dataPets[i].name}</p>
//                   <button data-name='${dataPets[i].name}'  class="slider__card__btn">Learn more</button>
//             `;
//   return newCard;
// }

//     changedItem.innerHTML = "";
//     for (let i = 0; i < 3; i++) {
//       const card = createCard();
//       card.innerText = Math.floor(Math.random() * 8);
//       changedItem.appendChild(card);
//     }

//     BTN_LEFT.addEventListener("click", moveLeft);
//     BTN_RIGHT.addEventListener("click", moveRight);
//   }
// });
