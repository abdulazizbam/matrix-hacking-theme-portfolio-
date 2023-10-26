const background = document.getElementById("background");
const screens = document.querySelectorAll(".screen");
const menuItems = document.querySelectorAll(".menu-item");
const projectsCards = document.querySelectorAll(".projects .card");
const arrows = document.querySelectorAll(".arrow");

const LONG_TEXT = '`123567890-=][poiuytrewqasdfghjkl;/.,mnbvcxz!@#$%^&*~()_+}{POIUYTREWQASDFGHJKL:"?><MNBVCXZ';
const width = window.innerWidth;
const hight = window.innerHeight;

for (let i = 0; i < Math.floor(hight / 35); i++) {
  let p = '<div class="background-text">&lt;AzizDev/&gt; </div>';
  background.innerHTML += p;
}

const pList = document.querySelectorAll(".background-text");

const interval = setInterval(() => {
  pList.forEach((p) => {
    if (p.clientWidth + 20 > width) {
      p.innerHTML = "&lt;AzizDev/&gt; ";
    }

    if (Math.floor(Math.random() * 2) === 0) {
      p.innerHTML += LONG_TEXT.charAt(
        Math.floor(Math.random() * LONG_TEXT.length)
      );
    }
  });
}, 100);

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      return;
    }

    const activeItem = document.querySelector(".menu-item.active");
    if (activeItem) {
      activeItem.classList.remove("active");
    }

    item.classList.add("active");

    screens.forEach((screen) => {
      if (screen.classList.contains(item.id)) {
        screen.classList.remove("invisible");
      } else {
        screen.classList.add("invisible");
      }
    });
  });
});

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const activeCard = document.querySelector(".active-card");
    activeCard.classList.remove("active-card");
    activeCard.classList.add("invisible");

    if (arrow.id === "arrow-r") {
      const newActiveCard = document.querySelector(
        "#card-" + (parseInt(activeCard.id.charAt(5)) + 1)
      );

      newActiveCard.classList.remove("invisible");
      newActiveCard.classList.add("active-card");

      const cardNumber = parseInt(newActiveCard.id.charAt(5));

      if (cardNumber == projectsCards.length - 1) {
        arrow.classList.add("invisible");
      }

      if (cardNumber > 0) {
        document.getElementById("arrow-l").classList.remove("invisible");
      }
    }

    if (arrow.id === "arrow-l") {
      const newActiveCard = document.querySelector(
        "#card-" + (parseInt(activeCard.id.charAt(5)) - 1)
      );

      newActiveCard.classList.remove("invisible");
      newActiveCard.classList.add("active-card");

      const cardNumber = parseInt(newActiveCard.id.charAt(5));

      if (cardNumber === 0) {
        arrow.classList.add("invisible");
      }

      if (cardNumber < projectsCards.length - 1) {
        document.getElementById("arrow-r").classList.remove("invisible");
      }
    }
  });
});
