import React from 'react';
import { Link } from "react-router-dom";

import classNames from "classnames/bind";

import styles from "./Slidebar.module.scss";

const cx = classNames.bind(styles);

function Slidebar() {
    return (
        <div className={cx('main-menu-header')}>
            <div id={cx('menu')}>
                <ul>
                    <li><Link to ="/">Trang chủ</Link></li>
                    <li><Link to = "/News">Tin tức và bài viết</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Slidebar;
