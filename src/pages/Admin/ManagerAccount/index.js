import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ManagerAccount.module.scss";
import { Link } from "react-router-dom";
import EditAccount from "./EditAccount";

const cx = classNames.bind(styles);
export default function ManagerAccount() {
    
    const [products, setProducts] = useState([])
    const updateProduct = (id) => {
        // Find product by id
        const productToUpdate = products.find((product) => product.id === id);
    
        // Update product
        productToUpdate.email = "conbocuoi40@gmail.com";
        productToUpdate.password = "123456123";
        productToUpdate.phonenumber = "0905478741";
        productToUpdate.address = "Quảng Nam, Việt Nam";
        productToUpdate.role = "User";
    
        // Update state with new products array
        setProducts([...products]);
      };

      const deleteProduct = (id) => {
        // Filter out product with matching id
        const updatedProducts = products.filter((product) => product.id !== id);
    
        // Update state with new products array
        setProducts(updatedProducts);
      };

    return (
        <div className={cx('content-right')}>
            <main>
                <h1 className={cx('title')}>Accounts</h1>
                <div className={cx('grouphd')}>
                    <button className={cx('btn', 'btn-add')}>
                        <Link to={'/Admin/AddAcount'}>Add Account</Link>
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
                                {products && products.map((product) => (
                                <tr key={product.id}>
                                    <td className={cx('email')} id="">conbocuoi40@gmail.com</td>
                                    <td className={cx('password')} id="">{product.Password}</td>
                                    <td className={cx('phone')} id="">{product.PhoneNumber}</td>
                                    <td className={cx('address')} id="">{product.Address}</td>
                                    <td className={cx('role')} id="">{product.Role}</td>
                                    <td className={cx('control')} id="">
                                        {/* <button className={cx('btn-edit')}>
                                            Edit
                                        </button> */}
                                        <EditAccount />
                                        <button className={cx('btn-delete')} onClick={() => deleteProduct(product.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                ))}
                            <tr>
                                <td className={cx('email')}>conbocuoi40@gmail.com</td>
                                <td className={cx('password')}>123456123</td>
                                <td className={cx('phone')}>0905478741</td>
                                <td className={cx('address')}>Quảng Nam, Việt Nam</td>
                                <td className={cx('role')}>User</td>
                                <td className={cx('control')}>
                                    <EditAccount />
                                    <button className={cx('btn-delete')}>
                                        <a href="#">Xóa</a>
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