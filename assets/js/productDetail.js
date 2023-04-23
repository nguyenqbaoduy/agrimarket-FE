
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

var btnSizeOne = document.querySelector('.content-button-size .btn-1');
var btnSizeTwo = document.querySelector('.content-button-size .btn-2');

$(document).on('click', '.content-button-size button', function() {
    $(this).addClass('btn-active').siblings().removeClass('btn-active');
});
$(document).on('click', '.content-size button', function() {
    $(this).addClass('btn-active').siblings().removeClass('btn-active');
});

var btnExpiryOne = document.querySelector('.content-button-expiry .btn-1');
var btnExpiryTwo = document.querySelector('.content-button-expiry .btn-2');

$(document).on('click', '.content-button-expiry button', function() {
    $(this).addClass('btn-active').siblings().removeClass('btn-active');
});
$(document).on('click', '.content-button-expiry button', function() {
    $(this).addClass('btn-active').siblings().removeClass('btn-active');
});

$('input.input-qty').each(function() {
    var $this = $(this),
        qty = $this.parent().find('.is-form'),
        min = Number($this.attr('min')),
        max = Number($this.attr('max'));
    if (min == 0) {
        var d = 0;
    } else d = min;
    $(qty).on('click', function() {
        if ($(this).hasClass('minus')) {
            if (d > min) d += -1;
        } else if ($(this).hasClass('plus')) {
            var x = Number($this.val()) + 1;
            if (x <= max) d += 1;
        }
        $this.attr('value', d).val(d);
    });
});
const productData = JSON.parse(localStorage.getItem('detail-product'));
const productTitle = document.querySelector('.product-title');
const productPrice = document.querySelector('.product-price');
const productImage = document.querySelector('.product-image');
const productImagesDetail = document.querySelector('.product-images-detail');
const productSize = document.querySelector('.product-size');
const productQuantity = document.querySelector('.product-quantity');
const btnAdd = document.querySelector('.btn-add');
const description = document.querySelector('.content-descript')
const btnBuy = document.querySelector('.btn-sed')
btnAdd.addEventListener('click', () => {
    const btnActive = document.querySelector('.btn-active');
    const id = btnActive?.getAttribute('id');
    const product = {
      id: productData.id,
      name: productData.name,
      price: productData.price,
      image: productData.image,
      size: productData.size[id],
      quantity: productQuantity.value,
    };
    localStorage.setItem('cart', JSON.stringify(product));
    alert('Thêm vào giỏ hàng không có được thành công');
    // window.location.href = '../../user/cart.html';
  });
