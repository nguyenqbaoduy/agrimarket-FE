import React from 'react';

import classNames from "classnames/bind";

import styles from "./Slidebar.module.scss";

const cx = classNames.bind(styles);

function Slidebar() {
    return (
        <div className={cx('main-menu-header')}>
            <div id={cx('menu')}>
                <ul>
                    <li><a href="/">Trang chủ</a></li>
                    <li><a href="/">Tin tức và bài viết</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Slidebar;
