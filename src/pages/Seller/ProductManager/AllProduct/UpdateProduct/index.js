import React, { useState } from "react";
import styles from "./UpdateProduct.module.scss";
import classNames from "classnames/bind";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const cx = classNames.bind(styles);

export default function UpdateProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                type="name"
                placeholder="Nhập tên sản phẩm"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phân loại hàng</Form.Label>
              <Dropdown>
                <Dropdown.Toggle
                  className="active-btn"
                  variant="secondary"
                  id="dropdown-button-dark-example1"
                >
                  Phân loại
                </Dropdown.Toggle>
                <div className="menu-active">
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Thuốc trừ sâu</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Thuốc diệt cỏ
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Thuốc tăng trưởng
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </div>
              </Dropdown>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Giá</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ex: 100.000đ"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Kho hàng</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập số lượng sản phẩm"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Doanh số</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Thoát
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
