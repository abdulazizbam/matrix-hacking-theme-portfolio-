const background = document.getElementById("background");
const screens = document.querySelectorAll(".screen");
const menuItems = document.querySelectorAll(".menu-item");

const LONG_TEXT =
  '~! @#$ %^&*()_+][poiuyt rewQWERYU OPP}":LKJHGGFFDSA ZCVBNMM<>>>kjnicdusnmc./lkjiudh/*';

const width = window.innerWidth;
const hight = window.innerHeight;

for (let i = 0; i < Math.floor(hight / 20); i++) {
  let p =
    '<div class="background-text"><span class="name">&lt;AzizDev/&gt; </span></div>';
  background.innerHTML += p;
}

const pList = document.querySelectorAll(".background-text");

const interval = setInterval(() => {
  pList.forEach((p) => {
    if (p.clientWidth + 20 > width) {
      p.innerHTML = '<span class="name">&lt;AzizDev/&gt; </span>';
    }

    if (Math.floor(Math.random() * 3) === 0) {
      p.innerHTML += LONG_TEXT.charAt(
        Math.floor(Math.random() * LONG_TEXT.length)
      );
    }
  });
}, 80);

let trigger = 0;

menuItems.forEach((item) => {
  item.addEventListener("click", () => {

    if (item.classList.contains("active")) {
      return; 
    }

    const activeItem = document.querySelector('.menu-item.active')
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

