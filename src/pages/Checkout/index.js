import { } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { api_url, checkout } from "../../services/getAPI.js";
import { getProvince, getDistrict, getWard, getTransports } from "../../services/getGHN.js";
import { Link, useParams, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
const cx = classNames.bind(styles);
const Checkout = () => {
    const location = useLocation();
    const items = location.state;
    const [provinces, setProvinces] = useState([]);
    const [provincesId, setSelectedProvincesId] = useState();
    const [districts, setDistricts] = useState([]);
    const [districtsId, setSelectedDistrictsId] = useState();
    const [wards, setWards] = useState([]);
    const [wardsCode, setSelectedWardsId] = useState();
    const [transports, setTransports] = useState([]);
    const [transportsID, setSelectedTransportsId] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const getProvinces = await getProvince();
                setProvinces(getProvinces.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, []);

    const handleOptionProvincesChange = async (e) => {
        const selectedValue = e.target.value;
        setSelectedProvincesId(selectedValue);
        const getDistricts = await getDistrict(selectedValue);
        setDistricts(getDistricts.data);
    };
    const handleOptionDistrictsChange = async (e) => {
        const selectedValue = e.target.value;
        setSelectedDistrictsId(selectedValue);
        const getWards = await getWard(selectedValue);
        setWards(getWards.data);
    };
    const handleOptionWardsChange = async (e) => {
        const selectedValue = e.target.value;
        setSelectedWardsId(selectedValue);
        console.log(districtsId);
        const getTransport = await getTransports(districtsId);
        setTransports(getTransport.data);
    };
    const handleOptionTransportsChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedTransportsId(selectedValue);
    };

    return (
        <div className={cx('container')} id="">
            <div className={cx('item-flex')}>
                {/* Checkout Section */}
                <section className={cx('checkout')}>
                    <h2 className={cx('section-headingpm')}>Thanh toán</h2>
                    <div className={cx('payment-form')}>
                        <label htmlFor="cardholder-name" className={cx('label-default')}>Địa chỉ nhận hàng</label>
                        <div className={cx('address')}>
                            <div className={cx('method')}>
                                <select value={provincesId} onChange={handleOptionProvincesChange}>
                                    <option value="">-- Tỉnh/Thành phố --</option>
                                    {provinces && provinces.map(province => (
                                        <option key={province.ProvinceID} value={province.ProvinceID}>
                                            {province.ProvinceName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={cx('method')}>
                                <select value={districtsId} onChange={handleOptionDistrictsChange}>
                                    <option value="">-- Quận/Huyện --</option>
                                    {districts && districts.map(district => (
                                        <option key={district.DistrictID} value={district.DistrictID}>
                                            {district.DistrictName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={cx('method')}>
                                <select value={wardsCode} onChange={handleOptionWardsChange}>
                                    <option value="">-- Phường/Xã--</option>
                                    {wards && wards.map(ward => (
                                        <option key={ward.WardCode} value={ward.WardCode}>
                                            {ward.WardName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <form action="#">
                            <div className={cx('cardholder-name')}>
                                <label htmlFor="cardholder-name" className={cx('label-default')}>Địa chỉ cụ thể</label>
                                <input type="text" name="cardholder-name" id="cardholder-name" className={cx('input-default')} />
                            </div>
                            <div className={cx('card-number')}>
                                <label htmlFor="card-number" className={cx('label-default')}>Số điện thoại</label>
                                <input type="text" name="card-number" id="card-number" className={cx('input-default')} />
                            </div>
                            <div className={cx('input-flex')}>
                                <div className={cx('transport')}>
                                    <label htmlFor="ccv" className={cx('label-default')}>Phương thức vận chuyển</label>
                                    <div className={cx('method')}>
                                        <select value={transportsID} onChange={handleOptionTransportsChange}>
                                            <option value="">-- Vận chuyển--</option>
                                            {transports && transports.map(transport => (
                                                <option key={transport.service_type_id} value={transport.service_type_id}>
                                                    {transport.short_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button className={cx('btn1', 'btn-primary')}>
                        <b>Pay</b> $ <span id="payAmount">2.15</span>
                    </button>
                </section>
                {/* Cart Section */}
                <section className={cx('cart')}>
                    <div className={cx('cart-item-box')}>
                        <h2 className={cx('section-headingpm')}>Order Summery</h2>
                        {items && items.map((item, index) => (
                            <div className={cx('product-card')}>
                                <div className={cx('card')}>
                                    <div className={cx('img-box')}>
                                        <img src={api_url + "/images/product/" + item.ProductImageDefault} alt="" className={cx('product-img')} />
                                    </div>
                                    <div className={cx('detail')}>
                                        <h4 className={cx('product-name')}>{item.ProductName}</h4>
                                        {/* <div className={cx('wrapper')}> */}
                                        <div className={cx('product-qty')}>
                                            <span id="quantity">Số lượng: {item.Quantity}</span>
                                        </div>
                                        <div className={cx('price')}>
                                            $<span id="price">{item.ProductPrice}</span>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className={cx('wrapper')}> */}
                    <div className={cx('discount-token')}>
                        <label htmlFor="discount-token" className={cx('label-default')}>Gift card/Discount code</label>
                        <div className={cx('wrapper-flex')}>
                            <input type="text" name="discount-token" id="discount-token" className={cx('input-default')} />
                            <button className={cx('btn1', 'btn-outline')}>Apply</button>
                        </div>
                    </div>
                    <div className={cx('amount')}>
                        <div className={cx('subtotal')}>
                            <span>Subtutol</span> <span>$ <span id="subtotal">2.85</span></span>
                        </div>
                        <div className={cx('tax')}>
                            <span>Tax</span> <span>$ <span id="tax">2.85</span></span>
                        </div>
                        <div className={cx('shipping')}>
                            <span>Shipping</span> <span>$ <span id="shipping">2.85</span></span>
                        </div>
                        <div className={cx('total')}>
                            <span>Total</span> <span>$ <span id="total">2.15</span></span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};
export default Checkout;
