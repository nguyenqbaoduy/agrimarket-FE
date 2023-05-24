import React from "react";
import { useState, useEffect } from "react";
import styles from "./AllProduct.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
// import Modal from 'react-modal';
// import Button from "react-bootstrap/Button";
import { getProductOfSeller, api_url, deleteProduct, changeActive } from "../../../../services/getAPI.js";
import { useCookies } from 'react-cookie';
import UpdateProduct from "./UpdateProduct";


const cx = classNames.bind(styles);

export default function AllProduct() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); // Số lượng product hiện thị trên mỗi trang
  const [cookies] = useCookies([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [numberOfProducts, setNumberOfProducts] = useState();
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProduct = await getProductOfSeller(cookies.UserID);
        if (getProduct) {
          setProducts(getProduct);
          setNumberOfProducts(getProduct.length)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const updateProduct = (id) => {
    // Find product by id
    const productToUpdate = products.find((product) => product.id === id);

    // Update product
    productToUpdate.name = "New Product Name";
    productToUpdate.category = "New Category";
    productToUpdate.price = "New Price";
    productToUpdate.stock = 10;
    productToUpdate.sales = 5;

    // Update state with new products array
    setProducts([...products]);
  };

  // Function to delete product
  const btnDeleteProduct = async (ProductID, FileName) => {
    // Remove product with matching ProductID,FileName
    const updatedProducts = products.filter(item => item.ProductID !== ProductID);

    // Update state with new products array
    setProducts(updatedProducts);
    var data = {
      ProductID: ProductID,
      FileName: FileName
    }
    await deleteProduct(data);
  };
  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const toggleProductActive = (productId) => {
    const updatedProducts = [...products];
    const productIndex = products.findIndex((product) => product.ProductID === productId);
    if (productIndex !== -1) {
      updatedProducts[productIndex].ProductActive = updatedProducts[productIndex].ProductActive === 1 ? 0 : 1;
      var data = {
        ProductActive: updatedProducts[productIndex].ProductActive,
        ProductID: productId,
        UserID: cookies.UserID,
      }
      changeActive(data)
    }

    // Update the state with the modified products array
    setProducts(updatedProducts)
  };

  return (
    <div className={cx("all-product")}>
      {/* <div className={cx("tabs")}>
        <div className={cx("tab-item active")}>Tất cả</div>
        <div className={cx("tab-item")}>Đang hoạt động</div>
        <div className={cx("tab-item")}>Hết hàng 0</div>
        <div className={cx("tab-item")}>Chờ duyệt 0</div>
        <div className={cx("tab-item")}>Đã ẩn 0</div>
        <div className={cx("line")}></div>
      </div> */}

      <div className={cx("tab-content")}>
        {/* <hr className={cx('card__separator')} /> */}
        <div className={cx("tab-pane active")}>
          <div className={cx("header-tab")}>
            <h2>{numberOfProducts} Sản phẩm</h2>
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
                  <td>Phân loại hàng</td>
                  <td>Giá</td>
                  <td>Kho hàng</td>
                  <td>Doanh số</td>
                  <td>Thao tác</td>
                </tr>
              </thead>
              <tbody>
                {products && currentProducts.map((product) => (
                  <tr key={product.ProductID}>
                    <td className={cx("pro-check")}>
                      <div className={cx("product-check")}>
                        <input type="checkbox" name="btn" />
                      </div>
                    </td>
                    <td className={cx("product")} id={product.ProductID}>
                      <img src={api_url + '/images/product/' + product.ProductImageDefault} alt="" />
                      <div className={cx("product-de")}>
                        <h5>{product.ProductName}</h5>
                      </div>
                    </td>
                    <td className={cx("product-cate")} id="">
                      <h5>{product.CategoryName}</h5>
                    </td>
                    <td className={cx("product-pri")} id="">
                      <h5>{product.ProductPrice}</h5>
                    </td>
                    <td className={cx("product-warehouse")} id="">
                      <h5>{product.ProductQuantity}</h5>
                    </td>
                    <td className={cx("product-sales")} id="">
                      <h5>{product.sales}</h5>
                    </td>
                    <td className={cx("product-operation")} id="">
                      <UpdateProduct ProductID={product.ProductID} UserID={product.UserID} />
                      <button className={cx('btn-delete')} onClick={() => btnDeleteProduct(product.ProductID, product.ProductImageDefault)}>
                        Xóa
                      </button>
                      {product.ProductActive === 1 ? (
                        <button onClick={() => toggleProductActive(product.ProductID)}>Ẩn</button>
                      ) : (
                        <button onClick={() => toggleProductActive(product.ProductID)}>Hiện</button>
                      )}
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
                {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => i + 1).map((number) => (
                  <li
                    key={number}
                    className={cx("pagination-item", { active: number === currentPage })}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </li>
                ))}
              </ul>
              <button className={cx("btn2", { disable: currentPage === Math.ceil(products.length / productsPerPage) })}
                onClick={() => {
                  if (currentPage < Math.ceil(products.length / productsPerPage)) {
                    paginate(currentPage + 1);
                  }
                }}>
                Next
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            {/* <div className={cx("pagination")}>
              <ul>
                <li
                  className={cx("link active")}
                  value="1"
                  // onClick="activeLink()"
                >
                  1
                </li>
                <li className={cx("link")} value="2">
                  2
                </li>
                <li className={cx("link")} value="3">
                  3
                </li>
              </ul>
              <button className={cx("btn2")}>
                Next
                <i className="fas fa-arrow-right"></i>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>

  );
}
