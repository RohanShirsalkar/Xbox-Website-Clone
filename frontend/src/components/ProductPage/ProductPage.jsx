import React from 'react'
import "./productpage.scss"
import productService from '../../services/productService'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import cartService from '../../services/cartService';

export default function ProductPage() {
    const [product, setProduct] = useState();
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        findOneProduct();
    }, [id]);

    const findOneProduct = async () => {
        try {
            const res = await productService.findById(id);
            setProduct(res);
        } catch (err) {
            console.log('Error fetching product:', err);
            setError('Error fetching product. Please try again later.');
            throw new Response("Error fetching product", { status: 404 });
        }
    }

    const handleAddToCart = async () => {
        try {
            const cart = cartService.create()

        } catch (error) {
            console.log('Error fetching product:', err);
            setError('Can not add to cart.');
        }

    }

    const ImageGallery = () => {
        return (
            <div className='image-gallery'>
                <div className="btn-container">
                    <button>{"<"}</button>
                    <button>{">"}</button>
                </div>

                <div className="hero-image">
                    <img width="100%" src="https://assets.xboxservices.com/assets/05/80/0580b1f1-73c1-41ee-b3a3-00b2496882b8.png?n=0294958693_BuyBox01_829x799.png" alt="" />
                </div>

                <div className="pivot">
                    <div className='image-holder'>
                        <img src="https://assets.xboxservices.com/assets/05/80/0580b1f1-73c1-41ee-b3a3-00b2496882b8.png?n=0294958693_BuyBox01_829x799.png" width="75px" alt="" />
                    </div>
                    <div className='image-holder'>
                        <img src="https://assets.xboxservices.com/assets/05/80/0580b1f1-73c1-41ee-b3a3-00b2496882b8.png?n=0294958693_BuyBox01_829x799.png" width="75px" alt="" />
                    </div>
                    <div className='image-holder'>
                        <img src="https://assets.xboxservices.com/assets/05/80/0580b1f1-73c1-41ee-b3a3-00b2496882b8.png?n=0294958693_BuyBox01_829x799.png" width="75px" alt="" />
                    </div>
                    <div className='image-holder'>
                        <img src="https://assets.xboxservices.com/assets/05/80/0580b1f1-73c1-41ee-b3a3-00b2496882b8.png?n=0294958693_BuyBox01_829x799.png" width="75px" alt="" />
                    </div>
                    <div className='image-holder'>
                        <img src="https://assets.xboxservices.com/assets/05/80/0580b1f1-73c1-41ee-b3a3-00b2496882b8.png?n=0294958693_BuyBox01_829x799.png" width="75px" alt="" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id='productpage-component'>
            <section className='head-section'>
                <section className='left-section'>
                    <ImageGallery />
                </section>
                <section className='right-section'>
                    <div className="heading">
                        <h1>XBOX SERIES S</h1>
                    </div>
                    <div className='subheading mb-4'>
                        <h2>STARTER BUNDLE</h2>
                    </div>
                    <div className='info-box mb-4'>
                        <h3 className='mb-2'>Includes : </h3>
                        <ul>
                            <li>Xbox Series S console - 512 GB</li>
                            <li>Xbox Wireless Controller – Robot White</li>
                            <li>3 months of Game Pass Ultimate</li>
                        </ul>
                    </div>
                    <div className="price-box">
                        <h2 className='mb-3'>#32,990.00 ERP</h2>
                        <div className='btn-box'>
                            {/* <button>Learn More</button> */}
                            <a onClick={handleAddToCart}>ADD TO CART</a>
                        </div>
                    </div>
                </section>
            </section>

            <section className='bottom-section'>
                <div className='title'>
                    <h1>Additional accessories for your bundle</h1>
                </div>
            </section>
        </div>
    )
}
