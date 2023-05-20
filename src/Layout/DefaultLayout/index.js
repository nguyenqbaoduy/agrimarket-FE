import Header from "./Header";
import Slidebar from "./Slidebar";
import Footer from "./Footer";
import styles from "./DefaultLayout.module.scss"
import classNames from 'classnames/bind';
import React, { createContext, useState } from 'react';

export const HeaderContext = createContext();

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [reloadHeader, setReloadHeader] = useState(false);

    const triggerHeaderReload = () => {
        setReloadHeader(!reloadHeader);
    };

    return (
        <>
            <HeaderContext.Provider value={{ reloadHeader, triggerHeaderReload }}>
                <div className={cx("wrapper")}>
                    <Header />
                    <Slidebar />
                </div>
                {children}
            </HeaderContext.Provider>
            <Footer />
        </>
    );
}

export default DefaultLayout;