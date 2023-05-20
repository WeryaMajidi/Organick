const menu = document.querySelector(".toggle-menu");
const showMenu = document.querySelector(".humberger-menu");
const hideMenu = document.querySelector(".toggle-close");

showMenu.addEventListener("click", () => {
  console.log("show");
  menu.classList.add("visible");
});

hideMenu.addEventListener("click", () => {
  console.log("hide");
  menu.classList.remove("visible");
});
