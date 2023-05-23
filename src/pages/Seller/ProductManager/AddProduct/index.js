import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./AddProduct.module.scss";
import classNames from "classnames/bind";
import { api_url, addProduct, getAllCategory } from "../../../../services/getAPI.js";
import { formattedDateTime } from "../../../../services/getDate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

export default function AddProduct() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['accessToken']);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const [fileImage, setFileImage] = useState();
  const [categorys, setCategorys] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getCategory = await getAllCategory();
        setCategorys(getCategory);

      } catch (error) {
        console.log(error);
      }
      window.scrollTo(0, 0);
    };
    fetchData();
  }, []);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setFileImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategoryId(selectedValue);
  };
  const handleSave = async () => {
    const dataProduct = {
      ProductName: name,
      ProductPrice: price,
      ProductDescription: description,
      ProductActive: 1,
      ProductQuantity: quantity,
      ProductCreatedAt: formattedDateTime,
      UserID: cookies.UserID,
      CategoryID: selectedCategoryId,
      ProductImageDefault: "tmp"
    }
    if (!(Object.values(dataProduct).some(value => value === ''))) {
      const formData = new FormData();
      formData.append('image', fileImage);
      const header = new Headers();
      header.append('authorization', cookies.accessToken);
      await fetch(api_url + '/uploadProduct', {
        method: 'POST',
        body: formData,
        headers: header,
      }).then((response) =>
        response.json()
      )
        .then(async (data) => {
          dataProduct.ProductImageDefault = data.imageUrl
          const req = await addProduct(cookies.accessToken, dataProduct);
          if (req === 200) {
            clear();
            toast("Thêm thành công")

            setTimeout(() => {
              navigate("/Seller/AllProduct")
            }, 3000);
          }
        })
        .catch((error) => {
          toast("Thêm ảnh thất bại")
        });
    }
    else {
      toast("Thêm thất bại")
    }
  };
  function clear() {
    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
    setImage(null);
    setFileImage(null);
    setSelectedCategoryId('')
  }
  const handleCancel = () => {
    clear();
  };

  return (
    <div className={cx("add-product")}>
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
      <div className={cx("info-title")}>Thông tin cơ bản</div>
      <div className={cx("edit-row")}>
        <div className={cx("tiltle-product")}>
          <h4>
            <span>*</span>Hình ảnh sản phẩm
          </h4>
        </div>
        <div className={cx("info-right")}>
          <figure className={cx("image-user")}>
            {image && <img src={image} alt="uploaded image" id="choosen-image" />}
            <div className={cx("img-content")}>
              <div className={cx("icon")}>
                <i className={cx("fas", "fa-cloud-upload-alt")}></i>
              </div>
              <div className={cx("text")}>No file chosen, yet!</div>
            </div>
          </figure>
          <figcaption id="file-name"></figcaption>
          <input type="file" id="upload-button" accept="image/*" name="image" onChange={handleImageChange} />
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
            value={name}
            onChange={handleNameChange}
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
            maxLength="Infinity"
            restrictiontype="input"
            max="Infinity"
            min="-Infinity"
            className={cx("detail_box-input")}
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
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
            value={price}
            onChange={handlePriceChange}
          />
        </div>
      </div>
      <div className={cx("edit-row")}>
        <div className={cx("tiltle-product")}>
          <h4>
            <span>*</span>Số lượng
          </h4>
        </div>
        <div className={cx("edit-price")}>
          <input
            className={cx("price-box_input")}
            placeholder=""
            type=""
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
      </div>
      <div className={cx("edit-row")}>
        <div className={cx("tiltle-product")}>
          <h4>
            <span>*</span>Loại sản phẩm
          </h4>
        </div>
        <div className={cx("edit-price")}>
          <select value={selectedCategoryId} onChange={handleOptionChange} className={cx("price-box_input")}>
            <option value="">-- Chọn một tùy chọn --</option>
            {categorys && categorys.map(category => (
              <option key={category.CategoryID} value={category.CategoryID}>
                {category.CategoryName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={cx("containerbtn")}>
        <div className={cx("btn-group")}>
          <button className={cx("btn", "btn-cancel")} onClick={handleCancel}>
            <a href="#">Hủy</a>
          </button>
          <button className={cx("btn", "btn-save")} onClick={handleSave}>
            <a href="#">Lưu</a>
          </button>
        </div>
      </div>
    </div>
  );

}
