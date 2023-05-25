import React, { useEffect, useState } from "react";
import { api_url, getAllProduct, getAllCategory, getFavorite } from "../../services/getAPI.js";
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
  const [cookies] = useCookies([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProduct = await getAllProduct();
        var getFavorites = null;
        var productIDs = [];
        if (cookies.accessToken != null) {
          getFavorites = await getFavorite(cookies.accessToken);
          productIDs = getFavorites.map((favorite) => favorite.ProductID);
        }
        const updatedProducts = getProduct.data.map(product => ({
          ...product,
          isFavorite: productIDs.includes(product.ProductID),
        }));
        setProducts(updatedProducts);
        const category = await getAllCategory();
        setCategorys(category);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const toggleFavorite = async (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.ProductID === productId) {
          const updatedProduct = {
            ...product,
            isFavorite: !product.isFavorite
          };

          // if (updatedProduct.isFavorite) {
          //   addFavorite(productId);
          // } else {
          //   removeFavorite(productId);
          // }

          return updatedProduct;
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
                <img src={api_url + "/images/category/" + category.CategoryIcon} alt="1" />
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
                <img className={cx('product-item-img')} src={api_url + "/images/product/" + product.ProductImageDefault} alt="" />
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
                  {
                    Array.from({ length: product.Rating }, (_, index) => (
                      <i key={index} className={cx('fas', 'fa-star')}></i>
                    ))
                  }
                  {"(" + product.Rating + "/5)"}
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
export default Home;
