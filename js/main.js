



console.log("jashan");

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", window.scrollY >= 40);
});

const menubtn = document.getElementById("menubtn");
const menu = document.getElementById("menu");
const menu_right = document.getElementById("menu_right");
const logo = document.getElementById("logo");


menubtn.addEventListener("click", () => {
    
  //  if (menu_right.style.position="fixed") {
    menu.style.display = "block";
    menu_right.classList.toggle("active");
      ico.classList.toggle("active");
  // } else {
  //   menu.style.display = "block";
  //   menu_right.classList.toggle("active");
  //     ico.classList.toggle("active");
    
  // }
});

// var html = document.getElementsByClassName("html1");
// if(window.innerWidth<=830)
// {
//   html.innerHTML="<h1>jashan</h1>";
// }
// else{
// document.innerHTML
// }



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
