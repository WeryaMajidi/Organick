const menu = document.querySelector(".toggle-menu");
const showMenu = document.querySelector(".humberger-menu");
const hideMenu = document.querySelector(".toggle-close");
const menuUl = document.querySelector(".header_nav");

showMenu.addEventListener("click", () => {
  menu.classList.add("visible");
});

hideMenu.addEventListener("click", () => {
  menu.classList.remove("visible");
});
menuUl.addEventListener("click", (e) => {
  if (e.target.closest(".header_nav-item")) menu.classList.remove("visible");
});
