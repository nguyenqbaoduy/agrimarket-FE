import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
function Header() {
  // toggleMenuAccount
  const navigate = useNavigate();

  let subMenu = document.getElementById("subMenu");

  function toggleMenu() {
    // subMenu.classList.toggle("open-menu");
    navigate("/login");
  }
  return (
    <div id='HEADER'>
      <div className={styles["toolbar-scroll"]}>
        <h5></h5>
      </div>
      <div className={`${styles["main-header"]} ${styles["both-sides"]}`} id="myHeader">
        <div className={styles.brand}>
          <a href="/">
            <img src='/images/logo.png' alt="logo" />
          </a>
        </div>
        <div className={styles["search-wrapper"]}>
          <div className={styles["search-input-wrap"]}>
            <input type="search" className={styles["search-input"]} placeholder="Search" />
            <div className={styles["search-history"]}>
              <ul className={styles["search-history-list"]}>
                <li className={styles["search-history-item"]}>
                  <a href="/">Combo 30 điểm đại học khối A</a>
                </li>
                {/* Add more search history items */}
              </ul>
            </div>
          </div>
          <button className="fa-solid fa-magnifying-glass"></button>
        </div>
        <div className={styles["menu-item"]}>
          <div className="like">
            <div className="like-btn">
              <span className="far fa-heart"></span>
              <span> Yêu thích</span>
            </div>
          </div>
          <div className={styles.account} onClick={toggleMenu}>
            <div className={styles["account-btn"]}>
              <FontAwesomeIcon icon={faUser} />
              <span> Đăng nhập</span>
            </div>
            <div className={styles["sub-menu-wrap"]} id="subMenu">
              <div className={styles["sub-menu"]}>
                <a href="info.html" className={styles["sub-menu-link"]}>
                  <p>Tài khoản của tôi</p>
                </a>
                <a href="#" className={styles["sub-menu-link"]}>
                  <p>Đơn mua</p>
                </a>
                <a href="/login.html" className={styles["sub-menu-link"]}>
                  <p>Đăng xuất</p>
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles["header__cart"]} ${styles["header__cart--has-cart"]}`}>
            <FontAwesomeIcon icon={faCartPlus} className={styles["header__cart-icon"]} />
            <span className={styles["cart-title"]}>Giỏ hàng</span>
            <div className={styles["header__cart-count"]}>4</div>
            {/* Add cart items */}
          </div>
        </div>
      </div>
    </div>
  );
}



export default Header;
