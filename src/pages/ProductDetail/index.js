import styles from'./ProductDetail.module.scss'
import React, { useEffect, useState } from 'react'
import { getDetailProduct } from '../../services/getAPI.js'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import PageNotFound from "../PageNotFound";
const cx = classNames.bind(styles);

const ProductDetail = () => {
    const [product, setProduct] = useState([])
    const [images, setImages] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false); //  xử lí bất đồng bộ, chưa load data xong
    const [errorOccurred, setErrorOccurred] = useState(false);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const getProduct = await getDetailProduct(params.ProductID);
                setProduct(getProduct.data.product);
                setImages(getProduct.data.images);
                setDataLoaded(true);
            } catch (error) {
                console.log(error);
                setErrorOccurred(true); // To render Page not found
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, []);
    if (errorOccurred) {
        return <PageNotFound />
    }
    return (
        <div className={cx('product_detail')}>
        <div className={cx('container')}>
            <div className={cx('content_title')}>
                <a href='/'>Trang chủ</a>
                <span>{'>'}</span>
                <a href='#'>Thuốc trừ sâu</a>
                <span></span>
                <span id='product-title'></span>
            </div>
            <div className={cx('content_product', 'container')}>
                <div className={cx('content_container-top')}>
                    <div className={cx('content-left')}>
                        <div className={cx('content-img-detail','product-images-detail')}>
                        {dataLoaded && (
                        images.map((image, index) => (
                            <img className={cx('img')+(index+1)} src={'/images/product/' + image.ImageUrl}
                            // onclick={'changeImage('one')'} 
                            id={image.ImageID}
                            />
                        ))
                        )}
                        </div>
                        {dataLoaded && (
                        <img src={
                            '/images/product/' + images[0].ImageUrl
                        } 
                        alt='' id='main-img' className={cx('product-image')} />
                        )}

                    </div>
                    <div className={cx('content-mid')}></div>
                    <div className={cx('content-right')}>
                        <div className={cx('content-name')}>
                            <h2 id='shift' className={cx('product-title')}>{product.ProductName}</h2>
                            <div className={cx()}>
                                <i className={cx('fa-solid','fa-star')}></i>
                                <i className={cx('fa-solid','fa-star')}></i>
                                <i className={cx('fa-solid','fa-star')}></i>
                                <i className={cx('fa-solid','fa-star')}></i>
                                <i className={cx('fa-solid','fa-star')}></i>
                                <div className={cx('content-name-review')}>0 Đã bán</div>
                            </div>
                            <div className={cx('content-title','content-name-company')}>Công ty Sản phẩm Công nghệ cao</div>
                            <div className={cx('content-title','content-name-price')}>
                                <h4>Giá:</h4>
                                <div className={cx('content-price', 'product-price')} id=''>{product.ProductPrice + ' VND'}</div>
                            </div>
                            <hr className={cx('card__separator')} />
                            <div className={cx('content-title','content-name-size')}>
                                <h4>Size:</h4>
                                <div className={cx('content-button-size','product-size')}>
                                    <button type='button' className={cx('btn-1')}>100ml</button>
                                    <button type='button' className={cx('btn-2')}>250ml</button>
                                </div>
                            </div>
                            <div className={cx('content-title content-name-expiry')}>
                                <h4>Expiry Date:</h4>
                                <div className={cx('content-button-expiry','product-expiry')}>
                                    <button type='button' className={cx('btn-1')}>07/09/2025</button>
                                    <button type='button' className={cx('btn-2')}>07/09/2025</button>
                                </div>
                            </div>
                            <div className={cx('content-title','content-name-number')}>
                                <h4>Số lượng:</h4>
                                <div className={cx('buttons_added')}>
                                    <input className={cx('minus is-form')} type='button' value='-' />
                                    <input aria-label='quantity' className={cx('input-qty','product-quantity')} max='1000' min='1' name='' type='number' value='1' />
                                    <input className={cx('plus','is-form')} type='button' value='+' />
                                </div>
                            </div>
                            <div className={cx('content-name-cart')}>
                                <button className={cx('btn','btn-add')}>
                                    <i className={cx('fa-solid','fa-cart-plus')}></i>
                                    <a href='#'>Thêm vào giỏ hàng</a>
                                </button>
                                <button className={cx('btn-sed')}>
                                    <a href='#'>Mua ngay</a>
                                </button>
                            </div>
                            <div className={cx('content-name-addwish')}>
                                <button className={cx('btn-addwish')}>
                                    <i className={cx('fa-regular','fa-heart')}></i>
                                    <span>Thêm vào yêu thích</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('content__container-bottom')}>
                    <div className={cx('container content__review')}>
                        <div className={cx('content-info')}>
                            <div className={cx('content-namerv')}>
                                <p>Chi tiết sản phẩm</p>
                            </div>
                            <div className={cx('content-descript')}>
                            {product.ProductDescription}
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