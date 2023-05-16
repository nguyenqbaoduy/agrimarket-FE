import { Link } from "react-router-dom";
import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <div className={cx("content-left")}>
      <div id={cx("sidebar")}>
        <ul className={cx("side-menu")}>
          <li className={cx("side-menu-detail")}>
            <Link href="#" className={cx("active")}>
              <i className="fa-solid fa-chart-line"></i>DashBoard
            </Link>
          </li>
          <li className={cx("divider")}> Main</li>
          <li className={cx("side-menu-detail")}>
            <Link href="#">
              <i className={cx("fa-solid fa-chart-line")}></i>Vận Chuyển
            </Link>
          </li>
          <li className={cx("side-menu-detail")}>
            <Link href="#">
              <i className={cx("fa-solid fa-chart-line")}></i>Quản Lý Đơn Hàng
            </Link>
          </li>
          <li className={cx("side-menu-detail")}>
            <Link href="#">
              <i className={cx("fa-solid fa-volleyball")}></i>Quản Lý Sản Phẩm
              <i className={cx("fa-solid fa-chevron-right icon-right")}></i>
            </Link>
            <ul className={cx("side-dropdown")}>
              <li>
                <Link href="./allProduct.html">
                  <i className={cx("fa-solid fa-chart-line")}></i>Tất Cả Sản Phẩm
                </Link>
                <Link href="./addProduct.html">
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
