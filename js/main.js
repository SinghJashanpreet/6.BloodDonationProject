console.log("jashan");

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", window.scrollY >= 40);
});

const menubtn = document.getElementById("menubtn");
const menu = document.getElementById("menu");
const menu_right = document.getElementById("menu_right");
const logo = document.getElementById("logo");

// var html=menu_right.innerHTML;
menubtn.addEventListener("click", () => {
  if (menu_right.style.display === "none") {
    menu_right.style.display = "block";
    ico.classList.toggle("active");
  } else {
    // menu.classList.toggle("active");
    ico.classList.toggle("active");
    menu_right.style.display = "none";
    logo.style.width("300");
  }
});

//   if(menu_right.style.width<="0px")
//   {
//     document.body.style.display="none";
//     ico.classList.toggle("deactive");
//   }
// else{}
