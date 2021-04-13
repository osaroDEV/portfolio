// loader
const loaderer = () => {
	document.getElementById("showcap").style.visibility = "visible";
	document.getElementById("loader-container").style.visibility = "hidden";
	// alert('site under construction');
};

setTimeout(loaderer, 2000);

// light-dark mode
const checkbox = document.getElementById("mode");
const label = document.getElementsByClassName("mode");
const icon = document.querySelectorAll("#social i"); //social media icons
const menu = document.querySelectorAll("#links");
let line = document.querySelector('#hamburger-container');
const up = document.getElementsByClassName("up"); // up
checkbox.addEventListener("change", () => {
	document.body.classList.toggle("alter");
	for (let i = 0; i < icon.length; i++)
		icon[i].classList.toggle("alter-icons");
	for (let a = 0; a < menu.length; a++)
		menu[a].classList.toggle("alter-menu");
	line.classList.toggle("alter-hamburger");
	up.classList.toggle("alter");
});
	

// da.onclick = () => {
// 	li.style.visibility = "visible";
// 	da.style.visibility = "hidden";
// 	document.getElementById("showcap").classList.toggle("alter");
// 	for (let i = 0; i < icon.length; i++)
// 	icon[i].classList.toggle("alter-icons");
// 	for (let a = 0; a < menu.length; a++)
// 	menu[a].classList.toggle("alter-menu");
// 	line.classList.toggle("alter-hamburger");
// };

// hamburger
let container = document.getElementById('hamburger-container');
const nav = document.querySelector('.menu-bar');
let menuOpen = false;
container.addEventListener('click', () => {
	if (!menuOpen) {
		container.classList.add('open');
		nav.classList.add('reveal');
		document.body.style.overflow = 'hidden';
		menuOpen = true;
	} else {
		container.classList.remove('open');
		nav.classList.remove('reveal');
		document.body.style.overflow = 'visible';
		menuOpen = false;
	}
})
