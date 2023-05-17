import React, { useEffect, useState } from "react";
import { getAllProduct, getAllCategory } from "../../services/getAPI.js";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useCookies } from 'react-cookie';
import classNames from "classnames/bind";

import styles from "./Cart.module.scss";

const cx = classNames.bind(styles);

const Cart = () => {
    return (
        <div className={cx("cart-page")}>
            <div className={cx('container', 'cart-container-top')}>
                <div className={cx('cart-check')}>
                    <input type="checkbox" name="btn" id={cx('checkAll')} />
                </div>
                <div className={cx('cart-product')}>
                    Sản phẩm
                </div>
                <div className={cx('cart-price')}>
                    Đơn giá
                </div>
                <div className={cx('cart-number')}>
                    Số lượng
                </div>
                <div className={cx('cart-money')}>
                    Số tiền
                </div>
            </div>
            <div className={cx('container', 'cart-top')}>
                <div className={cx('content-cart-container')}>
                    <div className={cx('cart-container-mid')}>
                        <div className={cx('cart-check')}>
                            <input type="checkbox" name="btn" />
                        </div>
                        <div className={cx('cart-product', 'cart-mid-img')}>
                            <a href="productDetail.html"><img src="./assets/image/buy/tts.png" alt="" className={cx('product-image')} /></a>
                            <div className={cx('cart-title')}>
                                <a href="/user/productDetail.html"><h4 className={cx('product-title')}>Thuốc trừ sâu Batas 25EC</h4></a>
                                <div className={cx('cart-size', 'product-size')}>
                                    Size:
                                </div>
                            </div>
                        </div>
                        <div className={cx('art-price', 'cart-mid-price', 'product-price')}>
                            ₫ 90.000
                        </div>
                        <div className={cx('cart-number', 'cart-mid-number')}>
                            <div className={cx('buttons_added')}>
                                <input className={cx('minus', 'is-form')} type="button" value="-" />
                                <input aria-label="quantity" className={cx('input-qty')} max="1000" min="1" name="" type="number" value="1" />
                                <input className={cx('plus', 'is-form')} type="button" value="+" />
                            </div>
                        </div>
                        <div className={cx('cart-mid-money', 'product-total-price')}>
                            ₫ 90.000
                        </div>
                        <div className={cx('cart-delete-container')}>
                            <button id="btn-delete">Xóa hàng</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('container', 'cart-buy')}>
                <div className={cx('cart-buy-container')}>
                    <a href="bill.html"><button className={cx('', 'btn', 'third')}>Mua hàng</button></a>
                </div>
            </div>
            <div className={cx('container', 'middle-content')}>
                <h4>Sản phẩm tương tự</h4>
            </div>
            <div className={cx('bound', 'slide-container')}>
                <div className={cx('slide-sliders', 'product__bottom')}>
                </div>
                <div className={cx('content__bottom')}>
                    <div className={cx('content-number')} style={{ display: 'flex' }}>
                        <button className={cx('btn-prev', 'btn-active')}>
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </button>
                        <div className={cx('content-number-page')}>
                            {/* <button className={cx('btn-number', 'active')}>1</button> */}
                        </div>
                        <button className={cx('btn-next')}>
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Cart;
