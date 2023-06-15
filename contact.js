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

// Loader
let bgLoading = document.getElementById("bgLoading");
let bgLoadingCont = document.querySelector("#bgLoading .loading-container");
setTimeout(function lode() {
  bgLoadingCont.style.opacity = "0";
  bgLoading.style.pointerEvents = "none";
  bgLoading.style.backdropFilter = "blur(0px)";
  setTimeout(function lodenone() {
    bgLoadingCont.style.display = "none";
    bgLoading.style.display = "none";
  }, 1500);
}, 1500);
