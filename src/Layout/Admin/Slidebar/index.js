import React from "react";
import classNames from "classnames/bind";
import styles from "./Slidebar.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
export default function Slidebar() {
    return (
        <div className={cx('content-left')}>
            <section id={cx("sidebar")}>
                <ul className={cx('side-menu')}>
                    <li>
                    <Link to={"/Admin"} className={cx('active')}><i className={cx('fa-solid', 'fa-gauge')}></i>DashBoard</Link>
                    </li>
                    {/* <li className={cx('divider')}> Main</li> */}
                    <li>
                        <a href="#"><i className={cx('fa-solid', 'fa-box')}></i>Products</a>
                    </li>
                    <li>
                        <a href="#"><i className={cx('fa-solid', 'fa-file-invoice')}></i>Orders</a>
                    </li>
                    <li>
                        <Link to={"/ManagerAccount"}><i className={cx('fa-solid', 'fa-user')}></i>Accounts</Link>
                    </li>
                    <li>
                        <a href="#"><i className={cx('fa-solid','fa-newspaper')}></i>News And Articles</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}