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
check.addEventListener('click', () => {
	check.style.display = 'none';

	const qtitle = document.getElementById('quoteTitle');
	qtitle.style.display = 'none';

	const qbtn = document.getElementById('qbtn');
	qbtn.style.display = 'none';
})
