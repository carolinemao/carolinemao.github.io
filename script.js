var mobile = window.matchMedia( "(max-width: 550px)" );
var purple = document.getElementById("purple_diagonal");
function loading() {
if (mobile.matches) {
document.body.style.opacity = "1";
document.body.style.transitionDuration = "2s";
purple.style.width="200px";
purple.style.transitionDuration = "1s";
purple.style.transform = "rotate(-43.86deg)";
} else {
document.body.style.opacity = "1";
document.body.style.transitionDuration = "2s";
purple.style.width="490px";
purple.style.transitionDuration = "2s";
purple.style.transform = "rotate(-43.86deg)";
}
}

var menu = document.getElementById("menu_links");
function showMenu() {
menu.style.display = "flex";
menu.style.cssText = "flex-direction:column; justify-content:center;";
}
