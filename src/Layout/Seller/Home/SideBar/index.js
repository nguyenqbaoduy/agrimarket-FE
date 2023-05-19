import { Link } from "react-router-dom";
import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
import React, { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function SideBar() {
  const [hide, setHide] = useState(false);
  const [allDropdown, setAllDropdown] = useState(null);
  const [allSideDivider, setAllSideDivider] = useState(null);

  useEffect(() => {
    setAllDropdown(document.querySelectorAll('#sidebar .side-dropdown'));
    setAllSideDivider(document.querySelectorAll('#sidebar .divider'));
  }, []);

  const handleMouseEnter = () => {
    if (hide && allDropdown && allSideDivider) {
      allDropdown.forEach((item) => {
        const a = item.parentElement.querySelector('Link:first-child');
        a.classList.remove('active');
        item.classList.remove('show');
      });
      allSideDivider.forEach((item) => {
        item.textContent = item.dataset.text;
      });
    }
  };

  const handleMouseLeave = () => {
    if (hide && allDropdown && allSideDivider) {
      allDropdown.forEach((item) => {
        const a = item.parentElement.querySelector('Link:first-child');
        a.classList.remove('active');
        item.classList.remove('show');
      });
      allSideDivider.forEach((item) => {
        item.textContent = '-';
      });
    }
  };

  const handleHide = () => {
    setHide(!hide);
    if (!hide && allSideDivider) {
      allSideDivider.forEach((item) => {
        item.textContent = '-';
      });
    } else if (allSideDivider) {
      allSideDivider.forEach((item) => {
        item.textContent = item.dataset.text;
      });
    }
  };

  return (
    <div className={cx("content-left")}>
      <div id={cx("sidebar")} className={hide ? 'hide' : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ul className={cx("side-menu")}>
          <li className={cx("side-menu-detail")}>
            <Link to={'/Seller'} className={cx("link-dashboard")} id={cx("active")}>
              <i className="fa-solid fa-chart-line"></i>DashBoard
            </Link>
          </li>
          {/* <li className={cx("divider")}> Main</li> */}
          <li className={cx("side-menu-detail")}>
            <Link to={'/Seller/Transport'} className={cx("link-dashboard")}>
              <i className={cx("fa-solid fa-chart-line")}></i>Vận Chuyển
            </Link>
          </li>
          <li className={cx("side-menu-detail")}>
            <Link to={'/Seller/Order-management'} className={cx("link-dashboard")}>
              <i className={cx("fa-solid fa-chart-line")}></i>Quản Lý Đơn Hàng
            </Link>
          </li>
          <li className={cx("side-menu-detail")}>
            <Link to={'/Seller/ManageProduct'} className={cx("link-dashboard")} onClick={handleHide}>
              <i className={cx("fa-solid fa-volleyball")}></i>Quản Lý Sản Phẩm
              <i className={cx("fa-solid fa-chevron-right icon-right")}></i>
            </Link>
            <ul className={cx("side-dropdown")}>
              <li>
                <Link to={'/Seller/01/ProductManager'} className={cx("link-dashboard")}>
                  <i className={cx("fa-solid fa-chart-line")}></i>Tất Cả Sản Phẩm
                </Link>
                <Link to={'/Seller/01/AddProcut'} className={cx("link-dashboard")}>
                  <i className={cx("fa-solid fa-chart-line")}></i>Thêm Sản Phẩm
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
