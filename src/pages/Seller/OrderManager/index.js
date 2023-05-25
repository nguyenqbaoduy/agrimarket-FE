import React from "react";
import { useState, useEffect } from "react";
import styles from "./AllProduct.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
// import Modal from 'react-modal';
// import Button from "react-bootstrap/Button";
import { getSellOrders, api_url, deleteProduct, changeActive } from "../../../services/getAPI.js";
import { useCookies } from 'react-cookie';


const cx = classNames.bind(styles);

export default function OrderManager() {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5); // Số lượng product hiện thị trên mỗi trang
  const [cookies] = useCookies([]);
  const [numberOfOrders, setNumberOfOrders] = useState();
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getOrder = await getSellOrders(cookies.accessToken);
        if (getOrder) {
          setOrders(getOrder);
          setNumberOfOrders(getOrder.length)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);
  // Pagination
  const indexOfLastProduct = currentPage * ordersPerPage;
  const indexOfFirstProduct = indexOfLastProduct - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className={cx("all-product")}>
      <div className={cx("tab-content")}>
        {/* <hr className={cx('card__separator')} /> */}
        <div className={cx("tab-pane active")}>
          <div className={cx("header-tab")}>
            <h2>{numberOfOrders} Đơn hàng</h2>
            <div className={cx("grouphd")}>
              <button
                className={cx("btn", "btn-add")}
              // onClick={handleAddProduct}
              >
                <Link to={"/Seller/AddProduct"} className={cx('btn-add-product')}>Thêm 1 sản phẩm mới</Link>
              </button>
              <div className={cx("search-box")}>
                <input
                  className={cx("search-box_input")}
                  placeholder="Search..."
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={cx("content-tab")}>
            <table width="100%">
              <thead>
                <tr>
                  <td>
                    <input type="checkbox" name="btn" id="chAll" />
                  </td>
                  <td>Tên sản phẩm</td>
                  <td>Số lượng</td>
                  <td>Đơn giá</td>
                  <td>Tổng tiền</td>
                  <td>Tình trạng đơn hàng</td>
                  <td>Thao tác</td>
                </tr>
              </thead>
              <tbody>
                {orders && currentOrders.map((order) => (
                  <tr key={order.ProductID}>
                    <td className={cx("pro-check")}>
                      <div className={cx("product-check")}>
                        <input type="checkbox" name="btn" />
                      </div>
                    </td>
                    <td className={cx("product")} id={order.ProductID}>
                      <img src={api_url + '/images/product/' + order.ProductImageDefault} alt="" />
                      <div className={cx("product-de")}>
                        <h5>{order.ProductName}</h5>
                      </div>
                    </td>
                    <td className={cx("product-cate")} id="">
                      <h5>{order.OrderDetailQuantity}</h5>
                    </td>
                    <td className={cx("product-pri")} id="">
                      <h5>{order.OrderDetailPriceOfProduct}</h5>
                    </td>
                    <td className={cx("product-warehouse")} id="">
                      <h5>{order.OrderDetailSumPrice}</h5>
                    </td>
                    <td className={cx("product-sales")} id="">
                      <h5>{order.Status}</h5>
                    </td>
                    <td className={cx("product-operation")} id="">
                      <button className={cx('btn-delete')}>
                        Xác nhận
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={cx("containernp")}>

            {/* Pagination */}
            <div className={cx("pagination")}>
              <button className={cx("btn1", { disable: currentPage == 1 })}
                onClick={() => {
                  if (currentPage > 1) {
                    paginate(currentPage - 1);
                  }
                }}>
                <i className="fas fa-arrow-left"></i>
                Prev
              </button>
              <ul>
                {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }, (_, i) => i + 1).map((number) => (
                  <li
                    key={number}
                    className={cx("pagination-item", { active: number === currentPage })}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </li>
                ))}
              </ul>
              <button className={cx("btn2", { disable: currentPage === Math.ceil(orders.length / ordersPerPage) })}
                onClick={() => {
                  if (currentPage < Math.ceil(orders.length / ordersPerPage)) {
                    paginate(currentPage + 1);
                  }
                }}>
                Next
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
