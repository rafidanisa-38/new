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





const text=document.getElementById("quotes");
const author=document.getElementById("author");

const getNewQuote = async () =>
{
    //api for quotes
    var url="https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote=allQuotes[indx].text;

    //Store the author of the respective quote
    const auth=allQuotes[indx].author;

    if(auth==null)
    {
        author = "Anonymous";
    }

    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;
}
getNewQuote();


const check = document.getElementById('check');

const qdecor1 = document.querySelector('.quote-decoration-1');
const qdecor2 = document.querySelector('.quote-decoration-2');
const qdecor3 = document.querySelector('.quote-decoration-3');
const qdecor4 = document.querySelector('.quote-decoration-4');
const qdecor5 = document.querySelector('.quote-decoration-5');

check.addEventListener('click', () => {
	check.style.display = 'none';

	const qtitle = document.getElementById('quoteTitle');
	qtitle.style.display = 'none';

	const qbtn = document.getElementById('qbtn');
	qbtn.style.display = 'none';
	
	qdecor1.style.transform = 'translate(-33%, -60%)';
	qdecor1.style.transform += 'scale(.6)';

	qdecor2.style.transform = 'translate(-33%, -45%)';
	qdecor2.style.transform += 'scale(.8)';

	qdecor3.style.transform = 'translate(10%, -50%)';
	qdecor3.style.transform += 'scale(.7)';

	qdecor4.style.transform = 'translate(0%, 95%)';
	qdecor4.style.transform += 'scale(.6)';

	qdecor5.style.transform = 'translate(30%, 80%)';
	qdecor5.style.transform += 'scale(.7)';
})
