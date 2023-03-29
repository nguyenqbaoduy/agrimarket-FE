
//myheaders
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//toggleMenuAccount
let subMenu = document.getElementById("subMenu");
function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

//toggleFavoriteProduct
let btnlet = document.getElementById("btn-favorite");
  function Toggle() {
    if (btnlet.style.color == "var(--favorites-color)") {
      btnlet.style.color = "var(--primary-color)";
    }
    else{
      btnlet.style.color = "var(--favorites-color)"
    }
  }

  let btnlet2 = document.getElementById("btn-favorite2");
  function Toggle2() {
    if (btnlet2.style.color == "var(--favorites-color)") {
      btnlet2.style.color = "var(--primary-color)";
    }
    else{
      btnlet2.style.color = "var(--favorites-color)"
    }
  }


