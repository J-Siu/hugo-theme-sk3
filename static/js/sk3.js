var m = document.getElementsByClassName("menu-button");
for (var i = 0; i < m.length; i++) {
	var e =  document.getElementById("menu-bar");
	m[i].addEventListener("click", function () {
		e.style.display === "block" ? e.style.display = "none" : e.style.display = "block";
	},false)
}

var c = document.getElementsByClassName("collapsible");
for (var i = 0; i < c.length; i++) {
	c[i].display="none"
	c[i].addEventListener("click", function () {
		this.classList.toggle(false);
		var e = this.nextElementSibling;
		e.style.display === "block" ? e.style.display = "none" : e.style.display = "block";
	},false)
}