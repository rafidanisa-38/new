// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.toggle("sticky", window.scrollY > 0);
	}
}


// let text = document.getElementById('text');

// window.addEventListener('scroll', () => {
// 	let value = window.scrollY;

// 	text.style.marginTop = value * 0 + 'px';

// });

// const header = document.querySelectorAll(".header-main");

// header.forEach((item, index) => {
// 	let 
// 	console.log(item);

// })

// let listElements = document.querySelectorAll('.link');
// listElements.forEach(listElement => {
// 	listElement.addEventListener('click', () => {
// 		if(listElement.classList.contains('active')){
// 			listElement.classList.remove('active');
// 		} else {
// 			listElements.forEach(ListE => {
// 				ListE.classList.remove('active');
// 			})
// 			listElement.classList.toggle('active');
// 		}
// 	})
// })