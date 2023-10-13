let plus = document.querySelector(".plus");
let box = document.querySelector(".box");
let min = document.querySelector(".min");

plus.onclick = function() {
	plus.classList.toggle("active");
	box.classList.toggle("active");
}

min.onclick = function() {
	min.classList.toggle("active");
	box.classList.toggle("active");
}


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
