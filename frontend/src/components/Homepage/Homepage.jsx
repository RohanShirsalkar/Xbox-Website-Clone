import React, { useEffect, useState } from 'react'
import "./homepage.scss"
import ProductCard from '../../shared/ProductCard/ProductCard'
import Slider from '../../shared/Slider/Slider'
import productService from '../../services/productService';

export default function Homepage() {
    const [products, setProducts] = useState();

    const findAllProducts = async () => {
        try {
            const res = await productService.findAll()
            setProducts(res)
            console.log(res);
        } catch (error) {
            console.log(err);
        }
    }

    useEffect(() => {
        findAllProducts();
    }, []);

    const ProductCollection = () => {
        return (
            <div className='productCollection'>
                <div className='d-flex justify-center mb-5'>
                    <h1 className='heading'>All Xbox Consoles</h1>
                </div>

                <div className="grid-container">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        )
    }

    return (
        <div id='homepage-component'>
            <div className="slider-section">
                <Slider />
            </div>
            <ProductCollection />
        </div>
    )
}
