import React from "react";
import styles from "./AddProduct.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function AddProduct() {
  return (
    <div className={cx("add-product")}>
      <div className={cx("info-title")}>Thông tin cơ bản</div>
      <div className={cx("edit-row")}>
        <div className={cx("tiltle-product")}>
          <h4>
            <span>*</span>Hình ảnh sản phẩm
          </h4>
        </div>
        <div className={cx("info-right")}>
          <figure className={cx("image-user")}>
            <img alt="" id="choosen-image" />
            <div className={cx("img-content")}>
              <div className={cx("icon")}>
                <i className={cx("fas", "fa-cloud-upload-alt")}></i>
              </div>
              <div className={cx("text")}>No file chosen, yet!</div>
            </div>
          </figure>
          <figcaption id="file-name"></figcaption>
          <input type="file" id="upload-button" accept="image/*" name="image" />
          <label htmlFor="upload-button">
            <i className={cx("fas", "fa-upload")}></i> &nbsp; Chọn ảnh
          </label>
        </div>
      </div>
      <div className={cx("edit-row")}>
        <div className={cx("tiltle-product")}>
          <h4>
            <span>*</span>Tên sản phẩm
          </h4>
        </div>
        <div className={cx("edit-main")}>
          <input
            className={cx("name-box_input")}
            placeholder="Nhập vào..."
            type=""
            text
          />
        </div>
      </div>
      <div className={cx("edit-row")}>
        <div className={cx("tiltle-product")}>
          <h4>
            <span>*</span>Mô tả sản phẩm
          </h4>
        </div>
        <div className={cx("edit-detail")}>
          <textarea
            type="textarea"
            resize="none"
            rows="2"
            minrows="9"
            maxrows="26"
            autosize="true"
            maxlength="Infinity"
            restrictiontype="input"
            max="Infinity"
            min="-Infinity"
            className={cx("detail_box-input")}
          ></textarea>
        </div>
      </div>
      <div className={cx("edit-row")}>
        <div className={cx("tiltle-product")}>
          <h4>
            <span>*</span>Đơn vị sản xuất
          </h4>
        </div>
        <div className={cx("edit-dvsx")}>
          <input className={cx("dvsx-box_input")} placeholder="" type="" text />
        </div>
      </div>
      <div className={cx("edit-row")}>
        <div className={cx("tiltle-product")}>
          <h4>
            <span>*</span>Giá
          </h4>
        </div>
        <div className={cx("edit-price")}>
          <input
            className={cx("price-box_input")}
            placeholder="VND"
            type=""
            text
          />
        </div>
      </div>
      <div className={cx("edit-row")}>
        <div className={cx("tiltle-product")}>
          <h4>
            <span>*</span>Size
          </h4>
        </div>
        <div className={cx("edit-size")}>
          <input
            className={cx("name-box_input")}
            placeholder="Nhập vào..."
            type=""
            text
          />
        </div>
      </div>
      <div className={cx("edit-row")}>
        <div className={cx("tiltle-product")}>
          <h4>
            <span>*</span>Hạn sử dụng đến
          </h4>
        </div>
        <div className={cx("edit-expiry")}>
          <input className={cx("form-control")} type="date" />
        </div>
      </div>
      <div className={cx("containerbtn")}>
        <div className={cx("btn-group")}>
          <button className={cx("btn", "btn-cancel")}>
            <a href="#">Hủy</a>
          </button>
          <button className={cx("btn", "btn-save")}>
            <a href="#">Lưu</a>
          </button>
        </div>
      </div>
    </div>
  );
}
