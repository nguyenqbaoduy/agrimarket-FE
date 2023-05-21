import React, { useEffect, useState } from "react";
import { api_url, getAllProduct, getAllCategory } from "../../services/getAPI.js";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useCookies } from 'react-cookie';
import classNames from "classnames/bind";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
const Home = () => {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); // Số lượng product hiện thị trên mỗi trang
  const [cookies] = useCookies(['accessToken']);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProduct = await getAllProduct();
        setProducts(getProduct.data);
        const category = await getAllCategory();
        setCategorys(category);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const toggleFavorite = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.ProductID === productId) {
          return {
            ...product,
            isFavorite: !product.isFavorite
          };
        }
        return product;
      });
    });
  };
  // Khi F5 tự động scroll lên đầu
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  return (
    <div>
      <div className={cx('banner-container')}>
        <div className={cx('banner')}>
          <div className={cx('product')}>
            <img src="/images/7_d27d1.png" alt="" />
          </div>
          <div className={cx('content')}>
            <h2>
              <span style={{ color: 'var(--primary-color)', fontSize: '45px' }}>
                Nâng tầm chất lượng nông sản Việt
              </span>
              &nbsp; vì một tương lai đưa nông sản ra khắp thế giới
            </h2>
            <span>Đồng hành cùng nông dân Việt phát triển bền vững</span>
            <p>
              Cam kết đồng hành, đem lại chất lượng tốt nhất cho người nông dân, nâng cao chất lượng cuộc sống.
            </p>
          </div>
        </div>
      </div>

      {/* Product Catalog */}
      <section id={cx('slider-product')}>
        {categorys.map((category, index) => (
          <div className={cx('product-catalog')} key={index}>
            <Link to={`/Category/${category.CategoryID}`} className={cx('collect-item')}>
              <div className={cx('product-catalog-img')}>
                <img src={api_url+"/images/category/" + category.CategoryIcon} alt="1" />
              </div>
              <div className={cx('product-catalog-text')}>
                <p>{category.CategoryName}</p>
              </div>
            </Link>
          </div>
        ))}
      </section>

      {/* Body */}
      <div className={cx('container')} id={cx('list')}>
        <div className={cx('list-product')}>
          {currentProducts.map((product, index) => (
            <div className={cx('product-item')} key={index}>
              <div className={cx('image')}>
                <img className={cx('product-item-img')} src={api_url+"/images/product/" + product.ProductImageDefault} alt="" />
              </div>
              <button
                className={cx('fas', 'fa-heart', { favorite: product.isFavorite })}
                style={{
                  color: product.isFavorite
                    ? 'var(--primary-color)'
                    : 'var(--favorites-color)'
                }}
                onClick={() => toggleFavorite(product.ProductID)}
              ></button>
              <div className={cx('info')}>
                <Link className={cx('product-link')} to={`/Product/${product.ProductID}`}>
                  <h3 className={cx('product-title')}>{product.ProductName}</h3>
                </Link>
                {/* <p className={cx('product-copany-name')}>{product.UserID}</p> */}
                <div className={cx('stars')}>
                  <i className={cx('fas', 'fa-star')}></i>
                  <i className={cx('fas', 'fa-star')}></i>
                  <i className={cx('fas', 'fa-star')}></i>
                  <i className={cx('fas', 'fa-star')}></i>
                  <i className={cx('fas', 'fa-star')}></i>

                  <i className={cx('fas', 'fa-star')}></i>
                  <i className={cx('fas', 'fa-star')}></i>
                  <i className={cx('fas', 'fa-star')}></i>
                  <i className={cx('fas', 'fa-star')}></i>
                  (5/5)
                </div>
                <strong className={cx('price')}>
                  <span className={cx('mrp')}>{product.ProductPrice}</span>
                </strong>
              </div>
              {/* <div className={cx('product-volume')}>
                <p>480 ml</p>
              </div> */}
            </div>
          ))}
        </div>
        {/* Pagination */}
        <ul className={cx("pagination")}>
          <li
            className={cx("previous-page", { disable: currentPage == 1 })}
            onClick={() => {
              if (currentPage > 1) {
                paginate(currentPage - 1);
              }
            }}
          >
            Prev
          </li>
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => i + 1).map((number) => (
            <li
              key={number}
              className={cx("pagination-item", { active: number === currentPage })}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}
          <li
            className={cx("next-page", { disable: currentPage === Math.ceil(products.length / productsPerPage) })}
            onClick={() => {
              if (currentPage < Math.ceil(products.length / productsPerPage)) {
                paginate(currentPage + 1);
              }
            }}
          >
            Next
          </li>
        </ul>
      </div>
    </div>
  );
};

//myheaders
// window.onscroll = function () { myFunction() };

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }

//toggleFavoriteProduct
// const Toggle = (btnFavorite) => {
//   let btnlet = document.getElementById(btnFavorite);
//   if (
//     btnlet.style.color == "var(--favorites-color)" ||
//     btnlet.style.color == null
//   ) {
//     btnlet.style.color = "var(--primary-color)";
//   } else {
//     btnlet.style.color = "var(--favorites-color)";
//   }
// };

//--Pagination--
// function getPageList(totalPage, page, maxLength) {
//   function range(start, end) {
//     return Array.from(Array(end - start + 1), (_, i) => i + start);
//   }

//   let sideWidth = maxLength < 9 ? 1 : 2;
//   let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
//   let rightWidth = (maxLength - sideWidth * 2 + 3) >> 1;

//   if (totalPage <= maxLength) {
//     return range(1, totalPage);
//   }

//   if (page <= maxLength - sideWidth - 1 - rightWidth) {
//     return range(1, maxLength - sideWidth - 1).concat(
//       range(totalPage - sideWidth - rightWidth + 1, totalPage)
//     );
//   }

//   if (page >= totalPage - sideWidth - 1 - rightWidth) {
//     return range(1, sideWidth).concat(
//       0,
//       range(totalPage - sideWidth - 1 - rightWidth - leftWidth, totalPage)
//     );
//   }

//   return range(1, sideWidth).concat(
//     0,
//     range(page - leftWidth, page + rightWidth),
//     0,
//     range(totalPage - sideWidth + 1 - totalPage)
//   );
// }

// $(function () {
//   let numberOfItems = $(".list-product .product-item").length;
//   let limitPerPage = 20; //How many product list items visible per a page
//   let totalPages = Math.ceil(numberOfItems / limitPerPage);
//   let paginationSize = 7; //How many page elements visible in the pagination
//   let currentPage;

//   function showPage(whichPage) {
//     if (whichPage < 1 || whichPage > totalPages) return false;

//     currentPage = whichPage;

//     $(".list-product .product-item")
//       .hide()
//       .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
//       .show();

//     $(".pagination li").slice(1, -1).remove();

//     getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
//       $("<li>")
//         .addClass("page-item")
//         .addClass(item ? "current-page" : "dots")
//         .toggleClass("active", item === currentPage)
//         .append(
//           $("<a>")
//             .addClass("page-link")
//             .attr({ href: "javascript:void(0)" })
//             .text(item || "...")
//         )
//         .insertBefore(".next-page");
//     });

//     $(".previous-page").toggleClass("disable", currentPage === 1);
//     $(".next-page").toggleClass("disable", currentPage === totalPages);
//     return true;
//   }

//   $(".pagination").append(
//     $("<li>")
//       .addClass("page-item")
//       .addClass("previous-page")
//       .append(
//         $("<a>")
//           .addClass("page-link")
//           .attr({ href: "javascript:void(0)" })
//           .text("Prev")
//       ),
//     $("<li>")
//       .addClass("page-item")
//       .addClass("next-page")
//       .append(
//         $("<a>")
//           .addClass("page-link")
//           .attr({ href: "javascript:void(0)" })
//           .text("Next")
//       )
//   );

//   $(".list-product").show();
//   showPage(1);

//   $(document).on(
//     "click",
//     ".pagination li.current-page:not(.active)",
//     function () {
//       return showPage(+$(this).text());
//     }
//   );

//   $(".next-page").on("click", function () {
//     return showPage(currentPage + 1);
//   });

//   $(".previous-page").on("click", function () {
//     return showPage(currentPage - 1);
//   });
// });

export default Home;
