import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from "../../services/getAPI.js";
import styles from './Login.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Login = () => {
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
        const token = await login(username, password);
        console.log('Tên đăng nhập:', username);
        console.log('Mật khẩu:', password);
        console.log(token);
        navigate("/");
    }
    const sendSignup = () => {
        console.log('sendSignup');
    }
    //--Funtion
    return (
        <div className={cx('login')}>
            <div className={cx('cont', { 's-signup': showSignUp })}>
                <div className={cx('form', 'sign-in')}>
                    <h2 className={cx('signin')}>Đăng Nhập</h2>
                    <label>
                        <span className={cx('username-name')}>Tên đăng nhập</span>
                        <input type="text" name="username" id="login-username" />
                    </label>
                    <label>
                        <span className={cx('password-pw')}>Mật Khẩu</span>
                        <input type="password" name="password" id="login-password" />
                        <ion-icon className={cx('eye-pw')} name="eye-off-outline"></ion-icon>
                    </label>
                    <button className={cx('submit')} type="button" id="btn-login" onClick={sendLogin}>
                        Đăng nhập
                    </button>
                    <a href="./forgot.html" style={{ textDecoration: 'none' }}>
                        <p className={cx('forgot-pass')}>Quên mật khẩu ?</p>
                    </a>
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
                            <span className={cx('sign-up-name')}>Tên ngườI dùng</span>
                            <span className={cx('toast', 'toast-name', 'hide')}>(*Tên người dùng phải &gt; 6 ký tự)</span>
                            <input type="text" className={cx('fullname')} />
                        </label>
                        <label>
                            <span className={cx('sign-up-phone')}>Số điện thoại</span>
                            <span className={cx('toast', 'toast-phone', 'hide')}>(*Số điện thoại không hợp lệ)</span>
                            <input type="phone" className={cx('phone')} />
                        </label>
                        <label>
                            <span className={cx('sign-up-email')}>Email</span>
                            <span className={cx('toast', 'toast-email', 'hide')}>(*email phải có @)</span>
                            <input type="email" className={cx('one', 'email')} />
                        </label>
                        <label>
                            <span className={cx('sign-up-username')}>Tên đăng nhập</span>
                            <input type="text" className={cx('username')} />
                        </label>
                        <label>
                            <span className={cx('sign-up-password')}>Mật khẩu</span>
                            <span className={cx('toast', 'toast-password', 'hide')}>(*Mật khẩu phải &gt; 6 ký tự)</span>
                            <input type="password" className={cx('password')} />
                        </label>
                        <label>
                            <span className={cx('sign-up-cfPassword')}>Nhập Lại Mật khẩu</span>
                            <span className={cx('toast', 'toast-cf', 'hide')}>(*Mật khẩu không trùng khớp)</span>
                            <input type="password" className={cx('confirm-password')} />
                        </label>

                        <button type="button" className={cx('submit')} id="btn-register" onClick={sendSignup}>
                            Đăng ký ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;