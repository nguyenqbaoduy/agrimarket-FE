
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("toolbar-scroll").style.top = "0";
  } else {
    document.getElementById("toolbar-scroll").style.top = "-30px";
  }
  prevScrollpos = currentScrollPos;
}

//toggleMenu
let subMenu = document.getElementById("subMenu");
function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}