import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import classNames from "classnames/bind";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
    const [cookies] = useCookies(["accessToken"]);
    const isLoggedIn = !!cookies.accessToken;
    //toggleMenuAccount
    const [isMenuOpen, setMenuOpen] = useState(true);

    function toggleMenu() {
        setMenuOpen(!isMenuOpen);
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
                                <span> Đăng nhập</span>
                            </div>
                            <div className={
                                isMenuOpen ? cx('sub-menu-wrap') : cx('sub-menu-wrap', 'open-menu')
                            } id={cx("subMenu")}>
                                <div className={cx('sub-menu')}>
                                    <Link className={cx('sub-menu-link')} to={`/Info`}>
                                        <p>Tài khoản của tôi</p>
                                    </Link>
                                    <a href="#" className={cx('sub-menu-link')}>
                                        <p>Đơn mua</p>
                                    </a>
                                    <a href="/login.html" className={cx('sub-menu-link')}>
                                        <p>Đăng xuất</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('header__cart', 'header__cart--has-cart')}>
                            <i className={cx('header__cart-icon', 'fas', 'fa-cart-plus')}></i><span className={cx('cart-title')}>Giỏ hàng</span>
                            <div className={cx('header__cart-count')}>4</div>

                            {/* Chưa có sp */}
                            <div className={cx('header__cart-list', 'no-cart')}>
                                <img src="/assets/image/cart/cart.png" className={cx('header__no-cart-img')} />
                                <p className={cx('header__no-cart-text')}>Chưa có sản phẩm</p>
                            </div>

                            {/* Có sp */}
                            <div className={cx('header__cart-list', 'has-cart')}>
                                <h4 className={cx('header__cart-heading')}>Sản phẩm đã chọn</h4>
                                <ul className={cx('header__cart-list-item')}>
                                    <li className={cx('header__cart-item')}>
                                        <img src="/assets/image/buy/hoa-hong-hat-giong-min.png" className={cx('header__cart-item-img')} />
                                        <div className={cx('header__cart-item-info')}>
                                            <div className={cx('header__cart-item-heading')}>
                                                <h3 className={cx('header__cart-item-name')}>Thuốc trừ sâu Batas 25EC 480ml</h3>
                                                <p className={cx('header__cart-item-price')}>110.000 ₫</p>
                                            </div>
                                            <div className={cx('header__cart-item-body')}>
                                                <p className={cx('header__cart-item-number')}>x 2</p>
                                                <div className={cx('header__cart-item-close')}>
                                                    Xoá
                                                    <i className={cx('fas', 'fa-times')}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
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