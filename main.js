let menu = document.querySelector("menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.bars.classList.toggle("fa-time");
  navbar.classList.toggle("active");
};
