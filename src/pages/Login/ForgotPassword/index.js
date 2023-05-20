import React from 'react';
import styles from './ForgotPassword.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const ForgotPassword = () => {
    return (
        <div className={cx('forgot')}>
        <div className={cx('cont')}>
            <div className={cx('form', 'sign-in')}>
                <h2>Quên Mật Khẩu?</h2>
                <label>
                    <span>Nhập tên đăng nhập</span>
                    <input type="username" name="username" />
                </label>
                <label>
                    <span>Nhập email</span>
                    <input type="email" name="email" />
                </label>
                <a href="" style={{ textDecoration: 'none' }}><button className={cx('submit')} type="button">Gửi</button></a>
                <div className={cx('home-page')}>
                    <a href="" style={{ textDecoration: 'none' }}>
                        <ion-icon name="arrow-back-circle-outline"></ion-icon>
                        <span>Đăng Nhập</span>
                    </a>
                </div>
            </div>

            <div className={cx('sub-cont')}>
                <div className={cx('img')}>
                    <div className={cx('img-text', 'm-up')}>
                        <h2><span style={{ color: '#66CC00', fontWeight: 700 }}>Agrimarket</span> đồng hành cùng nhà nông</h2>
                        <p>Hãy truy cập để có thêm nhiều trải nghiệm mới mẻ với chúng tôi!</p>
                    </div>
                    <div className={cx('img-text', 'm-in')}>
                        <h2>Hãy trở thành một thành với chúng tôi?</h2>
                        <p>Nếu bạn đã có tài khoản, hãy đăng ký. Chúng tôi đã rất nhớ bạn!</p>
                    </div>
                </div>
                <div className={cx('form', 'sign-up')}>
                </div>
            </div>
        </div>
        </div>
    )
}
export default ForgotPassword;