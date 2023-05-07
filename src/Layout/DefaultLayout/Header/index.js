import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../public/images/logo.png';

function Header() {
    return (
        <div>
            <div className="toolbar-scroll">
                <h5>
                    MAY THE 4TH FLASH SALE! $15 OFF BACKPACK FOGGER! USE CODE PETRAFORCE AT CHECKOUT! 6PM-9PM ONLY!
                </h5>
            </div>
            <div className="main-header both-sides" id="myHeader">
                <div className="brand">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="search-wrapper">
                    <div className="search-input-wrap">
                        <input type="search" className="search-input" placeholder="Search" />
                        <div className="search-history">
                            <ul className="search-history-list">
                                <li className="search-history-item">
                                    <a href="/">Combo 30 điểm đại học khối A</a>
                                </li>
                                {/* Add more search history items */}
                            </ul>
                        </div>
                    </div>
                    <button className="fa-solid fa-magnifying-glass"></button>
                </div>
                <div className="menu-item">
                    <div className="like">
                        <div className="like-btn">
                            <span className="far fa-heart"></span>
                            <span>Yêu thích</span>
                        </div>
                    </div>
                    <div className="account" 
                    // onClick={toggleMenu}
                    >
                        <div className="account-btn">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Đăng nhập</span>
                        </div>
                        <div className="sub-menu-wrap" id="subMenu">
                            <div className="sub-menu">
                                <a href="info.html" className="sub-menu-link">
                                    <p>Tài khoản của tôi</p>
                                </a>
                                {/* Add more submenu links */}
                            </div>
                        </div>
                    </div>
                    <div className="header__cart header__cart--has-cart">
                        <FontAwesomeIcon icon={faCartPlus} className="header__cart-icon" />
                        <span className="cart-title">Giỏ hàng</span>
                        <div className="header__cart-count">4</div>
                        {/* Add cart items */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;