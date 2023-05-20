import React from "react";
import classNames from "classnames/bind";
import styles from "./ManagerAccount.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
export default function ManagerAccount() {
    return (
        <div className={cx('content-right')}>
            <main>
                <h1 className={cx('title')}>Accounts</h1>
                <div className={cx('grouphd')}>
                    <button className={cx('btn btn-add')}>
                        <a href="./addAccount.html">Add Account</a>
                    </button>
                    <div className={cx('search-box')}>
                        <input className={cx('search-box_input')} placeholder="Search..." type="text" />
                    </div>
                </div>
                <div className={cx('content-main')}>
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={cx('email')}>conbocuoi40@gmail.com</td>
                                <td className={cx('password')}>123456123</td>
                                <td className={cx('phone')}>0905478741</td>
                                <td className={cx('address')}>Quảng Nam, Việt Nam</td>
                                <td className={cx('role')}>Seller</td>
                                <td className={cx('control')}>
                                    <button className={cx('btn-edit')}>
                                        <a href="./editAccount.html">Edit</a>
                                    </button>
                                    <button className={cx('btn-delete')}>
                                        <a href="#">Delete</a>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('email')}>conbocuoi40@gmail.com</td>
                                <td className={cx('password')}>123456123</td>
                                <td className={cx('phone')}>0905478741</td>
                                <td className={cx('address')}>Quảng Nam, Việt Nam</td>
                                <td className={cx('role')}>User</td>
                                <td className={cx('control')}>
                                    <button className={cx('btn-edit')}>
                                        <a href="./editAccount.html">Edit</a>
                                    </button>
                                    <button className={cx('btn-delete')}>
                                        <a href="#">Delete</a>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
};