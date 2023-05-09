import './home.css'
import React, { useEffect, useState } from "react"
import { getAllProduct, getAllCategory } from '../../services/getAPI.js'
import { Link } from 'react-router-dom';
const Home = () => {
    const [products, setProducts] = useState([])
    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const product = await getAllProduct();
                setProducts(product);
                console.log(product)
                const category = await getAllCategory();
                setCategorys(category);
                console.log(category);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="banner-container">
                <div className="banner">
                    <div className="product">
                        <img src="/images/7_d27d1.png" alt="" />
                    </div>
                    <div className="content">
                        <h2>
                            <span style={{ color: 'var(--primary-color)', fontSize: '45px' }}>
                            Nâng tầm chất lượng nông sản Việt 
                            </span>
                            &nbsp; vì một tương lai đưa nông sản ra khắp thế giới
                        </h2>
                        <span>Đồng hành cùng nông dân Việt phát triển bền vững</span>
                        <p>
                        Cam kết đồng hành, đem lại chất lượng tốt nhất cho người nông dân, nâng cao chất lượng cuộc sống.
                        </p>
                    </div>
                </div>
            </div>

            {/* Product Catalog */}
            <section id="slider-product">
                {categorys.map((cartegory, index) => (
                    <div className="product-catalog">
                        <a href="./cartegory/seeds.html" className="collect-item">
                            <div className="product-catalog-img">
                                <img src={"/images/cartegory/" + cartegory.CategoryIcon} alt="1" />
                            </div>
                            <div className="product-catalog-text">
                                <p>{cartegory.CategoryName}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </section>

            {/* Body */}
            <div className="container" id="list">
                <div className="list-product"
                // style={{ display: 'none' }}
                >
                    {products.map((product, index) => (
                        <div className="product-item" key={index}>
                            <div className="image">
                                <img className="product-item-img" src={"/images/product/" + product.ProductImageDefault} alt="" />
                            </div>
                            <button
                                // onClick={Toggle} 
                                id="btn-favorite" className="fas fa-heart"></button>
                            <div className="info">
                                <Link to={`/Product/${product.ProductID}`}>
                                    <h3 className="product-title">{product.ProductName}</h3>
                                </Link>
                                <p className="product-copany-name">{product.UserID}</p>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i> (5/5)
                                </div>
                                <strong className="price"><span className="mrp">{product.ProductPrice}</span></strong>
                            </div>
                            <div className="product-volume">
                                <p>480 ml</p>
                            </div>
                        </div>
                    ))}
                    {/* Add the rest of the product-item elements here */}
                </div>
            </div>
        </div>
    );
}

export default Home;