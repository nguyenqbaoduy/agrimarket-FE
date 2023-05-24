import React, { useState, useEffect } from "react";
import styles from "./UpdateProduct.module.scss";
import classNames from "classnames/bind";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { updateInfoProduct, getDetailProduct, getAllCategory } from "../../../../../services/getAPI";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from 'react-toastify';
import { Editor, EditorState, convertFromHTML, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { stateToHTML } from 'draft-js-export-html';

const cx = classNames.bind(styles);

export default function UpdateProduct({ ProductID, UserID }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({})
  const [categorys, setCategorys] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [cookies, setCookie] = useCookies([]);

  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }


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
  const handleUpdate = async () => {
    var text = editorState.getCurrentContent()
    text = stateToHTML(text);
    formData.ProductDescription = text;
    var status = await updateInfoProduct(cookies.accessToken, formData)
    if (status === 200)
      toast("Cập nhật thành công")
    else
      toast("Cập nhật thất bại")
    setShow(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProduct = await getDetailProduct(ProductID);
        setFormData(getProduct.data.product);
        const getCategory = await getAllCategory();
        setCategorys(getCategory);
        var text = getProduct.data.product.ProductDescription
        const blocksFromHTML = convertFromHTML(text);
        const state = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap,
        );
        setEditorState(EditorState.createWithContent(state))
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
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
                  <select value={formData.CategoryID} onChange={handleOptionChange} className={cx("price-box_input")}>
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
              <div
                style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
                onClick={focusEditor}
              >
                <Editor
                  ref={editor}
                  editorState={editorState}
                  onChange={setEditorState}
                />
              </div>
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
