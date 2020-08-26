// menu

function _menu_button(ev) {
	var c = document.getElementsByClassName("sk3-sidebar-trigger");
	for (var j = 0; j < c.length; j++) {
		if (c[j].style.display === "block") {
			c[j].style.display = "none"
		}
		else {
			ev.stopPropagation()
			c[j].style.display = "block"
		}
	}
}

function _menu_init() {
	var m = document.getElementsByClassName("sk3-sidebar-btn");
	for (var i = 0; i < m.length; i++) {
		m[i].addEventListener("click", _menu_button, false)
	}
}

_menu_init()

// toc

var c = document.getElementsByClassName("collapsible");
for (var i = 0; i < c.length; i++) {
	// Unhide
	c[i].style.display = "block"
	// Default from 'openToc'
	var e = c[i].nextElementSibling;
	e.style.display = (openToc) ? "block" : "none"
	// Add event
	c[i].addEventListener("click", function () {
		this.classList.toggle(false);
		var e = this.nextElementSibling;
		e.style.display === "block" ? e.style.display = "none" : e.style.display = "block";
	}, false)
}