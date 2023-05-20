import Header from "./Header";
import SideBar from "./Home/SideBar";
import classNames from "classnames/bind";

import styles from "./Seller.module.scss";

const cx = classNames.bind(styles);

function Seller({children}) {
  return (
    <div className="main-seller">
      <Header />
      <div className={cx("wrapper")} style={{ display: "flex" }}>
        <SideBar />
        {children}
      </div>
    </div>
  );
}

export default Seller;
