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
  export function Toggle() {
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


//--Pagination--
function getPageList(totalPage, page, maxLength){
    function range(start, end){
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    let sideWidth = maxLength < 9 ? 1 : 2;
    let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    let rightWidth = (maxLength - sideWidth * 2 + 3) >> 1;

    if(totalPage <= maxLength){
        return range(1, totalPage);
    }

    if(page <= maxLength - sideWidth - 1 - rightWidth){
        return range(1, maxLength - sideWidth - 1).concat(range(totalPage - sideWidth - rightWidth + 1, totalPage));
    }

    if(page  >= totalPage - sideWidth - 1 - rightWidth){
        return range(1, sideWidth).concat(0, range(totalPage - sideWidth - 1 - rightWidth - leftWidth, totalPage));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPage - sideWidth + 1 - totalPage));
}

$(function(){
    let numberOfItems = $(".list-product .product-item").length;
    let limitPerPage = 20; //How many product list items visible per a page
    let totalPages = Math.ceil(numberOfItems / limitPerPage);
    let paginationSize = 7; //How many page elements visible in the pagination
    let currentPage;

    function showPage(whichPage){
      if(whichPage < 1 || whichPage > totalPages) return false;

      currentPage = whichPage;

      $(".list-product .product-item").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

      $(".pagination li").slice(1, -1).remove();

      getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
        .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
        .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
      });

      $(".previous-page").toggleClass("disable", currentPage === 1);
      $(".next-page").toggleClass("disable", currentPage === totalPages);
      return true;
    }

    $(".pagination").append(
      $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
      $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next"))
    );

    $(".list-product").show();
    showPage(1);

    $(document).on("click", ".pagination li.current-page:not(.active)", function(){
      return showPage(+$(this).text());
    });

    $(".next-page").on("click", function(){
      return showPage(currentPage + 1);
    });

    $(".previous-page").on("click", function(){
      return showPage(currentPage - 1);
    });
});