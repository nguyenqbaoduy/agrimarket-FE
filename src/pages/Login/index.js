import styles from './Login.module.css';
const Login = () => {
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
                <div className={styles.cont}>
                    <div className={`${styles.form} ${styles['sign-in']}`}>
                        <h2 className={styles.signin}>Đăng Nhập</h2>
                        <label>
                            <span className={styles['username-name']}>Tên đăng nhập</span>
                            <input type="text" name="username" id="login-username" />
                        </label>
                        <label>
                            <span className={styles['password-pw']}>Mật Khẩu</span>
                            <input type="password" name="password" id="login-password" />
                            <ion-icon className={styles['eye-pw']} name="eye-off-outline"></ion-icon>
                        </label>
                        <button className={styles.submit} type="button" id="btn-login" onClick={sendLogin}>
                            Đăng nhập
                        </button>
                        <a href="./forgot.html" style={{ textDecoration: 'none' }}>
                            <p className={styles['forgot-pass']}>Quên mật khẩu ?</p>
                        </a>
                    </div>

                    <div className={styles['sub-cont']}>
                        <div className={styles.img}>
                            <div className={`${styles['img-text']} ${styles['m-up']}`}>
                                <h2>
                                    <span style={{ color: '#66CC00', fontWeight: '700' }}>Agrimarket</span> đồng hành cùng nhà nông
                                </h2>
                                <p>Hãy truy cập để có thêm nhiều trải nghiệm mới mẻ với chúng tôi!</p>
                            </div>
                            <div className={`${styles['img-text']} ${styles['m-in']}`}>
                                <h2>Hãy trở thành một thành viên với chúng tôi?</h2>
                                <p>Nếu bạn chưa có tài khoản, hãy đăng ký.</p>
                            </div>
                            <div className={styles['img-btn']}>
                                <span className={styles['m-up']}>Đăng Ký</span>
                                <span className={styles['m-in']}>Đăng Nhập</span>
                            </div>
                        </div>
                        <div className={styles['form sign-up']}>
                            <h2>Đăng Ký</h2>
                            <label>
                                <span className={styles['sign-up-name']}>Tên ngườI dùng</span>
                                <span className={`${styles.toast} ${styles['toast-name']} hide`}>{'(*Tên Người dùng phải > 6 ký tự)'}</span>
                                < input type="text" className={styles.fullname} />
                            </label>
                            <label>
                                <span className={styles['sign-up-phone']}>Số điện thoại</span>
                                <span className={`${styles.toast} ${styles['toast-phone']} hide`}>(*Số điện thoại không hợp lệ)</span>
                                <input type="phone" className={styles.phone} />
                            </label>
                            <label>
                                <span className={styles['sign-up-email']}>Email</span>
                                <span className={`${styles.toast} ${styles['toast-email']} hide`}>(*email phải có @)</span>
                                <input type="email" className={`${styles.one} ${styles.email}`} />
                            </label>
                            <label>
                                <span className={styles['sign-up-username']}>Tên đăng nhập</span>
                                <input type="text" className={styles.username} />
                            </label>
                            <label>
                                <span className={styles['sign-up-password']}>Mật khẩu</span>
                                <span className={`${styles.toast} ${styles['toast-password']} hide`}>{'(*Mật khẩu phải > 6 ký tự)'}</span>
                                <input type="password" className={styles.password} />
                            </label>
                            <label>
                                <span className={styles['sign-up-cfPassword']}>Nhập Lại Mật khẩu</span>
                                <span className={`${styles.toast} ${styles['toast-cf']} hide`}>(*Mật khẩu không trùng khớp)</span>
                                <input type="password" className={styles['confirm-password']} />
                            </label>

                            <button type="button" className={styles.submit} id="btn-register" onClick={sendSignup}>
                                Đăng ký ngay
                            </button>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Login;
