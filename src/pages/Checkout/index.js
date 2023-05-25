import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { api_url, createOrder, addOrderDetail } from "../../services/getAPI.js";
import { getProvince, getDistrict, getWard, getTransports, getFee } from "../../services/getGHN.js";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";

const cx = classNames.bind(styles);
const Checkout = () => {
    const navigate = useNavigate();

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
    const [service_fee, setService_fee] = useState(0);
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cookies, setCookie] = useCookies(['token']);

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
 
    let totalProductPrice = 0;
    // Tính tổng sản phẩm
    items && items.map((item) => {
        // Chuyển đổi item.ProductPrice sang kiểu number để có thể cộng dồn
        const productPrice = parseFloat(item.ProductPrice);
        const quantity = parseFloat(item.Quantity);

        // Kiểm tra nếu productPrice là một số hợp lệ
        if (!isNaN(productPrice)) {
            // Cộng dồn productPrice vào tổng
            totalProductPrice += productPrice * quantity;
        }
    });
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
        const getTransport = await getTransports(districtsId);
        setTransports(getTransport.data);
    };
    const handleOptionTransportsChange = async (e) => {
        const selectedValue = e.target.value;
        setSelectedTransportsId(selectedValue);
        var order = {
            service_type_id: selectedValue,
            insurance_value: totalProductPrice,
            to_district: districtsId,
            to_ward_code: wardsCode
        }
        const reqOrder = await getFee(order);
        setService_fee(reqOrder.data.total)
    };
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
      };
    
      const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
      };
    async function order() {
        const OrderID  = "O" + new Date().getTime();
        var data ={
            OrderID : OrderID,
            UserID : cookies.UserID,
            Total : totalProductPrice,
            Address : address,
            PhoneNumber : phoneNumber
        }
        await createOrder(cookies.accessToken, data);
        for (const item of items) {
            var orderDetail = {
                ProductID: item.ProductID,
                OrderID: OrderID,
                OrderDetailQuantity: item.Quantity,
                OrderDetailSumPrice: item.SumPrice,
                OrderDetailPriceOfProduct : item.ProductPrice
            }
            await addOrderDetail(cookies.accessToken, orderDetail)
        }
        navigate("/order")
    }
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
                                <label htmlFor="cardholder-name" className={cx('label-default')}>
                                    Địa chỉ cụ thể
                                </label>
                                <input
                                    type="text"
                                    name="cardholder-name"
                                    id="cardholder-name"
                                    className={cx('input-default')}
                                    value={address}
                                    onChange={handleAddressChange}
                                />
                            </div>
                            <div className={cx('card-number')}>
                                <label htmlFor="card-number" className={cx('label-default')}>
                                    Số điện thoại
                                </label>
                                <input
                                    type="text"
                                    name="card-number"
                                    id="card-number"
                                    className={cx('input-default')}
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                />
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
                    <button className={cx('btn1', 'btn-primary')} onClick={order}>
                        <b>Đặt hàng</b>
                    </button>
                </section>
                {/* Cart Section */}
                <section className={cx('cart')}>
                    <div className={cx('cart-item-box')}>
                        <h2 className={cx('section-headingpm')}>Sản phẩm</h2>
                        {items && items.map((item, index) => (
                            <div className={cx('product-card')} key={index}>
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
                        <label htmlFor="discount-token" className={cx('label-default')}>Voucher</label>
                        <div className={cx('wrapper-flex')}>
                            <input type="text" name="discount-token" id="discount-token" className={cx('input-default')} />
                            <button className={cx('btn1', 'btn-outline')}>Chọn</button>
                        </div>
                    </div>
                    <div className={cx('amount')}>
                        <div className={cx('subtotal')}>
                            <span>Tổng sản phẩm</span> <span>$ <span id="subtotal">{totalProductPrice}</span></span>
                        </div>
                        <div className={cx('shipping')}>
                            <span>Phí vận chuyển</span> <span>$ <span id="shipping">{service_fee}</span></span>
                        </div>
                        <div className={cx('total')}>
                            <span>Tổng cộng</span> <span>$ <span id="total">{totalProductPrice + service_fee}</span></span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};
export default Checkout;
