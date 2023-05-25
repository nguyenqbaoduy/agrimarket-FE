import React, { useState, useEffect } from "react";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Profile() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No file chosen, yet!");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  useEffect(() => {
    populateDays(months[month - 1]);
  }, [year, month]);

  const populateDays = (month) => {
    const daySelect = document.getElementById("day");
    //Delete all of the children of the day dropdown
    //if they do exist
    while (daySelect.firstChild) {
      daySelect.removeChild(daySelect.firstChild);
    }
    //Holds the number of days in the month
    let dayNum;
    if (
      month === "Tháng 1" ||
      month === "Tháng 3" ||
      month === "Tháng 5" ||
      month === "Tháng 7" ||
      month === "Tháng 8" ||
      month === "Tháng 10" ||
      month === "Tháng 12"
    ) {
      dayNum = 31;
    } else if (
      month === "Tháng 4" ||
      month === "Tháng 6" ||
      month === "Tháng 9" ||
      month === "Tháng 11"
    ) {
      dayNum = 30;
    } else {
      //Check for a leap year
      if (new Date(year, 1, 29).getMonth() === 1) {
        dayNum = 29;
      } else {
        dayNum = 28;
      }
    }
    //Insert the correct days into the day <select>
    for (let i = 1; i <= dayNum; i++) {
      const option = document.createElement("option");
      option.textContent = i;
      daySelect.appendChild(option);
    }
  };

  const populateYears = () => {
    const yearSelect = document.getElementById("year");
    //Make the previous 100 years be an option
    for (let i = 0; i < 101; i++) {
      const option = document.createElement("option");
      option.textContent = year - i;
      yearSelect.appendChild(option);
    }
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
    try {
      const daySelect = document.getElementById("day");
      //Delete all of the children of the day dropdown
      //if they do exist
      while(daySelect.firstChild){
          daySelect.removeChild(daySelect.firstChild);
      }
      populateDays(months[month - 1]);
    } catch (error) {
      console.log(error);
    }
  };

  //LoadImg
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setFileName(e.target.files[0].name);
      // document.querySelector('.img-content').style.border = 'none';
      // document.querySelector('.profile').style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`;
    }
  };

  //Submit
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    gender: '',
    birthday: '',
  });

  const { name, email, phonenumber, gender, birthday } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className={cx("profile")}>
      <div className={cx("head-profile")}>
        <h3>Hồ Sơ Của Tôi</h3>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className={cx("info-profile")}>
          <div className={cx("info-left")}>
            <div className={cx("info-user")}>
              <label>Tên đăng nhập: </label>
              <input type="text" placeholder="Nhập tên đăng nhập" name="name" onChange={handleChange}/>
              <i className={cx("far fa-edit")}></i>
            </div>
            <div className={cx("info-user")}>
              <label>Email: </label>
              <input type="text" placeholder="Nhập email" name="email" onChange={handleChange}/>
              <i className={cx("far fa-edit")}></i>
            </div>
            <div className={cx("info-user")}>
              <label>Số điện thoại: </label>
              <input type="number" placeholder="Nhập số điện thoại" name="phone number" onChange={handleChange}/>
              <i className={cx("far fa-edit")}></i>
            </div>

            <div className={cx("info-user-gender")}>
              <label>Giới tính:</label>
              <div className={cx("gender-input")}>
                <input type="checkbox" name="gender" value="male" onChange={handleChange}/>
                Nam
                <input type="checkbox" name="gender" value="female" onChange={handleChange}/>
                Nữ
                <input type="checkbox" name="gender" value="other" onChange={handleChange}/>
                Khác
              </div>
            </div>
            <div className={cx("info-user-birthday")}>
              <label>Ngày sinh: </label>
              <select name="day" id="day" onChange={handleDayChange}>
                {/* {populateDays(months[month - 1])} */}
              </select>
              <select name="month" id="month" onChange={handleMonthChange}>
                {months.map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>
              <select name="year" id="year" onChange={handleYearChange}>
                {/* {populateYears()} */}
              </select>
            </div>

            <div className={cx("save-btn")}>
              <button type="submit">Lưu</button>
            </div>
          </div>

          <div className={cx("info-right")}>
            <figure className={cx("image-user")}>
              <img
                alt=""
                id="choosen-image"
                src={image ? URL.createObjectURL(image) : ""}
              />
              <div className={cx("img-content")}>
                <div className={cx("icon")}>
                  <i className={cx("fas fa-cloud-upload-alt")}></i>
                </div>
                <div className={cx("text")}>No file chosen, yet!</div>
              </div>
            </figure>
            <figcaption id="file-name"></figcaption>
            <input
              type="file"
              id="upload-button"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
            />
            <label htmlFor="upload-button">
              <i className={cx("fas fa-upload")}></i> &nbsp; Chọn ảnh
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
