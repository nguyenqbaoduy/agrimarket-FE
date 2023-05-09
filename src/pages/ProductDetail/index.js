import { Link, useParams } from 'react-router-dom';
import './productDetail.css'
import React, { useEffect, useState } from "react"
import { getDetailProduct } from '../../services/getAPI.js'

const ProductDetail = () => {
    const [product, setProduct] = useState([])
    const [images, setImages] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false); //  xử lí bất đồng bộ, chưa load data xong

    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDetailProduct(params.ProductID);
                setProduct(data.product);
                setImages(data.images);
                setDataLoaded(true);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <div className="content_title">
                <a href="/">Trang chủ</a>
                <span>{'>'}</span>
                <a href="#">Thuốc trừ sâu</a>
                <span></span>
                <span id="product-title"></span>
            </div>
            <div className="content_product container">
                <div className="content_container-top">
                    <div className="content-left">
                        <div className="content-img-detail product-images-detail">
                        {dataLoaded && (
                        images.map((image, index) => (
                            <img className={"img"+(index+1)} src={"/images/product/" + image.ImageUrl}
                            // onclick={"changeImage('one')"} 
                            id={image.ImageID}
                            />
                        ))
                        )}
                        </div>
                        {dataLoaded && (
                        <img src={
                            "/images/product/" + images[0].ImageUrl
                        } 
                        alt="" id="main-img" className="product-image" />
                        )}

                    </div>
                    <div className="content-mid"></div>
                    <div className="content-right">
                        <div className="content-name">
                            <h2 id="shift" className="product-title">{product.ProductName}</h2>
                            <div className="content-name-star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <div className="content-name-review">0 Đã bán</div>
                            </div>
                            <div className="content-title content-name-company">Công ty Sản phẩm Công nghệ cao</div>
                            <div className="content-title content-name-price">
                                <h4>Giá:</h4>
                                <div className="content-price product-price" id="">{product.ProductPrice + " VND"}</div>
                            </div>
                            <hr className="card__separator" />
                            <div className="content-title content-name-size">
                                <h4>Size:</h4>
                                <div className="content-button-size product-size">
                                    <button type="button" className="btn-1">100ml</button>
                                    <button type="button" className="btn-2">250ml</button>
                                </div>
                            </div>
                            <div className="content-title content-name-expiry">
                                <h4>Expiry Date:</h4>
                                <div className="content-button-expiry product-expiry">
                                    <button type="button" className="btn-1">07/09/2025</button>
                                    <button type="button" className="btn-2">07/09/2025</button>
                                </div>
                            </div>
                            <div className="content-title content-name-number">
                                <h4>Số lượng:</h4>
                                <div className="buttons_added">
                                    <input className="minus is-form" type="button" value="-" />
                                    <input aria-label="quantity" className="input-qty product-quantity" max="1000" min="1" name="" type="number" value="1" />
                                    <input className="plus is-form" type="button" value="+" />
                                </div>
                            </div>
                            <div className="content-name-cart">
                                <button className="btn btn-add">
                                    <i className="fa-solid fa-cart-plus"></i>
                                    <a href="#">Thêm vào giỏ hàng</a>
                                </button>
                                <button className="btn-sed">
                                    <a href="#">Mua ngay</a>
                                </button>
                            </div>
                            <div className="content-name-addwish">
                                <button className="btn-addwish">
                                    <i className="fa-regular fa-heart"></i>
                                    <span>Thêm vào yêu thích</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content__container-bottom">
                    <div className="container content__review">
                        <div className="content-info">
                            <div className="content-namerv">
                                <p>Chi tiết sản phẩm</p>
                            </div>
                            <div className="content-descript">
                            {product.ProductDescription}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;