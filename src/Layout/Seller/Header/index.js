import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
export default function index() {
  return (
    <header className={cx("main-header")}>
      <div className={cx("header-content")}>
        <Link to="#">
          <img src="./assets/image/logo/logo.png" alt="" />
        </Link>
        <div className={cx("box-content")}>
          <Link to="#">Trang chủ</Link>
          <span>{">"}</span>
          <Link to="#">Dashboard</Link>
        </div>
        <div className={cx("content-nav")}>
          <nav>
            <Link to="#" className={cx("nav-link")}>
              <i className={cx("fa-sharp fa-solid fa-bell icon")}></i>
              <span className={cx("badge")}>5</span>
            </Link>
            <span className={cx("divider")}></span>
            <div className={cx("profile")}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                alt=""
              />
              <ul className={cx("profile-link")}>
                <li>
                  <Link to="#">
                    <i className={cx("fa-solid fa-circle-user icon")}></i>Hồ sơ
                    cá nhân shop
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className={cx("fa-solid fa-right-from-bracket")}></i>Đăng
                    xuất
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
