import React, { useEffect, useState, useContext } from "react";
import { api_url, getCart, changeQuantity, deteleCartItem } from "../../services/getAPI.js";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useCookies } from 'react-cookie';
import classNames from "classnames/bind";
import { HeaderContext } from '../../Layout/DefaultLayout'
import styles from "./Cart.module.scss";

const cx = classNames.bind(styles);

const Cart = () => {
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const [cart, setCart] = useState([])
    const { triggerHeaderReload } = useContext(HeaderContext);

    useEffect(() => {
        const fetchData = async () => {
            const getcart = await getCart(cookies.accessToken);
            setCart(getcart)
        };
        fetchData();
    }, []);

    const handleIncreaseQuantity = async (index) => {
        const updatedCart = [...cart];
        updatedCart[index].Quantity += 1;
        setCart(updatedCart);
        const data = {
            CartItemID: updatedCart[index].CartItemID,
            ChangeAmount: updatedCart[index].Quantity,
        }
        const status = await changeQuantity(cookies.accessToken, data);
        console.log(status)
    };
    const handleDecreaseQuantity = async (index) => {
        const updatedCart = [...cart];
        updatedCart[index].Quantity -= 1;
        setCart(updatedCart);
        const data = {
            CartItemID: updatedCart[index].CartItemID,
            ChangeAmount: updatedCart[index].Quantity,
        }
        const status = await changeQuantity(cookies.accessToken, data);
        console.log(status)

    };
    const handleQuantityChange = async (event, index) => {
        const value = event.target.value;
        const updatedCart = [...cart];
        updatedCart[index].Quantity = parseInt(value);
        setCart(updatedCart);
        const data = {
            CartItemID: updatedCart[index].CartItemID,
            ChangeAmount: updatedCart[index].Quantity,
        }
        const status = await changeQuantity(cookies.accessToken, data);
        console.log(status)
    };
    const handleDeleteItem = async (index) => {
        const updatedCart = [...cart];
        const data = {
            CartItemID: updatedCart[index].CartItemID,
        }
        const status = await deteleCartItem(cookies.accessToken, data);
        console.log(status)
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        triggerHeaderReload();

      };
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
            {cart && cart.map((cart, index) => (
                <div className={cx('container', 'cart-top')} key={index}>
                    <div className={cx('content-cart-container')}>
                        <div className={cx('cart-container-mid')}>
                            <div className={cx('cart-check')}>
                                <input type="checkbox" name="btn" />
                            </div>
                            <div className={cx('cart-product', 'cart-mid-img')}>
                                <a href="productDetail.html"><img src={api_url+"/images/product/" + cart.ProductImageDefault} alt="" className={cx('product-image')} /></a>
                                <div className={cx('cart-title')}>
                                    <a href="/user/productDetail.html"><h4 className={cx('product-title')}>{cart.ProductName}</h4></a>
                                    {/* <div className={cx('cart-size', 'product-size')}>
                                        Size:
                                    </div> */}
                                </div>
                            </div>
                            <div className={cx('art-price', 'cart-mid-price', 'product-price')}>
                                ₫ {cart.ProductPrice}
                            </div>
                            <div className={cx('cart-number', 'cart-mid-number')}>
                                <div className={cx('buttons_added')}>
                                    <input className={cx('minus', 'is-form')} type='button' defaultValue='-' onClick={() => handleDecreaseQuantity(index)} />
                                    <input
                                        aria-label='quantity'
                                        className={cx('input-qty', 'product-quantity')}
                                        max='1000'
                                        min='1'
                                        name=''
                                        type='number'
                                        value={cart.Quantity}
                                        onChange={(event) => handleQuantityChange(event, index)}
                                    />
                                    <input className={cx('plus', 'is-form')} type='button' defaultValue='+' onClick={() => handleIncreaseQuantity(index)} />
                                </div>
                            </div>
                            <div className={cx('cart-mid-money', 'product-total-price')}>
                                ₫ {cart.SumPrice}
                            </div>
                            <div className={cx('cart-delete-container')}>
                                <button id="btn-delete" onClick={() => handleDeleteItem(index)}>Xóa hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))};
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
