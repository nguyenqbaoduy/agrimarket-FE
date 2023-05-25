import React, { useEffect, useState, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./Order.module.scss";
import { getUserOrders, api_url } from "../.././../services/getAPI.js";
import { useCookies } from 'react-cookie';

const cx = classNames.bind(styles);

const Order = () => {
    const [order, setOrder] = useState([])
    const [cookies, setCookie, removeCookie] = useCookies([]);

    useEffect(() => {
        const fetchData = async () => {
            const getOrder = await getUserOrders(cookies.accessToken);
            setOrder(getOrder)
        };
        fetchData();
    }, []);
    console.log(order)
    return (
        <div className={cx("order-page")}>
            <div className={cx('container', 'order-container-top')}>
                <div className={cx('order-product')}>
                    Sản phẩm
                </div>
                <div className={cx('order-price')}>
                    Đơn giá
                </div>
                <div className={cx('order-number')}>
                    Số lượng
                </div>
                <div className={cx('order-money')}>
                    Đơn giá
                </div>
                <div className={cx('order-money')}>
                    Tổng tiền
                </div>
                <div className={cx('order-status')}>
                    Tình trạng
                </div>
            </div>
            <div className={cx('container', 'order-top')}>
            {order && order.map((order,index) => (
                <div className={cx('content-order-container')} key={index}>
                    <div className={cx('order-container-mid')}>
                        <div className={cx('order-info')}>
                            <img src={api_url + '/images/product/' + order.ProductImageDefault} className={cx('product-image')} />
                            <span>{order.ProductName}</span>
                        </div>
                        <div className={cx('order-price-product')}>
                            <span>{order.OrderDetailPriceOfProduct}</span>
                        </div>
                        <div className={cx('order-number-product')}>
                            <span>{order.OrderDetailQuantity}</span>
                        </div>
                        <div className={cx('order-money-product')}>
                            <span>{order.OrderDetailPriceOfProduct}</span>
                        </div>
                        <div className={cx('order-money-product')}>
                            <span>{order.OrderDetailSumPrice}</span>
                        </div>
                        <div className={cx('order-status-product')}>
                            <span>{order.Status}</span>
                        </div>
                        <div className={cx('btn')}>
                            <button className={cx('btn-confirm')}>Xác nhận đơn hàng</button>
                        </div>
                    </div>
                </div>
            ))};
            </div>
        </div>
    )
}
export default Order;
