var source = "audio.mp3";
var audio = document.createElement("audio");
//
audio.autoplay = true;
//
audio.load();
audio.addEventListener(
  "load",
  function () {
    audio.play();
  },
  true
);
audio.src = source;

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", window.scrollY >= 40);
});

const menubtn = document.getElementById("menubtn");
const menu = document.getElementById("menu");
const menu_right = document.getElementById("menu_right");
const logo = document.getElementById("logo");
const dropbtn = document.getElementById("dropbtn");
const dropbtn1 = document.getElementById("dropbtn1");

menubtn.addEventListener("click", () => {

  menu.style.display = "block";
  menu_right.classList.toggle("active");
  ico.classList.toggle("active");


  if (logo.style.display === "none") {
    logo.style.display = "block";
  } else {
    logo.style.display = "none";
  }

  if (dropbtn.style.display === "none") {
    dropbtn.style.display = "inline-block";
  } else {
    dropbtn.style.display = "none";
  }

  if (dropbtn1.style.display === "none") {
    dropbtn1.style.display = "inline-block";
  } else {
    dropbtn1.style.display = "none";
  }
});

const filteritem = document.querySelector(".filter-projects");
const filterbox = document.querySelectorAll(".project-box");

window.onload = () => {
  //once window loaded
  filteritem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      filteritem.querySelector(".f-active").classList.remove("f-active");
      selectedItem.target.classList.add("f-active");
      let filtername = selectedItem.target.getAttribute("data-filter");
      filterbox.forEach((img) => {
        let filterimgs = img.getAttribute("data-filter");
        if (filterimgs == filtername || filtername == "all") {
          img.classList.remove("hide");
          img.classList.add("show");
        } else {
          img.classList.add("hide");
          img.classList.remove("show");
        }
      });
    }
  };
};

// start typeWriter by pure JS
const txtElement = document.getElementById("typewriter");
const typed = ["Best Blood Donation portal."];
let index = 0;
let typer = 0;
let currentTyped = [];
let isDeleting = false;
let isEnd = false;
function loop() {
  isEnd = false;
  txtElement.innerHTML = currentTyped.join("");

  if (index < typed.length) {
    if (!isDeleting && typer <= typed[index].length) {
      currentTyped.push(typed[index][typer]);
      typer++;
      txtElement.innerHTML = currentTyped.join("");
    }

    if (isDeleting && typer <= typed[index].length) {
      currentTyped.pop(typed[index][typer]);
      typer--;
      txtElement.innerHTML = currentTyped.join("");
    }
    if (typer == typed[index].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && typer === 0) {
      currentTyped = [];
      isDeleting = false;
      index++;
      if (index == typed.length) {
        index = 0;
      }
    }
  }
  const typeSpeed = Math.random() * (100 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 100;
  const time = isEnd ? 1000 : isDeleting ? typeSpeed : normalSpeed;
  setTimeout(loop, time);
}

loop();
