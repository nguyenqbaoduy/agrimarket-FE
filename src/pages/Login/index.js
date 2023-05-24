import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { login, register, authorization } from "../../services/getAPI.js";
import styles from './Login.module.scss'
import classNames from "classnames/bind";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const Login = () => {
    const [cookies, setCookie] = useCookies(['token']);

    //++Funtion
    const navigate = useNavigate();

    const [showSignUp, setShowSignUp] = useState(false);

    const handleToggleSignUp = () => {
        setShowSignUp(!showSignUp);
    }; //done

    const sendLogin = async () => {
        const usernameInput = document.getElementById('login-username');
        const passwordInput = document.getElementById('login-password');
        const username = usernameInput.value;
        const password = passwordInput.value;
        const data = await login(username, password);
        if (data.status === 200) {
            setCookie('accessToken', data.data.accessToken, { path: "/" });
            setCookie('refreshToken', data.data.refreshToken, { path: "/" });
            setCookie('UserID', data.data.UserID, { path: "/" });
            const getData = await authorization(data.data.accessToken);
            if (getData.status === 200) {
                if (getData.data.Role == 1)
                    navigate("/");
                else if (getData.data.Role == 2)
                    navigate("/seller");
                else
                    navigate("/admin");
            }
            else {
                toast(getData.data.message)
            }
        }
        else
            toast(data.data.message)
    }
    const sendSignup = async () => {
        const user = {
            UserName: document.getElementById('username').value,
            Password: document.getElementById('password').value,
            FullName: document.getElementById('fullname').value,
            Email: document.getElementById('email').value,
            Phone: document.getElementById('phone').value,
            Role: "1"
        }
        const req = await register(user);
        if (req.status === 200) {
            const token = req.data;
            setCookie('accessToken', token.accessToken, { path: "/" });
            setCookie('refreshToken', token.refreshToken, { path: "/" });
            setCookie('UserID', token.UserID, { path: "/" });
            navigate("/");
        }
        else {
            toast(req.data.message)
        }
    }
    //--Funtion
    return (
        <div className={cx('login')}>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
            />
            <div className={cx('cont', { 's-signup': showSignUp })}>
                <div className={cx('form', 'sign-in')}>
                    <h2 className={cx('signin')}>Đăng Nhập</h2>
                    <label>
                        <span className={cx('username-name')}>Tên đăng nhập</span>
                        <input type="text" name="username" id={cx("login-username")} />
                    </label>
                    <label>
                        <span className={cx('password-pw')}>Mật Khẩu</span>
                        <input type="password" name="password" id={cx("login-password")} />
                        <ion-icon className={cx('eye-pw')} name="eye-off-outline"></ion-icon>
                    </label>
                    <button className={cx('submit')} type="button" id={cx("btn-login")} onClick={sendLogin}>
                        Đăng nhập
                    </button>
                    <Link to="/forgot" style={{ textDecoration: 'none' }}>
                        <p className={cx('forgot-pass')}>Quên mật khẩu ?</p>
                    </Link>
                    {/* <div className={cx('social-media')}>
                    <ul>
                        <li>
                            <img src="/assets/image/google.png" alt="" />
                        </li>
                    </ul>
                </div> */}
                </div>

                <div className={cx('sub-cont')}>
                    <div className={cx('img')}>
                        <div className={cx('img-text', 'm-up')}>
                            <h2>
                                <span style={{ color: '#66CC00', fontWeight: 700 }}>Agrimarket</span> đồng hành cùng nhà nông
                            </h2>
                            <p>Hãy truy cập để có thêm nhiều trải nghiệm mới mẻ với chúng tôi!</p>
                        </div>
                        <div className={cx('img-text', 'm-in')}>
                            <h2>Hãy trở thành một thành viên với chúng tôi?</h2>
                            <p>Nếu bạn chưa có tài khoản, hãy đăng ký.</p>
                        </div>
                        <div className={cx('img-btn')} onClick={handleToggleSignUp}>
                            <span className={cx('m-up')}>Đăng Ký</span>
                            <span className={cx('m-in')}>Đăng Nhập</span>
                        </div>
                    </div>
                    <div className={cx('form', 'sign-up')}>
                        <h2>Đăng Ký</h2>
                        <label>
                            <span className={cx('sign-up-name')}>Tên người dùng</span>
                            <span className={cx('toast', 'toast-name', 'hide')}>(*Tên người dùng phải &gt; 6 ký tự)</span>
                            <input type="text" className={cx('fullname')} id={cx('fullname')} />
                        </label>
                        <label>
                            <span className={cx('sign-up-phone')}>Số điện thoại</span>
                            <span className={cx('toast', 'toast-phone', 'hide')}>(*Số điện thoại không hợp lệ)</span>
                            <input type="phone" className={cx('phone')} id={cx('phone')} />
                        </label>
                        <label>
                            <span className={cx('sign-up-email')}>Email</span>
                            <span className={cx('toast', 'toast-email', 'hide')}>(*email phải có @)</span>
                            <input type="email" className={cx('one', 'email')} id={cx('email')} />
                        </label>
                        <label>
                            <span className={cx('sign-up-username')}>Tên đăng nhập</span>
                            <input type="text" className={cx('username')} id={cx('username')} />
                        </label>
                        <label>
                            <span className={cx('sign-up-password')}>Mật khẩu</span>
                            <span className={cx('toast', 'toast-password', 'hide')}>(*Mật khẩu phải &gt; 6 ký tự)</span>
                            <input type="password" className={cx('password')} id={cx('password')} />
                        </label>
                        <label>
                            <span className={cx('sign-up-cfPassword')}>Nhập Lại Mật khẩu</span>
                            <span className={cx('toast', 'toast-cf', 'hide')}>(*Mật khẩu không trùng khớp)</span>
                            <input type="password" className={cx('confirm-password')} />
                        </label>

                        <button type="button" className={cx('submit')} id={cx("btn-register")} onClick={sendSignup}>
                            Đăng ký ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;