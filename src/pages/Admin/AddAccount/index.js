import React from "react";
import classNames from "classnames/bind";
import styles from "./AddAccount.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function AddAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("user");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <div className={cx("wrapper")}>
        <div className={cx("content-right")}>
          <main>
            <h1 className={cx("title")}>Add Account</h1>
            <form onSubmit={handleSubmit}>
              <div className={cx("edit-row")}>
                <div className={cx("cr_email")}>
                  <h4>
                    <span>*</span>Email
                  </h4>
                </div>
                <div className={cx("edit-main")}>
                  <input
                    className={cx("email-box_input")}
                    placeholder="Nhập vào..."
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>

              <div className={cx("edit-row")}>
                <div className={cx("cr_password")}>
                  <h4>
                    <span>*</span>Password
                  </h4>
                </div>
                <div className={cx("edit-main")}>
                  <input
                    className={cx("password-box_input")}
                    placeholder="Nhập vào..."
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>

              <div className={cx("edit-row")}>
                <div className={cx("cr_phonenb")}>
                  <h4>
                    <span>*</span>Phone Number
                  </h4>
                </div>
                <div className={cx("edit-main")}>
                  <input
                    className={cx("phonenb-box_input")}
                    placeholder="Nhập vào..."
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </div>
              </div>

              <div className={cx("edit-row")}>
                <div className={cx("cr_address")}>
                  <h4>
                    <span>*</span>Address
                  </h4>
                </div>
                <div className={cx("edit-main")}>
                  <input
                    className={cx("address-box_input")}
                    placeholder="Nhập vào..."
                    type="text"
                    value={address}
                    onChange={handleAddressChange}
                  />
                </div>
              </div>

              <div className={cx("edit-row")}>
                <div className={cx("cr_role")}>
                  <h4>
                    <span>*</span>Role
                  </h4>
                </div>
                <div className={cx("grouprd")}>
                  <input
                    type="radio"
                    name="select"
                    id="option-1"
                    value="user"
                    checked={role === "user"}
                    onChange={handleRoleChange}
                  />
                  <input
                    type="radio"
                    name="select"
                    id="option-2"
                    value="seller"
                    checked={role === "seller"}
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="option-1" className={cx("option", "option-1")}>
                    <div className={cx("dot")}></div>
                    <span>User</span>
                  </label>
                  <label htmlFor="option-2" className={cx("option", "option-2")}>
                    <div className={cx("dot")}></div>
                    <span>Seller</span>
                  </label>
                </div>
              </div>

              <div className={cx("containerbtn")}>
                <div className={cx("btn-group")}>
                  <button className={cx("btn", "btn-cancel")}>
                    <Link to="./manageAcc_Admin.html">Cancel</Link>
                  </button>
                  <button className={cx("btn", "btn-create")} type="submit">
                    Create
                  </button>
                </div>
              </div>
            </form>
          </main>
        </div>
    </div>
  );
}
