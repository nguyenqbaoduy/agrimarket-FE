import '../Home/home.css'
import React, { useEffect, useState } from "react"
import { getAllProduct } from '../../services/getAPI.js'
import { Link } from 'react-router-dom';
const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllProduct();
                setProducts(data);
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="banner-container">
                <div className="banner">
                    <div className="product">
                        <img src="./assets/image/banner/b2.png" alt="" />
                    </div>
                    <div className="content">
                        <h2>
                            <span style={{ color: 'var(--primary-color)', fontSize: '45px' }}>
                                Green grass
                            </span>
                            on your side of the fence. Always.
                        </h2>
                        <span>Nec odio luctus volutpat sit.</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit vel,
                            vestibulum pellentesque habitant. Condimentum ullamcorper et
                            sollicitudin pellentesque.
                        </p>
                        <a href="" className="btn">Visit the shop</a>
                    </div>
                </div>
            </div>

            {/* Product Catalog */}
            <section id="slider-product">
                <div className="product-catalog">
                    <a href="./cartegory/seeds.html" className="collect-item">
                        <div className="product-catalog-img">
                            <img src="./assets/image/catalog/hatgiong.png" alt="1" />
                        </div>
                        <div className="product-catalog-text">
                            <p>Hạt giống</p>
                        </div>
                    </a>
                </div>

                {/* Add the rest of the product-catalog items here */}
            </section>

            {/* Body */}
            <div className="container" id="list">
                <div className="list-product"
                // style={{ display: 'none' }}
                >
                    {products.map((product, index) => (
                        <div className="product-item" key={index}>
                            <div className="image">
                                <img className="product-item-img" src={product.ProductSlug} alt="" />
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