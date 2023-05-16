import Header from "./Header";
import Slidebar from "./Slidebar";
import Footer from "./Footer";
import styles from "./DefaultLayout.module.scss"
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    return ( 
        <>
        <div className={cx("wrapper")}>
            <Header/>
            <Slidebar/>
        </div>
            {children}
            <Footer/>
        </>
     );
}

export default DefaultLayout;