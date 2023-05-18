import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductManager.module.scss'
import AddProduct from './AddProduct'
import AllProduct from './AllProduct'

const cx = classNames.bind(styles);
export default function index({children}) {
  return (
    <div>
      <AddProduct />
      <AllProduct />
      {children}
    </div>
  )
}
