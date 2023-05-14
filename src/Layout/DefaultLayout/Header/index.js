import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import classNames from "classnames/bind";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
    //toggleMenuAccount
    const [isMenuOpen, setMenuOpen] = useState(true);

    function toggleMenu() {
      setMenuOpen(!isMenuOpen);
    }
    return (
        <div>
            <div className={cx('toolbar-scroll')}>
                <h5>
                </h5>
            </div>
            <div className={cx('main-header', 'both-sides')} id="myHeader">
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
                    isMenuOpen ? cx('sub-menu-wrap') : cx('sub-menu-wrap','open-menu')
                    } id="subMenu">
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
                        <FontAwesomeIcon icon={faCartPlus} className={cx('header__cart-icon')} />
                        <span className={cx('cart-title')}>Giỏ hàng</span>
                        <div className={cx('header__cart-count')}>4</div>
                        {/* Add cart items */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;