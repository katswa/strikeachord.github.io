/*
	Student Name: Katie Swanson
	File Name: script.js
	Date: 10/16/24
*/

//Hamburger menu function
function hamburger () {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}