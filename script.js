const navbar = document.querySelector('.navbar');
const cartItem = document.querySelector('.cart-items-container');
const searchForm = document.querySelector('.search-form');


document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');
	searchForm.classList.remove('active');
	cartItem.classList.remove('active');
}
document.querySelector('#cart-btn').onclick = () => {
	cartItem.classList.toggle('active');
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
}
document.querySelector('#search-btn').onclick = () => {
	searchForm.classList.toggle('active');
	cartItem.classList.remove('active');
	navbar.classList.remove('active');
}
window.onscroll = () => {
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
	cartItem.classList.remove('active');
}