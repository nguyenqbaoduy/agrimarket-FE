import React, { useState, useEffect } from "react";
import styles from "./UpdateProduct.module.scss";
import classNames from "classnames/bind";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { updateInfoProduct, getDetailProduct, getAllCategory } from "../../../../../services/getAPI";
import { useCookies } from "react-cookie";


const cx = classNames.bind(styles);

export default function UpdateProduct({ ProductID, UserID }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({})
  const [categorys, setCategorys] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [cookies, setCookie] = useCookies([]);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      CategoryID: selectedCategoryId,
    });
  };
  const handleUpdate = () => {
    formData.ProductDescription = formData.ProductDescription.replace(/\n/g, "");
    updateInfoProduct(cookies.accessToken,formData)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProduct = await getDetailProduct(ProductID);
        setFormData(getProduct.data.product);
        const getCategory = await getAllCategory();
        setCategorys(getCategory);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategoryId(selectedValue);
  };
  return (
    <div className={cx("modal-product")}>
      <Button
        variant="primary"
        onClick={handleShow}
        className={cx("btn-update")}
      >
        Cập nhật
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                name="ProductName"
                placeholder="Nhập tên sản phẩm"
                autoFocus
                value={formData.ProductName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phân loại hàng</Form.Label>
              <Dropdown>
                <div className="menu-active">
                  <select value={selectedCategoryId} onChange={handleOptionChange} className={cx("price-box_input")}>
                    <option value="">-- Chọn một tùy chọn --</option>
                    {categorys && categorys.map(category => (
                      <option key={category.CategoryID} value={category.CategoryID}>
                        {category.CategoryName}
                      </option>
                    ))}
                  </select>
                </div>
              </Dropdown>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Giá</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Ex: 100.000đ"
                value={formData.ProductPrice}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Kho hàng</Form.Label>
              <Form.Control
                type="text"
                name="quantity"
                placeholder="Nhập số lượng sản phẩm"
                value={formData.ProductQuantity}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mô tả sản phẩm</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={3}
                name="ProductDescription"
                autoFocus
                value={formData.ProductDescription}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Thoát
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
