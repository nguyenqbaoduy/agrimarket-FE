import { } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { api_url, checkout } from "../../services/getAPI.js";
import { Link, useParams, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
const cx = classNames.bind(styles);
const Checkout = () => {
    const location = useLocation();
    const items = location.state;
    console.log(items)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={cx('container')} id="">
            <div className={cx('item-flex')}>
                {/* Checkout Section */}
                <section className={cx('checkout')}>
                    <h2 className={cx('section-headingpm')}>Payment Detail</h2>
                    <div className={cx('payment-form')}>
                        <div className={cx('payment-method')}>
                            <button className={cx('method', 'selected')}>
                                <ion-icon name="card"></ion-icon>
                                <span>Credit Card</span>
                                <ion-icon className={cx('checkmark', 'fill')} name="checkmark-circle"></ion-icon>
                            </button>
                            <button className={cx('method')}>
                                <ion-icon name="logo-paypal"></ion-icon>
                                <span>Paypal</span>
                                <ion-icon className={cx('checkmark')} name="checkmark-circle-outline"></ion-icon>
                            </button>
                        </div>
                        <form action="#">
                            <div className={cx('cardholder-name')}>
                                <label htmlFor="cardholder-name" className={cx('label-default')}>Cardholder name</label>
                                <input type="text" name="cardholder-name" id="cardholder-name" className={cx('input-default')} />
                            </div>
                            <div className={cx('card-number')}>
                                <label htmlFor="card-number" className={cx('label-default')}>Card number</label>
                                <input type="text" name="card-number" id="card-number" className={cx('input-default')} />
                            </div>
                            <div className={cx('input-flex')}>
                                <div className={cx('expire-date')}>
                                    <label htmlFor="expire-date" className={cx('label-default')}>Expiration date</label>
                                    <div className={cx('input-flex')}>
                                        <input type="number" name="day" id="expire-date" placeholder="31" min="1" max="31" className={cx('input-default')} />
                                        <input type="number" name="month" id="expire-date" placeholder="12" min="1" max="12" className={cx('input-default')} />
                                    </div>
                                </div>
                                <div className={cx('cvv')}>
                                    <label htmlFor="ccv" className={cx('label-default')}>CVV</label>
                                    <input type="text" name="ccv" id="ccv" className={cx('input-default')} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <button className={cx('btn1', 'btn-primary')}>
                        <b>Pay</b> $ <span id="payAmount">2.15</span>
                    </button>
                </section>
                {/* Cart Section */}
                <section className={cx('cart')}>
                    <div className={cx('cart-item-box')}>
                        <h2 className={cx('section-headingpm')}>Order Summery</h2>
                        {items && items.map((item, index) => (
                            <div className={cx('product-card')}>
                                <div className={cx('card')}>
                                    <div className={cx('img-box')}>
                                        <img src={api_url + "/images/product/"+item.ProductImageDefault} alt="" className={cx('product-img')} />
                                    </div>
                                    <div className={cx('detail')}>
                                        <h4 className={cx('product-name')}>{item.ProductName}</h4>
                                        {/* <div className={cx('wrapper')}> */}
                                        <div className={cx('product-qty')}>
                                            <span id="quantity">Số lượng: {item.Quantity}</span>
                                        </div>
                                        <div className={cx('price')}>
                                            $<span id="price">{item.ProductPrice}</span>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className={cx('wrapper')}> */}
                    <div className={cx('discount-token')}>
                        <label htmlFor="discount-token" className={cx('label-default')}>Gift card/Discount code</label>
                        <div className={cx('wrapper-flex')}>
                            <input type="text" name="discount-token" id="discount-token" className={cx('input-default')} />
                            <button className={cx('btn1', 'btn-outline')}>Apply</button>
                        </div>
                    </div>
                    <div className={cx('amount')}>
                        <div className={cx('subtotal')}>
                            <span>Subtutol</span> <span>$ <span id="subtotal">2.85</span></span>
                        </div>
                        <div className={cx('tax')}>
                            <span>Tax</span> <span>$ <span id="tax">2.85</span></span>
                        </div>
                        <div className={cx('shipping')}>
                            <span>Shipping</span> <span>$ <span id="shipping">2.85</span></span>
                        </div>
                        <div className={cx('total')}>
                            <span>Total</span> <span>$ <span id="total">2.15</span></span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};
export default Checkout;
