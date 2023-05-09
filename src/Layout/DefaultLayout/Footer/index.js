function Footer() {
    return (
        <footer className="footer">
            {/* Main-footer */}
            <div className="main-footer">
                {/* <Bắt Đầu Nội Dung Giới Thiệu */}
                <div className="content about">
                    <div className="brand-footer">
                        <a href="">
                            <img src="/images/logo.png" alt="logo" />
                        </a>
                    </div>
                    <ul classNameName="social-icon">
                        <li><a href=""><i className="fab fa-facebook"></i></a></li>
                        <li><a href=""><i className="fab fa-twitter-square"></i></a></li>
                        <li><a href=""><i className="fab fa-instagram"></i></a></li>
                        <li><a href=""><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
                {/* <Kết Thúc Nội Dung Giới Thiệu
                <Bắt Đầu Nội Dung Đường Dẫn */}
                <div className="content links">
                    <h2>Đường Dẫn</h2>
                    <ul>
                        <li><a href="#">Trang Chủ</a></li>
                        <li><a href="#">Về Chúng Tôi</a></li>
                        <li><a href="#">Thông Tin Liên Lạc</a></li>
                        <li><a href="#">Dịch Vụ</a></li>
                        <li><a href="#">Điều Kiện Chính Sách</a></li>
                    </ul>
                </div>
                {/* Kết Thúc Nội Dung Đường Dẫn */}
                {/* Bắt Đâu Nội Dung Liên Hệ */}
                <div className="content contact">
                    <h2>Thông Tin Liên Hệ</h2>
                    <ul className="info-footer">
                        <li>
                            <span><i className="fas fa-map-marker-alt"></i></span>
                            <span>Đường Số 1<br />
                                Quận Liên Chiểu, Đà Nẵng<br />
                                Việt Nam</span>
                        </li>
                        <li>
                            <span><i className="fa fa-phone"></i></span>
                            <p><a href="#">+84 123 456 789</a>
                                <br />
                                <a href="#">+84 987 654 321</a></p>
                        </li>
                        <li>
                            <span><i className="fa fa-envelope"></i></span>
                            <p><a href="#">diachiemail@gmail.com</a></p>
                        </li>
                        <li>
                            <form className="form">
                                <input type="email" className="form__field" placeholder="Đăng Ký Subscribe Email" />
                                <button type="button" className="btn btn--primary  uppercase">Gửi</button>
                            </form>
                        </li>
                    </ul>
                </div>
                {/* Kết Thúc Nội Dung Liên Hệ */}
            </div>
        </footer>
    )
};
export default Footer;