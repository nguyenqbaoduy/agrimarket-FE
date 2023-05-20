import Slidebar from "./Slidebar";
import Header from "./Header";
import React from "react";
import classNames from "classnames/bind";
import styles from "./Admin.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Admin({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("containerds")}>
        <Slidebar />
        {children}
      </div>
    </div>

  );
}

export default Admin;
