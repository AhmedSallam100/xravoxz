// let startBtn = document.querySelector(".start-button");
// let webStart = document.querySelector(".start-web");
// let pointSilde = document.querySelector(".point-slide");

// startBtn.addEventListener("click", () => {
//   webStart.classList.add("remove-start");
//   webStart.classList.remove("start-web");
//   startBtn.style.display = "none";
//   document.body.classList.remove("flow-hidden");
//   pointSilde.style.display = "flex !important";
// });

// Write Effect
let animatedH1 = document.querySelector(".animated-h1");
let myText = "Front End Developer";
let width = animatedH1.clientWidth;
let i = 20;

let a = setInterval(() => {
  animatedH1.style.width = `${i}px`;
  if (i > width) {
    let b = setInterval(() => {
      i -= 20;
      if (i == 0) {
        clearInterval(b);
      }
    }, 200);
  } else {
    i += 20;
  }
}, 200);

// Active Link On Click
let links = document.querySelectorAll(".center ul li a");

links.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// Active Link On Scroll
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  sections.forEach(function (s) {
    if (window.scrollY >= s.offsetTop - 200) {
      links.forEach((e) => {
        e.classList.remove("active");
        `#${s.id}` == e.getAttribute("href") ? e.classList.add("active") : "";
      });
    }
  });
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

// Show Scroll To Top
let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    toTop.classList.add("active-scroll");
  } else {
    toTop.classList.remove("active-scroll");
  }
});

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
