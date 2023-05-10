import Helmet from 'react-helmet';
const Login = () => {
    const css = require('./login.css').toString();

    return (
        <>
            <Helmet>
                <style>
                    {css}
                </style>
            </Helmet>
            <head>
                <title>Đăng nhập</title>
            </head>
            <body>
                <div className="cont">
                    <div className="form sign-in">
                        <h2 className="signin">Đăng Nhập</h2>
                        <label>
                            <span className="username-name">Tên đăng nhập</span>
                            <input type="text" name="username" id="login-username" />
                        </label>
                        <label>
                            <span className="password-pw">Mật Khẩu</span>
                            <input type="password" name="password" id="login-password" />
                            <ion-icon className="eye-pw" name="eye-off-outline"></ion-icon>
                        </label>
                        <button className="submit" type="button" id="btn-login" onclick="sendLogin()">Đăng nhập</button>
                        <a href="./forgot.html" style={{ textDecoration: 'none' }}>
                            <p className="forgot-pass">Quên mật khẩu ?</p>
                        </a>
                    </div>

                    <div className="sub-cont">
                        <div className="img">
                            <div className="img-text m-up">
                                <h2>
                                    <span style={{ color: '#66CC00', fontWeight: '700' }}>Agrimarket</span> đồng
                                    hành cùng nhà nông
                                </h2><p>Hãy truy cập để có thêm nhiều trải nghiệm mới mẻ với chúng tôi!</p>
                            </div>
                            <div className="img-text m-in">
                                <h2>Hãy trở thành một thành viên với chúng tôi?</h2>
                                <p>Nếu bạn chưa có tài khoản, hãy đăng ký.</p>
                            </div>
                            <div className="img-btn">
                                <span className="m-up">Đăng Ký</span>
                                <span className="m-in">Đăng Nhập</span>
                            </div>
                        </div>
                        <div className="form sign-up">
                            <h2>Đăng Ký</h2>
                            <label>
                                <span className="sign-up-name">Tên ngườI dùng</span>
                                <span className="toast toast-name hide">{'(*Tên người dùng phải > 6 ký tự)'}</span>
                                <input type="text" className="fullname" />
                            </label>
                            <label>
                                <span className="sign-up-phone">Số điện thoại</span>
                                <span className="toast toast-phone hide">(*Số điện thoại không hợp lệ)</span>
                                <input type="phone" className="phone" />
                            </label>
                            <label>
                                <span className="sign-up-email">Email</span>
                                <span className="toast toast-email hide">(*email phải có @)</span>
                                <input type="email" className="one email" />
                            </label>
                            <label>
                                <span className="sign-up-username">Tên đăng nhập</span>
                                <input type="text" className="username" />
                            </label>
                            <label>
                                <span className="sign-up-password">Mật khẩu</span>
                                <span className="toast toast-password hide">{'(*Mật khẩu phải > 6 ký tự)'}</span>
                                <input type="password" className="password" />
                            </label>
                            <label>
                                <span className="sign-up-cfPassword">Nhập Lại Mật khẩu</span>
                                <span className="toast toast-cf hide">(*Mật khẩu không trùng khớp)</span>
                                <input type="password" className="confirm-password" />
                            </label>

                            <button type="button" className="submit" id="btn-register" onclick="sendSignup()">Đăng ký ngay</button>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}
export default Login;