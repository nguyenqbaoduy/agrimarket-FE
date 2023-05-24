import styles from './ProductDetail.module.scss'
import React, { useEffect, useState, useContext } from 'react'
import { api_url, getDetailProduct, addItemToCart } from '../../services/getAPI.js'
import { Link, useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import PageNotFound from "../PageNotFound";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HeaderContext } from '../../Layout/DefaultLayout'

const cx = classNames.bind(styles);

const ProductDetail = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([])
    const [images, setImages] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false); //  xử lí bất đồng bộ, chưa load data xong
    const [errorOccurred, setErrorOccurred] = useState(false);
    const params = useParams();
    const [quantity, setQuantity] = useState(1);
    const [cookies] = useCookies([]);
    const { triggerHeaderReload } = useContext(HeaderContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const getProduct = await getDetailProduct(params.ProductID);
                setProduct(getProduct.data.product);
                setImages(getProduct.data.images);
            } catch (error) {
                console.log(error);
                setErrorOccurred(true); // To render Page not found
            }
            window.scrollTo(0, 0);
            setDataLoaded(true);
        };
        fetchData();
    }, []);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        if (quantity < 1000) {
            setQuantity(quantity + 1);
        }
    };
    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value >= 1 && value <= 1000) {
            setQuantity(value);
        }
    };

    if (errorOccurred) {
        return <PageNotFound />
    }

    const addCart = async () => {
        if (cookies.UserID) {
            const data = {
                UserID: cookies.UserID,
                ProductID: product.ProductID,
                Quantity: quantity,
            }
            const status = await addItemToCart(cookies.accessToken, data);
            if (status == "200") {
                toast("Thêm thành công")
                triggerHeaderReload();
            }
            else
                toast("Thêm thất bại")
        }
        else
            navigate("/login")
    }
    return (

        <div className={cx('product_detail')}>
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
            <div className={cx('container')}>
                {/* <div className={cx('content_title')}>
                    <a href='/'>Trang chủ</a>
                    <span>{'>'}</span>
                    <a href='#'>Thuốc trừ sâu</a>
                    <span></span>
                    <span id={cx('product-title')}></span>
                </div> */}
                <div className={cx('content_product', 'container')}>
                    <div className={cx('content_container-top')}>
                        <div className={cx('content-left')}>
                            <div className={cx('content-img-detail', 'product-images-detail')}>
                                {dataLoaded && (
                                    images.map((image, index) => (
                                        <img className={cx('img') + (index + 1)} src={api_url + '/images/product/' + image.ImageUrl}
                                            // onclick={'changeImage('one')'} 
                                            id={cx(image.ImageID)}
                                            key={index}
                                        />
                                    ))
                                )}
                            </div>
                            {dataLoaded && (
                                <img src={
                                    api_url + '/images/product/' + images[0].ImageUrl
                                }
                                    alt='' id={cx('main-img')} className={cx('product-image')} />
                            )}

                        </div>
                        <div className={cx('content-mid')}></div>
                        <div className={cx('content-right')}>
                            <div className={cx('content-name')}>
                                <h2 id={cx('shift')} className={cx('product-title')}>{product.ProductName}</h2>
                                <div className={cx('content-name-star')}>
                                    <i className={cx('fa-solid', 'fa-star')}></i>
                                    <i className={cx('fa-solid', 'fa-star')}></i>
                                    <i className={cx('fa-solid', 'fa-star')}></i>
                                    <i className={cx('fa-solid', 'fa-star')}></i>
                                    <i className={cx('fa-solid', 'fa-star')}></i>
                                    <div className={cx('content-name-review')}>0 Đã bán</div>
                                </div>
                                <div className={cx('content-title', 'content-name-company')}>Công ty Sản phẩm Công nghệ cao</div>
                                <div className={cx('content-title', 'content-name-price')}>
                                    <h4>Giá:</h4>
                                    <div className={cx('content-price', 'product-price')} id=''>{product.ProductPrice + ' VND'}</div>
                                </div>
                                <hr className={cx('card__separator')} />
                                {/* <div className={cx('content-title','content-name-size')}>
                                <h4>Size:</h4>
                                <div className={cx('content-button-size','product-size')}>
                                    <button type='button' className={cx('btn-1')}>100ml</button>
                                    <button type='button' className={cx('btn-2')}>250ml</button>
                                </div>
                            </div> */}
                                <div className={cx('content-title', 'content-name-expiry')}>
                                    {/* <h4>Expiry Date:</h4>
                                    <div className={cx('content-button-expiry', 'product-expiry')}>
                                        <button type='button' className={cx('btn-1')}>07/09/2025</button>
                                        <button type='button' className={cx('btn-2')}>07/09/2025</button>
                                    </div> */}
                                </div>
                                <div className={cx('content-title', 'content-name-number')}>
                                    <h4>Số lượng:</h4>
                                    <div className={cx('buttons_added')}>
                                        <input className={cx('minus', 'is-form')} type='button' defaultValue='-' onClick={handleDecrease} />
                                        <input
                                            aria-label='quantity'
                                            className={cx('input-qty', 'product-quantity')}
                                            max='1000'
                                            min='1'
                                            name=''
                                            type='number'
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                        />
                                        <input className={cx('plus', 'is-form')} type='button' defaultValue='+' onClick={handleIncrease} />
                                    </div>
                                </div>
                                <div className={cx('content-name-cart')}>
                                    <button className={cx('btn', 'btn-add')} onClick={addCart}>
                                        <i className={cx('fa-solid', 'fa-cart-plus')}></i>
                                        <a href='#'>Thêm vào giỏ hàng</a>
                                    </button>
                                    {dataLoaded && (
                                        <button className={cx('btn-sed')} onClick={() => navigate('/Checkout', { state: [{...product,Quantity:quantity}] })}>
                                           <Link>Mua ngay</Link> 
                                        </button>
                                    )}
                                </div>
                                <div className={cx('content-name-addwish')}>
                                    <button className={cx('btn-addwish')}>
                                        <i className={cx('fa-regular', 'fa-heart')}></i>
                                        <span>Thêm vào yêu thích</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('content__container-bottom')}>
                        <div className={cx('container', 'content__review')}>
                            <div className={cx('content-info')}>
                                <div className={cx('content-namerv')}>
                                    <p>Chi tiết sản phẩm</p>
                                </div>
                                <div className={cx('content-descript')} dangerouslySetInnerHTML={{ __html: product.ProductDescription }}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductDetail;