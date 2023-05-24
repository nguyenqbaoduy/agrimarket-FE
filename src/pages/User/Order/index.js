import React from 'react'
import classNames from "classnames/bind";
import styles from "./Order.module.scss";

const cx = classNames.bind(styles);

const Order = () => {
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
                    Số tiền
                </div>
                <div className={cx('order-status')}>
                    Tình trạng
                </div>
            </div>
            <div className={cx('container', 'order-top')}>
                <div className={cx('content-order-container')}>
                    <div className={cx('order-container-mid')}>
                        <div className={cx('order-info')}>
                            <img src="" alt="" className={cx('product-image')} />
                            <span>Tên sản phẩm</span>
                        </div>
                        <div className={cx('order-price-product')}>
                            <span>100</span>
                        </div>
                        <div className={cx('order-number-product')}>
                            <span>2</span>
                        </div>
                        <div className={cx('order-money-product')}>
                            <span>200</span>
                        </div>
                        <div className={cx('order-status-product')}>
                            <span>Đã giao</span>
                        </div>
                        <div className={cx('btn')}>
                            <button className={cx('btn-confirm')}>Xác nhận đơn hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Order;
