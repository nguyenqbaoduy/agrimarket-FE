import { Link } from "react-router-dom";
import styles from "./DashBoard.module.scss";
import classNames from "classnames/bind";
import { render } from "@testing-library/react";
import ChartPage from "./Chart";
import React, { useEffect } from 'react';

const cx = classNames.bind(styles);



function DashBoard() {
  // PROGRESSBAR
  useEffect(() => {
    const allProgress = document.querySelectorAll('.content-dashboard .card .progress');
    allProgress.forEach(item => {
      item.style.setProperty('--value', item.dataset.value);
    });
  }, []);
  
  return (
    <div className={cx("content-right")}>
      <div className={cx("content-dashboard")}>
        <h1 className={cx("title")}>Dashboard</h1>
        <ul className={cx("breadcrumbs")} >
          <li className={cx('name-page')}>
            <Link to="/Seller" className={cx('name-page-item')}>Trang chủ</Link>
          </li>
          <li className={cx("divider")} >/</li>
          <li className={cx('name-page')}>
            <Link to="/Seller" className={cx('name-page-item')} id={cx("active")} >
              Dashboard
            </Link>
          </li>
        </ul>
        <div className={cx("info-data")} >
          <div className={cx("card")} >
            <div className={cx("head")} >
              <div>
                <h2 className={cx('card-parameter')}>1500</h2>
                <p className={cx('card-titlle')}>Traffic</p>
              </div>
              <i className={cx("bx bx-trending-up icon")} ></i>
            </div>
            <span className={cx("progress")}  data-value="40%"></span>
            <span className={cx("label")} >40%</span>
          </div>
          <div className={cx("card")} >
            <div className={cx("head")} >
              <div>
                <h2 className={cx('card-parameter')}>234</h2>
                <p className={cx('card-titlle')}>Sales</p>
              </div>
              <i className={cx("bx bx-trending-down icon down")} ></i>
            </div>
            <span className={cx("progress")}  data-value="60%"></span>
            <span className={cx("label")} >60%</span>
          </div>
          <div className={cx("card")} >
            <div className={cx("head")} >
              <div>
                <h2 className={cx('card-parameter')}>465</h2>
                <p className={cx('card-titlle')}>Pageviews</p>
              </div>
              <i className={cx("bx bx-trending-up icon")} ></i>
            </div>
            <span className={cx("progress")}  data-value="40%"></span>
            <span className={cx("label")} >30%</span>
          </div>
          <div className={cx("card")} >
            <div className={cx("head")} >
              <div>
                <h2 className={cx('card-parameter')}>235</h2>
                <p className={cx('card-titlle')}>Visitors</p>
              </div>
              <i className={cx("bx bx-trending-up icon")} ></i>
            </div>
            <span className={cx("progress")}  data-value="80%"></span>
            <span className={cx("label")} >80%</span>
          </div>
        </div>
        <div className={cx("data")} >
          <div className={cx("content-data")} >
            <div className={cx("chart")} >
              {/* <div id={cx("chart")}></div> */}
              <ChartPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
