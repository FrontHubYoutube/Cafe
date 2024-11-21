const navbar = document.querySelector(".navbar");
const cartItem = document.querySelector(".cart-items-container");
const searchForm = document.querySelector(".search-form");
const shadow = document.querySelectorAll(".shadow");
const menu = document.querySelector("#menu-btn");
menu.onclick = () => {
  menu.classList.toggle("fa-x");
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};
document.querySelector("#cart-btn").onclick = () => {
  menu.classList.remove("fa-x");
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};
document.querySelector("#search-btn").onclick = () => {
  menu.classList.remove("fa-x");
  searchForm.classList.toggle("active");
  cartItem.classList.remove("active");
  navbar.classList.remove("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-x");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};
shadow.forEach((item) => {
  item.onclick = () => {
    menu.classList.remove("fa-x");
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
  };
});
