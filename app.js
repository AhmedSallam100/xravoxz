let startBtn = document.querySelector(".start-button");
let webStart = document.querySelector(".start-web");
let main = document.querySelector("main");
main.style.display = "none";
let head = document.querySelector(".head");
head.style.display = "none";

let animatedH1 = document.querySelector(".animated-h1");
let myText = "Front End Developer";

startBtn.addEventListener("click", () => {
  webStart.classList.add("remove-start");
  webStart.classList.remove("start-web");
  startBtn.remove();
  head.style.display = "flex";
  main.style.display = "block";
  document.body.style.overflowY = "scroll";
  console.log(animatedH1.offsetWidth);

  let width = animatedH1.offsetWidth;
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
});

// Write Effect

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
let sections = document.querySelectorAll(".home, .services, .skills, .work");

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

// Disable Click Right
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("contextmenu", function (e) {
  alert(
    "Sorry, right click is disabled to prevent leakage of 			confidential functions"
  );
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
    return false;
  }
};
