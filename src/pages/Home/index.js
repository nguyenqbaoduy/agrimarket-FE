import React, { useEffect, useState } from "react"
import { getAllProduct, getAllCategory } from '../../services/getAPI.js'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import styles from './Home.module.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const product = await getAllProduct();
                setProducts(product);
                console.log(product);
                const category = await getAllCategory();
                setCategorys(category);
                console.log(category);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, []);

    return (
            <div className="BODY">
                <div className={styles['banner-container']}>
                    <div className={styles.banner}>
                        <div className={styles.product}>
                            <img src="/images/7_d27d1.png" alt="" />
                        </div>
                        <div className={styles.content}>
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
                <section id={styles['slider-product']}>
                    {categorys.map((cartegory, index) => (
                        <div className={styles['product-catalog']} key={index}>
                            <a href="./cartegory/seeds.html" className={styles['collect-item']}>
                                <div className={styles['product-catalog-img']}>
                                    <img src={"/images/cartegory/" + cartegory.CategoryIcon} alt="1" />
                                </div>
                                <div className={styles['product-catalog-text']}>
                                    <p>{cartegory.CategoryName}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </section>

                {/* Body */}
                <div className={styles.container} id="list">
                    <div className={styles['list-product']}>
                        {products.map((product, index) => (
                            <div className={styles['product-item']} key={index}>
                                <div className={styles.image}>
                                    <img className={styles['product-item-img']} src={"/images/product/" + product.ProductImageDefault} alt="" />
                                </div>
                                <button
                                    id={product.ProductID}
                                    className="fas fa-heart"
                                    onClick={() => Toggle(product.ProductID)}                            ></button>
                                <div className={styles.info}>
                                    <Link to={`/Product/${product.ProductID}`}>
                                        <h3 className={styles['product-title']}>{product.ProductName}</h3>
                                    </Link>
                                    <p className={styles['product-company-name']}>{product.UserID}</p>
                                    <div className={styles.stars}>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i> (5/5)
                                    </div>
                                    <strong className={styles.price}><span className="mrp">{product.ProductPrice}</span></strong>
                                </div>
                                <div className={styles['product-volume']}>
                                    <p>480 ml</p>
                                </div>
                            </div>
                        ))}
                        {/* Add the rest of the product-item elements here */}
                    </div>
                </div>
            </div>
    );
}

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
const Toggle = (btnFavorite) => {
    let btnlet = document.getElementById(btnFavorite);
    if (btnlet.style.color == "var(--favorites-color)" || btnlet.style.color == null) {
        btnlet.style.color = "var(--primary-color)";
    }
    else {
        btnlet.style.color = "var(--favorites-color)"
    }
}

//--Pagination--
function getPageList(totalPage, page, maxLength) {
    function range(start, end) {
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    let sideWidth = maxLength < 9 ? 1 : 2;
    let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    let rightWidth = (maxLength - sideWidth * 2 + 3) >> 1;

    if (totalPage <= maxLength) {
        return range(1, totalPage);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
        return range(1, maxLength - sideWidth - 1).concat(range(totalPage - sideWidth - rightWidth + 1, totalPage));
    }

    if (page >= totalPage - sideWidth - 1 - rightWidth) {
        return range(1, sideWidth).concat(0, range(totalPage - sideWidth - 1 - rightWidth - leftWidth, totalPage));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPage - sideWidth + 1 - totalPage));
}

$(function () {
    let numberOfItems = $(".list-product .product-item").length;
    let limitPerPage = 20; //How many product list items visible per a page
    let totalPages = Math.ceil(numberOfItems / limitPerPage);
    let paginationSize = 7; //How many page elements visible in the pagination
    let currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".list-product .product-item").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $(".pagination li").slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
                .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
                    .attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".next-page");
        });

        $(".previous-page").toggleClass("disable", currentPage === 1);
        $(".next-page").toggleClass("disable", currentPage === totalPages);
        return true;
    }

    $(".pagination").append(
        $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Prev")),
        $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Next"))
    );

    $(".list-product").show();
    showPage(1);

    $(document).on("click", ".pagination li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(".next-page").on("click", function () {
        return showPage(currentPage + 1);
    });

    $(".previous-page").on("click", function () {
        return showPage(currentPage - 1);
    });
});

export default Home;