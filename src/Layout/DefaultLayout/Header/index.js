import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { authentication, getCartDrawerContainer } from "../../../services/getAPI";
import { useNavigate } from "react-router-dom";

import classNames from "classnames/bind";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);


function Header() {
    const navigate = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies([]);
    const [username, setUserName] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Thiết lập mặc định chưa đăng nhập
    const [hasCart, setHasCart] = useState(true); // Thiết lập mặc định chưa có sản phẩm
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log("header:" + cookies.accessToken, cookies.refreshToken)
        const fetchData = async () => {
            try {
                // Kiểm tra đã login chưa
                const getUser = await authentication(cookies.accessToken, cookies.refreshToken);
                if (getUser.status == '200') {
                    setUserName(getUser.fullname)
                    console.log(getUser);
                    setIsLoggedIn(true)
                    // Kiểm tra có sản phẩm trong giỏ hàng không
                    const getCartItem = await getCartDrawerContainer(cookies.accessToken);
                    console.log(getCartItem);
                    setCart(getCartItem);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    //toggleMenuAccount
    const [isMenuOpen, setMenuOpen] = useState(true);

    function toggleMenu() {
        console.log(isLoggedIn)
        if (isLoggedIn == true) {
            setMenuOpen(!isMenuOpen);
        }
        else
            navigate("/login");
    }

    function toogleLogOut() {
        removeCookie('accessToken', { path: "/" })
        removeCookie('refreshToken', { path: "/" })
        setIsLoggedIn(false);
    }
    return (
        <div className={cx('header')}>
            {/* <div className={cx('toolbar-scroll')}>
                <h5>
                </h5>
            </div> */}
            <div className={cx('main-header', 'both-sides')} id={cx("myHeader")}>
                <div className={cx('brand')}>
                    <a href="/">
                        <img src='/images/logo.png' alt="logo" />
                    </a>
                </div>
                <div className={cx('search-wrapper')}>
                    <div className={cx('search-input-wrap')}>
                        <input type="search" className={cx('search-input')} placeholder="Search" />
                        <div className={cx('search-history')}>
                            <ul className={cx('search-history-list')}>
                                <li className={cx('search-history-item')}>
                                    <a href="/">Combo 30 điểm đại học khối A</a>
                                </li>
                                {/* Add more search history items */}
                            </ul>
                        </div>
                    </div>
                    <button className={cx('fa-solid', 'fa-magnifying-glass')}></button>
                </div>
                <div className={cx('menu-item')}>
                    <div className={cx('like')}>
                        <div className={cx('like-btn')}>
                            <span className={cx('far', 'fa-heart')}></span>
                            <span> Yêu thích</span>
                        </div>
                    </div>
                    <div className={cx('account')}
                        onClick={toggleMenu}
                    >
                        <div className={cx('account-btn')}>
                            <FontAwesomeIcon icon={faUser} />
                            <span>{isLoggedIn ? ' ' + username : ' Đăng nhập'}</span>
                        </div>
                        <div className={
                            isMenuOpen ? cx('sub-menu-wrap') : cx('sub-menu-wrap', 'open-menu')
                        } id={cx("subMenu")}>
                            <div className={cx('sub-menu')}>
                                <Link className={cx('sub-menu-link')} to={`/Info`}>
                                    <p>Tài khoản của tôi</p>
                                </Link>
                                <a className={cx('sub-menu-link')}>
                                    <p>Đơn mua</p>
                                </a>
                                <a className={cx('sub-menu-link')}
                                    onClick={toogleLogOut}
                                >
                                    <p>Đăng xuất</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={cx('header__cart', {
                        'header__cart--has-cart': hasCart,
                        'header__cart--no-cart': !hasCart
                    })}>

                        <i className={cx('header__cart-icon', 'fas', 'fa-cart-plus')}></i><span className={cx('cart-title')}>Giỏ hàng</span>
                        <div className={cx('header__cart-count')}>4</div>

                        {/* Chưa có sp */}
                        <div className={cx('header__cart-list', 'no-cart')}>
                            <p className={cx('header__no-cart-text')}>Chưa có sản phẩm</p>
                            <div className={cx('header__cart-footer')}>
                                <a href="#" className={cx('btn-list', 'header__cart-see-cart')}>Xem giỏ hàng</a>
                            </div>
                        </div>

                        {/* Có sp */}
                        <div className={cx('header__cart-list', 'has-cart')}>
                            <h4 className={cx('header__cart-heading')}>Sản phẩm đã chọn</h4>
                            <ul className={cx('header__cart-list-item')}>
                                {cart.map((product) => (
                                    <li key={product.id} className={cx('header__cart-item')}>
                                        <img src={"/images/product/" + product.ProductImageDefault} className={cx('header__cart-item-img')} alt={product.ProductName} />
                                        <div className={cx('header__cart-item-info')}>
                                            <div className={cx('header__cart-item-heading')}>
                                                <h3 className={cx('header__cart-item-name')}>{product.ProductName}</h3>
                                                <p className={cx('header__cart-item-price')}>{product.ProductPrice}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className={cx('header__cart-footer')}>
                                <a href="#" className={cx('btn-list', 'header__cart-see-cart')}>Xem giỏ hàng</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;