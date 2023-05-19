import React from "react";
import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
export default function DashBoardAdmin() {
    return(
    <div className={cx('content-right')}>
        <main>
            <h1 className={cx('title')}>Dashboard</h1>
            <ul className={cx('breadcrumbs')}>
                <li><a href="#">Trang chủ</a></li>
                <li className={cx('divider')}>/</li>
                <li><a href="#" className={cx('active')}>Dashboard</a></li>
            </ul>
            <div className={cx('info-data')}>
                <div className={cx('card')}>
                    <div className={cx('head')}>
                        <div>
                            <h2 className={cx('')}>5012</h2>
                            <p className={cx('')}>Sales</p>
                        </div>
                        <i className={cx('bx bx-trending-up icon')}></i>
                    </div>
                    <span className={cx('progress')} data-value="80%"></span>
                    <span className={cx('label')}>80%</span>
                </div>
                <div className={cx('card')}>
                    <div className={cx('head')}>
                        <div>
                            <h2 className={cx('')}>54.209.163 VND</h2>
                            <p className={cx('')}>Purchases</p>
                        </div>
                        <i className={cx('bx bx-trending-down icon down')}></i>
                    </div>
                    <span className={cx('progress')} data-value="60%"></span>
                    <span className={cx('label')}>60%</span>
                </div>
                <div className={cx('card')}>
                    <div className={cx('head')}>
                        <div>
                            <h2>4500</h2>
                            <p>Orders</p>
                        </div>
                        <i className={cx('bx bx-trending-up icon')}></i>
                    </div>
                    <span className={cx('progress')} data-value="40%"></span>
                    <span className={cx('label')}>30%</span>
                </div>
            </div>
            <div className={cx('info-data1')}>

                <div className={cx('col-div-12')}>
                    <div className={cx('box-8')}>
                        <div className={cx('content-box')}>
                            <p>Top sales shop</p>
                            <br />
                            <table>
                                <tr>
                                    <th>Shop</th>
                                    <th>Sales</th>
                                    <th>Total</th>
                                </tr>
                                <tr>
                                    <td>AgriTP</td>
                                    <td>2424</td>
                                    <td>22.542.532 VND</td>
                                </tr>
                                <tr>
                                    <td>NongNghiepSach</td>
                                    <td>1823</td>
                                    <td>20.123.538 VND</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
    )
};