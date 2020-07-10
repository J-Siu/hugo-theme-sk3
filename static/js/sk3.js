// menu
function menu_button() {
	var e = document.getElementsByClassName("menu-bar");
	for (var j = 0; j < e.length; j++) {
		e[j].style.display === "block" ? e[j].style.display = "none" : e[j].style.display = "block";
	}
}
var m = document.getElementsByClassName("menu-button");
for (var i = 0; i < m.length; i++) {
	m[i].addEventListener("click", menu_button, false)
}
// toc
var c = document.getElementsByClassName("collapsible");
for (var i = 0; i < c.length; i++) {
	c[i].display = "none"
	c[i].addEventListener("click", function () {
		this.classList.toggle(false);
		var e = this.nextElementSibling;
		e.style.display === "block" ? e.style.display = "none" : e.style.display = "block";
	}, false)
}