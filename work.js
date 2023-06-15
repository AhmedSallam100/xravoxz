// Show Images
let imgs = document.querySelectorAll(".open");
let main = document.querySelector("main");
let header = document.querySelector(".head");
let openedImgCont = document.querySelector(".openedImg");
let openedImg = document.querySelector(".openedImg img");
let closeImg = document.querySelector(".openedImg i");
let spanClose = document.querySelector(".openedImg span");

imgs.forEach((ele) => {
  ele.onclick = function () {
    console.log(ele.getAttribute("src"));
    openedImg.setAttribute("src", ele.getAttribute("src"));
    openedImgCont.style.transform = "translate(-50%, -50%)";
    openedImgCont.classList.add("blur-50");
  };
});

closeImg.onclick = function () {
  openedImgCont.style.transform = "translate(50%, -50%)";
  openedImgCont.classList.remove("blur-50");
};

spanClose.onclick = function () {
  openedImgCont.style.transform = "translate(50%, -50%)";
  openedImgCont.classList.remove("blur-50");
};

// Show Scroll To Top
let toTop = document.querySelector(".to-top");

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    toTop.classList.add("active-scroll");
  } else {
    toTop.classList.remove("active-scroll");
  }
});

// Open & Close Menu
let openMenu = document.querySelector(".open-menu");
let closeMenu = document.querySelector(".close-menu");
let menu = document.querySelector(".nav-menu");

openMenu.addEventListener("click", () => {
  menu.classList.add("active-menu");
});
closeMenu.addEventListener("click", () => {
  menu.classList.remove("active-menu");
});
