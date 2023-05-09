import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <div className={cx("content-left")}>
      <section id="sidebar">
        <ul className={cx("side-menu")}>
          <li>
            <a href="#" className={cx("active")}>
              <i className="fa-solid fa-chart-line"></i>DashBoard
            </a>
          </li>
          <li className={cx("divider")}> Main</li>
          <li>
            <a href="#">
              <i className={cx("fa-solid fa-chart-line")}></i>Vận Chuyển
            </a>
          </li>
          <li>
            <a href="#">
              <i className={cx("fa-solid fa-chart-line")}></i>Quản Lý Đơn Hàng
            </a>
          </li>
          <li>
            <a href="#">
              <i className={cx("fa-solid fa-volleyball")}></i>Quản Lý Sản Phẩm
              <i className={cx("fa-solid fa-chevron-right icon-right")}></i>
            </a>
            <ul className={cx("side-dropdown")}>
              <li>
                <a href="./allProduct.html">
                  <i className={cx("fa-solid fa-chart-line")}></i>Tất Cả Sản Phẩm
                </a>
                <a href="./addProduct.html">
                  <i className={cx("fa-solid fa-chart-line")}></i>Thêm Sản Phẩm
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SideBar;
