import React from "react";
import { useState, useEffect } from "react";
import styles from "./AllProduct.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
// import Modal from 'react-modal';
// import Button from "react-bootstrap/Button";
import { getProductOfSeller, api_url} from "../../../../services/getAPI.js";
import { useCookies } from 'react-cookie';
import UpdateProduct from "./UpdateProduct";


const cx = classNames.bind(styles);

export default function AllProduct() {
  const [cookies] = useCookies([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [numberOfProducts,setNumberOfProducts] = useState();
  // const handleAddProduct = () => {
  //   // Lấy số lượng sản phẩm hiện tại
  //   const currentNumberOfProducts = numberOfProducts;
  //   // Thêm sản phẩm vào giỏ hàng
  //   numberOfProducts = currentNumberOfProducts + 1;
  // };
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProduct = await getProductOfSeller(cookies.UserID);
        setProducts(getProduct);
        setNumberOfProducts(getProduct.length)
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
  const deleteProduct = (id) => {
    // Filter out product with matching id
    const updatedProducts = products.filter((product) => product.id !== id);

    // Update state with new products array
    setProducts(updatedProducts);
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
                // onclick={handleAddProduct}
              >
                <Link to={"/Seller/AddProduct"}>Thêm 1 sản phẩm mới</Link>
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
                {products && products.map((product) => (
                  <tr key={product.id}>
                    <td className={cx("pro-check")}>
                      <div className={cx("product-check")}>
                        <input type="checkbox" name="btn" />
                      </div>
                    </td>
                    <td className={cx("product")} id="">
                      <img src={api_url+'/images/product/'+product.ProductImageDefault} alt="" />
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
                      <button onClick={() => updateProduct(product.id)}>
                        Cập nhật
                      </button>
                      <button onClick={() => deleteProduct(product.id)}>
                        Xóa
                      </button>
                      <button>Ẩn</button>
                      <UpdateProduct />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={cx("containernp")}>
            <div className={cx("pagination")}>
              <button className={cx("btn1")} onclick="backBtn()">
                <img src="./assets/image/icon/448-arrow.png" />
                Prev
              </button>
              <ul>
                <li
                  className={cx("link active")}
                  value="1"
                  onclick="activeLink()"
                >
                  1
                </li>
                <li className={cx("link")} value="2" onclick="activeLink()">
                  2
                </li>
                <li className={cx("link")} value="3" onclick="activeLink()">
                  3
                </li>
                <li className={cx("link")} value="4" onclick="activeLink()">
                  4
                </li>
                <li className={cx("link")} value="5" onclick="activeLink()">
                  5
                </li>
                <li className={cx("link")} value="6" onclick="activeLink()">
                  6
                </li>
              </ul>
              <button className={cx("btn2")} onclick="nextBtn()">
                Next
                <img src="./assets/image/icon/448-arrow.png" />
              </button>
            </div>
          </div>
        </div>
        <div className={cx("tab-pane")}>
          <div className={cx("header-tab")}>
            <div className={cx("grouphd1")}>
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
                <tr>
                  <td className={cx("pro-check")}>
                    <div className={cx("product-check")}>
                      <input type="checkbox" name="btn" />
                    </div>
                  </td>
                  <td className={cx("product")} id="">
                    <img src="./assets/image/buy/tts.png" alt="" />
                    <div className={cx("product-de")}>
                      <h5>Thuốc trừ sâu Batas 25EC</h5>
                    </div>
                  </td>
                  <td className={cx("product-cate")} id="">
                    <h5>Thuốc</h5>
                  </td>
                  <td className={cx("product-pri")} id="">
                    <h5>1.000đ</h5>
                  </td>
                  <td className={cx("product-warehouse")} id="">
                    <h5>1</h5>
                  </td>
                  <td className={cx("product-sales")} id="">
                    <h5>0</h5>
                  </td>
                  <td className={cx("product-operation")} id="">
                    <Link to={"#"}>Cập nhật</Link>
                    <Link to={"#"}>Xóa</Link>
                    <Link to={"#"}>Ẩn</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={cx("containernp")}>
            <div className={cx("pagination")}>
              <button className={cx("btn1")} onclick="backBtn()">
                <img src="./assets/image/icon/448-arrow.png" />
                Prev
              </button>
              <ul>
                <li
                  className={cx("link active")}
                  value="1"
                  onclick="activeLink()"
                >
                  1
                </li>
                <li className={cx("link")} value="2" onclick="activeLink()">
                  2
                </li>
                <li className={cx("link")} value="3" onclick="activeLink()">
                  3
                </li>
                <li className={cx("link")} value="4" onclick="activeLink()">
                  4
                </li>
                <li className={cx("link")} value="5" onclick="activeLink()">
                  5
                </li>
                <li className={cx("link")} value="6" onclick="activeLink()">
                  6
                </li>
              </ul>
              <button className={cx("btn2")} onclick="nextBtn()">
                Next
                <img src="./assets/image/icon/448-arrow.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
