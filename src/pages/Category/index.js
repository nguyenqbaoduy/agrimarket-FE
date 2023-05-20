import React, { useEffect, useState } from "react";
import { api_url, getCatalog } from "../../services/getAPI.js";
import { Link, useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';
import classNames from "classnames/bind";

import styles from "./Category.module.scss";

const cx = classNames.bind(styles);
const Category = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const getProduct = await getCatalog(params.CategoryID);
                setProducts(getProduct.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, []);
    // Yêu thích
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
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10); // Số lượng product hiện thị trên mỗi trang
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <section className={cx('category')}>
            <div className={cx('container')}>
                {/* <div className={cx('category-top', 'row')}>
                    <p>Trang chủ</p> <span>&#10230; </span> <p>Hạt giống</p>
                </div> */}
            </div>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('category-left')}>
                        <h3 className={cx('category-heading')}>
                            <i className={cx('category-heading-icon', 'fas', 'fa-list-ul')}></i>
                            Bộ lọc tìm kiếm
                        </h3>
                        <div className={cx('category-group')}>
                            <div className={cx('category-group-title')}>Theo Danh Mục</div>
                            {/* <ul className={cx('category-group-list')}>
                                <li className={cx('category-group-item')}>
                                    <input type="checkbox" className={cx('category-group-item-check')} />
                                    Hạt giống rau
                                </li>
                                <li className={cx('category-group-item')}>
                                    <input type="checkbox" className={cx('category-group-item-check')} />
                                    Hạt giống rau củ
                                </li>
                                <li className={cx('category-group-item')}>
                                    <input type="checkbox" className={cx('category-group-item-check')} />
                                    Hạt giống cà chua
                                </li>
                                <li className={cx('category-group-item')}>
                                    <input type="checkbox" className={cx('category-group-item-check')} />
                                    Hạt giống rau theo mùa
                                </li>
                                <li className={cx('category-group-item')}>
                                    <input type="checkbox" className={cx('category-group-item-check')} />
                                    Hạt giống cỏ bermuda
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    <div className={cx('category-right')}>
                        <div className={cx('category-filter')}>
                            <div className={cx('category-right-top-item')}>
                                <p>MUA HẠT GIỐNG NÔNG NGHIỆP CHẤT LƯỢNG TỐT NHẤT</p>
                            </div>
                            <div className={cx('category-right-top-item')}>
                                <select name="" id="">
                                    <option value="">Sắp xếp</option>
                                    <option value="">Giá cao đến thấp</option>
                                    <option value="">Giá thấp đến cao</option>
                                </select>
                            </div>
                        </div>
                        <div className={cx('category-right-content', 'row')}>
                            {currentProducts.map((product, index) => (

                                <div className={cx('product-item')}>
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
                                    ></button>                                <div className={cx('info')}>
                                        <Link to={`/Product/${product.ProductID}`}>
                                            <h3 className={cx('product-title')}>{product.ProductName}</h3>
                                        </Link>
                                        <div className={cx('stars')}>
                                            <i className={cx('fas', 'fa-star')}></i>
                                            <i className={cx('fas', 'fa-star')}></i>
                                            < i className={cx('fas', 'fa-star')}></i>
                                            <i className={cx('fas', 'fa-star')}></i>
                                            <i className={cx('fas', 'fa-star')}></i> (4.5/5)
                                        </div>
                                        <strong className={cx('price')}>
                                            <span className={cx('mrp')}>{product.ProductPrice}</span>
                                        </strong>                                </div>
                                    {/* <div className={cx('product-vulome')}>
                                    <p>480ml</p>
                                </div> */}
                                </div>
                            ))}

                        </div>

                        {/* Pagination */}
                        <ul className={cx('pagination', 'row')}>
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
            </div>
        </section>
    )
};

export default Category;
